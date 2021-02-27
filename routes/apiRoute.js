const router = require('express').Router();
const path = require('path');
const fs = require('fs');

// Criterea requires db.json file: so the application is going to store & retrieve notes from the `fs` module (the `db.json` file on the backend). //

// C. R. U. D. //
// POST `/api/notes` - Should receive a new note to save on the request body, add it to the `db.json` file, and then return the new note to the client. //

// DELETE `/api/notes/:id` - Should receive a query parameter containing the id of a note to delete. This means you'll need to find a way to give each note a unique `id` when it's saved. In order to delete a note, you'll need to read all notes from the `db.json` file, remove the note with the given `id` property, and then rewrite the notes to the `db.json` file. //