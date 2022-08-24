const array1 = [3, 10, 7, 15, 20]
const array2 = [5, 12, 15, 30, 2]
// 5, 12, 15, 30, 2

function maiorElemento() {

    const maxValue1 = array1.reduce(function(prev, current) { 
        return prev > current ? prev : current; 
    });
    const maxValue2 = array2.reduce(function(prev, current) { 
        return prev > current ? prev : current; 
    });

    document.querySelector("#MaiorElemento").innerHTML = `
      <p>Os números do array 1 são: [ ${array1} ] e do array 2: [ ${array2} ]</p>
      <p>O maior valor do array é: ${maxValue1} e do array 2 é: ${maxValue2}</p>
    `
}

function menorElemento() {
    const minValue1 = array1.reduce(function(prev, current) { 
        return prev < current ? prev : current; 
    });
    const minValue2 = array2.reduce(function(prev, current) { 
        return prev < current ? prev : current; 
    });

    document.querySelector("#MenorElemento").innerHTML = `
      <p>Os números do array 1 são: [ ${array1} ]  e do array 2: [ ${array2} ]</p>
      <p>O menor valor do array é: ${minValue1}  e do array 2 é: ${minValue2}</p>
    `
}

function mediaArray() {
    const tamanhoArray1 = array1.length
    const tamanhoArray2 = array2.length
    
    let sumArray1 = array1.reduce((acc, item) => {
      return acc + item
    }, 0)
    
    let sumArray2 = array2.reduce((acc, item) => {
      return acc + item
    }, 0)
    

    let medArray1 = sumArray1 / tamanhoArray1
    let medArray2 = sumArray2 / tamanhoArray2

    document.querySelector("#MediaDoArray").innerHTML = `
      <p>Os números do array 1 são: [ ${array1} ] e do array 2: [ ${array2} ]</p>
      <p>A soma do array 1 é: ${sumArray1} e do array 2 é: ${sumArray2}</p>
      <p>A média do array é: ${medArray1} e do array 2 é: ${medArray2}</p>
    `
}

function difArray() {
  Array.prototype.equals = function(getArray) {
    if(this.length != getArray.length)
      return 'Não';
    
    for (var i = 0; i < getArray.length; i++) {
      if (this[i] instanceof Array && getArray[i] instanceof Array){
        if(!this[i].equals(getArray[i])) return false;
      } else if (this[i] != getArray[i]) {
        return 'Não';
      }
    }
    return 'Sim'
  }

  console.log("comparando array 1 e array 2", array1.equals(array2));

  document.querySelector("#Diferenca").innerHTML = `
      <p>Os números do array 1 são: [ ${array1} ]</p>
      <p>Os números do array 2 são: [ ${array2} ]</p>
      <p>Comparando Array 1 com Array 2 eles são iguais: ${array1.equals(array2)}</p>
    `
}