let skins = [

]

let pickaxes = [
    
]

class Weapons {
    constructor(config) {
        this.config = config;
        this.name = config.name;
        this.id = config.id;
        this.img = config.img;
    }
}

let addWeapon = document.querySelector("#addWeapon")
let body = document.querySelector("body")
addWeapon.addEventListener("click", () => {
    let background = document.createElement("div")
    let style = background.style;
    body.append(background)
    style.position = "absolute"
    style.width = "100%"
    style.height = "100%"
    style.top = "0"
    style.background = "#14141480"
    style.zIndex = "10"
    noweaponsfound.style.display = "none"
})

let add = document.querySelector('.add')
let noweaponsfound = document.querySelector('.NoWeaponsFound')