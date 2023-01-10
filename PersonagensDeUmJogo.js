Classe Character:

module.exports = class Character {
  constructor(name, lifepoints, attackPts, defensePts) {
    this.name = name
    this.lifepoints = lifepoints
    this.attackPts = attackPts
    this.defensePts = defensePts
  }

  attack(targetCharacter) {
    targetCharacter.lifepoints -= this.attackPts - targetCharacter.defensePts
  }
}


Classe Mage:

const Character = require("./Character");

module.exports = class Mage extends Character {
  constructor(name, lifepoints, attackPts, defensePts, magicPts) {
    super(name, lifepoints, attackPts, defensePts)
    this.magicPts = magicPts
  }

  attack(targetCharacter) {
    targetCharacter.lifepoints -= (this.attackPts + this.magicPts) - targetCharacter.defensePts
  }

  heal(targetCharacter) {
    targetCharacter.lifepoints += this.magicPts * 2
  }
}


Classe Thief:

const Character = require("./Character");

module.exports = class Thief extends Character {
  attack(targetCharacter) {
    targetCharacter.lifepoints -= (this.attackPts - targetCharacter.defensePts) * 2
  }
}


Classe Warrior:

const Character = require("./Character")

module.exports = class Warrior extends Character {
  constructor(name, lifepoints, attackPts, defensePts, shieldPts) {
    super(name, lifepoints, attackPts, defensePts)
    this.shieldPts = shieldPts
    this.stance = 'attacking'
  }

  attack(targetCharacter) {
    if (this.stance === 'attacking') {
      super.attack(targetCharacter)
    }
  }

  switchStance() {
    if (this.stance === 'attacking') {
      this.stance = 'defending'
      this.defensePts += this.shieldPts
    } else {
      this.stance = 'attacking'
      this.defensePts -= this.shieldPts
    }
  }
}


Testando:

const Mage = require("./Mage");
const Thief = require("./Thief");
const Warrior = require("./Warrior");

const arthur = new Mage('Arthur', 90, 4, 2, 14)
const beatrice = new Thief('Beatrice', 140, 22, 8)
const cain = new Warrior('Cain', 200, 14, 12, 4)

console.table({ arthur, beatrice, cain })

cain.switchStance()
arthur.attack(cain)
beatrice.attack(arthur)

console.table({ arthur, beatrice, cain })

cain.attack(arthur)
arthur.heal(arthur)
beatrice.attack(cain)

console.table({ arthur, beatrice, cain })
