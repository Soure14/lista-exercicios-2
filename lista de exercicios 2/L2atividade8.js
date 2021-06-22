var x=2
var y=2
var z=2

if( ((x==y)&&(x!=z)) || ((z==y)&&(x!=z)) || ((x==z)&&(y!=z)) ){
    console.log("é um isoceles")
}else{
    if ((x==y)&&(y==z)) {
        console.log("é um equilatero")
    }else{
        if ((x!=y)&&(y!=z)) {
            console.log("é um escaleno")
        }else{
            console.log("não é triangulo")
        }
    }
}
