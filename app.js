const express=require("express");
const https=require("https");
const app=express();

app.get("/",function(reqq,res){
    var url="https://api.openweathermap.org/data/2.5/weather?q=Delhi&appid=c752f7862d451c912aaf3e7b47d4ecba&units=metric";
    https.get(url,function(response){
        response.on("data",function(data){
            const wdata=JSON.parse(data);
            const temp=wdata.coord.lon;
            console.log(temp);
        })
    })
})

app.listen(3000,function(){
    console.log("Server running at port:3000");
});