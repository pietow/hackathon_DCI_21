// Any code you will write for your website (in the future!) should go here
const burger = document.querySelector('.menu-btn')
const closeBtn = document.querySelector('.menu-btn.open')
const nav = document.querySelector('nav')


let showNav = false

burger.addEventListener('click', (e) => {
    if(!showNav) {
        showNav = true
        open(nav)
        open(e.target)
    }else {
        showNav = false
        close(nav)
        close(e.target)

    }
})

function close() {
    if(window.innerWidth >= 700) {
        close(nav)
        close(burger)
    }
}

// window.onresize = close;

// burger.addEventListener('click', (e) => {
//     open(nav)
//     open(e.target)
// })



//####FUNCTION
function open(ele) {
    ele.classList.add('open')
    if(ele.children.length !== 0) {
        Array.from(ele.children).map(x => {
            x.classList.add('open')
            open(x)
        })
    }
}

function close(ele) {
    ele.classList.remove('open')
    if(ele.children.length !== 0) {
        Array.from(ele.children).map(x => {
            x.classList.remove('open')
            close(x)
        })
    }
}
