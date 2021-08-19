"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.profile = void 0;

var _profile = require("./profile.js");

const userData = {
  name: 'Tom',
  age: 17
};
const profile = { ...userData,
  company: 'Gromcode'
};
exports.profile = profile;
(0, _profile.printProfile)(profile);