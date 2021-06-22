var salario= 1500
var codigo=102


switch (codigo) {

    case 101:
        console.log("O cargo é de Gerente");
        novoSalario = salario + ((salario * 10) / 100);
        break;

    case 102:
        console.log("O cargo é de Engenheiro");
        novoSalario = salario + ((salario * 20) / 100);
        break;

    case 103:
        console.log("O cargo é de Técnico");
        novoSalario = salario + ((salario * 30) / 100);
        break;

    default:
        console.log("O cargo é outro");
        novoSalario = salario + ((salario * 40) / 100);

}

diferencaSalario = novoSalario - salario;
("O salário antigo é de " + salario);
console.log("O novo salário é de " + novoSalario);
console.log("A diferença do salário é " + diferencaSalario + " Reais");

