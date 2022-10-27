const fs = require("fs")

const user = {
    id: 19522490,    
    name: "Che Nguyen Minh Tung",
    age: 21

}

const data=JSON.stringify(user);
fs.writeFile("user.json",data, (err) =>{
    if(err) {
        throw err;
    }
    console.log("JSON data is saved")
})