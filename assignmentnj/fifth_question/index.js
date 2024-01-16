var fs = require("fs");
fs.unlink('nodejs_architecture.txt',function(err){
    if(err){
        return console.error(err)
    }
    console.log("File deleted successfully..");
});