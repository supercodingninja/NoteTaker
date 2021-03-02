const path = require('path');

// C. R. U. D. //
module.exports = function(app) {

    // GET `/notes` - Should return the `notes.html` file. //
    app.get('/notes', function(req, res) {
        res.sendFile(path.join(__dirname, '../public/notes.html'));
      });
    
      // GET `*` - Should return the `index.html` file (if no matching route is found default to home). //
      app.get('*', function(req, res) {
        res.sendFile(path.join(__dirname, '../public/index.html'))
      });
}
