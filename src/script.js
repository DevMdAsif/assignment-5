productBox.forEach((element, index) => {
    let orignalImage = product[index].src;
    product[index].addEventListener("mouseover", () => {
      product[index].src = imageArray[index];
    });
  
    product[index].addEventListener("mouseout", () => {
      product[index].src = orignalImage;
    });
  });