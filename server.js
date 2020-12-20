const express = require("express")
const app =   express()
const port = process.env.PORT||3000

const expressLayouts = require("express-ejs-layouts")
const mongoose = require("mongoose")



app.set("view engine","ejs")
app.set("layout","layouts/layout")
app.use(expressLayouts)
app.use(express.static("public"))





const myroutes = require("./routes/routes")


// on page loading to / it will use these 
app.use("",myroutes)


// setting up databse connection atlas
 const dbUri = "mongodb+srv://netninja:netninja123@blogs.4rinl.mongodb.net/blogs?retryWrites=true&w=majority";

 mongoose.connect(dbUri,{useNewUrlParser:true,useUnifiedTopology:true,useCreateIndex:true}).then(() => {

     app.listen(PORT,(req,res)=>{

     console.log("app is up and running!")

})

}).catch((err)=>{


    console.log("unable to connect to the databse!")
})












