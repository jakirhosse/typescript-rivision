{

        // create class 
        // class Animal {
        //     name: string;
        //     species: string;
        //     sound: string;
    
        //     constructor(name: string, species: string, sound: string) {
        //         this.name = name;
        //         this.species = species;
        //         this.sound = sound
        //     }
    
        //     // create method 
        //     makeSound() {
        //         console.log(`${this.name} sounds ${this.sound}`);
        //     }
        // }
        
        // create class using public keyword for clean code
        class Animal2 {
            constructor(public name: string, public species: string, public sound: string) { }
            makeSound() {
                console.log(`${this.name} sounds ${this.sound}`);
            }
        }
    
        // create instance or object using this class 
        const dog = new Animal2('German vai', 'dog', 'ghew ghew');
        dog.makeSound()
        
    }