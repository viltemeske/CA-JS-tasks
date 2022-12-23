console.groupCollapsed('https://edabit.com/challenge/2FF7RKw9RLwc3EBY9');
{
    class Challenge {
        constructor(id, level) {
            this.id = id;
            this.level = level;
        }
        get points() {
            let levels = { VE: 5, EA: 10, ME: 20, HA: 40, VH: 80, EX: 120 };
            return levels[this.level];
        }
    }
    class User {
        constructor(name, xp, log) {
            this.name = name;
            this.xp = xp;
            this.log = log;
        }
        set newSolvedChallenge(challenge) {
            this.log.push(challenge.id);
            this.xp += challenge.points;
        }
    }
    const challenge1 = new Challenge(1, "VE"),
        challenge2 = new Challenge(2, "EA"),
        challenge3 = new Challenge(3, "ME"),
        challenge4 = new Challenge(4, "HA"),
        challenge5 = new Challenge(5, "VH"),
        challenge6 = new Challenge(6, "EX"),
        user1 = new User("Madam", 0, []),
        user2 = new User("Steve", 0, []);

    user1.newSolvedChallenge = challenge1;
    user1.newSolvedChallenge = challenge4;
    user1.newSolvedChallenge = challenge6;
    user2.newSolvedChallenge = challenge5;
    user2.newSolvedChallenge = challenge3;
    user2.newSolvedChallenge = challenge2;

    console.log(user1.name);
    console.log(user2.xp);
    console.log(user1.log);
    console.log(challenge4.level);
    console.log(challenge3.id);
    console.log(challenge1.points);
    console.log(user2.name);
}
console.groupEnd();

console.groupCollapsed('https://edabit.com/challenge/ifDM26p25bqS8EsFu');
{
    class Player {
        hp;
        en;
        maxHp;
        maxEn;
        constructor(name, health, energy, armor) {
            this.name = name;
            this.armor = armor;
            this.hp = health,
                this.en = energy,
                this.maxHp = health,
                this.maxEn = energy
        }

        get hp() {
            return this.hp;
        }
        set hp(newHealth) {
            if (newHealth < 0) {
                this.hp = 0;
            } else if (newHealth >= this.maxHp) {
                this.hp = this.maxHp
            } else {
                this.hp = newHealth
            }
        }

        get en() {
            return this.en;
        }
        set en(newEnergy) {
            if (newEnergy < 0) {
                this.en = 0;
            } else if (newEnergy >= this.maxEn) {
                this.en = this.maxEn
            } else {
                this.en = newEnergy
            }
        }

        get hpPerc() {
            return (this.hp * 100 / this.maxHp).toFixed(2);
        }

        learnSkill(name, stats) {
            this[name] = (enemy) => {
                if (this.en < stats.cost) {
                    return `${this.name} attempted to use ${name}, but didn't have enough energy!`
                }

                this.en -= stats.cost;

                let actualArmor = enemy.armor - stats.penetration;
                if (actualArmor < 0) {
                    actualArmor = 0;
                }

                let damagedone = stats.damage * ((100 - actualArmor) / 100);

                let attackingString = `${this.name} used ${name}, ${stats.desc}, against ${enemy.name}, doing ${damagedone.toFixed(2)} damage!`;

                if (stats.heal) {
                    attackingString += ` ${this.name} healed for ${stats.heal} health!`;
                    this.hp = this.hp + stats.heal;
                }

                enemy.hp = (enemy.hp - damagedone).toFixed(2);
                if (enemy.hp <= 0) {
                    attackingString += ` ${enemy.name} died. `
                } else {
                    attackingString += ` ${enemy.name} is at ${enemy.hpPerc}% health.`
                }

                return attackingString;
            }
        }
    }
    const alice = new Player("Alice", 110, 50, 10)
    const bob = new Player("Bob", 100, 60, 20)

    alice.learnSkill("fireball", {
        damage: 23,
        penetration: 1.2,
        heal: 5,
        cost: 15,
        desc: "a firey magical attack"
    })

    console.log(alice.fireball(bob));

    bob.learnSkill("superbeam", {
        damage: 200,
        penetration: 50,
        heal: 50,
        cost: 75,
        desc: "an overpowered attack, pls nerf"
    })

    console.log(bob.superbeam(alice));
}
console.groupEnd();
