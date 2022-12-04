

const list = [
    `pane`,
    `uova`,
    `cacao`,
    `latte`
]

const list_container = document.querySelector(`.buy`)

let element= ""

// for (let i=0; i<list.length; i++){
//     let item= list[i]
//     console.log(item)

//     // element += `<li class="list-item"> ${item} </li>`
//     // list_container.innerHTML= element

//     let list_item= document.createElement (`li`);
//     list_item.innerText= item
//     list_container.append(list_item)
// }

let num=0

while (num < list.length){
    let item= list[num]
    console.log(item)
    num++

    // element += `<li class="list-item"> ${item} </li>`
    // list_container.innerHTML= element

    let list_item= document.createElement (`li`);
    list_item.innerText= item
    list_container.append(list_item)
}