const fs = require("fs");
const path = require("path")
const readDir = function(directory){
    directory = directory.replace(/\b[-]/g,"/")
    var dir = path.resolve("./uploads/"+ directory)
    const Outdir = fs.readdirSync(dir)
    return parse(Outdir)
}
function parse(data){
    let files = [
        
    ]
    let dirs = [

    ]
    for(dir in data){
        console.log(data[dir]);
        let texto = data[dir];
        var RegExpr = new RegExp(/\b[.]/g)
        if(RegExpr.test(texto)){
            files.push(texto)
        }else{
            dirs.push(texto)
        }
        console.log(files);
        console.log(dirs);
    }
    return {files,dirs}
}
module.exports = readDir;