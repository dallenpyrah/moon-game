let cheeseCount = -1
let clickCount = 61
let automaticUpgrades = {
    laserGun:{
        price: 100,
        quantity: 0,
        modifier: 250
    },
    nuclearBlasts:{
        price: 250,
        quantity: 0,
        modifier: 500
    }
}

let clickUpgrades = {
    pickaxes:{
        price: 10,
        quantity: 0,
        modifier: 25
    },
    moonBlasters:{
        price: 20,
        quantity: 0,
        modifier: 50
    }
}
function mineCheese(){
    cheeseCount++
    cheeseTimeout();
    clickCount--
    document.getElementById('timeout').innerHTML = clickCount.toString()
    allModifierHolder()
    updateCheese();
}

function updateCheese(){
    document.getElementById("cheese-mined").innerHTML = cheeseCount.toString();
}

function allModifierHolder(){
    pickaxeModifier()
    moonBlasterModifier()
}
function pickaxeModifier(){
    let pickaxeModifier = clickUpgrades.pickaxes.modifier * clickUpgrades.pickaxes.quantity
    if(clickUpgrades.pickaxes.quantity >= 1){
        cheeseCount+= pickaxeModifier
        document.getElementById('pickaxe-modifier').innerHTML = pickaxeModifier.toString()
    }
}

function moonBlasterModifier(){
    let moonBlasterModifier = clickUpgrades.moonBlasters.modifier * clickUpgrades.moonBlasters.quantity
    if(clickUpgrades.moonBlasters.quantity >= 1){
        cheeseCount+= moonBlasterModifier
        document.getElementById('moonblaster-modifier').innerHTML = moonBlasterModifier.toString()
    }
}
function automaticModifiers(){
    for(let key in automaticUpgrades){
        let automine = automaticUpgrades[key]
        let laserGunModifier = automaticUpgrades.laserGun.modifier * automaticUpgrades.laserGun.quantity
        let nuclearBlastModifier = automaticUpgrades.nuclearBlasts.modifier * automaticUpgrades.nuclearBlasts.quantity
        let automaticModifiers = laserGunModifier + nuclearBlastModifier
        if(automine.quantity >= 1){
        cheeseCount+= automaticModifiers
        document.getElementById('lasergun-modifier').innerHTML = laserGunModifier.toString()
        document.getElementById('nuclearblast-modifier').innerHTML = nuclearBlastModifier.toString()
        console.log(automaticUpgrades.laserGun.modifier)
    }
    }
    updateCheese();
   
}

function autoUpgrades(){
    setInterval(automaticModifiers, 3000);
}

function pickaxePrice(){
    if(clickUpgrades.pickaxes.quantity >= 1){
        clickUpgrades.pickaxes.price += 10*2
        document.getElementById('pickaxe-price').innerHTML = clickUpgrades.pickaxes.price.toString();
    }
}

function moonBlasterPrice(){
    if(clickUpgrades.moonBlasters.quantity >= 1){
        clickUpgrades.moonBlasters.price += 20*2 
        document.getElementById('moonblaster-price').innerHTML = clickUpgrades.moonBlasters.price.toString();
    }
}

function laserGunPrice(){
    if(automaticUpgrades.laserGun.quantity >= 1){
        automaticUpgrades.laserGun.price += 50*2
        console.log(automaticUpgrades.laserGun.price)
        document.getElementById('lasergun-price').innerHTML = automaticUpgrades.laserGun.price.toString();
    }
}
function nuclearBlastPrice(){
    if(automaticUpgrades.nuclearBlasts.quantity >= 1){
        automaticUpgrades.nuclearBlasts.price += 100*2
        document.getElementById('nuclear-price').innerHTML = automaticUpgrades.nuclearBlasts.price.toString();
    }
}
function buyPickaxe(){
    if(cheeseCount < clickUpgrades.pickaxes.price){
        alert("You don't have enough cheese to buy that!")
    }else{
    clickUpgrades.pickaxes.quantity++
    cheeseCount-= clickUpgrades.pickaxes.price
    pickaxePrice();
    console.log(clickUpgrades.pickaxes.price)
    document.getElementById("pickaxe-quantity").innerHTML = clickUpgrades.pickaxes.quantity.toString();
    updateCheese();
    }
}

function buyMoonBlaster(){
    if(cheeseCount < clickUpgrades.moonBlasters.price){
        alert("You don't have enough cheese to buy that!")
    }else{
    clickUpgrades.moonBlasters.quantity++
    cheeseCount-= clickUpgrades.moonBlasters.price
    moonBlasterPrice()
    document.getElementById("moonblaster-quantity").innerHTML = clickUpgrades.moonBlasters.quantity.toString();
    updateCheese();
    }
}

function buyLaserGun(){
    if(cheeseCount < automaticUpgrades.laserGun.price){
        alert("You don't have enough cheese to buy that!")
    }else{
    automaticUpgrades.laserGun.quantity++
    cheeseCount-= automaticUpgrades.laserGun.price
    laserGunPrice();
    document.getElementById("lasergun-quantity").innerHTML = automaticUpgrades.laserGun.quantity.toString();
    updateCheese();
    }
}

function buyNuclearBlast(){
    if(cheeseCount < automaticUpgrades.nuclearBlasts.price){
        alert("You don't have enough cheese to buy that!")
    }else{
    automaticUpgrades.nuclearBlasts.quantity++
    cheeseCount-= automaticUpgrades.nuclearBlasts.price
    nuclearBlastPrice();
    document.getElementById("nuclearblast-quantity").innerHTML = automaticUpgrades.nuclearBlasts.quantity.toString();
    updateCheese();
    }
}

function cheeseTimeout(){
    if(clickCount <= 0){
    cheeseCount *= 2
    clickCount = 60
    document.getElementById('timeout').innerHTML = clickCount.toString()
    updateCheese();}
    else{
        console.log(clickCount)
    }
}


autoUpgrades();
mineCheese();