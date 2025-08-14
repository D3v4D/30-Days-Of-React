function median(arr){
    if(arr.length %2 == 1){
        return arr[arr.length/2-0.5]
    }else 
        return (arr[arr.length/2-1] + arr[arr.length/2])/2
}

function average(arr){
    let avg = 0
    arr.forEach(element => {
        avg+= element
    });
    return avg/arr.length
}

const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]

ages.sort()

console.log("min: " + ages[0])
console.log("max: " + ages[ages.length-1])
console.log("median: " + median(ages))
console.log("average: " + average(ages))

console.log("range: " + (ages[ages.length-1] - ages[0]))

const {countries} = import ("./countries")

