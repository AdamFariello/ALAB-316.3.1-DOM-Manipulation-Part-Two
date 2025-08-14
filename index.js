/*Original part 1 code*/
// Menu data structure
var menuLinks = [
    { text: 'about', href: '/about' },
    { text: 'catalog', href: '/catalog' },
    { text: 'orders', href: '/orders' },
    { text: 'account', href: '/account' },
];

// Part 1
let mainEl = document.querySelector("main")
mainEl.setAttribute("style", "background-color:var(--main-bg)")
mainEl.innerHTML = "<h1>DOM MANIPULATION</h1>"
mainEl.setAttribute("class", "flex-ctr")

//Part 2
let topMenuEl = document.getElementById("top-menu")
topMenuEl.setAttribute("height", "100%") 
topMenuEl.setAttribute("style", "background-color:var(--top-menu-bg)")
topMenuEl.setAttribute("class", "flex-around")

//part 3
for (menu of menuLinks) {
    let a = `<a href=${menu.href}>${menu.text.toUpperCase()}</a>`
    topMenuEl.innerHTML += a
}


/*New part 2 code*/
//Part 3 
//TODO: Make this actually appear (it doesn't)
let subMenuEl = document.getElementById("sub-menu")
subMenuEl.setAttribute("height", "100%") 
subMenuEl.setAttribute("style", "background-color:var(--sub-menu-bg)")
subMenuEl.setAttribute("position", "absolute")
subMenuEl.setAttribute("top", "0") //TEMP