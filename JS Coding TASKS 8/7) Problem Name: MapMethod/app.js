 let agesArray = [12,45,56,4];

//to print all of the values and their indices.

 agesArray.map((currElement, index) => {
   console.log("The current iteration is: " + index);
   console.log("The current element is: " + currElement);
   console.log("\n");
   return currElement;
 });

//to create an new array using map with *10
 const agesArray2 = agesArray.map(x => x * 10);
