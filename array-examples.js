// code to learn/illustrate the various array methods
// Feb 2021

let arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
let arr2 = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];

// concat
console.log("concat",arr1.concat(arr2));

// copyWithin
console.log("copywithin",arr1.copyWithin(0,5,8)); // copies positions 5-6 to position 0
arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

for ([k,v] of arr2.entries()){
  console.log("entries",k,v)
}

console.log ("every", arr1.every(c => c < 99? true: false))

console.log("fill", arr1.fill('X',4,8))
arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

console.log("filter",arr2.filter(c => c < 'e'))

console.log("find", arr1.find(c => c > 4))

console.log("findIndex", arr1.findIndex(c => c > 4))

arr2.forEach((c,i) => console.log(`At index ${i}, there is ${c}`))

console.log ("from - a string", Array.from("abcde", c=> c + 'X'))

console.log ("includes", arr2.includes('c'))

console.log ("indexOf", arr2.indexOf('d'))

console.log ("isArray", Array.isArray(arr1), Array.isArray(99), Array.isArray({a:1}))

console.log("join",arr1.concat(arr2).join(' '))

console.log ("lastIndexOf", arr2.lastIndexOf('d'))

console.log("map", arr2.map((c,i) => c + '/' + i.toString()))

console.log ("pop",arr1.pop())

console.log ("push",arr1.push(12))

console.log ("reduce add/mult/greatest/least",arr1.reduce((tot,c) => tot+c,0), arr1.reduce((tot,c) => tot*c,1), arr1.reduce((tot,c) => c > tot? c:tot,0), arr1.reduce((tot,c) => c < tot? c:tot,0))

console.log("reduceRight", arr2.reduceRight((tot,c) => c < tot? c:tot,'z'))

console.log("reverse",arr2.reverse())

console.log("shift", arr1.shift())

console.log("slice",arr1.slice(2,4))

console.log("some", arr1.some(c => c > 5))

console.log("sort", arr1.sort((a,b) => b-a))
console.log("sort", arr1.sort((a,b) => a-b))

console.log("splice",arr1.splice(1,2,'added 1', 'added 2'), arr1)
arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

console.log("toString",arr1.toString())

console.log("unshift",arr1.unshift(0), arr1)