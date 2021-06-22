var codigo=15942
var Nome="Fabio Tanwing Saavedra"
var sexo="M"
var Curso= "BSI" // “BSI”, “EE”, “EM”, “EC” ou “AQ”
var coe=8

console.log("Codigo Aluno: "+codigo)
console.log("Nome Aluno: "+Nome)

if(sexo="M")
{
    console.log("Sexo: Masculino")
}else{
    console.log("Sexo: Femenino")
}

var MostrarCurso="";

switch (Curso){
    case "BSI": MostrarCurso="Bacharelado em Sistemas de Informação"; break;
    case "EE" : MostrarCurso="“Engenharia Elétrica"; break;
    case "EM" : MostrarCurso="Engenharia Mecânica"; break;
    case "EC" : MostrarCurso="Engenharia Civil"; break;
    case "AQ" : MostrarCurso="Arquitetura"; break;
    default :  MostrarCurso="No hay curso"; break;
}

console.log("Curso: "+MostrarCurso)


switch (coe){
    case 10: console.log("Coeficiente: Excelente"); break;
    case 9: console.log("Coeficiente: Excelente"); break;
    case 8: console.log("Coeficiente: Bom"); break;
    case 7: console.log("Coeficiente: Bom"); break;
    case 6: console.log("Coeficiente: Regular"); break;
    case 5: console.log("Coeficiente: Regular"); break;
    case 4: console.log("Coeficiente: Necessita melhoras"); break;
    case 3: console.log("Coeficiente: Necessita melhoras"); break;
    case 2: console.log("Coeficiente: Preocupante"); break;
    case 1: console.log("Coeficiente: Preocupante"); break;
    case 0: console.log("Coeficiente: Preocupante"); break;
    default :  console.log("Coeficiente: Não ha Coeficiente"); break;
}

