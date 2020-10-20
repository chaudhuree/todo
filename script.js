
//add item
let form= document.getElementById("addForm");
let itemList = document.getElementById('items');

form.addEventListener("submit", addItem);

function addItem(e){
    e.preventDefault();
    
    let getItem = document.getElementById("item").value;
    
    let li = document.createElement("li");
    li.className= 'list-group-item';
    li.appendChild(document.createTextNode(getItem));
    
//    create delete button
    let delButton = document.createElement("button");
    delButton.className=('btn btn-danger btn-sm float-right delete');
    delButton.appendChild(document.createTextNode("delete"));
    
    li.appendChild(delButton);
    itemList.appendChild(li);
    
}

//delete item

itemList.addEventListener("click", removeItem);

function removeItem(e){
    
    if(e.target.classList.contains("delete")){
        
        if(confirm("do you want to delete this??")){
           let del=e.target.parentElement;
           itemList.removeChild(del);
           }
    }
}



//search


let searchData = document.getElementById("search");

searchData.addEventListener("keyup",searchIt);

function searchIt(e){
    e.preventDefault();
    let text = searchData.value.toLowerCase();
    
    let items = itemList.getElementsByTagName('li');
    
    Array.from(items).forEach(function(item){
        let itemName = item.firstChild.textContent;
        if(itemName.toLowerCase().indexOf(text)!=-1){
            item.style.display="block";
        }else{
            item.style.display="none";
        }
    })

}












