const jwt = require("jsonwebtoken");

const authenticate = (request, response, next) => {
  jwt.verify(
    request.cookies.usertoken,
    process.env.SECRET_KEY,
    (err, payload) => {
      if (err) {
        response.status(404).json({ verified: false });
      } else {
        console.log("user is authenticated");
        next();
      }
    }
  );
};

const getIdFromToken = (req, res, next) => {
  console.log("Gets here");
  const decodedToken = jwt.decode(req.cookies.usertoken, { complete: true });

  // console.log("Decoded token new", decodedToken.payload.id);

  req.user_id = decodedToken.payload.id;
  next();
};

module.exports = {
  authenticate,
  getIdFromToken,
};
