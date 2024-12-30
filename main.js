const inputBox = document.getElementById("inputBox")

// const todoItem = document.getElementById("todoItem")
// const totalItem = document.getElementById("totalItem")
// const deleteImage = document.getElementById("deleteImage")
// const tickImage = document.getElementById("tickImage")
// const todoImage = document.getElementById("todoImage")
const list = []

function displayItem() {
    const item = document.getElementById("item")
    item.innerHTML = ""
    for (let i = 0; i < list.length;i++) {
        let listItem = document.createElement('p');
        let deleteImage = document.createElement('img');
        let tickImage = document.createElement('img');
        listItem.innerHTML = list[i];
        item.appendChild(listItem)
        deleteImage.setAttribute("src","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7CF7xUhpZ8JC2jBNOWkIPdhi2R4N9cIVxJA&s")
        deleteImage.setAttribute("style","height:30px ; width:30px")
        tickImage.setAttribute("src","https://cdn-icons-png.flaticon.com/512/665/665939.png")
        tickImage.setAttribute("style","height:30px ; width:30px")
        item.setAttribute("style","d-flex justify-content-between align-content-center w-25")
        item.appendChild(tickImage)
        item.appendChild(deleteImage)
    }
}

function addItem() {
    const val = inputBox.value
    list.unshift(val);
    console.log(list);
    displayItem();
}



  // listItem.setAttribute("style","font-size:30px;")
        // let todoImage = document.createElement("div")
        // let deleteImage = document.createElement('img');
        // let tickImage = document.createElement('img');
        // item.setAttribute("class","d-flex justify-content-between align-content-center w-25 mt-4")
        // item.setAttribute("style", "background-color: aqua; padding:10px;")
        // todoImage.setAttribute("style","d-flex justify-content-between align-content-center")
        // deleteImage.setAttribute("src","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7CF7xUhpZ8JC2jBNOWkIPdhi2R4N9cIVxJA&s")
        // deleteImage.setAttribute("style","height:30px ; width:30px")
        // tickImage.setAttribute("src","https://cdn-icons-png.flaticon.com/512/665/665939.png")
        // tickImage.setAttribute("style","height:30px ; width:30px")

        // listItem.innerText = list[i];
        // item.appendChild(listItem);
        // item.appendChild(deleteImage)
        // item.appendChild(tickImage)
        // totalItem.appendChild(item)