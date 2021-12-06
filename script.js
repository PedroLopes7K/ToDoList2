let tarefas = document.getElementById('tarefas')
let input = document.getElementById('Input')
let dados = JSON.parse(localStorage.getItem('nomeTarefa'))

const btnADD = document.querySelector('button.add')
btnADD.addEventListener('click', verify)

function verify() {
  if (input.value == '') {
    alert('insira sua tarefa')
  } else {
    CriarTarefa(input.value)
  }
}

function CriarTarefa(descricaoTarefa) {
  const botao = document.createElement('button')
  botao.innerText = 'delete'
  botao.classList.add('delete')
  botao.addEventListener('click', deleteItem)
  const ListItemElement = document.createElement('li')
  ListItemElement.innerText = descricaoTarefa
  ListItemElement.appendChild(botao)

  tarefas.appendChild(ListItemElement)

  //LOCALSTORAGE
  if (dados == null) {
    localStorage.setItem('nomeTarefa', '[]')
    dados = []
  }

  let regTarefa = {
    tarefa: input.value
  }
  dados.push(regTarefa)
  localStorage.setItem('nomeTarefa', JSON.stringify(dados))
  input.value = ''
}

// function CreatToDo(x) {
//   // ADD TAREFA
//   let listItem = `<li>${x} <button class="delete">Delete</button></li>`
//   tarefas.insertAdjacentHTML('beforeend', listItem)

//   //LOCALSTORAGR
//   if (dados == null) {
//     localStorage.setItem('nomeTarefa', '[]')
//     dados = []
//   }

//   let regTarefa = {
//     tarefa: input.value
//   }
//   dados.push(regTarefa)
//   localStorage.setItem('nomeTarefa', JSON.stringify(dados))
//   input.value = ''
// }

function deleteItem(eventClick) {
  eventClick.target.parentElement.remove()
}

// BTN DELETE
// let btnDelete = document.querySelectorAll('.delete')

// btnDelete.addEventListener('click', () => {
//   alert('ok')
// })

// for (const del of btnDelete) {
//   del.addEventListener('click', () => {
//     alert('ok')
//   })
// }

// function AddTarefa() {
//   let Tarefa = document.createTextNode(input.value)
//   let CreatList = document.createElement('li')

//   CreatList.appendChild(Tarefa)
//   tarefas.appendChild(CreatList)

//
// }
