
const even = (arr) =>{

  return arr.filter((element) =>{
    console.log(element);
    return element%2 == 0;
  }).reduce((a,b)=>{
return a+b;
  })


}


even([12,45,34,23,22,10]); 



