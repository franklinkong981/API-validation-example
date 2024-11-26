const express = require("express");
const router = new express.Router();
const ExpressError = require("../expressError");
const jsonschema = require("jsonschema");
const bookSchema = require("../schemas/bookSchema.json");

router.post("/", function(req, res, next) {
  const result = jsonschema.validate(req.body, bookSchema);
  if (!result.valid) {
    const listOfErrors = result.errors.map(e => e.stack);
    const err = new ExpressError(listOfErrors, 400);

    return next(err);
  } else {
    const {book} = req.body.book;
    return res.json({book});
  }
});

module.exports = router;
