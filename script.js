//Reverse pattern 
rows=5;
count=25;
for(i=1;i<=rows;i++)
{
    s=" ";
    for(j=1;j<=rows;j++)
    {
        if(count<10)
        {
            s=s+"0"+count+" ";
            count--;
        }
        else
        {
        s=s+count+" ";
        count--;
    }
    }
    console.log(s)
}
//Left angle traiangle 
rows=5;
count=1;
for(i=1;i<=rows;i++)
{
    s=" ";
    for(j=1;j<=i;j++)
    {
        if(count<10)
        {
            s=s+"0"+count+" ";
            count++;
        }
        else
        {
        s=s+count+" ";
        count++;
        }
    }
    console.log(s)
}
//Return stars in the diagonal 
rows=5;
for(i=1;i<=rows;i++)
{
    s="";
    for(j=1;j<=rows;j++)
    {
        if(i==j)
        {
            s=s+"*"+" ";
        }
        else
        {
        s=s+j+" ";
        }
    }
    console.log(s)
}
