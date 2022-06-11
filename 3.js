/*
const arr=[1, [2], [3, [4]]]
let result = [...arr]
let tmp=[]
result.forEach(a => {
      if (Array.isArray(a)) {
        
        tmp.push(...a);
      } else {
        tmp.push(a)
      }
    })

console.log(tmp)*/
function flat(arr, depth = 1) {
  
    let result=[...arr]; // spread the array for first layer
    while (depth>0){// looping till the input depth
      let temp=[];// an empty temp array for each loop
      let hasarray=false;
      result.forEach((a)=>{// check if the current array can be spreaded more
        if(Array.isArray(a)){
          hasarray=true;// if every element already been fully spreaded, this switch will never be turned on 
          temp.push(...a)// the core spreading operation
        }else{
          temp.push(a)
        }
       
      })
      if(!hasarray){return temp} // if the switch never be turned on, means the array is already fully spreaded, just return it
        depth-=1
        result=temp
    }
      return result
    
  }
  
  const arr = [1, [2], [3, [4]]];
  
  console.log(flat(arr,2))