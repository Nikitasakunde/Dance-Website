const express = require("express");
const path = require("path");
const app = express();
const port = process.env.PORT || 8000;
const bodyparser = require("body-parser")
const { MongoClient } = require('mongodb');

const mongoose = require('mongoose');

app.use(express.json());
app.use(bodyparser.urlencoded(
    {
    extended : true
    }
))


main().catch(err => console.log(err));




main().catch(err => console.log(err));

async function main() {
    const monngodb_url = "mongodb://root:root@ac-fwz7lfs-shard-00-00.h31lqor.mongodb.net:27017,ac-fwz7lfs-shard-00-01.h31lqor.mongodb.net:27017,ac-fwz7lfs-shard-00-02.h31lqor.mongodb.net:27017/contact?ssl=true&replicaSet=atlas-jyubpb-shard-0&authSource=admin&retryWrites=true&w=majority"
    await mongoose.connect(monngodb_url, {useNewUrlParser: true,useUnifiedTopology: true}).then(()=>{
        console.log("mongodb is connected");
    }).catch((error)=>{
        console.log("mongodb not connected");
        console.log(error);
    });
}



// main().catch(err => console.log(err));

async function main() {
    const monngodb_url = "mongodb://root:root@ac-fwz7lfs-shard-00-00.h31lqor.mongodb.net:27017,ac-fwz7lfs-shard-00-01.h31lqor.mongodb.net:27017,ac-fwz7lfs-shard-00-02.h31lqor.mongodb.net:27017/service?ssl=true&replicaSet=atlas-jyubpb-shard-0&authSource=admin&retryWrites=true&w=majority"
    await mongoose.connect(monngodb_url, {useNewUrlParser: true,useUnifiedTopology: true}).then(()=>{
        console.log("mongodb is connected");
    }).catch((error)=>{
        console.log("mongodb not connected");
        console.log(error);
    });
}






// define mongoose contact schma
const contactSchema = new mongoose.Schema({
    name: String,
    email: String,
    address: String,
    desc: String
    
});
// services schema

const servicesSchema = new mongoose.Schema({
    comment : String,
    name: String,
    email: String,
    website: String,
})


const contact = mongoose.model('Contacts', contactSchema);

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






app.listen(port  , ()=>{
    console.log(`The application started successfully on port localhost:${port}`);
})
 
