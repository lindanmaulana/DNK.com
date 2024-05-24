/* FEATURED PRODUCTS start */

// DNK shoes
let dnkBlueShoes = document.getElementById("dnk-blue-shoes");
let dnkTitle = document.getElementById("dnk-title");

const dnkColors = (params) => {
  if (params === "blue") {
    dnkBlueShoes.src = "/assets/img/products/dnk-blue-shoes-blue.jpg";
    dnkTitle.textContent = "DNK Blue Shoes";
  } else if (params === "red") {
    dnkBlueShoes.src = "/assets/img/products/dnk-blue-shoes-red.jpg";
    dnkTitle.textContent = "DNK Red Shoes";
  } else if (params === "green") {
    dnkBlueShoes.src = "/assets/img/products/dnk-blue-shoes-green.jpg";
    dnkTitle.textContent = "DNK Green Shoes";
  }
};

// anchor bracelet
let anchorImage = document.getElementById("anchor-image");
const anchorClick = (params) => {
  if (params === "black") {
    anchorImage.src = "/assets/img/products/anchor-bracelet.jpg";
  } else if (params === "neutral") {
    anchorImage.src = "/assets/img/products/anchor-bracelet-brown.jpg";
  } else if (params === "red") {
    anchorImage.src = "/assets/img/products/anchor-bracelet-red.jpg";
  }
};


// boho bangle
let bohoBangleImage = document.getElementById("boho-bangle-image");
const bohoClick = (params) => {
  if (params === "sky") {
    bohoBangleImage.src = "/assets/img/products/boho-bangle-bracelet.jpg";
  } else if (params === "green") {
    bohoBangleImage.src = "/assets/img/products/boho-bangle-bracelet-green.jpg";
  } else if (params === "red") {
    bohoBangleImage.src = "/assets/img/products/boho-bangle-bracelet-red.jpg";
  }
};

// bright bag
let brightImage = document.getElementById("bright-image")
const brightClick = (params) => {
    if(params === 'blue') {
        brightImage.src = "/assets/img/products/bright-blue-bag.jpg"
    } else if(params === 'orange') {
        brightImage.src = "/assets/img/products/bright-orange-bag.jpg"
    } else if(params === 'purple') {
        brightImage.src = "/assets/img/products/bright-purple-bag.jpg"
    } else if(params === 'red') {
        brightImage.src = "/assets/img/products/bright-red-bag.jpg"
    }
}

/* FEATURED PRODUCTS end */
