const express=require("express");
const https=require("https");
const bodyparser=require("body-parser");
const app=express();
app.use(bodyparser.urlencoded({extended:true}));

app.get("/",function(reqq,res){
    res.sendFile(__dirname+"/index.html")
})
app.post("/",function(req,res){
    const query=req.body.cityName;
    const apikey="c752f7862d451c912aaf3e7b47d4ecba";
    var url="https://api.openweathermap.org/data/2.5/weather?q="+query+"&appid="+apikey+"&units=metric";
    https.get(url,function(response){
        response.on("data",function(data){
            const wdata=JSON.parse(data);
            const temp=wdata.main.temp;
            const wdesc=wdata.weather[0].description;
            res.write("<p> the weater is currently "+wdesc+"</p>")
            res.write("<h1>the temp in "+query+" is"+temp+"</h1>");
            res.send();
        })
    })
})


app.listen(3000,function(){
    console.log("Server running at port:3000");
});