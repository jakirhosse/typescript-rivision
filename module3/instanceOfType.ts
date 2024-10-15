{

        class Animal {
            name: string;
            species: string;
    
            constructor(name: string, species: string) {
                this.name= name;
                this.species= species;
            }
    
            makeSound() {
                console.log("I am sounding");
            }
        }
    
        class Dog extends Animal {
            constructor(name: string, species: string) {
                super(name, species)
            }
            makeBark() {
                console.log('i am barking');
            }
        }
    
        class Cat extends Animal {
            constructor(name: string, species: string) {
                super(name, species)
            }
            makeMeaw() {
                console.log('i am Meawing');
            }
        }
    
        // smart way to handle 
        const isDog = (animal: Animal) : animal is Dog => {
            return animal instanceof Dog
        }
    
        const isCat = (animal: Animal) : animal is Cat => {
            return animal instanceof Cat
        }
    
    
    
        // function using instance of 
        const sound = (animal: Animal)=>{
            if (isDog(animal)) {
                animal.makeBark()
            }
            else if(isCat(animal)) {
                animal.makeMeaw()
            } else {
                animal.makeSound()
            }
        }
    
        const dog = new Dog('animal', 'dog')
        const cat = new Cat('animal', 'cat')
    
        sound(dog)
        
    }