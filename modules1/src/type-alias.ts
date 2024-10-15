{
        // type alias
        
        // type 
        type User = {
            name: string;
            age: number;
            isMarried: boolean
        }
        const user1: User = {
            name: "Mostakim",
            age: 24,
            isMarried:false
        }
    
        const user2: User = {
            name: "Mostakim",
            age: 24,
            isMarried:false
        }
    
        // type 
        type Add = (num1: number, num2: number) => number
        
        const add: Add = (num1, num2) => num1 + num2
        
    }