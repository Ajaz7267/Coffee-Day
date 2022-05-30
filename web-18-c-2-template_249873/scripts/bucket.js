// On clicking remove button the item should be removed from DOM as well as localstorage.
let cartData = JSON.parse(localStorage.getItem("coffee"))||[];

// let count =cartData.reduce(function(sum,el){
//     return sum + Number(el.price);
// },0);

// let money =cartData.length;
// console.log(money);

// console.log(count);
// document.querySelector("p").innerText =`money`;

cartData.map(function(el){
    var box = document.createElement("div");

    let img =document.createElement("img");
    img.src =el.image;

    let p = document.createElement("p");
    p.innerText = el.price;

    let btn =document.createElement("button");
    btn.setAttribute("id","remove_coffee");
    btn.innerText ="Remove";
    btn.addEventListener("click", function(){
        RemoveItem(el);
    });

    box.append(img,p,btn);
    document.getElementById("bucket").append(box);

})

function RemoveItem(el){
    
        console.log(el);
        cartData.splice(el);
        console.log(cartData);
        localStorage.setItem("bucket",JSON.stringify(cartData));
}
