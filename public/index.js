
let arr = [
  
     "paul@gmail.com", "mleroe@gmail.com"
    
  ];
  
  let text = document.querySelector('FORM');
  
  text.addEventListener('submit', (e) =>  {
  e.preventDefault();
// condition: if in array, then return true 

  
  let user = document.querySelector('INPUT[type="text"]').value
  let word = document.querySelector('INPUT[type="password"]').value

  console.log(user)
  console.log(word);
  
// from one element, to all elements in an array
  console.log(arr.includes(user)); 

  // if(user == arr[0]){
  //   console.log(true);
  //   return true;
  // } else {
  //   console.log(false);
  //   return false;
  // }
  
  });

