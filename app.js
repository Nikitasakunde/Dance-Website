const express = require("express");
const path = require("path");
const app = express();
const port = 8000;
const bodyparser = require("body-parser")

const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://localhost:27017/contactDance');


  
  // use `await mongoose.connect('mongodb://user:password@localhost:27017/test');` if your database has auth enabled
}

async function main() {

    await mongoose.connect('mongodb://localhost:27017/servicesDance');
  
    // use `await mongoose.connect('mongodb://user:password@localhost:27017/test');` if your database has auth enabled
  }



// define mongoose contact schma
const contactSchema = new mongoose.Schema({
    name: String,
    phone: String,
    email: String,
    address: String,
    desc: String,
    
});
// services schema

const servicesSchema = new mongoose.Schema({
    comment : String,
    name: String,
    email: String,
    website: String,
})


const contact = mongoose.model('Contact', contactSchema);

const services = mongoose.model('Services' , servicesSchema)


// EXPRESS SPECIFIC STUFF
// for serving static files
app.use('/static' , express.static('static'))
app.use(express.urlencoded())



// PUG SPECIFIC STUFF
// set the template engine as pug
app.set('view engine' , 'pug')

// set the view directory
app.set('views' , path.join(__dirname , 'views'))





// END POINTS
app.get('/',(req,res)=>{
    const params = {}
    res.status(200).render('home.pug' , params)
})


app.get('/contact',(req,res)=>{
    const params = {}
    res.status(200).render('contact.pug' , params)
})

app.get('/about' , (req,res)=>{
    const params ={}
    res.status(200).render('about.pug' , params)
})

app.get('/services' , (req , res)=>{
    const params ={}
    res.status(200).render('services.pug' , params)
})

app.get('/classInfo' , (req ,res)=>{
    const params ={}
    res.status(200).render('class.pug' , params)
})

app.get('/#sponsorsSection',(req,res)=>{
    const params = {}
    res.status(200).render('home.pug' , params)
})





// mongoose related stuff
app.post('/contact',(req,res)=>{
    var myData = new contact(req.body);
    myData.save().then(()=>{
        res.send("this item has been saved to the database")
    }).catch(()=>{
        res.status(400).send("Item was not saved to the database.")
    });

    // res.status(200).render('contact.pug')
})

app.post('/about' , (req, res)=>{
    res.status(200).render('about.pug')
})



app.post('/services' ,(req , res)=>{
    var data = new services(req.body);
    data.save().then(()=>{
        res.send("This item is saved in database")
    }).catch(()=>{
        res.status(400).send("Item was not saved to database")
    })
    // res.status(200).render('sevices.pug')
})

app.post('/classInfo' , (req ,res)=>{
    res.status(200).render('class.pug')
})






app.listen(port ,()=>{
    console.log(`The application started successfully on port ${port}`);
})