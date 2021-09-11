const express =  require("express")

const app = express();

app.get("/",(req,res)=>{
	const photo = {
		"name":"proje 1",
		"description":"description"
	}
	res.send(photo)
})

const PORT  = 3000;
app.listen(PORT,()=>{
	console.log(`Sunucu ${PORT} portunda başlatıldı`)
})