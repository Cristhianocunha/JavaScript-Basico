const listContainer = document.querySelector('[data-list]')
const newListForm = document.querySelector('[data-new-list-form]')
const newListInput = document.querySelector('[data-new-list-input]');

let lists = ['html', 'js', 'css']

newListForm.addEventListener('submit', function(e) {
    e.preventDefault()
    const listName = newListInput.Value 
    if (listName === null || listName === '') return
    const list = createList(listName)
    newListInput.Value = null
    list.push(list)
    render()
})

function render()
    lists.forEach(function(list){
        const item = document.createElement('li')
        item.classList.add('item')
        item.innerText = list
        toDoContainer.appendChild(item)

    })

    