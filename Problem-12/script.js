/*Problem-12
store elements in an array and print it.
Test Data:
Input 10 elements in the array:
element - 0 : 1
element - 1 : 1
element - 2 : 2 
*/
function arrayentry()
{
    const arr1 = [];
    for(var i=0;i<10;i++)
    {
        var num1 = window.prompt("element-" + i + " :");
        arr1.push(num1);
    }
}
arrayentry();