//Arrow function 
const soma = (a,b) => a + b
console.log(soma(1,2))

const soma2 = (x,y) => {
    return x + y
}
console.log(soma2(10,5))

// Arrow function (this) 
const lexico1 = () => console.log(this === exports)
const lexico2 = lexico1.bind({})
lexico1()
lexico2()

// parametros default
function log(texto = 'Node'){
    console.log(texto)
}

log()
log('sou mais forte')

// operador rest 
function total(...numeros) {
    let total = 0
    numeros.forEach(n => total += n)
    return total
}
console.log(total(3,3,3))