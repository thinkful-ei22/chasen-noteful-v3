'use strict';

const mongoose = require('mongoose');

const folderSchema = new mongoose.Schema({
  name: {type: String, required: true, unique: true},

});

//this adds createdAt and updatedAt
folderSchema.set('timestamps', true);

//customize output for 'res.json(data)'
folderSchema.set('toObject', {
  virtuals: true, //inlude builtin virtual id//
  versionKey: false,  //remove '__v' version key
  transform: (doc, ret) => {
    delete ret._id;  //delete id from return object
  }
});

module.exports = mongoose.model('Folder', folderSchema);