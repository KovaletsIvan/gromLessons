"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.printProfile = void 0;

const printProfile = profileData => {
  const {
    name,
    company
  } = profileData;
  console.log(`${name} from ${company}`);
};

exports.printProfile = printProfile;