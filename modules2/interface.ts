{

        // interface
    
        type User1 = {
            name: string;
            age: number
        }
    
        interface User2 {
            name: string;
            age: number
        }
    
        // intersection type declare 
        type UserWithRole = User1 & { role: string };
        interface UserWithRole2 extends User2 {role:string}
    
        const user: UserWithRole2 = {
            name: "Mostakim",
            age: 50,
            role: 'student'
        }
    
        // array type with interface
    
        type Roll1 = number[]
        interface Roll2 {
            [index: number]: number
        }
        const roll: Roll1 = [2, 3, 4]
        
    
        // function
    
        interface Add2 {
            (num1: number, num2: number): number
        }
        const add: Add2 = (num1, num2)=> num1 + num2
    }