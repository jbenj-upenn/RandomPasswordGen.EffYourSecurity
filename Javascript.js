// Make the password
function generate(){
  
    //slider element's complexity
    let complexity = document. getElementById("range-toucher").value;
  
    //password values that are possible
    let values = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*()-_=+";
  
    let password = "";
  
    //for loop to choose characters for password
    for(var i = 0; i <= complexity; i++){
      password = password + values.charAt(Math.floor(Math.random() * Math.floor(values.length - 1)));
    }
  
   //add password to text area
   document.getElementById("display").value = password
  
   //add pastWords
   document.getElementById("lastNums").innerHTML += password + "<br />";
  
  }
  
  document.getElementById("length").innerHTML = "Length 25";
  
  
  
  