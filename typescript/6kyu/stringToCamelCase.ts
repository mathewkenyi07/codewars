export function toCamelCase(str:string):string {
    let array = str.split("")
    let results = [];

    for (let i = 0; i <= array.length - 1; i++) {

        if (array[i] === "-" || array[i] === "_") {
            results.push(array[i+1].toUpperCase())
            i++;
        }

        else {
            results.push(array[i])
        }
    }

    return results.join("");
}
console.log(toCamelCase("the_stealth_warrior"));
