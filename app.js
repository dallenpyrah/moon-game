let cheeseCount = 0
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
    if(clickUpgrades.pickaxes.quantity >= 1){
        cheeseCount+= clickUpgrades.pickaxes.modifier * clickUpgrades.pickaxes.quantity
    }
}

function moonBlasterModifier(){
    if(clickUpgrades.moonBlasters.quantity >= 1){
        cheeseCount+= clickUpgrades.moonBlasters.modifier * clickUpgrades.moonBlasters.quantity
    }
}
function laserGunModifier(){
    for(automaticUpgrades.laserGun.quantity >= 1; automaticUpgrades.laserGun.modifier += 10*5; automaticUpgrades.laserGun.modifier++){
        console.log(automaticUpgrades.laserGun.modifier)
        return
    }
}

// Need to rewrite nuclear blast modifier and laser gun modifier to use loops instead of if statements so that they continue to run.
function nuclearBlastModifier(){
    for(automaticUpgrades.nuclearBlasts.quantity >= 1; automaticUpgrades.nuclearBlasts.modifier += 10*5; automaticUpgrades.nuclearBlasts.modifier++){
        console.log(automaticUpgrades.nuclearBlasts.modifier)
        return
    }
}

function cheesePerSecond(){
    let cheesePerSecond = automaticUpgrades.nuclearBlasts.modifier += automaticUpgrades.laserGun.modifier
    document.getElementById('cheese-second').innerHTML = cheesePerSecond.toString();
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
    moonBlasterPrice()
    cheeseCount-= clickUpgrades.moonBlasters.price
    document.getElementById("moonblaster-quantity").innerHTML = clickUpgrades.moonBlasters.quantity.toString();
    updateCheese();
    }
}

function buyLaserGun(){
    if(cheeseCount < automaticUpgrades.laserGun.price){
        alert("You don't have enough cheese to buy that!")
    }else{
    automaticUpgrades.laserGun.quantity++
    cheesePerSecond();
    cheeseCount-= automaticUpgrades.laserGun.price
    laserGunPrice();
    laserGunModifier();
    document.getElementById("lasergun-quantity").innerHTML = automaticUpgrades.laserGun.quantity.toString();
    updateCheese();
    }
}

function buyNuclearBlast(){
    
    if(cheeseCount < automaticUpgrades.nuclearBlasts.price){
        alert("You don't have enough cheese to buy that!")
    }else{
    automaticUpgrades.nuclearBlasts.quantity++
    cheesePerSecond();
    cheeseCount-= automaticUpgrades.nuclearBlasts.price
    nuclearBlastPrice();
    nuclearBlastModifier();
    document.getElementById("nuclearblast-quantity").innerHTML = automaticUpgrades.nuclearBlasts.quantity.toString();
    updateCheese();
    }
}

mineCheese();