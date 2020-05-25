//selcetors
const todoInput = document.querySelector('.todo-input')
const todoBtn = document.querySelector('.todo-btn')
const todoList = document.querySelector('.todo-list')

//listeners
todoBtn.addEventListener('click', event => {
    event.preventDefault()
    addtask()
})

//fns
const addtask = () => {
    // list item 
    const taskDiv = document.createElement('div')
    taskDiv.classList.add('task')

    //list
    const list = document.createElement('li')
    list.classList.add('todo-item')
    list.innerText = 'hello'
    taskDiv.appendChild(list)

    //check

    const checkBtn = document.createElement('button')
    checkBtn.classList.add('check')
    checkBtn.innerHTML = '<i class="fas fa-check"></i>'
    taskDiv.appendChild(checkBtn)

    //trash
    const trashBtn = document.createElement('button')
    trashBtn.classList.add('trash')
    trashBtn.innerHTML = '<i class="fas fa-trash"></i>'
    taskDiv.appendChild(trashBtn)

    //adding to the html
    todoList.appendChild(taskDiv)
}