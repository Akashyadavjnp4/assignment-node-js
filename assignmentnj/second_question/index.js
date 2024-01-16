var fs = require('fs');
fs.writeFile('nodejs_architecture.txt','Hello world...',function(err){
    if(err){
        return console.error(err)
    }
    console.log("Data write successfully");
   console.log("write new data");
});