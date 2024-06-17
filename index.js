function playDice(){

const numDice = document.getElementById("numd").value;
const result = document.getElementById("result");
const takeplace = document.getElementById("images");
const values = [];
const images = [];

for(let i = 0; i< numDice; i++){
    const value = Math.floor(Math.random() * 6) +1;
    values.push(value);
    images.push(`<img src="${value}.png" alt="Dice ${value}">`);

}

result.textContent=`Dice: ${values.join(", ")}`;
takeplace.innerHTML = images.join(" ");

}
