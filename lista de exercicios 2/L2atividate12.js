var patas=2
var Plumas=0
var tierra=1
var agua=1
var aletas=1
var aire=0
var pelos=0
var carnivoro=1

if (patas>=2){
    if(Penas==1)
    {
        if((terra==1)&&(ar==1)){
            if(carnivoro==1)
            {
                console.log("Aguia")
            }
        }else{
            if((terra==1)&&(ar==0))
            {
                console.log("galinha,patos,avestruz")
            }
            else{
                if((tierra==0)&&(aire==1))
                {
                    console.log("morcego")
                }
            }
        }
    }else{
        if((tierra==1)&&(aire==0)){
            if ((carnivoro==1)&&(aletas==0)){
                console.log("leao,gato,tigre")
            }else{
                if ((carnivoro==1)&&(aletas==1)){
                    console.log("pinguim")
                }else{
                    console.log("ornitorrinco")
                }
            }
        }
    }
}else{
    if((tierra==0)&&(aire==0)&&(agua==1))
    {
      console.log("ballena,tubarão, lambari, enguia e arraia")  
    }
}