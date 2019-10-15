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
    let input = document.querySelector("#animalInput")
    const myUrl = `http://localhost:3000/animal/${input.value}`
    const resp = await axios.get(myUrl)
    let status = document.querySelector("#status")
    status.innerText = "Status: " + resp.data.status
    let message = document.querySelector("#message")
    message.innerText = "Message: " + resp.data.message
}



