{

        let anything: any;
        anything = "next level web dev";
        (anything as string)
    
        const kdToGm = (value: string | number): string | number | undefined => {
            if (typeof value === 'string') {
                const convertedValue = parseFloat(value) * 1000;
                return convertedValue;
            }
            if (typeof value === 'number') {
                const convertedValue = value * 1000;
                return convertedValue
            }
        }
    
        const result1 = kdToGm(12) as number
    }