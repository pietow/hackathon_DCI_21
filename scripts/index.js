//// Any code you will write for your website (in the future!) should go here
//const burger = document.querySelector('.menu-btn')
//const closeBtn = document.querySelector('.menu-btn.open')
//const nav = document.querySelector('nav')


//let showNav = false

//burger.addEventListener('click', (e) => {
//    if(!showNav) {
//        showNav = true
//        open(nav)
//        open(e.target)
//    }else {
//        showNav = false
//        close(nav)
//        close(e.target)

//    }
//})

//function close() {
//    if(window.innerWidth >= 700) {
//        close(nav)
//        close(burger)
//    }
//}

//// window.onresize = close;

//// burger.addEventListener('click', (e) => {
////     open(nav)
////     open(e.target)
//// })



////####FUNCTION
//function open(ele) {
//    ele.classList.add('open')
//    if(ele.children.length !== 0) {
//        Array.from(ele.children).map(x => {
//            x.classList.add('open')
//            open(x)
//        })
//    }
//}

//function close(ele) {
//    ele.classList.remove('open')
//    if(ele.children.length !== 0) {
//        Array.from(ele.children).map(x => {
//            x.classList.remove('open')
//            close(x)
//        })
//    }
//}

//#############MINION####

const messages = [
    {
        time: 5,
        message: 'Send the Love'
    },
    {
        time: 4,
        message: 'Hi I am your super cool chef!'
    },
    {
        time: 2,
        message: 'I am your chocolate delivery guy'
    }
];
const characters = [
    'images/chef1.png',
    'images/chef3.png',
    'images/chef4.png'
];
function getRandomInt(min, max) {
    min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}
function getDirection() {
    return getRandomInt(1, 4)
}

function getVerticalPosition() {
    const windowHeight = window.innerHeight;
    return getRandomInt(0, windowHeight - 200)

}
function getHorizontalPosition() {
    const windowWidth = window.innerWidth;
    return getRandomInt(0, windowWidth - 400)

}

function getCharacter () {
    return characters[getRandomInt(0, characters.length - 1)]
}
let startIdx = 0;
const leftMinion = document.querySelector('.chef1');
const rightMinion = document.querySelector('.chef2');
const topMinion = document.querySelector('.chef3');
const bottomMinion = document.querySelector('.chef4');
setInterval(() => {
    const direction = getDirection();
    switch (direction) {
        case 1:
            const oldleftTransform = leftMinion.style.transform
            leftMinion.style.backgroundImage = `url('${getCharacter()}')`;
            leftMinion.style.top = getVerticalPosition() + 'px';
            leftMinion.style.transform = 'translateX(0)';
            leftMinion.children[0].textContent = messages[startIdx].message;
            setTimeout(() => {
                leftMinion.style.transform = oldleftTransform;
            }, messages[startIdx].time * 1000)
            break;
        case 2:
            const oldrightTransform = rightMinion.style.transform
            rightMinion.style.top = getVerticalPosition() + 'px';
            rightMinion.style.backgroundImage = `url('${getCharacter()}')`;
            rightMinion.style.transform = `translateX(${window.innerWidth - 600}px)`;
            rightMinion.children[0].textContent = messages[startIdx].message;
            setTimeout(() => {
                rightMinion.style.transform = oldrightTransform;
            }, messages[startIdx].time * 1000)
            break;
        case 3:
            const oldtopTransform = topMinion.style.transform
            topMinion.style.left = getHorizontalPosition() + 'px';
            topMinion.style.backgroundImage = `url('${getCharacter()}')`;
            topMinion.style.transform = `translateY(0)`;
            topMinion.children[0].textContent = messages[startIdx].message;
            setTimeout(() => {
                topMinion.style.transform = oldtopTransform;
            }, messages[startIdx].time * 1000)
            break;
        case 4:
            const oldbottomTransform = bottomMinion.style.transform
            bottomMinion.style.left = getHorizontalPosition() + 'px';
            bottomMinion.style.backgroundImage = `url('${getCharacter()}')`;
            bottomMinion.style.transform = `translateY(${window.innerHeight - 300}px)`;
            bottomMinion.children[0].textContent = messages[startIdx].message;
            setTimeout(() => {
                bottomMinion.style.transform = oldbottomTransform;
            }, messages[startIdx].time * 1000)
            break;

        default:
            break;
    }
    if (startIdx === messages.length - 1) {
        startIdx = 0;
    } else{
        startIdx++;
    }
}, 10000)

const dishes = [
    {
        name: 'Asparagus mimosa',
        price: 'EUR 45',
        image: 'images/dishes/Asparagus mimosa.webp'
    },
    {
        name: 'Coq au vin ',
        price: '$5',
        image: 'images/dishes/Coq au vin.webp'
    },{
        name: 'Pepper filet mignon',
        price: '$8',
        image: 'images/dishes/Pepper filet mignon.webp'
    },{
        name: 'Spiked apple galette',
        price: '$7',
        image: 'images/dishes/11137_spiked_apple_galette.webp'
    }, 
    {
        name: 'dish5',
        price: '$9',
        image: 'images/dishes/13500_brandied_pear_tart.webp'
    },
    {
        name: 'dish6',
        price: '$9',
        image: 'images/dishes/13696_smashed_potatoes.webp'
    },
    {
        name: 'dish7',
        price: '$9',
        image: 'images/dishes/27893_coq_au_vin.webp'
    }, 
    {
        name: 'dish8',
        price: '$9',
        image: 'images/dishes/28273_asparagus_mimosa.webp'
    }
];

const productsSection = document.querySelector('#productsSection');
const tray = document.querySelector('.tray .row');
dishes.forEach(dish => {
    const dishHtml = `<div class="product">
    <picture>
      <img src="${dish.image}" alt="nicoise salad" />
    </picture>
    <div class="detail">
      <p>
        <b>${dish.name}</b><br />
        
      </p>
      <samp>${dish.price}</samp>
    </div>
    <div class="button">
      <p class="star">
        <strong>&star;</strong>
        <strong>&star;</strong>
        <strong>&star;</strong>
        <strong>&star;</strong>
        <strong>&star;</strong>
      </p>
      <a class="owl__link" href="#">Add</a>
    </div>
  </div>`;
  const product = createElementFromHTML(dishHtml);
  product.getElementsByClassName('owl__link')[0].addEventListener('click', (e) => {
      e.preventDefault();
      const cartHtml = `<div class="col-2 mt-3"><div class="card" >
      <img class="card-img-top" src="${dish.image}" width="100" alt="Card image cap">
      <div class="card-body">
        <h5 class="card-title">${dish.name}</h5>
        <p class="card-text">${dish.price}</p>
        <a href="#" class="btn btn-danger">Delete</a>
      </div>
    </div>` ;
const cardElement = createElementFromHTML(cartHtml) 
      cardElement.querySelector('.btn-danger').addEventListener('click', (e) => {
          e.preventDefault()
          cardElement.remove() 
      })
    tray.appendChild(cardElement);
  })
  productsSection.append(product)

})


function createElementFromHTML(htmlString) {
    var div = document.createElement('div');
    div.innerHTML = htmlString.trim();
  
    // Change this to div.childNodes to support multiple top-level nodes
    return div.firstChild; 
  }
