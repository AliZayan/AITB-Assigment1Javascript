function check(num1,num2)
{
    if(num1>=0 && num2<0)
    {
        alert("number 1 positive and number 2 negative");
    }
    else if(num1<0 && num2>=0)
    {
        alert("number 1 negative and number 2 positive");
    }
    else
    {
        alert("none are positive or negative");
    }

}
var num1 = window.prompt("Enter num 1 : ");
var num2 = window.prompt("Enter num 2 : ");
check(num1,num2);
