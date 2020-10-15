module.exports = function reverse (n) {
  let res=""; 
  if(n<0){
    n+="";
    n=n.substring(1);
  }
  else n+="";
  for(let i=n.length-1;i>=0;i--){
      res+=n[i];
  }
  parseInt(res);
  return res;
}
