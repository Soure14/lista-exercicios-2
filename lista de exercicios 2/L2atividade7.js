var x=2
var y=50
var z=25
var x1=z*y
var y1=z*x
var z1=x*y
if(x1==x){
    console.log(x+" é multiplo de "+y+"-"+z)
}else{
    if(y1==y){
        console.log(y+" é multiplo de "+x+"-"+z)
    }else{
        if(z1==z){
            console.log(z+" é multiplo de "+y+"-"+x)
        }else{
            console.log("não existe multiplos")
        }
    }
}


