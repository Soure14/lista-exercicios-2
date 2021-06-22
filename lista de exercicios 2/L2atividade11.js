var nota1=70
var nota2= 80
var nota3=50
var nota4=90
var peso_nota1=25
var peso_nota2=25
var peso_nota3=25
var peso_nota4=25
var peso_promedio= (peso_nota1+ peso_nota2+ peso_nota3+ peso_nota4)/100
var media= ( (nota1*(peso_nota1/100))+ (nota2*(peso_nota2/100))+ (nota3*(peso_nota3/100))+ (nota4*(peso_nota4/100)))
if(media>=60){
    console.log("esse aluno passou: " + media)
}
else{
    if(media<60){ 
        console.log("esse aluno foi reprovado : " + media)
    }    
    else{
    console.log("reprovado com quebra de pré-requisito")
    }
}
