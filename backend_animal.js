const express = require ('express');
const cors = require('cors')
const app = express();
const port = 3000;

app.use(cors())

const animalSpecies = ["zebra","tiger","lion", "elephant", "monkey", "sheep"]
const isAnimal = (req,res,next) =>{
    let species = req.params.species
    if (!animalSpecies.includes(species)){
        res.json({
            status: "Failed. Try another animal",
            message: "false",
        })  
    }else{
        next() 
    }   
}

const validEndpoint = (req,res,next) =>{
    res.json({
        status: "success",
        message: "true",
    })
}
app.get(`/animal/:species`,isAnimal, validEndpoint) 
app.listen(port, ()=>{
    console.log(`http://localhost:${port}`)
})



