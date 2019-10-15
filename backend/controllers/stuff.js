const Thing = require("../models/thing");

exports.createThing = (req, res, next) => {
  const thing = new Thing({
    title: req.body.title,
    description: req.body.description,
    imageUrl: req.body.imageUrl,
    price: req.body.price,
    userId: req.body.userId
  });
  thing
    .save()
    .then(() => {
      return res.status(201).json({
        message: "Post saved successfully!"
      });
    })
    .catch(error => {
      return res.status(400).json({
        error: error
      });
    });
};

exports.getOneThing = (req, res, next) => {
  return Thing.findOne({ _id: req.params.id })
    .then(thing => {
      res.status(200).json(thing);
    })
    .catch(error => {
      res.status(404).json({
        error: error
      });
    });
};

exports.modifyThing = (req, res, next) => {
  const thing = new Thing({
    _id: req.params.id,
    title: req.body.title,
    description: req.body.description,
    imageUrl: req.body.imageUrl,
    price: req.body.price,
    userid: req.body.userId
  });
  Thing.updateOne(
    {
      _id: req.params.id
    },
    thing
  )
    .then(thing => {
      res.status(201).json({ message: "thing updated successfully" });
    })
    .catch(error => {
      res.status(400).json({
        error: error
      });
    });
};

exports.deleteThing = (req, res, next) => {
  Thing.deleteOne({
    _id: req.params.id
  })
    .then(() => {
      res.status(200).json({
        message: "successfully deleted"
      });
    })
    .catch(error => {
      res.status(400).json({
        error: error
      });
    });
};

exports.getAllStuff = (req, res, next) => {
  Thing.find()
    .then(things => {
      res.status(200).json(things);
    })
    .catch(error => {
      res.status(400).json({
        error: error
      });
    });
};
