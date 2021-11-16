const Admin = require("../models/admin.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { response } = require("express");

const signUp = async (request, response, next) => {
  const { body } = request;

  try {
    const queriedAdnin = await Admin.findOne({ email: body.email });

    if (queriedAdnin) {
      response.status(400).json({ error: "Email already in use" });
      return;
    }
  } catch (err) {
    response.status(400).json(err);
  }

  const newAdmin = new Admin(body);

  try {
    const newAdminObj = await newAdmin.save();
    response.json(newAdminObj);
  } catch (err) {
    response.status(400).json(err);
  }
};

const signIn = async (request, response, next) => {
  const { body } = request;

  if (!body.email) {
    response.status(400).json({ error: "no email provided" });
  }

  let adminQuery;

  try {
    adminQuery = await Admin.findOne({ email: body.email });
  } catch (err) {
    response.status(400).json({ error: "Email is not found" });
  }

  if (adminQuery === null) {
    response.status(400).json({ error: "email not found" });
    return;
  }

  const passwordCheck = await bcrypt.compareSync(
    body.password,
    adminQuery.password
  );

  if (!passwordCheck) {
    response.status(400).json({ error: "Email and password must match" });
    return;
  }

  // Admin is verified as an admin
  const adminToken = jwt.sign({ id: adminQuery._id }, process.env.SECRET_KEY);
  console.log(`token ${adminToken}`);
  response
    .cookie("admintoken", adminToken, process.env.SECRET_KEY, {
      httpOnly: true,
      expires: new Date(Date.now() + 9000000),
    })
    .json({ message: "successful login" });
};

const protected = (request, response) => {
  response.send("you got to the protected route");
};

const logout = (request, response) => {
  response.clearCookie("admintoken");
  response.status(200).json({ message: "logout succesful!!!" });
};

const updateUserProfile = async (request, response, next) => {
  const { body } = request;
  const admin = await Admin.findOne({ email: body.email });

  if (admin) {
    admin.firstName = body.firstName || admin.firstName;
    admin.lastName = body.lastName || admin.lastName;
    admin.email = body.email || admin.email;

    if (body.password) {
      admin.password = body.password;
    }

    try {
      const newAdminObj = await admin.save();
      response.json(newAdminObj);
    } catch (err) {
      response.status(400).json(err);
    }
  }
  else {
    response.status(404).json({message: "User does not exist"})
  }
};

module.exports = {
  signUp,
  signIn,
  protected,
  logout,
  updateUserProfile,
};
