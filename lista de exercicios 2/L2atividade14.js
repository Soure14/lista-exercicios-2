var a=10
var b=15
var c=9
var z=" Orden Desc: "


if ((a>b)&&(a>c))
{
    z=z+a
}
else{
    if((b>a)&&(b>c))
    {
        z=z+b
    }
    else{
        if((c>a)&&(c>b))
        {
            z=z+c
        }       
    }
}

if ( ((a<b)&&(a>c)) || ((a<c)&&(a>b)) )
{
    z=z+","+a
}
else{
    if( ((b<a)&&(b>c)) || ((b<c)&&(b>a)) )
    {
        z=z+","+b
    }
    else{
        if( ((c<b)&&(c>a)) || ((c<a)&&(c>b)) )
        {
            z=z+","+c
        }       
    }
}

if ((a<b)&&(a<c))
{
    z=z+a
}
else{
    if((b<a)&&(b<c))
    {
        z=z+","+b
    }
    else{
        if((c<a)&&(c<b))
        {
            z=z+","+c
        }       
    }
}





console.log(z)