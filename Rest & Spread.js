// operador ... rest(juntar) / spread(espalhar)
// usar rest com parametros da função

//usar spread com objeto
const funcionario = { nome: 'Gui', salario: 10000}
const clone = { ativo: true, ...funcionario}
console.log(clone)

//usar spread com array
const grupoA = ['Coritiba', 'Flamengo', 'Galo']
const grupoFinal = ['America', ...grupoA, 'Goias']
console.log(grupoFinal)
console.log(grupoA)