const Joi = require("joi");

module.exports.listingSchema = Joi.object({
  listing: Joi.object({
    title: Joi.string().required(),
    description: Joi.string().required(),
    country: Joi.string().max(100).required(),
    location: Joi.string().max(100).required(),
    price: Joi.number().required().min(0),
    image: Joi.string().allow("", null),
  }).required(),
  latitude: Joi.number().optional().min(-90).max(90).allow(""),
  longitude: Joi.number().optional().min(-180).max(180).allow(""),
});

module.exports.reviewSchema = Joi.object({
  review: Joi.object({
    rating: Joi.number().required().min(1).max(5),
    comment: Joi.string().required(),
  }).required(),
});
