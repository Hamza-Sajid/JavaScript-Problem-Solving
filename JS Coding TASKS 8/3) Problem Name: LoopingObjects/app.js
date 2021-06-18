var cities=
{
  first : "Krachi",
  second: "Lahore",
  third : " Islamabad",
  fourth : "Quetta"
};

//for loop to print all the values

for (var key in cities) {
    if (cities.hasOwnProperty(key)) {
        console.log(key + " -> " + cities[key]);
    }
}
