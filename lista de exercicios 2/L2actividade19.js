var Valor=1000
var parcelas=16
if (parcelas<=12){
    console.log(Valor)
}else{
    if((parcelas>12)&&(parcelas<=24))
    {
        Valor=Valor+(Valor*0.10)
    }
    else{
        if((parcelas>24)&&(parcelas<=36))
        {
            Valor=Valor+(Valor*0.15)
        }        
    }
}

console.log(Valor)

