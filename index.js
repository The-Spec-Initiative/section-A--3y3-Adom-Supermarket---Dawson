const supermarket = [
    {
    id: 1,
    name: "Rice (5kg)",
    price: 120.00,
    image: "/img/rice.jpg"
  },
  {
    id: 2,
    name: "Bread",
    price: 15.00,
    image: "/img/b.jpg"
  },
  {
    id: 3,
    name: "Milk",
    price: 12.00,
    image: "/img/m.jpg"
  },
  {
    id: 4,
    name: "Eggs (crate)",
    price: 55.00,
    image: "/img/g.jpg"
  },
  {
    id: 5,
    name: "Sugar (1kg)",
    price: 18.00,
    image: "/img/s.jpg"
  },
  {
    id: 6,
    name: "Cooking Oil (1L)",
    price: 35.00,
    image: "/img/c.jpg"
  },
  {
    id: 7,
    name: "Tomatoes",
    price: 10.00,
    image: "/img/t.jpg"
  },
  {
    id: 8,
    name: "Onions",
    price: 8.00,
    image: "/img/on.jpg"
  },
  {
    id: 9,
    name: "Canned Fish",
    price: 20.00,
    image: "/img/c.jpg"
  },
  {
    id: 10,
    name: "Biscuits",
    price: 7.00,
    image: "/img/bis.jpg"
  }
];

const items = document.querySelector(".items");
let cart = JSON.parse(localStorage.getItem("cart")) || [];


if (items) {
  supermarket.forEach(item => {
    items.innerHTML += `
      <div class="it" data-id="${item.id}">
        <img src="${item.image}" width="150">
        <p>${item.name}</p>
        <div class="sub">
          <p>GH¢${item.price}</p>
          <button class="btn">
            <i class="bi bi-cart-plus"></i>
          </button>
        </div>
      </div>
    `;
  });

  items.addEventListener("click", e => {
    const btn = e.target.closest(".btn"); 
    if (!btn) return;

    const id = Number(btn.closest(".it").dataset.id);
    const product = supermarket.find(item => item.id === id);

    cart.push(product);
    localStorage.setItem("cart", JSON.stringify(cart));

    updateCartCount();
  });
}
const cartCount = document.querySelector(".cart-count");

function updateCartCount() {
  if (cartCount) {
    cartCount.innerText = cart.length;
  }
}

updateCartCount();


const cartDisp = document.querySelector(".cart-disp")
if(cartDisp){
  cart.forEach((item) => {
  cartDisp.innerHTML += `
    <div class="sub-item" data-id="${item.id}">
      <div class="item-image">
        <img src="${item.image}" alt="${item.name}">
      </div>
      <div class="item-details">
        <h3 class="item-name">${item.name}</h3>
        <p class="item-price">GH¢${item.price.toFixed(2)}</p>
      </div>
      <button class="rem">
        <i class="bi bi-trash"></i>
      </button>
    </div>
  `;
});
}
