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
app.use('/uploads',express.static(path.join(__dirname, 'uploads')));
// let the react app to handle any unknown routes 
// serve up the index.html if express does'nt recognize the route
const path = require('path');
const bodyParser = require('body-parser');

const readCardsData = () =>{
    const dataPath = path.join(__dirname, 'cards.json');
    if(!fs.existsSync(dataPath))
    {
        return {pages:{}};
    }
    const rawData = fs.readFileSync(dataPath);

    return JSON.parse(rawData);
}

app.get('/cards/:page', (req,res)=>{
    const data = readCardsData();
    const pageName = req.params.page;

    if(data.pages[pageName])
    {
        res.json(data.pages[pageName]);
    }else
    {
        res.status(404).json({message: 'page not found'});
    }
})

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