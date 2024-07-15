class Animal {
    constructor(name, speed, color, wild = false) {
        this.name = name
        this.speed = speed
        this.color = color
        this.wild = wild
    }
    // We can NOT use 'function' keyword in class
    getInfo() { // ===  method
        return `${this.name} runs with ${this.speed} km/h`
    }
}
let a1 = new Animal("Tiger", 100, "Yellow", true)
// console.log(a1.getInfo()) // Tiger runs with 100 km/h


class Bird extends Animal {
    constructor(name, speed, color, wild = false, canFly = true) {
        super(name, speed, color, wild)
        this.canFly = canFly
    }
    getInfo() { // ===  method
        return `${this.name} flies with ${this.speed} km/h`
    }
}
let popugai = new Bird("Popugai", 20, "Green")
// console.log(popugai.getInfo())


class Eagle extends Bird {
    constructor(name, speed, color, wild = true, precise = true) {
        super(name, speed, color, wild)
        this.precise = precise
    }
    getInfo() {
        return super.getInfo() + ` and can see with ${this.precise} precision. Besides it is ${this.color}`
    }
}

let eagle = new Eagle("Eagle", 100, "Black")
// console.log(eagle.getInfo())


// let a2 = new Animal("Lion")
// console.log(a2)
// console.log(a2.name) // Tiger







// Create a Pokemon class with the following properties:
// - name
// - type  (fire, water, earth, air)
// - health  ==  integer
// - attack  ==  integer
// - skill   ==  [name, demage]


class Pokemon {
    constructor(name, type, health, attackPower, skill) {
        this.name = name
        this.type = type
        this.health = health
        this.attackPower = attackPower
        this.skill = skill
    }
    attack(otherPokemon) {
        otherPokemon.decreaseHealth(this.attackPower)
        console.log(`${this.name} attacked ${otherPokemon.name} with ${this.attackPower} power`)
        // ex: Naix attacked Pudge with 100 power
        return ""
    }
    attackWithSkill(otherPokemon) {
        otherPokemon.decreaseHealth(this.skill[1])
        console.log(`${this.name} attacked ${otherPokemon.name} with ${this.skill[0]} skill and caused ${this.skill[1]} damage`)
        // ex: Naix attacked Pudge with fireball skill and caused 50 damage
        return ""
    }
    decreaseHealth(damage) {
        this.health -= damage
        console.log(`${this.name} suffered ${damage} damage and now has ${this.health} health`)
        // ex: Naix suffered 50 damage and now has 50 health
        return ""
    }
    getInfo() {
        console.log(`${this.name} is a ${this.type} type Pokemon.
            - Health: ${this.health}
            - Attack Power: ${this.attackPower}
        `)
        // ex: Puck is a fire type Pokemon with 100 health and 50 attack power
        return ""
    }
}



let p1 = new Pokemon("Dragon Knight", "fire", 500, 100, ["fireball", 50])
let p2 = new Pokemon("Pudge", "earth", 200, 150, ["hook", 100])


console.log("========================================")
console.log("========================================")
console.log(p1.getInfo())
console.log("-----------------VS--------------------")
console.log(p2.getInfo())
console.log("========================================")
console.log("========================================")



function run(pokemon1, pokemon2) {
    p2.attack(p1)
    p1.attack(p2)

    console.log("----------------------------------")
    console.log("----------------------------------")
    p1.attackWithSkill(p2)
    p2.attackWithSkill(p1)
    console.log("----------------------------------")
    console.log("----------------------------------")
}

function checkTheWinner(pokemon1, pokemon2) {
    let resultPokemon = null
    let result = false
    if (pokemon1.health <= 0) {
        console.log(`${pokemon2.name} is the winner`)
        resultPokemon = pokemon2
        result = true
    }
    if (pokemon2.health <= 0) {
        console.log(`${pokemon1.name} is the winner`)
        resultPokemon = pokemon1
        result = true
    }
    return [result, resultPokemon]
}


while (true) {
    run(p1, p2)
    let [result, deadPokemon] = checkTheWinner(p1, p2)
    if (result) {
        console.log(`${deadPokemon.name} is dead`)
        break
    }
}




