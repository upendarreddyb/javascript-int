let str="upendarreddy";
let res={}
for(let i=0;i<str.length;i++){
    let ch=str[i];//str.charAT(i) // str.at(i)
   if(!res[ch]){
    res[ch]=1;
   }else{
    res[ch]+=1
   }
}
console.log(res);