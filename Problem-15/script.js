//15- Create Simple Calculator (+ , - , * , /) 
function plus(n1,n2)
{
    alert("Sum = " + n1+n2);
}
function minus(n1,n2)
{
    
    alert("Sum = " + n1-n2);
}
function multiply(n1,n2)
{
    alert("Sum = " + n1*n2);
}
function division(n1,n2)
{
    alert("Sum = " + n1/n2);
}


do{
    alert("1 : plus"+
    "2 - minus"+
    "3 - Multiply"+
    "4 - division");
    var choice = window.prompt("Enter choice : ");
    var num1 = window.prompt("Enter first number : ");
    var num2 = window.prompt("Enter second number : ");
    
        if(choice==1)
        {
            plus(num1,num2);
        }
        else if(choice==2)
        {
            minus(num1,num2);

        }
        else if(choice==3)
        {
            multiply(num1,num2);
        }
        else if(choice==4)
        {
            division(num1,num2);
        }
        else
        {
            alert("incorrect number");
        }
    
    var key = window.prompt("for continue : 1 / get out : 0");
}while(key==1)
