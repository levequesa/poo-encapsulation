import * as assert  from  'assert';
//npm i -D @types/node

class BankCustomer {
    private name: string;
    private code: string;

    constructor(name:string, code: string) {
        this.name = name;
        this.code = code;
    }

    public getName(): string {
        return this.name;
    }

    public verifyPinput(input: string) : boolean {
        if (this.code === input){
            return true;
        } else {
            return false;
        }
    }
}

const customer = new BankCustomer('John Doe', '3579');
assert.equal(typeof customer.getName, 'function');
assert.equal(typeof customer.verifyPinput, 'function');
assert.equal(customer.getName(),'John Doe');
assert.equal(customer.verifyPinput('3579'),true);