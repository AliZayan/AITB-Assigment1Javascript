function checkGreatest(x,y,z)
{
    
    if(x>y && x>z)
    {
        
        alert(x+" is the greatest");
    }
    else if(y>x && y>z)
    {
        alert(y+" is the greatest");
    }
    else if(z>x && z>y)
    {
        alert(z+" is the greatest");
    }

}

var x = window.prompt("Enter first num : ");
var y = window.prompt("Enter second num : ");
var z = window.prompt("Enter third num : ");