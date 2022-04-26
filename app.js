let express = require('express');
let app = express();
let port = 8230;

app.get('/',(req,res) => {
    res.send("Welcome to Express")

})

app.listen(port,()=> {
    console.log(`Server is running on port ${port}`)
})