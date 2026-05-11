
// nav bar vars
const navBar = document.getElementById("navBar");
const navLoginBtn = document.getElementById("navLoginBtn");
const navShopBtn = document.getElementById("navShopBtn");
const navCartBtn = document.getElementById("navCartBtn");
const navCheckoutBtn = document.getElementById("navCheckoutBtn");



// hero section vars
const heroBenner = document.getElementById("heroBenner");


// login & signup section vars
const loginSection = document.getElementById("login-section");


// login card vars
const loginCard = document.getElementById("login-card");
const loginForm = document.getElementById("login-form");
const loginEmail = document.getElementById("loginEmail");
const loginPwd = document.getElementById("loginPwd");
const loginBtn = document.getElementById("loginBtn");
const signupOpenLink = document.getElementById("signupOpenLink");


// sign up card vars
const signupCard = document.getElementById("signup-card");
const signupForm = document.getElementById("signup-form");
const signupFormName = document.getElementById("signup-form-Name");
const signupFormEmail = document.getElementById("signup-form-Email");
const signupFormPwd = document.getElementById("signup-form-Pwd");
const pUnderSignupUp = document.getElementById("pUnderSignupUp");
          // login & signup  ends here //





            // shope sections vars //
const shopSection = document.getElementById("shop-section");
const ShopSearchFruits = document.getElementById("ShopSearchFruits");
const ShopSearchFruitsBtn = document.getElementById("ShopSearchFruitsBtn");
const productsContainer = document.getElementById("products-container");





                  // cart section vars //
const cartSection = document.getElementById('cart-section')
const cartItemsContainer = document.getElementById('cart-items-container')
const cartSubtotal = document.getElementById('cart-subtotal')
const cartDeliveryFee = document.getElementById('cartDeliveryFee')
const cartTotal = document.getElementById('cart-total')
const proceedToCheckout = document.getElementById('proceedToCheckout')
const ContinueShopping = document.getElementById('ContinueShopping')




                // checkout Section vars //
const checkoutSection = document.getElementById('checkout-section')
const placeOrder = document.getElementById('placeOrder')


                // EMPTY CART POPUP vars //
const emptyCartPopupOverlay = document.getElementById('empty-cart-popup-overlay')
const emptyCartCutBtn = document.getElementById('emptyCartCutBtn')
const emptyCartCloseBtn = document.getElementById('emptyCartCloseBtn')
const browseProducts = document.getElementById('browseProducts')


                // success section vars //
const successSection = document.getElementById('success-section')
const totalPaidSuccess = document.getElementById('totalPaidSuccess')
const successShopAgain = document.getElementById('successShopAgain')
const deliveryDate = document.getElementById('deliveryDate')











            // LOGIN REQUIRED POPUP  vars //
const loginAlertOverlay = document.getElementById('login-alert-overlay')
const CutAlertBtn = document.getElementById('CutAlertBtn')
const goToLoginAlertBtn = document.getElementById('goToLoginAlertBtn')
const closeAlertBtn = document.getElementById('closeAlertBtn')





/* ****************************Multy uses************************* */

let isuserlogedin = false
let users = [];
/* ****************************nav logic************************* */
navLoginBtn.addEventListener("click", () => {
  if (navLoginBtn.textContent == `🚪 Logout`) {
    loginSection.classList.remove("hidden");
    loginCard.classList.remove('hidden')
    signupCard.classList.add('hidden')
    shopSection.classList.add("hidden");
       checkoutSection.classList.add('hidden')
    successSection.classList.add('hidden')
    cartSection.classList.add('hidden')
    navLoginBtn.classList.replace( "hover:bg-red-500" , "hover:bg-brand-500");

    navLoginBtn.textContent = `🔐 Login`;
    isuserlogedin = false

  } else {
    loginCard.classList.remove("hidden");
    signupCard.classList.add("hidden");

    
  }
});
navCartBtn.addEventListener('click',()=>{
if(isuserlogedin){
    cartSection.classList.remove('hidden')
    shopSection.classList.add('hidden')
    checkoutSection.classList.add('hidden')
    successSection.classList.add('hidden')
}else{
    loginAlertOverlay.classList.remove('hidden')
}
})
navShopBtn.addEventListener('click',()=>{
if(isuserlogedin){
    cartSection.classList.add('hidden')
    shopSection.classList.remove('hidden')
    checkoutSection.classList.add('hidden')
    successSection.classList.add('hidden')
}else{
    loginAlertOverlay.classList.remove('hidden')
}
})
navCheckoutBtn.addEventListener('click',()=>{
if(isuserlogedin){
    cartSection.classList.add('hidden')
    shopSection.classList.add('hidden')
    checkoutSection.classList.remove('hidden')
    successSection.classList.add('hidden')
}else{
    loginAlertOverlay.classList.remove('hidden')
}
})
/* **************************LOGIN REQUIRED POPUP*************************** */
CutAlertBtn.addEventListener('click',()=>{
    loginAlertOverlay.classList.add('hidden')
})
closeAlertBtn.addEventListener('click',()=>{
    loginAlertOverlay.classList.add('hidden')
})
goToLoginAlertBtn.addEventListener('click',()=>{
    loginAlertOverlay.classList.add('hidden')
    signupCard.classList.add('hidden')
    loginCard.classList.remove('hidden')
})

/* ****************************login card logic************************* */
loginForm.addEventListener('submit',(e)=>{
    e.preventDefault()
    let logAvail = users.filter((obj)=>obj.userEmail == loginEmail.value.trim())
    if(logAvail.length == 0){
        signupOpenLink.classList.remove('hidden')
    }else{
        loginCard.classList.add('hidden')
        loginSection.classList.add('hidden')
        shopSection.classList.remove('hidden')
        navLoginBtn.textContent = `🚪 Logout`;

        isuserlogedin = true
    } 
    loginForm.reset()
})
signupOpenLink.addEventListener('click',()=>{
    loginCard.classList.add('hidden')
    signupCard.classList.remove('hidden')
    pUnderSignupUp.classList.add('hidden')
}) 

/* ****************************sign up card logic************************* */

signupForm.addEventListener("submit", (e) => {
  e.preventDefault();
  let avail = users.filter((obj) => obj.userEmail == signupFormEmail.value);
  if (avail.length == 0) {
    let newUser = {
      userName: signupFormName.value.trim(),
      userEmail: signupFormEmail.value.trim(),
      userPwd: signupFormPwd.value.trim(),
    };
    users.push(newUser);
    loginSection.classList.add("hidden");
    heroBenner.classList.add("hidden");
    shopSection.classList.remove("hidden");
    signupOpenLink.classList.add('hidden')
    navLoginBtn.textContent = `🚪 Logout`;
    navLoginBtn.classList.replace("hover:bg-brand-500", "hover:bg-red-500");
    isuserlogedin = true

    
  } else {
    pUnderSignupUp.classList.remove("hidden");
  }  
  signupForm.reset()
});
pUnderSignupUp.addEventListener('click',()=>{
    loginCard.classList.remove('hidden')
    signupCard.classList.add('hidden')
})

/* ****************************loop for array of obj************************* */
let groceries = [
    {name:"Biscuit", price: 2},
    {name:"Bread", price: 2},
    {name:"Butter", price: 2},
    {name:"Candy", price: 2},
    {name:"Cheece", price: 2},
    {name:"Chips", price: 2},
    {name:"Choclate", price: 2},
    {name:"Coffee", price: 2},
    {name:"Cooking Oil", price: 2},
    {name:"Eggs", price: 2},
    {name:"Flour", price: 2},
    {name:"Juice", price: 2},
    {name:"Milk", price: 2},
    {name:"Rices", price: 2},
    {name:"Salt", price: 2},
    {name:"Suger", price: 2},
    {name:"Soft Drink", price: 2},
    {name:"Tea", price: 2},
    {name:"Water", price: 2},
    {name:"Yogurt", price: 2},
]
let objsNeeded = 1000
let genaratedArray = []

for (let id = 1; id <= objsNeeded; id++) {
const groceriesIndex = (id - 1) % groceries.length
const grocery = groceries[groceriesIndex]
const imageNumber = (Math.floor((id -1) / groceries.length) % 8) +1
const imgName = grocery.name.toLocaleLowerCase()

let randomPrice = Math.random() * 4 + 1
randomPrice = +randomPrice.toFixed(2)

const obj = {
    id: id,
    name: grocery.name,
    price: randomPrice,
    src: `./assets/${imgName} ${imageNumber}.jpg`
}
    genaratedArray.push(obj)
}

/* ****************************shope sections************************* */
genaratedArray.forEach((obj)=>{
    let div = document.createElement('div')
    div.className = "product-card-wrapper glass-card p-5 cursor-pointer relative overflow-visible"
    div.innerHTML = ` <div class="product-card-inner text-center relative z-10">
            <!-- Floating image -->
            <div
              class="animate-float mx-auto mb-3 w-32 h-32"
              style="animation-duration: 3s"
            >
              <img
                src="${obj.src}"
                alt="Biscuit"
                class="w-full h-full object-cover rounded-2xl shadow-lg"
              />
            </div>
            <h3 class="font-bold text-lg text-gray-800">${obj.name}</h3>
            <div class="stars my-1">⭐⭐⭐⭐⭐</div>
            <p class="text-2xl font-extrabold text-brand-600">$${obj.price}</p>
            <button
            onclick="cardCartBtn(${obj.id})"

              class="add-to-cart-btn mt-3 px-5 py-2 bg-brand-500 text-white font-bold rounded-full shadow-lg hover:shadow-xl transition-all"
            >
              + Add to Cart
            </button>
          </div>`
          productsContainer.appendChild(div)
})
ShopSearchFruitsBtn.addEventListener('click',()=>{
    
let searched = ShopSearchFruits.value.toLowerCase()
let filteredArray = genaratedArray.filter((obj)=>obj.name.toLowerCase().includes(searched))
if (filteredArray.length == 0) {
    productsContainer.innerHTML = ` <h1 class="text-2xl">${ShopSearchFruits.value} is not found</h1>`
} else {
    productsContainer.innerHTML = ``
    filteredArray.forEach((obj)=>{
    let div = document.createElement('div')
    div.className = "product-card-wrapper glass-card p-5 cursor-pointer relative overflow-visible"
    div.innerHTML = ` <div class="product-card-inner text-center relative z-10">
            <!-- Floating image -->
            <div
              class="animate-float mx-auto mb-3 w-32 h-32"
              style="animation-duration: 3s"
            >
              <img
                src="${obj.src}"
                alt="Biscuit"
                class="w-full h-full object-cover rounded-2xl shadow-lg"
              />
            </div>
            <h3 class="font-bold text-lg text-gray-800">${obj.name}</h3>
            <div class="stars my-1">⭐⭐⭐⭐⭐</div>
            <p class="text-2xl font-extrabold text-brand-600">$${obj.price}</p>
            <button 
            onclick="cardCartBtn(${obj.id})"
              class="add-to-cart-btn mt-3 px-5 py-2 bg-brand-500 text-white font-bold rounded-full shadow-lg hover:shadow-xl transition-all"
            >
              + Add to Cart
            </button>
          </div>`
          productsContainer.appendChild(div)
})
}
})
ShopSearchFruits.addEventListener('keydown', (e)=>{
    if (e.key === 'Enter') {
        e.preventDefault()
        let searched = ShopSearchFruits.value.toLowerCase()
let filteredArray = genaratedArray.filter((obj)=>obj.name.toLowerCase().includes(searched))
if (filteredArray.length == 0) {
    productsContainer.innerHTML = ` <h1 class="text-2xl">${ShopSearchFruits.value} is not found</h1>`
} else {
    productsContainer.innerHTML = ``
    filteredArray.forEach((obj)=>{
    let div = document.createElement('div')
    div.className = "product-card-wrapper glass-card p-5 cursor-pointer relative overflow-visible"
    div.innerHTML = ` <div class="product-card-inner text-center relative z-10">
            <!-- Floating image -->
            <div
              class="animate-float mx-auto mb-3 w-32 h-32"
              style="animation-duration: 3s"
            >
              <img
                src="${obj.src}"
                alt="Biscuit"
                class="w-full h-full object-cover rounded-2xl shadow-lg"
              />
            </div>
            <h3 class="font-bold text-lg text-gray-800">${obj.name}</h3>
            <div class="stars my-1">⭐⭐⭐⭐⭐</div>
            <p class="text-2xl font-extrabold text-brand-600">$${obj.price}</p>
            <button
            onclick="cardCartBtn(${obj.id})"
              class="add-to-cart-btn mt-3 px-5 py-2 bg-brand-500 text-white font-bold rounded-full shadow-lg hover:shadow-xl transition-all"
            >
              + Add to Cart
            </button>
          </div>`
          productsContainer.appendChild(div)
})
}
    }
})

/* ****************************Cart Section************************* */

let cartItemsArray = []
function cardCartBtn(id){
let item = cartItemsArray.find((obj)=>obj.id == id)
if (item) {
    item.quantity++
    updateCartItemDom(item)
}else{
    let item = genaratedArray.find((obj)=>obj.id == id)
    let newItem = {
        id:item.id,
        name:item.name,
        price:item.price,
        src:item.src,
        quantity: 1,
    }
    let div = document.createElement('div')
    div.className = "flex items-center gap-4 bg-white/50 p-4 rounded-2xl shadow-sm hover:shadow-md transition-all"
    div.innerHTML = ` <!-- Product image -->
          <img src="${item.src}" alt="Biscuit"
               class="w-16 h-16 object-cover rounded-xl shadow-md">
          
          <!-- Product info + quantity controls -->
          <div class="flex-1">
            <h4 class="font-bold text-gray-800">${item.name}</h4>
            <p class="text-sm text-gray-500"></p>
            <div class="flex items-center gap-2 mt-2">
              <!-- Minus button -->
              <button class="qty-btn w-8 h-8 bg-gray-200 hover:bg-gray-300 rounded-full font-bold text-lg flex items-center justify-center transition-colors"
                      data-product-id="0" onclick="QuantityChange(${item.id}, -1)">−</button>
              <!-- Quantity display -->
              <span class="quantity-span font-bold text-gray-800 w-8 text-center">1</span>
              <!-- Plus button -->
              <button class="qty-btn w-8 h-8 bg-gray-200 hover:bg-gray-300 rounded-full font-bold text-lg flex items-center justify-center transition-colors"
                      data-product-id="0" onclick="QuantityChange(${item.id}, 1)">+</button>
            </div>
          </div>
          
          <!-- Price -->
          <div class="text-right">
            <p class="total-span font-extrabold text-brand-600 text-lg">$${item.price}</p>
            <p class="text-xs text-gray-400">($${item.price} each</p>
          </div>
          
          <!-- Remove (trash) button -->
          <button onclick="removeCartIten(${item.id})" class="remove-btn text-red-500 hover:text-red-700 p-2 rounded-full hover:bg-red-50 transition-all"
                  data-product-id="0" title="Remove item">
            🗑️
          </button>
        </div>`
        newItem.domElement = div
        cartItemsArray.push(newItem)
        cartItemsContainer.appendChild(div)
        
}
    updategrandtotal()
}
function updateCartItemDom (item){
  let div = item.domElement
  if(!div)return
  let qtySpan = div.querySelector('.quantity-span')
  if(qtySpan) qtySpan.textContent = item.quantity
  let priceSpan = div.querySelector('.total-span')
  if(priceSpan) priceSpan.textContent = '$ ' + (item.quantity * item.price).toFixed(2)

}

function QuantityChange (id, delta){
  let item = cartItemsArray.find((obj)=>obj.id == id)
  item.quantity += delta
  if (item.quantity <= 0) {
    removeCartIten(id)
  }else{
    updateCartItemDom(item)
  }
  updategrandtotal()
}
function removeCartIten(id){
  let item = cartItemsArray.find((obj)=>obj.id == id)
  if(!item)return
  if(item.domElement){
    cartItemsContainer.removeChild(item.domElement)
  cartItemsArray = cartItemsArray.filter(obj=>obj.id != id)
     
  }
  updategrandtotal()
}
function updategrandtotal(){
  let total = cartItemsArray.reduce((sum,item)=>sum + (item.quantity * item.price),0)
  cartSubtotal.textContent = '$' + total.toFixed(2)

  let fee = cartDeliveryFee.textContent.trim()
 let numericString = fee.replace(/[^0-9.]/g, ''); 
  let numFee = parseFloat(numericString)
  if (isNaN(numFee)) {
    cartTotal.textContent ='$ '+ total.toFixed(2)
  }else{
     let totalForCart = total + numFee
     cartTotal.textContent = '$ ' + totalForCart.toFixed(2)
  }
}
proceedToCheckout.addEventListener('click',()=>{
  cartSection.classList.add('hidden')
  checkoutSection.classList.remove('hidden')
})
ContinueShopping.addEventListener('click',()=>{
  cartSection.classList.add('hidden')
  shopSection.classList.remove('hidden')
})

/* ****************************Checkout Section************************* */

placeOrder.addEventListener('click',()=>{
  if(cartItemsArray.length == 0){
emptyCartPopupOverlay.classList.remove('hidden')
  }else
{  let total = cartItemsArray.reduce((sum , item)=>sum +(item.price * item.quantity),0)
  totalPaidSuccess.textContent ='$'+ total.toFixed(2)
  cartItemsArray.forEach((obj)=>{
    removeCartIten(obj.id)
  })
  let currentDate = new Date().toLocaleString()
  deliveryDate.textContent = currentDate
  cartItemsArray = []
  updategrandtotal()
successSection.classList.remove('hidden')
checkoutSection.classList.add('hidden')}
})
emptyCartCutBtn.addEventListener('click',()=>{
  emptyCartPopupOverlay.classList.add('hidden')
})
emptyCartCloseBtn.addEventListener('click',()=>{
  emptyCartPopupOverlay.classList.add('hidden')
})
browseProducts.addEventListener('click',()=>{
  emptyCartPopupOverlay.classList.add('hidden')
  checkoutSection.classList.add('hidden')
  shopSection.classList.remove('hidden')
})

/* ****************************seccess Section************************* */
successShopAgain.addEventListener('click',()=>{
  successSection.classList.add('hidden')
  shopSection.classList.remove('hidden')
})

