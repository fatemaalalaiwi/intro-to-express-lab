const express = require('express')
const morgan = require('morgan')

const app = express()
const PORT = 3002
const userName = 'Fatema'

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
        {userName: 'Fatema Ahmed'

})
})


// routes 2
app.get('/roll/:rollNumber', (req, res) => {
  const rollNumber = Number(req.params.rollNumber);

//if it is not a number  will send masege
// (is NAN = not a numbet)
  if (isNaN(rollNumber)) {
    res.send("please enter a number.");

  } else {
    const roll = Math.floor(Math.random() * (rollNumber + 1));
    res.send(`You rolled a ${roll}.`);
  }
  res.send(` Roll/ ${number}`)
})



// routes 3

app.get('/collectibles', (req,res) => {
  
    res.render('collectibles/index.ejs', {
       title: "Collectibles page",
 // i send the collectible array to collectibles/index.ejs
       collectibles:collectibles

    }) 
 
})

// then do /collectibles/0
//         /collectibles/1
//         /collectibles/2


app.get('/collectibles/:itemId', (req,res) => {
    const index= Number(req.params.itemId);
    const item = collectibles[index]
    if (item){
      res.send(`So, you want the ${item.name}? For ${items.price}, it can be yours!`)
    }else {
      res.send('This item is not yet in stock')
    }
   
})


// routes 4
    app.get('/shoes', (req, res) => {
      const minPrice = req.query.minPrice;
      const maxPrice = req.query.maxPrice;
      const type = req.query.type;
      let ShoesFilters = shoes;







  if (!isNaN(minPrice)) {
    ShoesFilters = ShoesFilters.filter(shoe =>{
       shoe.price >= minPrice});
  }

  if (!isNaN(maxPrice)) {
    ShoesFilters = ShoesFilters.filter(shoe =>{
       shoe.price <= maxPrice});
  }

  if (type) {
    ShoesFilters = ShoesFilters.filter(shoe => {
       shoe.type=== type.toLowerCase() });
  }
//Responds with the full list of shoes.
  res.json(ShoesFilters);
})

// // app.get('/hello', (req, res) => {
// //     res.send(`Hello there, ${req.query.name}! I hear you are ${req.query.age} years old!`);
// // });


app.listen(PORT, () =>
     console.log(`Server is on http://localhost:${PORT}`));