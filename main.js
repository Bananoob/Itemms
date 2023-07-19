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

let add = document.querySelector('.add')
let noweaponsfound = document.querySelector('.no-weapons-found')
let wrapperbutton = document.querySelector('.wrapper-button')

wrapperbutton.style.display = "none"
noweaponsfound.style.display = "none"