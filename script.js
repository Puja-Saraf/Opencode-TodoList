const task=document.querySelector(".task");
const add=document.querySelector(".add");
const list=document.querySelector(".list");

add.addEventListener('click', todoList);
list.addEventListener('click',deleteItem);

function todoList(e){
    e.preventDefault();

    if(task.value.length==""){
        alert("Please Enter Something!");
    }

    else{

        const listDiv=document.createElement("div");
        listDiv.className="items";

        const newItem=document.createElement("li");
        newItem.innerText=task.value;
        newItem.className="new-item";
        listDiv.appendChild(newItem);

        const done=document.createElement("button");
        done.className="done";
        done.innerHTML='<i class="fas fa-check-circle"></i>';
        listDiv.appendChild(done);

        const deleted=document.createElement("button");
        deleted.className="deleted";
        deleted.innerHTML='<i class="fas fa-minus-circle"></i>';
        listDiv.appendChild(deleted);

        list.appendChild(listDiv);
        task.value=""
    }
}

function deleteItem(e){
    console.log(e.target);
    const x=e.target;
    if(x.className==='deleted'){
        const toDel=x.parentElement;
        toDel.remove();
    }
    if(x.className==="done"){
        const toDo=x.parentElement;
        toDo.classList.toggle("completed");
    }
}

function removeAll(){
    var lst = document.getElementsByTagName("ul");
    lst[0].innerHTML = "";
}
