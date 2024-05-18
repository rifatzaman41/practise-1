var num=prompt("Enter year:");
if(num%400==0)
    {
        console.log("Leap year");
    }
    else if(num%4==0 && num%100!=0)
        {
            console.log("Leap year");
        }
        else{
            console.log("Not Leap year");
        }