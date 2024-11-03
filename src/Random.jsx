function choice(arr){
    console.log(`ARRAY: ${arr}`)
    let randomIdx=  Math.floor(Math.random()* arr.length)
    return arr[randomIdx]
}

export {choice}

