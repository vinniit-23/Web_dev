document.addEventListener("DOMContentLoaded", () => {
  const products = [
    { id: 1, product: "Product 1", price: 89.99 },
    { id: 2, product: "Product 2", price: 79.99 },
    { id: 3, product: "Product 3", price: 50.99 },
  ];

  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  console.log(cart);

  // cart.forEach((element) => {
  //   renderCart(element);
  // });

  const productList = document.getElementById("product-list");
  const insideCart = document.getElementById("inside-cart");
  const emptyCart = document.getElementById("empty-cart");
  const cartTotal = document.getElementById("cart-total");
  const totalPrice = document.getElementById("total-price");
  const checkoutBtn = document.getElementById("checkout-btn");
  const cartItems = document.getElementById("cart-items");

  products.forEach((Product) => {
    const Li = document.createElement("li");
    const span = document.createElement("span");
    const BUTTON = document.createElement("Button");
    span.textContent = `${Product.product} - $${Product.price.toFixed(2)}`;
    //   Add aria tag(data-id)
    BUTTON.dataset.id = Product.id;
    BUTTON.textContent = "Add to cart";
    Li.appendChild(span);
    Li.appendChild(BUTTON);
    Li.classList.add("product");
    productList.appendChild(Li);
  });

  productList.addEventListener("click", (e) => {
    if (e.target.tagName === "BUTTON") {
      const productId = parseInt(e.target.getAttribute("data-id"));
      const product = products.find((p) => p.id === productId);
      // console.log(product);
      addToCart(product);
      saveToLocalStorage();
    }
  });

  function addToCart(product) {
    cart.push(product);
    renderCart();
  }

  function renderCart() {
    cartItems.innerHTML = "";
    let total = 0;
    if (cart.length > 0) {
      emptyCart.classList.add("hidden");
      cartTotal.classList.remove("hidden");
      // console.log(cart.length);

      cart.forEach((item, index) => {
        const Li = document.createElement("li");
        const span = document.createElement("span");
        const BUTTON = document.createElement("Button");
        span.textContent = `${item.product} - $${item.price.toFixed(2)}`;
        total += item.price;
        BUTTON.dataset.id = item.id;
        totalPrice.textContent = `$${total.toFixed(2)}`;
        BUTTON.textContent = "Remove to cart";
        BUTTON.addEventListener("click", (index) => {
          removeToCart(index);
        });
        Li.appendChild(span);
        Li.appendChild(BUTTON);
        Li.classList.add("product");
        cartItems.appendChild(Li);
      });
      //   Add aria tag(data-id)
      saveToLocalStorage();
    } else {
      emptyCart.classList.remove("hidden");
      totalPrice.textContent = "$0.00";
    }
  }

  function removeToCart(index) {
    cart.splice(index, 1);
    renderCart();
    saveToLocalStorage();
  }

  checkoutBtn.addEventListener("click", () => {
    cart.length = 0;
    saveToLocalStorage();
    alert("product checkout sucessful");
    renderCart();
  });

  /* todo
check whole code once again
*/
  function saveToLocalStorage() {
    const local = localStorage.setItem("cart", JSON.stringify(cart));
    console.log(local);
  }
  renderCart();
});
