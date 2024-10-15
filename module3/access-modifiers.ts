{
        class BankAccount {
            public readonly id: number;
            public name: string;
            protected _balance: number;
    
            constructor(id: number, name: string, _balance: number) {
                this.id = id;
                this.name = name;
                this._balance = _balance
            }
    
            depositBalance(amount: number) {
                this._balance = this._balance + amount;
            }
    
            // using setter 
            set deposit(amount: number) {
                this._balance = this._balance + amount
            }
    
            // using getter 
            get balance() {
                return this._balance;
            }
            getBalance() {
                return this._balance
            }
        }
    
        class StudentAccount extends BankAccount {
            // test() {
            //     this.
            // }
        }
    
        const goriberAccount = new BankAccount(111, 'gorib vai', 30)
        const addBalance = goriberAccount.depositBalance(50) //function call kore
        const getBalance = goriberAccount.getBalance() // function call kore value pacchi
    
        const myBalance = goriberAccount.balance // we are using like property
        goriberAccount.deposit = 50 // we can use it like property
    
    }