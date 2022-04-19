let countEl = document.querySelector('.count')
let countPlus = document.querySelector('.countPlus')
let countMinus = document.querySelector('.countMinus')
let addCartBtn = document.querySelector('.addCartBtn')
let cartCountEl = document.querySelector('.cart-count')
let cartBtn = document.querySelector('.cartBtn')
let totalPriceEl = document.querySelector('.total-price')
let totalAmountEl = document.querySelector('.total-amount')
let cartContainer = document.querySelector('.cart-container')
let cartBox = document.querySelector('.cartBox')
let imgBtnsParent = document.querySelector('.imgBtns')
let mainImg = document.querySelector('.main-img img')
let emptyCartTxt = document.querySelector('.emptyCartTxt')
let deleteCartItem = document.querySelector('.deleteCartItem')
let lightBox = document.querySelector('.lightBox-container')
let closeLightBox = document.querySelector('.close-lightBox')
let prevBtn = document.querySelector('.prevBtn')
let nextBtn = document.querySelector('.nextBtn')
let mainPrevBtn = document.querySelector('.mainPrevBtn')
let mainNextBtn = document.querySelector('.mainNextBtn')
let galleryImg = document.querySelector('.gallery img')
let galleryCtrl = document.querySelector('.gallery-control')
const toggleBtn = document.querySelector('.sidebar-toggle')
const closeBtn = document.querySelector('.close-btn')
const sidebar = document.querySelector('.sidebar-container')
let count = 0;
let cartCount = 0;
let price = 125;
let total = 0;
let currentImg = 0;
let imgArr = 
['./images/image-product-1.jpg',
'./images/image-product-2.jpg',
'./images/image-product-3.jpg',
'./images/image-product-4.jpg']

// add click event on plus btn to plus the count
countPlus.addEventListener('click', function(){
    count++;
    countEl.innerHTML = count
})

// add click event on minus btn to minus the count
countMinus.addEventListener('click', function(){
    count--;
    countEl.innerHTML = count
    if (count < 0) {
        count = 0
        countEl.innerHTML = count
    }
})

// add click event on addCartBtn to show the nums of cart items in cartContainer
addCartBtn.addEventListener('click', function() {
    if (count > 0) {
        cartCountEl.classList.add('showCartCount')
        cartCount = cartCount + count
        cartCountEl.innerHTML = cartCount
    }
   
    if (cartCount > 0) {
        count = 0
        countEl.innerHTML = count
    }

    totalPriceEl.innerHTML = `$${price}.00 x ${cartCount} `
    totalAmountEl.textContent = `$${cartCount * price}.00`
    
    if (cartCount > 0) {
        cartBox.classList.add('showCartBox')
        emptyCartTxt.classList.remove('showEmptyCartTxt')            
    }
})


// add click event to toggle cartContainer 
cartBtn.addEventListener('click', function() {
    cartContainer.classList.toggle('showCartContainer')
  emptyCartTxt.classList.add('showEmptyCartTxt')
    if (cartBox.classList.contains('showCartBox')) {
        emptyCartTxt.classList.remove('showEmptyCartTxt')
    }
})


// set mainImg and galleryImg as first src of imgArr
window.addEventListener('DOMContentLoaded', function() {
    mainImg.src = imgArr[0]
    galleryImg.src = imgArr[0]

    //crating imgbtns for mainImg
    for (let i = 0; i < imgArr.length; i++) {
        let childEl = document.createElement('img')
         childEl.src = imgArr[i]
         childEl.className = 'imgBtn'
         childEl.alt = 'product image'
         childEl.onclick = () => {
            mainImg.src = childEl.src
         }
        imgBtnsParent.appendChild(childEl)
    }

    //creating img control btns for lightbox's main image
    for (let i = 0; i < imgArr.length; i++) {
        let childEl = document.createElement('img')
         childEl.src = imgArr[i]
         childEl.className = 'gallery-btn'
         childEl.alt = 'product image'
         childEl.onclick = () => {
            galleryImg.src = childEl.src
         }
        galleryCtrl.appendChild(childEl)
    }
})


//add click event to delete btn to delete the cart item
deleteCartItem.addEventListener('click', function() {
    cartBox.classList.remove('showCartBox')
    emptyCartTxt.classList.add('showEmptyCartTxt')
    cartCount = 0
    cartCountEl.classList.remove('showCartCount')
    //cartCountEl.innerHTML = cartCount
})

//add click event on main-Img to open light box
mainImg.addEventListener('click', function() {
    lightBox.classList.add('showLightBoxContainer')
})

// add click event on close btn to close the lightbox
closeLightBox.addEventListener('click', function() {
    lightBox.classList.remove('showLightBoxContainer')
})


 // show img based on imgArr
function showImg(img) {
    galleryImg.src = imgArr[img];
}

// show next img for gallery image
nextBtn.addEventListener("click", function (e) {
        console.log(e.target)
    currentImg++;
    if (currentImg > imgArr.length - 1) {
        currentImg = 0;
    }
    showImg(currentImg)
});

// show prev img for gallery image
prevBtn.addEventListener("click", function (e) {
        console.log(e.target)
    currentImg--;
    if (currentImg < 0) {
        currentImg = imgArr.length - 1;
    }
    showImg(currentImg)
});

//show mainImg based on imgArr
function showMainImg(img) {
    mainImg.src = imgArr[img]
}

//show next image for mainImg
mainNextBtn.addEventListener("click", function () {
    currentImg++;
    if (currentImg > imgArr.length - 1) {
        currentImg = 0;
    }
    showMainImg(currentImg)
});
//show prev image for mainImg
mainPrevBtn.addEventListener("click", function () {
    currentImg--;
    if (currentImg < 0) {
        currentImg = imgArr.length - 1;
    }
    showMainImg(currentImg)
});

toggleBtn.addEventListener('click', function() {
    sidebar.classList.add('show-sidebar')
})

closeBtn.addEventListener('click', function() {
    sidebar.classList.remove('show-sidebar')
})