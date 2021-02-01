const Pirate = require('../models/pirate.model')

module.exports.allPirates = (req,res) => {
    Pirate.find().sort({name:1})
    .then((req) => res.json(req))
    .catch((err) => console.log(err))
}

module.exports.onePirate = (req,res) => {
    Pirate.findById({_id:req.params.id})
    .then((req) => res.json(req))
    .catch((err) => console.log(err))
}

module.exports.createPirate = (req,res) => {
    Pirate.create(req.body)
    .then((req) => res.json(req))
    .catch((err) =>res.status(400).json(err))
}

module.exports.deletePirate = (req,res) => {
    Pirate.deleteOne({_id:req.params.id})
    .then((req) => res.json(req))
    .catch((err) => console.log(err))
}