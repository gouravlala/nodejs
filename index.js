let http = require("http")
let PORT = 3000
let hostname= "localhost"



let server = http.createServer((req, res)=>{
        if(req.url==="/about"){
            return res.end("<h1>i am about</h1>")
        }else if(req.url==="/contact"){
            return res.end("<h1>hey i can conatact you</h1>")
        }
})

server.listen(PORT,hostname,()=>{
    console.log(`server is running on ${hostname} ${PORT}`)
})