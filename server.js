const express = require('express')
const morgan = require('morgan')

const app = express()
const PORT = 3000
userName = 'Fatema'

// middleware
app.use(morgan('dev'))




  const collectibles = [
    { name: 'shiny ball', price: 5.95 },
    { name: 'autographed picture of a dog', price: 10 },
    { name: 'vintage 1970s yogurt SOLD AS-IS', price: 0.99 }
  ];


  const shoes = [
      { name: "Birkenstocks", price: 50, type: "sandal" },
      { name: "Air Jordans", price: 500, type: "sneaker" },
      { name: "Air Mahomeses", price: 501, type: "sneaker" },
      { name: "Utility Boots", price: 20, type: "boot" },
      { name: "Velcro Sandals", price: 15, type: "sandal" },
      { name: "Jet Boots", price: 1000, type: "boot" },
      { name: "Fifty-Inch Heels", price: 175, type: "heel" }
  ];



// routes 1
app.get('/', (req, res) => {
    res.render('index.ejs',
        {userName: 'Fatema Ahmed';

})
})


// routes 2
app.get('/roll/:rollNumber', (req, res) => {
  const rollNumber = number(req.params.rollNumber);


  if (isNaN(rollNumber)) {
    res.send("please enter a number.");

  } else {
    const roll = Math.floor(Math.random() * (rollNumber + 1));
    res.send(`You rolled a ${roll}.`);
  }
})
res.send(`<h1> Roll/ ${number}`)


// routes 3


app.get('/collectibles', (req,res) => {
  
    res.render(`collectibles/index.ejs`, {
       title: "Collectibles page",

       collectibles=collectibles
    }) 
 
})

app.get('/collectibles/:itemId', (req,res) => {
    const index= req.params.itemId
    res.render(`collectibles/show.ejs`, {
        title: `${collectibles[itemId].name} Page`,
        item: collectibles[index]
    }) 
})


// routes 4
    app.get('/shoes', (req, res) => {
  let { 'min-price': minPrice, 
        'max-price': maxPrice, type } = req.query;

  
  let filteredShoes = shoes.filter(shoe => {
    let valid = true;
    if (!isNaN(minPrice)) 
        valid = valid && shoe.price >= minPrice;
    if (!isNaN(maxPrice)) 
        valid = valid && shoe.price <= maxPrice;
    if (type) valid = valid && shoe.type.toLowerCase() === type.toLowerCase();
    return valid;
  });

  res.send(filteredShoes);
});

// app.get('/hello', (req, res) => {
//     res.send(`Hello there, ${req.query.name}! I hear you are ${req.query.age} years old!`);
// });


app.listen(PORT, () =>
     console.log(`Server is on http://localhost:${PORT}`))