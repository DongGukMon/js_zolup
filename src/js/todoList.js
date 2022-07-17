const todo_form = document.getElementById("todo_form");
const todo_input = document.getElementById("todo_input");
const todo_list = document.getElementById("todo_list");

let todoList=[]

const onDeleteBtnPress = (event)=>{
    const deletingTarget = event.target.parentElement.lastElementChild.innerText;
    
    const itemIndex = todoList.findIndex((element)=>element===deletingTarget);
    
    todoList.splice(itemIndex,1);
    
    localStorage.setItem("todoList",JSON.stringify(todoList))
    event.target.parentElement.remove();
    
    
}

const addTodoItem = (newTodo, isLoading) =>{
    const newListItem = document.createElement("li");
    const deleteButton = document.createElement("button");
    const todoText = document.createElement("span");

    
    todoText.innerText=newTodo;
    deleteButton.innerText="❌";
    
    deleteButton.addEventListener("click", onDeleteBtnPress)
    
    newListItem.appendChild(deleteButton);
    newListItem.appendChild(todoText);
    todo_list.appendChild(newListItem);

    !isLoading && todoList.push(newTodo);
    !isLoading && localStorage.setItem("todoList",JSON.stringify(todoList))
    
    
}


const loadTodoList = () =>{
    // localStorage.removeItem("todoList");
    localStorage.getItem("todoList") && (todoList = JSON.parse(localStorage.getItem("todoList")));
    
    todoList.map((item)=>{
        addTodoItem(item,true);
    })
    
}

loadTodoList();


const onTodoSetting = (event) =>{
    event.preventDefault();
    const newTodo = todo_input.value
    todo_input.value="";
    addTodoItem(newTodo,false);

}

todo_form.addEventListener("submit",onTodoSetting)

