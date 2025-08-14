
const arr = [];

const arr2 = [1, 2, 3, 4, 5];

console.log(arr2.length);

console.log(arr2[0] + " " + arr2[arr2.length/2-0.5]+ " " + arr2[arr2.length-1]);

const mixedDataTypes = [1, "alma", 5.0, "kutya", "fasz"];

console.log("Size: " + mixedDataTypes.length)

const itComp = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"]

console.log(itComp)

console.log(itComp.length)

console.log(itComp[0] + " " + itComp[itComp.length/2-0.5]+ " " + itComp[itComp.length-1]);
itComp.forEach( x => console.log(x.toUpperCase()))

console.log(itComp.join(', '))

console.log(itComp.includes("asdf"))
console.log(itComp.includes("Amazon"))
console.log(itComp.join(', ') + " are big IT companies")

for(let i = 0; i< itComp.length; i++){
    if(itComp[i].indexOf('o') != itComp[i].lastIndexOf('o'))
        itComp.splice(i--, 1);

}

itComp.sort()
itComp.reverse();
console.log(itComp)

console.log(itComp.slice(0, 3));
console.log(itComp.slice(itComp.length-3, itComp.length));

