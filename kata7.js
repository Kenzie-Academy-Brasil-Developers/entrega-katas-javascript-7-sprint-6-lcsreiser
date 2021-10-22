const array1 = [1, 2, 3, 4, 5, 6, 7]

let array2 = ['cachorro', 'gato', 'galo']

let array3 = ['peixe', 'tubarão', 'ornitorrinco']

function mostrarValores(numero, i){
    console.log(`${i}:[${numero}]`)
}

function somar(num) {
    return num + num
}

function mult(acc, curr){
    return acc * curr
}

function numMaior (num){
    return num > 4
}

// ----------------------------------------------------------------------------------


// FOREACH
function newForEach(array, callback){
    for(let i = 0; i < array.length; i++){
        callback(array[i], i)
    }
}
newForEach(array1, mostrarValores)




// MAP
function newMap(array, callback){
    let newArray = []
    for(let i = 0; i < array.length; i++){
        let resultado = callback(array[i], i, array)
        newArray.push(resultado)
    }
    return newArray
}
newMap(array1, somar)




// FILTER
function newFilter(array, callback){
    let newArray = []
    for(let i = 0; i < array.length; i++){
        if(callback(array[i], i, array)){
            newArray.push(array[i])
        }
    }
    return newArray
}
newFilter(array1, numMaior)




// FIND
function newFind(array, callback){
    for(let i = 0; i < array.length; i++){
        if(callback(array[i], i, array)){
            return array[i]
        }
    }
}
newFind(array1, numMaior)




// FINDINDEX
function newFindIndex(array, callback){
    for(let i = 0; i < array.length; i++){
        if(callback(array[i], i, array)){
            return i
        }
    }
    return -1
}
newFindIndex(array1, numMaior)




// REDUCE
function newReduce(array, callback, valorInicial = 1){
    let resultado = valorInicial
    for(let i = 0; i < array.length; i++){
        resultado = callback(resultado, array[i])
    }
    return resultado
}
newReduce(array1, mult, )




// SOME
function newSome(array, callback){
    let resultado = false
    for(let i = 0; i < array.length; i++){
        if(callback(array[i], i, array)){
            resultado = true
        }
    }
    return resultado
}
newSome(array1, numMaior)




// EVERY
function newEvery(array, callback){
    let resultado = true
    for(let i = 0; i < array.length; i++){
        if(!callback(array[i], i, array)){
            return false
        }
    }
    return resultado
}
newEvery(array1, numMaior)




// FILL
function newFill(array, valor, comeco = 0, fim = array.length){
    if(comeco < 0){
        comeco += array.length
    }
    if(fim < 0){
        fim += array.length
    }

    for(let i = comeco; i < fim; i++){
        array[i] = valor
    }
    return array
}
newFill(array1, 9, 3)




// INCLUDES
function newIncludes(array, elemento, comeco = 0){
    let resultado = false
    for(let i = comeco; i < array.length; i++){
        if(array[i] === elemento){
            return true
        }
    }
    return resultado
}
newIncludes(array1, 5, 0)




// INDEXOF
function newIndexOf(array, elemento, comeco = 0){
    if(comeco < 0){
        comeco += array.length

        for(let i = comeco; i < array.length; i++){
            if(array[i] === elemento){
                return i
            }
        }
    }
    
    for(let i = comeco; i < array.length; i++){
        if(array[i] === elemento){
            return i
        }
    }

    return -1
}
newIndexOf(array1, 5)



// CONCAT
function newConcat(...elementos){
    let resultado = []
    for(let i = 0; i < elementos.length; i++){
        let concat = elementos[i]
        for(let j = 0; j < concat.length; j++){
            resultado.push(concat[j])
        }
    }
    return resultado
}
newConcat(array2, array3)




// JOIN
function newJoin(array, separador){
    let resultado = ''
    for(let i = 0; i < array.length; i++){
        if(array[i] !== array[array.length-1]){
            array[i] += separador
        }
        resultado += array[i]
    }
    return resultado
}
newJoin(array2, ' @ ')