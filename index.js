/*Original part 1 code*/
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
let topMenuLinks = [] 
for (menu of menuLinks) {
    let a = document.createElement("a");
    a.setAttribute("href", menu.href)
    a.innerText = menu.text.toUpperCase()
    topMenuLinks.push(a)
    topMenuEl.appendChild(a)
}



/*New part 2 code*/
//Part 3 
let subMenuEl = document.getElementById("sub-menu")
subMenuEl.setAttribute("height", "100%") 
subMenuEl.setAttribute("style", "background-color:var(--sub-menu-bg)")
subMenuEl.setAttribute("position", "absolute") //TEMP
subMenuEl.setAttribute("top", "0") 


//Part 4
topMenuEl.addEventListener("click", function(event) {
    event.preventDefault()
    if (event.target.tagName == "NAV") return
    
    let navBtnLbl = event.target.innerHTML
    if (navBtnLbl == "ABOUT") { 
        subMenuEl.setAttribute("top", "0")
        mainEl.querySelector("h1").innerText = navBtnLbl
    }
    for (topMenuLink of topMenuLinks) {
        if (navBtnLbl == topMenuLink.innerHTML) {
            //if (topMenuLink.classList.length == 0) { 
            if (!topMenuLink.classList.contains("active")) { 
                topMenuLink.setAttribute("class", "active")

                let ex = menuLinks.filter(e => {
                    return e["text"].toUpperCase() == navBtnLbl
                })
                if(ex[0].subLinks != undefined) {
                    subMenuEl.setAttribute("top", "100%")
                    buildSubmenu(ex[0].subLinks)
                }
            } else {
                subMenuEl.setAttribute("top", "0")
            }
        } else {
            //topMenuLink.classList.remove("active")
            topMenuLink.removeAttribute("class")
        }
    }
})

subMenuEl.addEventListener("click", function(event) {
    event.preventDefault()
    if (event.target.tagName == "NAV") return

    subMenuEl.setAttribute("top", "0")
    for (topMenuLink of topMenuLinks) {
        topMenuLink.removeAttribute("class") //using "active" didn't work
    }

    mainEl.querySelector("h1").innerText = event.target.innerHTML
})

function buildSubmenu(subLinks) {
    //TODO: Write function to empty subMenuEl contents
    //      I don't really like this solution...
    subMenuEl.innerHTML = ""
    for (subLink of subLinks) {
        let a = document.createElement("a");
        a.setAttribute("href", subLink.href)
        a.innerText = subLink.text.toUpperCase()
        subMenuEl.appendChild(a)
    }
}