document.addEventListener("DOMContentLoaded",()=>{
    let form = document.querySelector("#form");
    form.addEventListener("submit", () => {
        event.preventDefault();
    }) 
    let animalButton = document.querySelector("#animal")
    animalButton.addEventListener("click", ()=>{
        animalRequested()
    })
})


async function animalRequested() {
    let floorInput = document.querySelector("#floorInput")
    let ceilInput = document.querySelector("#ceilInput")
    const myUrl = `http://localhost:3000/random?floor=${floorInput.value}&ceil=${ceilInput.value}`
    const resp = await axios.get(myUrl)

    if(floorInput.value>ceilInput.value){
    status(resp.data)
    }else{
        status(resp.data)
        range_rand(resp.data)
    }
  
}
const status = (data) =>{
    let status = document.querySelector("#status")
    status.innerText = "Status: " + data.status
}


const range_rand = data =>{
    let range = document.querySelector("#range")
    let randPick = document.querySelector("#randPick")
    range.innerText = "Range: [" + data.range+ "]"
    randPick.innerText = "RandPick: " + data.randPick
}