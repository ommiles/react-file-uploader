const express = require('express');
const fileUpload = require('express-fileupload');
const Cors = require('cors');

const app = express(); // initialize express
app.use(fileUpload()); // initialize express-fileupload
app.use(Cors());

// we just need one endpoint for our upload
// endpoint we want to send req to from react
app.post('upload', (req, res) => {
  console.log('firing')
  if (req.files === null) {
    return res.status(400).json({ msg: 'No file uploaded.' });
  }

  // move file to specified path
  // if there's an error, return a server error with message
  const file = req.files.file;
  file.mv(`${__dirname}/client/public/uploads/${file.name}`, err => {
    if (err) {
      console.log(err);
      return res.status(500).send(err);
    }

    res.json({ fileName: file.name, filePath: `/uploads/${file.name}` });
  });
});

// added a console.log to execute as our cb func
app.listen(5000, () => console.log('Server Started...')); // port 5000
