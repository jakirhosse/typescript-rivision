{
        // parent class
    
        class Person {
            name: string;
            age: number;
            address: string;
    
            constructor(name: string, age: number, address: string) {
                this.name = name;
                this.age = age;
                this.address = address
            }
    
            getSleep(sleepCount: number) {
                console.log(`${this.name} sleeps ${sleepCount}`);
            }
        }
        // create child class 
        class Student extends Person {
            constructor(name: string, age: number, address: string) {
                super(name, age, address)
            }
        }
        // create instance 
        const student1 = new Student('mr. bro', 23, 'dhaka')
        student1
    
        class Teacher extends Person {
            
            designation: string
    
            constructor(name: string, age: number, address: string,designation: string) {
                super(name, age, address)
                this.designation = designation
            }
    
            takeClass(classCount: number) {
                console.log(`${this.name} sleeps ${classCount}`);
            }
        }
        // create instance 
        const teacher1 = new Teacher('mr. bro', 23, 'dhaka', 'professor')
        
    
    }