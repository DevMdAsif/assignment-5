const imageArray = [
    "../src/image/360-36.jpg",
    "./image/11-shop_919cff98-ebe7-42f2-9e85-42043e3c883f.png",
    "./image/14-shop.png",
    "./image/6-shop_9b796b46-d45e-4151-8946-e2652ec7eed4.png",
    "./image/8-shop_202894e6-7925-40b3-9a94-47f3972a188a.png",
    "./image/6-shop_9b796b46-d45e-4151-8946-e2652ec7eed4.png",
    "./image/14-shop.png",
    "./image/11-shop_919cff98-ebe7-42f2-9e85-42043e3c883f.png",
   
  ];

  const productBox = document.querySelectorAll(".L-product-box");
const product = document.querySelectorAll(".L-product");



productBox.forEach((element, index) => {
    let orignalImage = product[index].src;
    product[index].addEventListener("mouseover", () => {
      product[index].src = imageArray[index];
    });
  
    product[index].addEventListener("mouseout", () => {
      product[index].src = orignalImage;
    });
  });