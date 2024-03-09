const form = document.getElementById('form')
console.log(form)
form.addEventListener('submit',(e)=>{
    e.preventDefault()
    const inputVal = document.getElementById('inputContainer').value
    console.log(inputVal)
    const items = document.getElementById('items')
    console.log(items)
    const liElement = document.createElement('li')
    liElement.className ="list-group-item"
    items.appendChild(liElement)
    liElement.appendChild(document.createTextNode(inputVal))
    let btn =  document.createElement('button')
    btn.className = "btn btn-danger float-end delete"
    liElement.appendChild(btn)
    btn.appendChild(document.createTextNode("X"))


})
const item = document.getElementById('items')
item.addEventListener('click',(e)=>{
    console.log(e.target.classList)
    if(e.target.classList.contains('delete')){
        e.target.textContent = ""
        
       
        
        item.removeChild(e.target.parentElement)

        
        console.log("parent",e.target)

        
        const newText = e.target.parentElement.textContent

        
const liElement = document.createElement('li')

liElement.className ="list-group-item"


item.appendChild(liElement)
let strEle = document.createElement('s')


strEle.appendChild(document.createTextNode(newText))
liElement.appendChild(strEle)

    }
  
    
})