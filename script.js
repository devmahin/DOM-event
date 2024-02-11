// function blueBtn(){
//     document.body.style.backgroundColor = "blue";
// }

// const btnYellow = document.getElementById("btnYellow")
// btnYellow.onclick = yellow;

// function yellow (){
//     document.body.style.backgroundColor = 'yellow';
// }

// const green = document.getElementById("green");
//     green.onclick = function (){
//         document.body.style.backgroundColor = "green";
//     }




// const welcomeBTN = document.getElementById("welcomeBTN")
// const change = document.getElementById("change")

// welcomeBTN.addEventListener("click", function (){
//     change.innerText = "How are you ?"
// })
// const welcomeBTN2 = document.getElementById("welcomeBTN2")
// welcomeBTN2.addEventListener("click", function(){
//     change.innerText = 'I am fine. and you?'
// })




// const inputStore = document.querySelector("#inputStore")
// const inputValue = document.querySelector("#inputValue")
// const clicks = document.querySelector("#clicks")
// clicks.addEventListener("click", function(){
//     let val = inputValue.value;
//     inputStore.innerText = val;
//     inputValue.value = "";
// })

// const sectionall = document.querySelector(".sectionall");
// const btn = document.getElementById("btn");
// btn.addEventListener("click", function(){
//     let text_area = document.getElementById("text-area")
//     let p = document.createElement("p");
//     p.innerText = text_area.value;
//     sectionall.appendChild(p);

//     text_area.value = "";
// })

// let input = document.getElementById("input");
// let deleteBtn = document.getElementById("deleteBtn");

// input.addEventListener("keyup", function(val){
//     let inputVal = val.target.value;
//     if(inputVal === "delete"){
//         deleteBtn.removeAttribute("disabled")
//     }else{
//         deleteBtn.setAttribute("disabled", true)
//     }
// })

// deleteBtn.addEventListener("click", function () {
//     let hello = document.getElementById("hello");
//     hello.style.display = "none";
//     input.value = "";
// })


// const live = document.querySelector(".live")
// const liveInp = document.querySelector(".liveInp")
// liveInp.addEventListener("input", function(val){
//     // live.inn
//     // console.log()
//     live.innerText = val.target.value;
// })

// const item2 = document.querySelector(".item2");
// const item3 = document.querySelector(".item3");
// const item4 = document.querySelector(".item4");
// const ul_parent = document.querySelector(".ul-parent");

// item2.addEventListener("click", function(event){
//     // console.log(event)
//     console.log("Item - 2")
//     event.stopImmediatePropagation()

// })
// item2.addEventListener("click", function(event){
//     // console.log(event)
//     console.log("Item - 2")

// })
// item2.addEventListener("click", function(event){
//     // console.log(event)
//     console.log("Item - 2")

// })
// item2.addEventListener("click", function(event){
//     // console.log(event)
//     console.log("Item - 2")

// })


// ul_parent.addEventListener("click", function(event){
//     console.log("UL")

// })



const parentItem = document.getElementById("parentItem");


const item = document.querySelectorAll(".item");
// for(let items of item){
// items.addEventListener("click",function(event){
//    event.target.parentNode.removeChild(event.target)

// })
// }

parentItem.addEventListener("click", (event) =>{
    // console.log(event.target)
    event.target.parentNode.removeChild(event.target)

})

const element = document.querySelector(".element");
element.addEventListener("click", function(event){
    let li = document.createElement("li");
    li.innerText = "NEW ELEMENT"
    li.classList.add("item")
    
    parentItem.appendChild(li)
})
