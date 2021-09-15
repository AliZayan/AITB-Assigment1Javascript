function checkNum(x)
{
    if(x>0)
    {
        if(x%5 == 0 || x%8 == 0)
        {
            alert("TRUE");
        }
    }
    else
    {
        alert("FALSE");
    }    
}
var num = window.prompt("Enter a number : ");
checkNum(num);


