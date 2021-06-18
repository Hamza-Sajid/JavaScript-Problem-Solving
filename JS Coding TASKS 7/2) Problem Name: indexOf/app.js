var arr=["Cricket","Hockey","Badmintan","Swiming","Tenis"];

for(var i=0; i<arr.length; i++)
{
  if("Cricket"===arr[i])
  {
    console.log("Value is located at index"+arr.indexOf('Cricket'));
    break;
  }
  else {
    console.log("Not Found");
  }
}
