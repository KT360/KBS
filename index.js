const express = require('express');
const app = express();
const multer = require('multer');
const fs = require('fs');
// if not in production use the port 3000
const PORT = process.env.PORT || 3000;
const path = require('path');
const bodyParser = require('body-parser');

// serve up production assets
app.use(express.static('web_board/build'));
app.use('/uploads',express.static(path.join(__dirname, 'uploads')));
app.use(bodyParser.json());

//reads the json card data and transforms it into a javascript object
const readCardsData = () =>{
    const dataPath = path.join(__dirname, 'cards.json');
    if(!fs.existsSync(dataPath))
    {
        return {pages:{}};
    }
    const rawData = fs.readFileSync(dataPath);

    return JSON.parse(rawData);
}

//end point for updating cards
//get at '/pages/:pageID/cards/:cardID'
//get data from request 
// get modified data from body
//get file path to json file
//parse the json file into an object
//get page name
//get card index
//update data
//write to file
//send status

app.patch('/pages/:pageID/cards/:cardID', (req, res)=>{
    const {pageID, cardID} = req.params;
    const data = req.body;

    const dataPath = path.join(__dirname, 'cards.json');
    const dataContent = fs.readFileSync(dataPath, 'utf-8');
    const pages = JSON.parse(dataContent);
    
    const cardIndex = pages[pageID].findIndex

    pages[pageID][cardID] = {
        ...pages[pageID][cardID],
        data
    };

    fs.writeFileSync(dataPath, JSON.stringify(pages, null, 2));
    res.status(200).json({message: "Card updated successfully"});

});

//For the card request API, get the data, check if page exist and send appropriate data
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

//Create a multer storage device to handle the transfer of data
//So that each image has a unique ID append the current date and time
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/');
    },
    filename: (req, file, cb) =>{
        cb(null, `${Date.now()}--${file.originalname}`);
    }
});

//create a device for upload
const upload = multer({storage});

//API endpoint for file uploads
app.post('/upload', upload.single('file'), (req, res) => {
    res.json({message: "File uploaded successfully"});
})

// let the react app to handle any unknown routes 
// serve up the index.html if express does'nt recognize the route
app.get('*', (req, res) => {
res.sendFile(path.resolve(__dirname, 'web_board', 'build', 'index.html' ));
});


console.log('server started on port:',PORT);
app.listen(PORT, '0.0.0.0');