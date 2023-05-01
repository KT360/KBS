const express = require('express');
const app = express();
const multer = require('multer');
const fs = require('fs');
const path = require('path');
// if not in production use the port 3000
const PORT = process.env.PORT || 3000;

// serve up production assets
app.use(express.static('web_board/build'));
app.use(bodyParser.json());
// let the react app to handle any unknown routes 
// serve up the index.html if express does'nt recognize the route
const path = require('path');
const bodyParser = require('body-parser');
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/');
    },
    filename: (req, file, cb) =>{
        cb(null, `${Date.now()}--${file.originalname}`);
    }
});

const upload = multer({storage});

//API endpoint for file uploads
app.post('/upload', upload.single('file'), (req, res) => {
    res.json({message: "File uploaded successfully"});
})

app.get('*', (req, res) => {
res.sendFile(path.resolve(__dirname, 'web_board', 'build', 'index.html' ));
});
console.log('server started on port:',PORT);
app.listen(PORT, '0.0.0.0');