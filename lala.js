function musica(){
    const num = document.querySelector("#num").value;
    var x = 0;
    var contador =1;
    const texto = document.querySelector("h5");
    var y = 0;


    if (num >= 1 && num <= 100) {
        while(contador <= num){     
            x =  prompt("Número de vezes que foi tocada")
            contador++;
        
        if(x >= y) {
            y = x;
        }
        }      
}
 texto.innerHTML="Maior número de vezes que foi tocada: " + y;
}
