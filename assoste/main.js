async function getProduct(){
    const response=await fetch(`https://forkify-api.herokuapp.com/api/search?q=pizza`);
    const data=await response.json();
    const prod=data.recipes;
   const result=prod.map(function(product){

   return `
   <div class="product_item">
   <h2 class="name">${product.title}</h2>
   <img class="photo" src='${product.image_url}'/>
   </div>
   `;


}).join('');

document.querySelector(".products .row").innerHTML=result;
}
getProduct();