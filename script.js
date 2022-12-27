
const handlePhone = (event) => {
let input = event.target
input.value = phoneMask(input.value)
}

const phoneMask = (value) => {
if (!value) return ""
value = value.replace(/\D/g,'')
value = value.replace(/(\d{2})(\d)/,"($1) $2")
value = value.replace(/(\d)(\d{4})$/,"$1-$2")
return value
}

  function fMasc(objeto,mascara) {
obj=objeto
masc=mascara
setTimeout("fMascEx()",1)
}

  function fMascEx() {
obj.value=masc(obj.value)
}

   function mCPF(cpf){
cpf=cpf.replace(/\D/g,"")
cpf=cpf.replace(/(\d{3})(\d)/,"$1.$2")
cpf=cpf.replace(/(\d{3})(\d)/,"$1.$2")
cpf=cpf.replace(/(\d{3})(\d{1,2})$/,"$1-$2")
return cpf
}

const plusBtn = document.querySelector(".fa-plus");
let companyAdded = false
let msg = null

plusBtn.addEventListener("click", e => {
  companyAdded = true
  let total = document.querySelectorAll(".companies-container");
  if (total.length === 3) return
  e.target.parentElement.insertAdjacentHTML('afterend', `<div class="companies-container">
    <div class="company">
        <label for="company">Empresa</label>
        <input required type="text" id="company" name="Empresa" class="default-input">
    </div>
    <div class="car">
        <label for="cargo">Cargo ocupado</label>
        <input required type="text" id="cargo" name="Cargo" class="default-input">
    </div>
  </div>`
  )
  if (msg !== null) {
    msg.remove()
  }
})

const formEl = document.querySelector("#form");
const inputEl = document.querySelector("#inputfile")

formEl.addEventListener("submit", (e)=> {
  e.preventDefault()
  if (companyAdded === false) {
    msg = document.createElement("label")
    
    msg.style.color = 'red'
    msg.style.fontWeight = '500'
    msg.textContent = 'Você precisa adicionar ao menos uma empresa.'

    plusBtn.parentElement.insertAdjacentElement('beforebegin', msg)
  }
})

const correctIcon = document.querySelector(".correct-icon")

function displayIcon() {
  correctIcon.style.display = 'block'
}