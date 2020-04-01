const express = require('express'),
    app = express(),
    path = require('path'),
    fs =  require('fs'),
    port = 1234,
    testData = path.join(process.cwd(),'test')

app.use(express.static(path.join(process.cwd(),'dist')))
app.use(express.json())
app.post('/api/fetch',(req,res)=>{
    fs.readFile(path.join(testData,req.body.fileName),(err,data)=>{
        if(err){
            return res.status(513).send(`Fetch Error:${err}`)
        }
        res.send(data)
    })
})
app.all('/*',(_req,res)=>{
    res.sendFile(path.join(process.cwd(),'dist/index.html'))
})
app.listen(port,()=>{
    console.log(`Server running.\nListening on port ${port}\nCWD: ${process.cwd()}`)
})