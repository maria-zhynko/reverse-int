module.exports = function reverse (n) {
  let res=""; 
  n+="";
  for(let i=n.length-1;i<0;i--){
      res+=n[i];
  }
  res=parseInt(res);
  return res;
}
