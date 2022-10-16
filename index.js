require('dotenv').config()
const express = require('express')
const path = require('path');
const app = express()

const port = process.env.PORT || 5000;

app.get('/carrito', (req, res) => {
    res.send('Viendo carrito')
  })


if (process.env.NODE_ENV === 'production') {
    // Express will serve up production assets
    // like our main.js file, or main.css file!
    app.use(express.static('cliente/build'));
  
    // Express will serve up the index.html file
    // if it doesn't recognize the route
    app.get('*', (req, res) => {
      res.sendFile(path.resolve(__dirname, 'cliente', 'react', 'index.html'));
    });
  }  


app.listen(port, () => {
    console.log(`APP listening on port ${port}`)
  })  