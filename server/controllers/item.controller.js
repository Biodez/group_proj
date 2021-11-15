const Item = require('../models/item.model');

module.exports.findAllItems = (req, res) => {
    Item.find({})
        .then(allTheItems => res.json(allTheItems))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}

module.exports.findOneSingleItem = (req, res) => {
    Item.findOne({ _id: req.params.id })
        .then(oneSingleItem => res.json(oneSingleItem))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}

module.exports.createNewItem = (req, res) => {
    Item.create(req.body)
        .then(newlyCreatedItem => res.json({ newlyCreatedItem }))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}