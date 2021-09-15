/*
14- calculate the factorial of a given number
Test Data : 
Input the number : 5
Expected Output :
The Factorial of 5 is: 120 
*/
function factorial(x)
{
    //5! = 5x4x3x2x1
    var fact=x;
    for(var i = x-1;i>0;i--)
    {
        x = x*i;
    }
    alert("Factorial of " + fact + "! is = "+ x);
}
var num = window.prompt("Enter number : ");
factorial(num);
