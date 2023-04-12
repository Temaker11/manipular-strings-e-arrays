// Manipulando Arrays  

  let techs = ["html", "css", "js"]
  console.log(techs)

  // adicionar um item no fim 
  techs.push("nodejs")
  console.log(techs)
  // adicionarno começo 
  techs.unshift("sql")
  console.log(techs)
  // remover do fim
  techs.pop()
  console.log(techs)
  // remover do começo
  techs.shift()
  console.log(techs)
  // pegar somente alguns elementos do array
  console.log(techs.slice(1,3))
  // remover 1 ou mais itens em qualquer  posição do array
  techs.splice(2, 1)
  console.log(techs)
  // encontrar a posição de um elemento no array
  let index = techs.indexOf('css')
  console.log(index)


  console.log(techs)



