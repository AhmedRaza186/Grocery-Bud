
let body = document.querySelector('body')
let bodyStyle = body.style
bodyStyle.background = '#eef4fa'
bodyStyle.height = '100vh'
bodyStyle.width = '100vw'
bodyStyle.overflowX = 'hidden'
bodyStyle.overflowY = 'auto'
bodyStyle.display = 'flex'
bodyStyle.flexDirection = 'column'
bodyStyle.alignItems = 'center'

let html = body.innerHTML = `
<div class="container">
<h1>Grocery Bud</h1>
<div class="userInput">
<input type="text">
<button>Submit</button>
</div>
<div class="clear"><button>Clear Items</button></div>
</div>`

let editP = ''

let mainBtn = document.querySelector('.userInput button')


mainBtn.addEventListener('click', () => {
    
    if(mainBtn.innerText === 'Edit'){
        let input = document.querySelector('input').value
        editP.textContent = input 
        mainBtn.innerText = 'Submit'
        document.querySelector('input').value = ''
        editP = null
        return
    }
    
    getInput()
})


function getInput(){
    let container = document.querySelector('.container')
    let userInput = document.querySelector('input').value

    if(userInput == ''){
        document.querySelector('input').placeholder = 'Please write something'
        return
    }

    let task = document.createElement('div')
    task.className = 'task'
    task.innerHTML = `
        <p>${userInput}</p>
        <div class="btns">
            <button class="edit" style="color:#00f715;"><i class="fa-solid fa-pen-to-square"></i></button>
            <button class="del" style="color:#e45e5f;"><i class="fa-solid fa-trash"></i></button>
        </div>
    `

    let clear = document.querySelector('.clear')
    container.insertBefore(task, clear)
    document.querySelector('input').value = ''
    
    
    task.querySelector('.edit').addEventListener('click', e => {
        let p = task.querySelector('p')
        editP = p
        document.querySelector('input').value = p.textContent
        mainBtn.innerText = 'Edit'
    })
    
    task.querySelector('.del').addEventListener('click', e => {
        task.remove()
    })
    
    clear.querySelector('button').addEventListener('click',e => {
        document.querySelectorAll('.task').forEach(task => {
            task.remove()
        })

    })
}




