const express =  require("express")
const ejs = require("ejs")
const app = express();
const pageRoute = require("./routes/pageRoute")

app.set("view engine","ejs")
app.use(express.static("public"))

//Routes
app.get("/",pageRoute);

const PORT  = 3000;
app.listen(PORT,()=>{
	console.log(`Sunucu ${PORT} portunda başlatıldı`)
})