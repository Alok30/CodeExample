const Author = require('../models/authorModel');


exports.get = function (req, res) {
  Author.get(function (err, author) {
    if (err) {
      res.json({
        status: "error",
        message: err,
      });
    }
    res.json({
      status: "success",
      message: "Author retrieved successfully",
      data: author
    });
  });
};

exports.post = function (req, res) {
  var author = new Author();
  author.name = req.body.name ? req.body.name : author.name;
  author.book = req.body.gender;
  author.age = req.body.email;
  author.save(function (err) {
    // if (err)
    //     res.json(err);
    res.json({
      message: 'New Author created!',
      data: author
    });
  });
};