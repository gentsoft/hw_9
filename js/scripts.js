const workin = function(){
    let inputAll = document.querySelectorAll('.conteiner_toDoList input');
    console.log(inputAll);

    inputAll.forEach(function(element){
        element.addEventListener('input',function(){
            this.nextSibling.classList.toggle('conteiner_toDoList_cheiked')
    })
    })
}  

let clicButon = document.querySelector('.conteiner_buttun');
    clicButon.addEventListener('click', function(){
        let nameToDo = prompt('введите название задачи');
        if (nameToDo != null)
        {
            let toDoList = document.querySelector('.conteiner_toDoList');
            let input = document.createElement('input');
            let span = document.createElement('span');
            let br = document.createElement('br');
            toDoList.appendChild(input);
            toDoList.appendChild(span);
            toDoList.appendChild(br);
            input.setAttribute('type','checkbox')
            input.setAttribute('name',nameToDo)
            span.innerHTML = nameToDo;
            workin();
        }
    })


