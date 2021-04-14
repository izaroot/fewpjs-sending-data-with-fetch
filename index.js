// Add your code here
const bodyCon = document.querySelector("body")


function submitData(nameStr, emailStr){
     return fetch('http://localhost:3000/users', {
        method: "POST",
        headers: {
            "Content-type": "application/json",
            "Accept" : "application/json"
        },
        body: JSON.stringify({
            name: nameStr,
            email: emailStr
        })
    })
    .then(resp => resp.json())
    .then(json =>{
        let idP = document.createElement("p")
        idP.innerText = json.id
        bodyCon.append(idP)
    })

    .catch(() => {
        let idP = document.createElement("p")
        idP.innerText = "Error"
        bodyCon.append(idP)
    })
}

// function deleteData(idNum){
//     fetch(`http://localhost:3000/users/${idNum}`, {
//         method: "DELETE"
//     })
// }