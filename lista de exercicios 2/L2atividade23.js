var saldo_medio= 1500
var codigo=0

if ( (saldo_medio>=0) && (saldo_medio<=200) ){codigo=101}
if ( (saldo_medio>=201) && (saldo_medio<=400) ){codigo=102}
if ( (saldo_medio>=401) && (saldo_medio<=600) ){codigo=103}
if (  saldo_medio>=600) {codigo=104}


switch (codigo) {

    case 101:
        console.log("O cargo é de Gerente");
        novoSalario = 0;
        break;

    case 102:
        console.log("O cargo é de Engenheiro");
        novoSalario = saldo_medio + ((saldo_medio * 20) / 100);
        break;

    case 103:
        console.log("O cargo é de Técnico");
        novoSalario = saldo_medio + ((saldo_medio * 30) / 100);
        break;

    case 104:
        console.log("O cargo é de Técnico");
        novoSalario = saldo_medio + ((saldo_medio * 40) / 100);
        break;    

    default:
        console.log("O cargo é outro");
        novoSalario = 0;

}


("O salário antigo é de " + saldo_medio);
console.log("O novo salário é de " + novoSalario);
