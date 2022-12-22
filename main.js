 let loader = document.querySelector(`.loader`);
 function stop(){
    loader.classList.add(`d-none`)
 }
 function start(){
    loader.classList.remove(`d-none`)
 }
 setTimeout(stop,3000);
setTimeout(start,6000)