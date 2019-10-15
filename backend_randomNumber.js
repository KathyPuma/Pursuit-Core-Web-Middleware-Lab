const express = require('express')
const cors = require('cors')
const app = express();
const port = 3000;

app.use(cors())


const generateSpread = (req,res,next) =>{
    let randomFloor =Number(req.query.floor)
    let randomCeil =Number(req.query.ceil)
    if(randomFloor>randomCeil){
        res.json({
            status: "Failed. Floor must be smaller than ceiling",
        })
    }else{
        next()
    }
}

const validEndpoint = (req,res,next) =>{
    let randomFloor =Number(req.query.floor)
    let randomCeil =Number(req.query.ceil) 

    let min = randomFloor;
    let max = randomCeil;
    let random = parseInt(Math.random() * (max - min) + min);

    res.json({
        status: "success",
        range: [randomFloor, randomCeil],
        randPick: random,
      })
    
}
app.get(`/random`,generateSpread, validEndpoint)
app.listen(port, ()=>{
    console.log(`http://localhost:${port}`)
})




