// Method 1: On Browser using express to host the server on localhost
const express = require('express');
const path = require('path');

const app = express();

app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname + '/imgtotxt.html'))
})

app.listen(5050, () => {
	console.log('listening on port 5050');
})


// Method 2: Directly with Node JS

// const Tesseract = require('tesseract.js');
// const fs = require('fs');
// const img = fs.readFileSync("./testimage.png")
 
// Tesseract
// 	.recognize(img, 'eng')
// 	.then(({ data: { text } }) => {
// 		console.log(text);
// 	})