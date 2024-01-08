let inputValue=document.getElementsByClassName('input_box');
let inputCounter=0;
let idforupdate ="";
function myfun(){
   
let Myimg=document.createElement('img');
Myimg.setAttribute('src','https://cdn-icons-png.flaticon.com/128/6861/6861362.png');
Myimg.setAttribute('width','18px')
Myimg.setAttribute('class',"images")
document.querySelector('.big-card').appendChild(Myimg)
let secondImg=document.createElement('img');
secondImg.setAttribute('src','https://cdn-icons-png.flaticon.com/128/1827/1827933.png?ga=GA1.1.473674287.1704345865&semt=ais')
secondImg.setAttribute('class',"secondImg");
secondImg.setAttribute('width','18px');
document.querySelector(".big-card").appendChild(secondImg)
let myDiv = document.createElement('input');
  myDiv.setAttribute('class', 'myInput');
  myDiv.setAttribute('id',inputCounter)   
  myDiv.style.padding='5px';
  myDiv.style.border='none';
  document.querySelector('.big-card').appendChild(myDiv);
  myDiv.value=inputValue[0].value;
 
inputValue[0].value=""
if (Myimg) {
    
    Myimg.addEventListener('click',function(){
         myDiv.remove()
         Myimg.remove()
         secondImg.remove()
        })
}
 secondImg.addEventListener('click',function(){
    
    inputValue[0].value=myDiv.value;
    idforupdate = myDiv.id;

 })
 myDiv.addEventListener('click',function(){
    myDiv.removeAttribute('disabeled')
 })
 inputCounter++;
}
function Update() {
   let myDiv = document.querySelector(".myInput");
if (myDiv) {
    let targetedElement =  document.getElementById(idforupdate);
    let targetMainInput = document.getElementById("Input").value;
    targetedElement.value=targetMainInput;   
    document.getElementById("Input").value = ""
 
}
}

  
  
  
























































// function btn() {
//     var card = document.querySelector(".card");
//     var saveBtn = document.querySelector("#save");

//     if (card.style.display === 'none') {
//         card.style.display = 'block';
//         saveBtn.style.display = 'block';
//     } else {
//         card.style.display = 'none';
//         saveBtn.style.display = 'none';
//     }
// }

// function clickbtn() {
//     alert("Saved");
// }