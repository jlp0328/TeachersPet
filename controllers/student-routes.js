var express = require("express");

var router = express.Router();

var db = require("../models");

db.Student.hasMany(db.Attendance, {foreignKey:""});
