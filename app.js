const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");

const products = [
  {
    id: 1,
    title: "COMFY",
    price: 377,
    colors: [
      {
        code: "purple",
        img: "./image/hoodii1.jpg",
      },
      {
        code: "brown",
        img: "./image/hoodiii1.jpg",
      },
    ],
  },
  {
    id: 2,
    title: "ZIPPER",
    price: 365,
    colors: [
      {
        code: "red",
        img: "./image/zipper1.jpg",
      },
      {
        code: "blue",
        img: "./image/zipper2.jpg",
      },
    ],
  },
  {
    id: 3,
    title: "BLEND",
    price: 414,
    colors: [
      {
        code: "lightblue",
        img: "./image/blend.jpg",
      },
      {
        code: "wine",
        img: "./image/blend1.jpg",
      },
    ],
  },
  {
    id: 4,
    title: "Barira",
    price: 129,
    colors: [
      {
        code: "blue",
        img: "./image/barira2.jpg",
      },
      {
        code: "red",
        img: "./image/barira4.jpg",
      },
    ],
  },
  {
    id: 5,
    title: "Cotton",
    price: 494,
    colors: [
      {
        code: "pink",
        img: "./image/cotton.jpg",
      },
      {
        code: "black",
        img: "./image/hoodi3.jpg",
      },
    ],
  },
];

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
    currentProductPrice.textContent = "PRICE" + choosenProduct.price;
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

const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click", () => {
  payment.style.display = "flex";
});

close.addEventListener("click", () => {
  payment.style.display = "none";
});
