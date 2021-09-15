function printAasterisks(){
    for(var i=0;i<10;i++)
    {
        console.log("*");
        var s = "";
        for(var j=0;j<=i;j++)
        {
           console.log("*".repeat(j))
            
        }
        console.log();
    }

}
printAasterisks();