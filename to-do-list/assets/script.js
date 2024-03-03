let input = document.querySelector("input#add")
let output = document.querySelector("div#tasks")

function addtask(){
    let newTask = document.createElement("p")
    newTask.innerHTML = input
    newTask.classList.add("task")
    input.appendChild(newTask)
    output.innerHTML += `${input.value}<br>`
    input.value = ""
    input.focus()
}
input.addEventListener("keypress", function(event){
    if(event.key === "Enter"){
        if(input.value == ""){
            alert("erro, digite uma tarefa")
        }
        else if(input.value.length < 3){
            alert("erro, sua tarefa é muito curta!")
        }
        else{
            addtask()
        }
    }
})