const menuEmail = document.querySelector('.email-nav');
const menuHamIcon = document.querySelector('.menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const desktopMenu = document.querySelector('.desktop-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const aside = document.querySelector('.my-order-container');
const cardsContainer = document.querySelector('.cards-container');

menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleCarritoAside);

function toggleDesktopMenu(){
    mobileMenu.classList.add('inactive');
    aside.classList.add('inactive');
    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu(){
    desktopMenu.classList.add('inactive');
    aside.classList.add('inactive');
    mobileMenu.classList.toggle('inactive');
}

function toggleCarritoAside(){
    desktopMenu.classList.add('inactive');
    mobileMenu.classList.add('inactive');
    aside.classList.toggle('inactive');
}

const productList = [];

productList.push({
    name: 'Aretes de luna 🌙✨',
    price: 180,
    image: './img/a luna.jpeg'
})

productList.push ({
    name:'Layering de cruz ✨❤️',
    price: 290,
    image: './img/Layering.jpeg'
});

productList.push ({
    name:'Inspiradas en barbie 🦋',
    price: 340,
    image: './img/barbie.jpeg'
});

productList.push ({
    name:'Inspirada en blanca nieves ❤️',
    price: 200,
    image: './img/blanca.jpeg'
});

productList.push ({
    name:'Anillos de plata 925 💍',
    price: 300,
    image: './img/Anillos.jpeg'
});

productList.push ({
    name:'Rosa 🌹',
    price: 220,
    image: './img/rosa.jpeg'
});

productList.push ({
    name:'Mapa de Nicaragua ✨🇳🇮',
    price: 190,
    image: './img/mapa.jpeg'
});

productList.push ({
    name: 'Layering fe 🤍✨',
    price: 380,
    image: './img/cruz.jpeg'
});

productList.push ({
    name:'Mariposa perla 🦋✨',
    price: 300,
    image: './img/mari.jpeg'
}); 

productList.push ({
    name:'Corazón del mar 💙💎',
    price: 350,
    image: './img/corazon.jpeg'
}); 

function renderProducts(arr){
    for(product of arr){

        const productCard=document.createElement('div');
        productCard.classList.add('product-card');
    
        const productImg=document.createElement('img');
        productImg.setAttribute('src',product.image);
        
        const productInfo=document.createElement('div');
        productInfo.classList.add('product-info');
        
        const productInfoDiv=document.createElement('div');
        
        const productPrice=document.createElement('p');
        productPrice.innerText='C$' + product.price;
        const productName=document.createElement('p');
        productName.innerText=product.name;
    
        productInfoDiv.append(
            productPrice,
            productName);
    
        const productInfoFigure=document.createElement('figure');
        const productImgCart=document.createElement('img');
        productImgCart.setAttribute('src','./icon/bt_add_to_cart.svg');
    
        productInfoFigure.appendChild(productImgCart);
    
        productInfo.append(
            productInfoDiv,
            productInfoFigure);
    
        productCard.append(
            productImg,
            productInfo);
    
        cardsContainer.appendChild(productCard);
    }
}

renderProducts(productList);