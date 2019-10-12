module.exports = function check(str, bracketsConfig) {
  // your solution
  let strBr = str.split('');
  console.log(str);
  for(let i =0; i < strBr.length; i++){
    for( let j= 0; j< bracketsConfig.length; j++){
      let first = bracketsConfig[j][0];
     // console.log("first = ", first);
      let second = bracketsConfig[j][1];
     // console.log("second = ", second);
      if(strBr[i] == first && strBr[i+1]== second){
        strBr.splice(i,2);
        i-=2;
      }
    }  
  }
  if (strBr.length == 0)return true;
  else return false;
}
