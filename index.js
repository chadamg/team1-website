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


// ========================== Automatic Image Slideshow ==================================

var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}

// ============================== Google Maps API ============================================

// Note: This example requires that you consent to location sharing when
// prompted by your browser. If you see the error "The Geolocation service
// failed.", it means you probably did not give permission for the browser to
// locate you.
let map, infoWindow;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: -34.397, lng: 150.644 },
    zoom: 6,
  });
  infoWindow = new google.maps.InfoWindow();
  const locationButton = document.createElement("button");
  locationButton.textContent = "Pan to Current Location";
  locationButton.classList.add("custom-map-control-button");
  map.controls[google.maps.ControlPosition.TOP_CENTER].push(locationButton);
  locationButton.addEventListener("click", () => {
    // Try HTML5 geolocation.
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const pos = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          };
          infoWindow.setPosition(pos);
          infoWindow.setContent("Location found.".fontcolor("black"));
          infoWindow.open(map);
          map.setCenter(pos);
        },
        () => {
          handleLocationError(true, infoWindow, map.getCenter());
        }
      );
    } else {
      // Browser doesn't support Geolocation
      handleLocationError(false, infoWindow, map.getCenter());
    }
  });
}

function handleLocationError(browserHasGeolocation, infoWindow, pos) {
  infoWindow.setPosition(pos);
  infoWindow.setContent(
    browserHasGeolocation
      ? "Error: The Geolocation service failed."
      : "Error: Your browser doesn't support geolocation."
  );
  infoWindow.open(map);
}

