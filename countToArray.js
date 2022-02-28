
/*function countToArray(firstNumber, lastNumber){
    //array-nél használjunk többes számot a változó nevében
    let numbers = []

    for (let i = firstNumber; i<lastNumber; i++){
        //numbers.push(i.toString())
        //numbers.push("" + i)
        //numbers.push(String(i))
        //numbers.push(`${i}`)

        let stringNumber = i.toString()
        numbers.push(stringNumber) /* ez is jó, csak felesleges új változót létrehozni */
    /*}
    return numbers;
}

console.log(countToArray(10,30))*/
/* 
const countToArray = (firstNumber, lastNumber) => {

    const numbers = []

    for (let i = firstNumber; i<lastNumber; i++){
        numbers.push(i.toString())
    }
    return numbers;
}
console.log(countToArray(10,20));

 */

const countToArray = (firstNumber, lastNumber) => Array.from(Array(lastNumber - firstNumber)).map((item, i) => `${firstNumber + i}`);

console.log(countToArray(10,30));