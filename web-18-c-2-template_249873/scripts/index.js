// Add the coffee to local storage with key "coffee"
let res;
function getData(){
    let data =document.getElementById("menu");

    const url =`https://masai-mock-api.herokuapp.com/coffee/menu`;
 
  fetch(url)
  .then(function (res){
      return res.json();
      
  })
  .then(function (res){
    // append(res.data);
    return res.data;
  })
  .catch(function(err){
  console.log('err:', err);
});

}
    let cartData = JSON.parse(localStorage.getItem("coffee"))||[];
function append(data){
    // let conatainer = document.getElementById("menu").value;
    // conatainer.innerHTML;
    data.forEach(function (el){

        let box =document.createElement("div");

        // box.innerHTML=el.div;
        let image = document.createElement("img");
        image.src =el.data.image;

        let p = document.createElement("p");
        p.innerText = el.data.price;

        let btn =document.createElement("button");
        btn.setAttribute("id","add_to_bucket");
        btn.innerText ="Add to bucket";
        btn.addEventListener("click", function(){
            AddtoBucket(el);
        });
        box.append(image,p,btn);
        data.append(box);
    });
    function AddtoBucket(el){
        console.log(el);
        cartData.push(el);
        localStorage.setItem("coffee",JSON.stringify(cartData));
        // alert("Food ord/")
    }
}