
const API = "http://localhost:8080/tasks";
let allTasks = [];

function load() {
    fetch(API).then(res=>res.json()).then(data=>{
        allTasks = data;
        displayTasks(data);
    });
}

function displayTasks(data){
    let list=document.getElementById("list");
    list.innerHTML="";
    data.forEach(t=>{
        let li=document.createElement("li");
        if(t.status==="COMPLETED") li.classList.add("completed");
        li.innerHTML=`
            <span>${t.title}</span>
            <div>
                <button class="complete-btn" onclick="completeTask(${t.id})">✔</button>
                <button class="delete-btn" onclick="deleteTask(${t.id})">✖</button>
            </div>`;
        list.appendChild(li);
    });
}

function addTask(){
    let title=document.getElementById("title").value;
    if(title.trim()===""){
        alert("Please enter a task!");
        return;
    }
    fetch(API,{method:"POST",headers:{"Content-Type":"application/json"},
    body:JSON.stringify({title:title,status:"PENDING"})})
    .then(()=>{
        document.getElementById("title").value="";
        alert("Task added successfully");
        load();
    });
}

function deleteTask(id){
    if(confirm("Are you sure?")){
        fetch(API+"/"+id,{method:"DELETE"}).then(()=>{
            alert("Task deleted");
            load();
        });
    }
}

function completeTask(id){
    fetch(API+"/"+id,{method:"PUT"}).then(()=>{
        alert("Task completed");
        load();
    });
}

function searchTask(){
    let keyword=document.getElementById("search").value.toLowerCase();
    let filtered=allTasks.filter(t=>t.title.toLowerCase().includes(keyword));
    displayTasks(filtered);
}

load();
