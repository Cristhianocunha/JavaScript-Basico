//Condicional Simples
var num = 5;

if (num === 1){
   console.log("num é igual a 1")
}
else {
   console.log("num não é igual a 1")
}

console.log("------------------------")
// Condicional 
var num = 2;

if (num === 1){
   console.log("num é igual a 1")
}
else if (num === 2 ) {
   console.log("num é igual a 2")
} else {
    console.log("não é 2 nem 1")
}

// switch case

var mes = "Janeiro";

switch(mes){
    case "Feveiro":
        console.log("Mes 2");
        break
    case "Março":
        console.log("Mes 3");
        break
    case "Abril":
        console.log("Mes 4");
        break
    case "Janeiro":
            console.log("Mes 1");
            break
    default:
        console.log("nenhum dos casos foi atendidos");
}
