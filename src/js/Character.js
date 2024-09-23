
export default class Character {
    constructor(name, attack) {
        this.name = name;
        this.baseAttack = attack;
        this.distance = 1;
        this.stonedEffect = false;
    }

    get stoned() {
          return this.stonedEffect;
    }

    set stoned(value) {
        this.stonedEffect = value;
    }

    get attack() {
        let effectiveAttack = this.baseAttack * (1 - (this.distance - 1) * 0.1);
        if (this.stonedEffect) {
            effectiveAttack -= Math.log2(this.distance) * 5;
        }
      return effectiveAttack > 0 ? Math.round(effectiveAttack) : 0;
    }

    set attack(value) {
        this.baseAttack = value;
    }
}
