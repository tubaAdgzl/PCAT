const express =  require("express")
const mongoose = require("mongoose")
const ejs = require("ejs")
const methodOverride = require('method-override');
const fileUpload = require('express-fileUpload');
const app = express();
const pageRoute = require("./routes/pageRoute")
const photoRoute = require("./routes/photoRoute")

//mongoose
mongoose.connect("mongodb://localhost/pcat-db",{
    useNewUrlParser: true, 
    useUnifiedTopology: true,
})


app.use(express.urlencoded({extended:true})) 
app.use(express.json())

app.use(methodOverride('_method',{
  methods:["POST","GET"]
}));

app.use(fileUpload())
app.set("view engine","ejs")
app.use(express.static("public"))

//Routes
app.use("/",pageRoute);
app.use("/photos",photoRoute);

const PORT  = 3000;
app.listen(PORT,()=>{
	console.log(`Sunucu ${PORT} portunda başlatıldı`)
})