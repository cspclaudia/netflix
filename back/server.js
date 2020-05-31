const express = require('express');
const app = express();

app.use('/',(req,res,next)=>{
    res.send('ok');
});
app.listen(3000);