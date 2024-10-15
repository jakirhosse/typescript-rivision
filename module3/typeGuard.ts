{
        const addTwoValue = (param1: string | number, param2: string | number) : string | number => {
            // type guard check 
            if (typeof param1 === 'number' && param2 === 'number') {
                return param1 + param2;
            } else {
                return param1.toString() + param2.toString()
            }
        }
    
        // in guard 
        type NormalUser = {
            name: string;
        }
        type SuperUser = {
            name: string;
            role: 'admin'
        }
    
        const checkUserType = (user : NormalUser | SuperUser)=> {
            if ('role' in user) {
                console.log(`i am ${user.name} this user is a ${user.role}`);
            } else {
                console.log(`i am ${user.name}`);
            }
        }
    }