const form = document.querySelector('#form-habits')
const nlwSetup = new NLWSetup(form)
const button = document.querySelector('header button')

button.addEventListener('click',add)
form.addEventListener('change',save) //mudança

function add() {
  const today = new Date().toLocaleDateString('pt-br').slice(0,-5)
  const dayExists = nlwSetup.dayExists(today)

  if (dayExists){
    alert("Dia já existe")
    return
  }

  alert("Adicionado com sucesso")
  nlwSetup.addDay(today)
}

//localStorange objeto que guarda em memória do broser informações , transformando em String
function save(){
  localStorage.setItem('NLWSetup@habits', JSON.stringify(nlwSetup.data))
}

// conversão em objeto 

const data = JSON.parse(localStorage.getItem("NLWSetup@habits")) || {}
nlwSetup.setData(data)
nlwSetup.load()