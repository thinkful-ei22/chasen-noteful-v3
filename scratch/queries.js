'use strict';

const mongoose = require('mongoose');
const { MONGODB_URI } = require('../config');

const Note = require('../models/note');

mongoose.connect(MONGODB_URI)
  .then(() => {
    // const searchTerm = 'lady gaga';
    // let filter = {};

    // if (searchTerm) {
    //   const regex = new RegExp(searchTerm, 'i');
    //   filter.$or = [{'title': regex}, {'content': regex}];
    // }
    // return Note.find(filter).sort({ updatedAt: 'desc' });

    /*Find/Search for notes using Note.find*/
    // return Note.findById('000000000000000000000001')
    //   .then(result => {
    //     if (result) {
    //       console.log(result);
    //     } else {
    //       console.log('not found');
    //     }
    //   });

    /*   Create a new note using Note.create */

    // const newNote = {
    //   title: 'this is a new note',
    //   content: 'Lorem ipsum dolor sit amet'
    // };
    
    // return Note.create(newNote)
    //   .then(result => {
    //     console.log(result);
    //   });

    /**
     * Update a note by id using Note.findByIdAndUpdate
     */
    // const updateNote = {
    //   title: 'updated title',
    //   content: 'Posuere sollicitudin aliquam ultrices'
    // };

    // return Note.findByIdAndUpdate('000000000000000000000001', updateNote, { new: true })
    //   .then(result => {
    //     if (result) {
    //       console.log(result);
    //     } else {
    //       console.log('not found');
    //     }
    //   });

    /**
     * Delete a note by id using Note.findByIdAndRemove
     */
    // return Note.findByIdAndRemove('000000000000000000000001')
    //   .then(result => {
    //     console.log('deleted', result);
    //   });

  })    
  .then(results => {
    console.log(results);
  })
  .then(() => {
    return mongoose.disconnect();
  })
  .catch(err => {
    console.error(`ERROR: ${err.message}`);
    console.error(err);
  });
