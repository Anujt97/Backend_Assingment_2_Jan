const http = require("http")
const blogs = require("./blogs")
const user = require("./user")
const categories = require("./catregories")
const profile= require("./profile")
$port = 5050
$host = "127.0.0.1"

http.createServer((req,res)=>{
    console.log(req.url)
    if(req.url=="/blogs"){
        res.writeHead(200,"Application-Type:Text/HTML")
        res.write(JSON.stringify(blogs))
        res.end()
    }else if(req.url=="/user"){
        res.writeHead(200,"Application-Type:Text/HTML")
        res.write(JSON.stringify(user))
        res.end()
    }else if(req.url=="/categories"){
        res.writeHead(200,"Application-Type:Text/HTML")
        res.write(JSON.stringify(categories))
        res.end()
    }else if(req.url=="/profile"){
        res.writeHead(200,"Application-Type:Text/HTML")
        res.write(JSON.stringify(profile))
        res.end()
    }


}).listen($port,()=>{
    console.log("server is running")
})

