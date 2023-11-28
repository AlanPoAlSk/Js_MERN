class Card {
    constructor(name,cost){
        this.name = name;
        this.cost = cost;
    }
}

class Unit extends Card{
    constructor(name,cost,power,resilience) {
        super(name,cost);
        this.power = power;
        this.resilience = resilience
    }
    attack(target) {
        
        if (target instanceof Unit) {
            target.resilience -= this.power;
            console.log(`${this.name} attacks ${target.name}.`);
            if (target.resilience <= 0) {
                console.log(`${target.name} has been defeated.`);
            
            } else {
                console.log(`${target.name} resilience reduced to ${target.resilience}.`);
            }
        } else {
            console.log(`Invalid target for attack.`);
        }
    }

}

class Effect extends Card{
    constructor(name,cost,text,stat,magnitude){
        super(name,cost);
        this.text = text;
        this.stat = stat;
        this.magnitude = magnitude;
    }
    play(player,target) {
        
        if (target instanceof Unit) {
            if (this.stat === 'power') {
                target.power += this.magnitude;
                console.log(`${player.name} uses ${this.name}  with this text : ${this.text}`);
                console.log(`${this.name} applied to ${target.name}. Power increased to ${target.power}.`);
            } else if (this.stat === 'resilience') {
                if(this.magnitude >=0){
                    target.resilience += this.magnitude;
                    console.log(`${player.name} uses ${this.name} with this text : ${this.text}`);
                    console.log(`${this.name} applied to ${target.name}. Resilience increased to ${target.resilience}.`);
                }
                else {
                    target.resilience += this.magnitude;
                    console.log(`${player.name} uses ${this.name} with this text : ${this.text}`);
                    console.log(`${this.name} applied to ${target.name}. Resilience decreased to ${target.resilience}.`);
                }
            } else if (this.stat === 'reduceResilience') {
                target.resilience -= this.magnitude;
                console.log(`${target.name} uses ${this.name} with this text : ${this.text}`);
                console.log(`${this.name} applied to ${target.name}. Resilience reduced to ${target.resilience}.`);
                if (target.resilience <= 0) {
                    console.log(`${target.name} has been defeated.`);
                
                }
            }
        } else {
            console.log(`Invalid target for this effect.`);
        }
    }
    
}



//turn1
    console.log('-----Turn1-----')
    const unitCardRed = new Unit('Red Belt Ninja',3,3,4);
    console.log('Red belt Ninja entered the battle')
    console.log(unitCardRed);
    const effectHardAlg = new Effect('Hard Algorithm',2,'increase target s resilience by 3', 'resilience', 3);
    effectHardAlg.play(unitCardRed, unitCardRed);
    console.log(unitCardRed);

//turn2
console.log('-----Turn2-----')
    const unitCardBlack = new Unit('Black Belt Ninja',4,5,4);
    console.log('Black Belt ninja entered the battle')
    console.log(unitCardBlack)
    const effectUnhand = new Effect('Unhandled Promise Rejection',1,'reduce target s resilience by 2', 'resilience', -2);

    effectUnhand.play(unitCardBlack ,unitCardRed);
    console.log(unitCardRed);

//turn3
console.log('-----Turn3-----')
    const effectPairPro = new Effect('Pair Programming',3,'increase target s power by 2', 'power', 2);
    effectPairPro.play(unitCardRed, unitCardRed);
    unitCardRed.attack(unitCardBlack);

