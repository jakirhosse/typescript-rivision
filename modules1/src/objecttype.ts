// reference type - object

const user: {
        readonly company: 'Programming Hero'; // literal types and read only access modifier
        fName: string;
        mName?: string;
        lName: string;
        isMarried: boolean
    } = {
        company: 'Programming Hero',
        fName: "Mostakim",
        lName: "Ahamed",
        isMarried: false
    }