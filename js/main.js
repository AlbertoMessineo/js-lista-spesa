'use strict';

const lista = document.querySelector('.list');
const listaSpesa = [ "Pasta per pizza🍞" ,"Passata di pomodoro🍅" , "Mozzarella di bufala🐄" , "Ananas🍍" , "Qualche birretta🍻"  , "Pepsi (Meglio della cocacola)🥤" , "Teglia🍕" ];

let i = 0;
while(i < listaSpesa.length){
    i++;
    const elementList = document.createElement('li');
    lista.append(elementList);
    elementList.textContent = listaSpesa[i - 1]; 
    elementList.classList.add("li-style");
}

console.log(listaSpesa);