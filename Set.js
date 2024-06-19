// não aceita repetição/ não indexada
const times = new Set()
times.add('Coritiba')
times.add('Vasco')
console.log(times)
times.add('Gremio')
console.log(times)

console.log(times.size)
console.log(times.has('Coritiba'))