var express = require("express");

var router = express.Router();

var db = require("../models");

db.Attendance.hasMany(db.Student, {foreignKey:""});
