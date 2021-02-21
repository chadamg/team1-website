// ================================ opening and closing basket ==============================
let dropdown = document.getElementById("dropdown");
let basketButton = document.querySelector(".basket-box");
let isBasketOpen = false;

function toggleBasket() {
  if (isBasketOpen === false) {
    dropdown.style.display = "block";
    // could have also used "dropdown.classList.add("show-dropdown");" and made class where display: block;
    isBasketOpen = true;
  } else {
    dropdown.style.display = "none";
    // dropdown.classList.remove("show-dropdown");
    isBasketOpen = false;
  }
}

basketButton.addEventListener("click", toggleBasket);

// ============================= products ======================================
let facebook = {
  img:
    "https://images.unsplash.com/photo-1611162618071-b39a2ec055fb?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1267&q=80",
  product: "Facebook",
  price: 3.99,
};
let instagram = {
  img:
    "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1267&q=80",
  product: "Instagram",
  price: 3.99,
};
let tikTok = {
  img:
    "https://images.unsplash.com/photo-1611605698323-b1e99cfd37ea?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1267&q=80",
  product: "TikTok",
  price: 3.99,
};

// ========================== adding to and removing from basket ==================================
let facebookButton = document.getElementById("addFacebookToBasket");
let instagramButton = document.getElementById("addInstagramToBasket");
let tikTokButton = document.getElementById("addTikTokToBasket");
let dropdownItems = document.getElementById("dropdown-items");

let basket = [];

function updateHTML() {
  document.getElementById("basketNum").innerHTML = `(${basket.length})`;
  dropdownItems.innerHTML = "";

  for (let i = 0; i < basket.length; i++) {
    let newElement = document.createElement("div");
    newElement.classList.add("basket-item");
    newElement.innerHTML = `
     <img src=${basket[i].img} />
     <div>
       <p>${basket[i].product}</p>
       <p>£${basket[i].price}</p>
       <button id="remove${basket[i]}" onclick="removeItem(${i})" >Remove item</button>
     </div>`;
    dropdownItems.appendChild(newElement);
  }
}

function addToBasket(app) {
  basket.push(app);
  updateHTML();
}

function removeItem(index) {
  basket.splice(index, 1);
  updateHTML();
  toggleBasket();
}

facebookButton.addEventListener("click", function () {
  addToBasket(facebook);
});
instagramButton.addEventListener("click", () => addToBasket(instagram));
tikTokButton.addEventListener("click", () => addToBasket(tikTok));
