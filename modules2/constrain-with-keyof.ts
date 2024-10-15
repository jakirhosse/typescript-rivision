{
        // generic constraints with keyof 
        type Vehicle = {
            bike: string;
            car: string;
        }
    
        type Owner = "bike" | 'car';
    
        type Owner2 = keyof Vehicle;
        
    }