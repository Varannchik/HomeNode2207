//const http = require('http');
const fs = require('fs');
const path = require('path');
const date = new Date();
fs.appendFile(path.join(__dirname,'public','launch.logs'), ` Дата и время запроса: ${date}` + "\r\n" , function(err){ 
    if(err) {
        console.error(err);
    };
})
