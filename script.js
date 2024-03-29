const input = document.getElementById("number");
const btn = document.getElementById("convert-btn");
const output = document.getElementById("output");

const convert = () => {
  
  if(input.value === ""){
    output.textContent = "Please enter a valid number";
    output.style.display = 'block';
  } else if(input.value < 1){
    output.textContent = "Please enter a number greater than or equal to 1";
    output.style.display = 'block';
  } else if(input.value > 3999){
    output.textContent = "Please enter a number less than or equal to 3999";
    output.style.display = 'block';
  } else {
    let str ="";
    for(let i=0;i<values.length;i++){
      while(input.value >= values[i]){
        str += roman[i];
        console.log(str);
        input.value -= values[i];
      }
    }
    output.innerText = str;
    output.style.display = 'block';
  }
}
const values = [1000,900,500,400,100,90,50,40,10,9,5,4,1];
const roman = ["M","CM","D","CD","C","XC","L","XL","X","IX","V","IV","I"];


btn.addEventListener('click',convert);