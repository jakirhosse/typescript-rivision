{

        // spread operator 
    
        const bros1: string[]=['Mezba', 'Jhankar']
        const bros2: string[]=['Mezba', 'Jhankar']
        bros1.push(...bros2)
    
        const mentors1 = {
            typescript: 'Mezba',
            redux: "mir"
        }
        const mentors2 = {
            typescript: 'Mezba',
            redux: "mir"
        }
    
        const allMentor = {
            ...mentors1,
            ...mentors2
        }
    
    
        // rest operator 
    
        const greetings = (...friends: string[])=>{
    
            friends.forEach(friend => {
                console.log(`Hi ${friend}`);
            });
        }
        greetings('nahid, babul, chabul')
        
    }