const express = require('express')
const cors = require('cors')
const app = express();
const port = 3000;

app.use(cors())

let names = ['xavier', 'michelle', 'corey', 'reed','joshua', 'emily']
const peek = (req,res) =>{
    let stat = req.params.stat

   
        res.json({
            status: "success",
            data: "reed"
           })
    }
}


// const enqueue = (req,res,next) =>{

   
//     res.json({
//         status: "Failed. Floor must be smaller than ceiling",
//     })
// }else{
//     next()
// }
// }




// const dequeue = (req,res,next) =>{

   
//     res.json({
//         status: "Failed. Floor must be smaller than ceiling",
//     })
// }else{
//     next()
// }
// }

const validEndpoint = (req,res,next) =>{

    res.json({
        status: "success",
        data: "reed"
       })
    
}
app.get(`/peek`,generateSpread, validEndpoint)
app.get(`/enqueue`,generateSpread, validEndpoint)
app.get(`/dequeue`,generateSpread, validEndpoint)
app.listen(port, ()=>{
    console.log(`http://localhost:${port}`)
})




