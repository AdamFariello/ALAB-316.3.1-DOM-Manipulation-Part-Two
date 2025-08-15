/*Original part 1 code*/
// Menu data structure
/* //TODO: Remove when uneeded
var menuLinks = [
    { text: 'about', href: '/about' },
    { text: 'catalog', href: '/catalog' },
    { text: 'orders', href: '/orders' },
    { text: 'account', href: '/account' },
];
*/
var menuLinks = [
    {text: 'about', href: '/about'},
    {text: 'catalog', href: '#', subLinks: [
        {text: 'all', href: '/catalog/all'},
        {text: 'top selling', href: '/catalog/top'},
        {text: 'search', href: '/catalog/search'},
    ]},
    {text: 'orders', href: '#' , subLinks: [
        {text: 'new', href: '/orders/new'},
        {text: 'pending', href: '/orders/pending'},
        {text: 'history', href: '/orders/history'},
    ]},
    {text: 'account', href: '#', subLinks: [
        {text: 'profile', href: '/account/profile'},
        {text: 'sign out', href: '/account/signout'},
    ]},
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
let topMenuLinks = [] //TODO figre if include elements or just links
for (menu of menuLinks) {
    //let a = `<a href=${menu.href}>${menu.text.toUpperCase()}</a>`
    let a = document.createElement("a");
    a.setAttribute("href", menu.href)
    a.innerText = menu.text.toUpperCase()
    topMenuLinks.push(a)
    //topMenuEl.innerHTML += a
    topMenuEl.appendChild(a)
}
//window.alert(topMenuLinks)


/*New part 2 code*/
//Part 3 
//TODO: Make this actually appear (it doesn't)
let subMenuEl = document.getElementById("sub-menu")
subMenuEl.setAttribute("height", "100%") 
subMenuEl.setAttribute("style", "background-color:var(--sub-menu-bg)")
subMenuEl.setAttribute("position", "absolute") //TEMP
subMenuEl.setAttribute("top", "0") 


//Part 4
//e.target.classList.toggle("strikethrough");
topMenuEl.addEventListener("click", function(e) {
    //Prevent code from activating anything
    e.preventDefault()
    if (e.target.tagName == "NAV") {
        return
    }
    window.alert(e.target.innerHTML) //TODO: figure out if correct
    
    //TODO: figure more elegant solution
    //TODO: (PERSONAL) highlight bug using in instead
    for (topMenuLink of topMenuLinks) {
        console.log(topMenuLink.classList)
        if (topMenuLink.innerHTML == e.target.innerHTML) {
            topMenuLink.setAttribute("class", "active")
        } else {
            //topMenuLink.classList.remove("active")
            topMenuLink.removeAttribute("class") //using "active" didn't work
        }
    }
})