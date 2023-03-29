let button=document.getElementById("but_ton")
let input=document.getElementById("in_put")
let todo=document.getElementById("list")

let arr_todo=[];
window.onload=()=>{
    arr_todo=JSON.parse(localStorage.getItem("Todo")) || []
    arr_todo.forEach(element =>todo_display(element)) 
}

button.addEventListener("click",()=>{
    arr_todo.push(input.value)
    localStorage.setItem("Todo",JSON.stringify(arr_todo))
    // console.log(arr_todo)
    todo_display(input.value)
    input.value=" "

    // let button_b=document.createElement("button");
    // button_b.type='button';
    // button_b.innertext="edit";
    // todo.append(button_b);
})

function todo_display(ele){
    let para=document.createElement("p");
    para.innerText=ele;
    todo.appendChild(para)

    // para.addEventListener("click",()=>{
    //     para.style.textDecoration="line-through"
    //     // 
    // })
    
    para.addEventListener("dblclick",()=>{
        todo.removeChild(para)
        remove(ele)
    })
   
}

function remove(ele){
    let index=arr_todo.indexOf(ele)
    if(index>-1){
        arr_todo.splice(index,1);
    }
    localStorage.setItem("Todo",JSON.stringify(arr_todo))
}