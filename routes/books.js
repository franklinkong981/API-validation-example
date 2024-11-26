const express = require("express");
const router = new express.Router();
const ExpressError = require("../expressError");

//VERSION WITHOUT ANY REAL VALIDATION...
router.post("/", function (req, res, next) {
   const bookData = req.body.book;

   if (!bookData) {
     // pass a 400 error to the error-handler
     let error = new ExpressError("Book data is required", 400);
     return next(error);
   }

   // (not implemented) insert book into database here

   return res.json(bookData);
 });

module.exports = router;
