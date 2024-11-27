

const products = [
    {
        id : 1,
        title : "AIR FORCE",
        price : 119,
        colors : [
            {
                code : "black",
                img : "./Images/air.png"
            },
            {
                code : "darkblue",
                img : "./Images/air2.png"
            },
        ],
    },
    {
        id : 2,
        title : "AIR JORDAN",
        price : 149,
        colors : [
            {
                code : "lightgray",
                img : "./Images/jordan.png",
            },
            {
                code : "green",
                img : "./Images/jordan2.png",
            },
        ],
    },
    {
        id : 3,
        title : "BLAZER",
        price : 89,
        colors : [
            {
                code : "lightgray",
                img : "./Images/blazer.png",
            },
            {
                code : "green",
                img : "./Images/blazer2.png"
            },
        ],
    },
    {
        id : 4,
        title : "CRATER",
        price : 109,
        colors : [
            {
                code : "black",
                img : "./Images/crater.png"
            },
            {
                code : "lightgray",
                img : "./Images/crater2.png",
            },
        ],
    },
    {
        id : 5,
        title : "HIPPIE",
        price : 99,
        colors : [
            {
                code : "gray",
                img : "./Images/hippie.png",
            },
            {
                code : "black",
                img : "./Images/hippie2.png",
            },
        ],
    },
];

const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");

let choosenProduct = products[0];

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");

menuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    //change the current slide
    wrapper.style.transform = `translateX(${-100 * index}vw)`;

    //change the choosen product
    choosenProduct = products[index];

    //change texts of currentProduct
    currentProductTitle.textContent = choosenProduct.title;
    currentProductPrice.textContent = "$" + choosenProduct.price;
    currentProductImg.src = choosenProduct.colors[0].img;

    //assing new colors
    currentProductColors.forEach((color, index) => {
      color.style.backgroundColor = choosenProduct.colors[index].code;
    });
  });
});

currentProductColors.forEach((color, index) => {
  color.addEventListener("click", () => {
    currentProductImg.src = choosenProduct.colors[index].img;
  });
});

currentProductSizes.forEach((size, index) => {
  size.addEventListener("click", () => {
    currentProductSizes.forEach((size) => {
      size.style.backgroundColor = "white";
      size.style.color = "black";
    });
    size.style.backgroundColor = "black";
    size.style.color = "white";
  });
});

const productButton = document.querySelector(".payButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click", () => {
  payment.style.display = "flex";
});

close.addEventListener("click", () => {
  payment.style.display = "none";
});

const checkout = document.querySelector(".payButton2");

checkout.addEventListener("click",() => {
    payment.style.display = "none";
    setTimeout(() => {
        alert("Puchased Succesfully");
    }, 3000);
})