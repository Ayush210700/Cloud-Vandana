const arr = [34,27,19,57,80]; 
  
function arrSort(arr) { 
    arr.sort((a,b)=>a-b); 
    arr.reverse(); 
    return arr; 
} 
  
console.log(arrSort(arr)); 