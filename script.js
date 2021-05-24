const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]
const navbar = document.getElementsByClassName('navbar')[0]
const quote = document.getElementsByClassName('welcome-quote')[0]

toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active')
    navbar.classList.toggle('active')
    quote.classList.toggle('active')
}) 

// dark mode toggle
var icon = document.getElementById("icon")

if(localStorage.getItem("theme") == null){
    localStorage.setItem("theme", "light");
}

let localData = localStorage.getItem("theme")
if(localData == "light"){
    icon.src = "/media/icons/moon.png"
    document.body.classList.remove("dark-theme")
}
else if(localData == "dark"){
    icon.src = "/media/icons/sun.png"
    document.body.classList.add("dark-theme")
}

icon.onclick = function(){
    document.body.classList.toggle("dark-theme");
    if(document.body.classList.contains("dark-theme")){
        icon.src = "/media/icons/sun.png"
        localStorage.setItem("theme", "dark")
    }
    else {
        icon.src = "/media/icons/moon.png"
        localStorage.setItem("theme", "light")
    }
}

