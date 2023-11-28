class Ninja {
    constructor(name){
        this.name = name;
        this.health = 90;
        this.speed = 3;
        this.strength = 3;
    }
    sayName(){
        console.log(this.name);
    }
    showStats(){
        console.log(this.name,this.health,this.speed,this.strength)
    }
    drinkSake(){
        this.health += 10;
    }
}

class Sensei extends Ninja{
    constructor(name) {
        super(name);
        this.health = 200;
        this.speed = 10;
        this.strength = 10;
        this.wisdom = 10; 
    }
    speakWisdom(){
        this.drinkSake();
        console.log('If it works,we have a problem')
    }
}

const senSensei = new Sensei('Mastro Lindo')
senSensei.showStats();
senSensei.speakWisdom();
senSensei.showStats();