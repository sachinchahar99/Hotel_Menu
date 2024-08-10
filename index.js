const toggleBtn = document.querySelector(".toggle-menu button");
const navMenu = document.querySelector(".menu ul");

toggleBtn.addEventListener("click", function () {
  navMenu.classList.toggle("show");
});
const darkmodetoggle = document.querySelector(".dark-mode-toggle");
const body = document.querySelector("body");

darkmodetoggle.addEventListener("click", () => {
  body.classList.toggle("dark-mode");
  updateDarkmodeicon();
});
function updateDarkmodeicon() {
  const darkmodeicon = darkmodetoggle.querySelector("i");
  if (body.classList.contains("dark-mode")) {
    darkmodeicon.classList.remove("fa-moon");
    darkmodeicon.classList.add("fa-sun");
  } else {
    darkmodeicon.classList.remove("fa-sun");
    darkmodeicon.classList.add("fa-moon");
  }
}
/*document.addEventListener('DOMContentLoaded' ,()=>{
    const carticons=document.querySelectorAll('.section-3 .slide .images a');
    const cartcount=document.querySelector('.nav-icons a:first-child .sp');
    const totalamout=document.querySelector('.nav-icons .total .total-amount');
    const orderbutton=document.querySelector(' .Order-btn')
    carticons.forEach(icon=>{
        icon.addEventListenleter('click' ,(event)=>{
         let count =parseInt(cartcount.textContent);
         count++;
         cartcount.textContent=count;
        });
    });


    orderbutton.addEventListener('click' ,()=>{
        cartcount,textContent='0';
        totalamout.textContent='0.00';
        alert('Thank')
    })
});*/
document.addEventListener("DOMContentLoaded", () => {
  const carticons = document.querySelectorAll(".section-3 .slide .images a");
  const cartcount = document.querySelector(".nav-icons a:first-child .sp");
  const totalamout = document.querySelector(".nav-icons .total .total-amount");
  const orderbutton = document.querySelector(".nav-icons .Order-btn");

  carticons.forEach((icon) => {
    icon.addEventListener("click", (event) => {
      event.preventDefault();
      let count = parseInt(cartcount.textContent);
      count++;
      cartcount.textContent = count;
      const price = parseFloat(icon.closeset(".images").dataset.price);
      let total = parseFloat(totalamout.textContent);
      total += price;
      totalamout.textContent = total.toFixed(2);
    });
  });

  orderbutton.addEventListener("click", () => {
    cartcount.textContent = "0";
    totalamout.textContent = "0.00";
    alert("Thanks you for your order! Have a good day! ");
  });
});
