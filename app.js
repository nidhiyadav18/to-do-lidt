const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

//alert(inputBox);

function addTask(){
    if(inputBox.value === ""){
        alert("You must write something");
    }else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li); //li under the list container

        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
      
         
    }
    inputBox.value = "";
    saveData(); //whenever we will add any task this savData will be call and saved yet updated content in the browser
}

//whwnever we will click in the container ,check
listContainer.addEventListener("click",function(e){
    if(e.target.tagName === "LI"){ 
        e.target.classList.toggle("checked");
        saveData(); 
    }else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData(); 
    }

},false);

//to do list show as it is after reload page
function saveData(){
    localStorage.setItem("data",listContainer.innerHTML); //whatever contnet in this innerhtml that will be stored in our browser with th name of data
}
//whenever we will open the website again
function showTask(){
    listContainer.innerHTML = localStorage.getItem('data');
}
showTask();