const submitForm = document.getElementById('submit-form')
const baseEndpoint = "http://localhost:8000/api"
if (submitForm) {
    submitForm.addEventListener('submit', handleSubmit)
}
function handleSubmit(event) {
    console.log(event)
    event.preventDefault()
    const submitEndpoint = `$(baseEndpoint)/token/`
    let submitFormData = new FormData(submitForm)
    let submitObjectData = Object.fromEntries (submitFormData)
    let bodyStr = JSON.stringify(submitObjectData)
    console.log(submitObjectData, bodyStr)

    const options = {
        method: "post",
        headers: {
            "ContentType": "application/json"
        },
        body: bodyStr
    }
    fetch(submitEndpoint, options)
    .then (response=>{
        console.log(response)
        return response.json()
    } )
    .then(x => {
        console.log(x)
    }) 
    .catch (err=> {
        console.log ('err',err)
    })
    
}
