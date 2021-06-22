var escala= (0,1,2,3,4,5,6,7,8,9,10)
var nivel=11
if((nivel>=0) && (nivel<=3)){
console.log("o nivel é baixo")
} else{
    if((nivel>3) && (nivel<=6)){
        console.log("o nivel é medio")
        } else{
            if((nivel>6) && (nivel<=9)){
                console.log("o nivel é alto")
                } else{
                    if(nivel>9){
                        console.log("o nivel é Grave")
                        } else{
                            console.log("error")
                        }
                }
        }
}