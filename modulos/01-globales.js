let i = 0;
let intervalo = setInterval(function(){
    console.log(i)
    if (i===3){
        clearInterval(intervalo)
    }
    i++;
},1000)