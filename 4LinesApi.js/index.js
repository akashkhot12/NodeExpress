const app = require('express')(); 

const port = 8000;

app.listen(
    port,
    ()=>console.log(`server running on ${port}`)
);