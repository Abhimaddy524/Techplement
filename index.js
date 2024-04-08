
let priceInput = document.getElementById('price');
  let quantityInput = document.getElementById('quantity');
  let totalInput = document.getElementById('total');

  function increment() {
    let price = parseInt(priceInput.value);
    let quantity = parseInt(quantityInput.value);
    quantity++;
    quantityInput.value = quantity;
    updateTotal(price, quantity);
  }

  function decrement() {
    let price = parseInt(priceInput.value);
    let quantity = parseInt(quantityInput.value);
    if (quantity > 0) {
      quantity--;
      quantityInput.value = quantity;
      updateTotal(price, quantity);
    }
  }

  function updateTotal(price, quantity) {
    let total = price * quantity;
    totalInput.value = total;
     console.log("price update")
  }
function bookticket() {
    alert("Kindly login for Book ticket")
}

function savelater(){
    alert("Tickets are save for later")
}
loginPage=()=>{
    alert("Login Page is in maintance")
}
signinPage=()=>{
    alert("signin Page is in maintance")
}
document.querySelector('.hamburger').addEventListener('click', function() {
    document.querySelector('.menu').classList.toggle('active');
});
