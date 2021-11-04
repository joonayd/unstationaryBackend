var mongoose = require("mongoose");
const Joi = require("@hapi/joi");
var cardSchema = mongoose.Schema({
  frontImage: { type: String },
});
var Card = mongoose.model("Card", cardSchema);

// function validateProduct(data) {
//   const schema = Joi.object({
//     name: Joi.string().min(3).max(100).required(),
//     price: Joi.number().min(0).required(),
//   });
//   return schema.validate(data, { abortEarly: false });
// }
module.exports.Card = Card;
// module.exports.validate = validateProduct;
