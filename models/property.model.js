const mongoose = require("mongoose");

const propertySchema = new mongoose.Schema(
  {
    doorNumber: {
      type: String,
    },
    streetName: {
      type: String,
    },
    landMark: {
      type: String,
    },
    propertyType: {
      type: Object,
    },
    selectedCountry: {
      type: Object,
    },
    selectedState: {
      type: Object,
    },
    selectedCity: {
      type: Object,
    },
    phoneNumber: {
      type: String,
    },
    zipCode: {
      type: String,
    },
    userId: {
      type: String,
    },
    landlordLeaseAgreement: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'LandlordLeaseAgreement'
    }
  },
  { timestamps: true }
);

const propertyModel = mongoose.model("Property", propertySchema);

module.exports = propertyModel;