// 1) Implemente um método que crie um novo array baseado nos valores passados.
// Entradas do método (3,a), Resultado do método: ['a', 'a', 'a']

function arrayValores(tamanho, conteudo) {
  const newArray = Array(tamanho).fill(conteudo)

  console.log(newArray)
}

arrayValores(3, "a")

// 2) Implemente um método que inverta um array, não utilize métodos nativos do array.
// Entrada do método ([1,2,3,4]), Resultado do método: [4,3,2,1]

function inverterArray(array) {
  let newArray = []

  for (i = 0; i < array.length; i++) {
    newArray[i] = array[array.length - i - 1]
  }

  console.log(newArray)
}

inverterArray([1, 2, 3, 4])


// 3) Implemente um método que limpe os itens desnecessários de um array (false, undefined, strings vazias, zero, null).
// Entrada do método ([1,2,'', undefined]), Resultado do método: [1,2]

function limparArray(array) {
  let newArray = []

  for (let i = 0; i < array.length; i++) {
    if (array[i]) {
      newArray.push(array[i])
    }
  }

  console.log(newArray)
}

limparArray([1, 2, '', undefined, null, , , false, 0])

// 4) Implemente um método que a partir de um array de arrays, converta em um objeto com chave e valor.
// Entrada do método ([["c",2],["d",4]]), Resultado do métdodo: {c:2, d:4}

function arrayArrayToObj(array) {
  const newObject = Object.fromEntries(array)

  console.log(newObject)
}

arrayArrayToObj([["c",2],["d",4]])

// 5) Implemente um método que retorne um array,
// sem os itens passados por parâmetro depois do array de entrada.
// Entrada do método([5, 4, 3, 2, 5], 5, 3), Resultado do método: [4, 2]

function arrParams(array, ...rest) {
  const arrRest = [...rest]

  const newArray = array.filter((item) => {
    if(arrRest.indexOf(item) == -1) return item;
  });

  console.log(newArray)
}

arrParams([5, 4, 3, 2, 5], 5, 3)

// 6) Implemente um método que retorne um array, sem valores duplicados.
// Entrada do método ([1,2,3,3,2,4,5,4,7,3]), Resultado do método: [1,2,3,4,5,7]

function valoresDuplicados(array) {
  const newArr = array.filter((item, index) => array.indexOf(item) === index);
  console.log(newArr)
}

valoresDuplicados([1, 2, 3, 3, 2, 4, 5, 4, 7, 3])

// 7) Implemente um método que compare a igualdade de dois arrays e retorne um valor booleano.
// Entrada do método ([1,2,3,4],[1,2,3,4]), Resultado do método: true

function arraysIguais(arr1, arr2) {
  if (arr1.length != arr2.length) {
    console.log(false)
    console.log("length")
    return false
  }

  const temNa1 = arr1.filter((item) => {
      if(arr2.indexOf(item) == -1)
          return item;
  });

  const temNa2 = arr2.filter((item) => {
      if(arr1.indexOf(item) == -1)
          return item;
  });

  const diferencas = temNa1.concat(temNa2);

  if (diferencas.length > 0) {
    console.log(false)
    return false
  }

  console.log(true)
  return true

}

arraysIguais([1, 2, 3, 4], [1, 2, 3, 4])

// 8) Implemente um método que remova os aninhamentos de um array de arrays para um array unico.
// Entrada do método ([1, 2, [3], [4, 5]]), Resultado do método: [1, 2, 3, 4, 5]

function removerAninhamentos(array) {
  console.log(array.flat())
}

removerAninhamentos([1, 2, [3], [4, 5]])

// 9) Implemente um método divida um array por uma quantidade passada por parâmetro.
// Entrada do método ([1, 2, 3, 4, 5], 2), Resultado do método: [[1, 2], [3, 4], [5]]

function divideArray(array, divisor) {
  let newArray = []

  for (let i = 0; i < array.length; i += divisor) {
    newArray.push(array.slice(i, i + divisor));
  }

  console.log(newArray);
}

divideArray([1, 2, 3, 4, 5], 2)

// 10) Implemente um método que encontre os valores comuns entre dois arrays.
// Entrada do método ([6, 8], [8, 9]), Resultado do método: [8]

function valorComum(arr1, arr2) {
  let newArray = []

  for (let i = 0; i < arr1.length; i++) {
    if (arr1.includes(arr2[i])) {
      newArray.push(arr2[i])
    }
  }

  console.log(newArray)
}

valorComum([6, 8], [8, 9])
