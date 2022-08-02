const PORT = 8000
const axios = require('axios')
const cheerio = require('cheerio')
const express = require('express')
const app = express()
const cors = require('cors')
const { image_search , image_search_generator } = require('./api')
app.use(cors())
const text = null;
app.get('/', function (req, res) {
    res.json('Apa Liat Liat')
})


app.get('/:text', (req, res) => {
    image_search({query:req.params.text})   
    .then(results=>
    results.forEach(element => {
      var rescok = results.map(({image}) => ({image}));
      //random picker
   function random_item(items)
{
  
return items[Math.floor(Math.random()*items.length)];
     
}

var items = rescok;
console.log(random_item(items));
      //display randomized item
       res.json(random_item(items))
    }))})

app.listen(PORT, () => console.log(`server running on PORT ${PORT}`))
