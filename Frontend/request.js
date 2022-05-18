fetch('http://localhost:8000')
.then(Response => {
    return Response.json();
}).then(json=> {

})

async function getUsers(){
    let response = await fetch('http://localhost:8000');
    let data = await response.json();
    return data;
}

getUsers().then(respone => {
    console.log(respone)
})