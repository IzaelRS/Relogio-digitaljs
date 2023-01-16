const horas = document.getElementById("horas");

const minutos = document.getElementById("minutos");

const segundos = document.getElementById("segundos");


//funcao minutos

const relogio = setInterval(function time() {
     let dateToday = new Date(); // cria um variavel
     let hr = dateToday.getHours(); // cria uma variavel e alimenta a de cima com os minutos
     let min = dateToday.getMinutes();
     let seg = dateToday.getSeconds();

     if (hr < 10) hr = "0" + hr;

     if (min < 10) min = "0" + min;

     if (seg < 10) seg = "0" + seg;

     horas.textContent = hr;
     minutos.textContent = min;
     segundos.textContent = seg;



})
