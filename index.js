#!/usr/bin/env node
var spawnSync = require("child_process").spawnSync
  , path = require("path");


module.exports = mkdeb = function(target){
  var ret = spawnSync('fakeroot', ['dpkg-deb', '-b',path.basename(target)],{cwd:path.dirname(target),stdio:'inherit'});
  if(ret.status == 0){
    return target+".deb";
  }else{
    throw new Error("spawnSync returned code : "+require('util').inspect(ret, { depth: null }));
  }
}
/**
 * Call when executed directly
 */
if(require.main === module){
  if(typeof process.argv[2] === "string"){
    mkdeb(process.argv[2]);
    console.log("done.")
  }else{
    console.log("usage : \n\tmkdeb package-version-arch/");
  }

}
