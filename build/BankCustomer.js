"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var assert = require("assert");
//npm i -D @types/node
var BankCustomer = /** @class */ (function () {
    function BankCustomer(name, code) {
        this.name = name;
        this.code = code;
    }
    BankCustomer.prototype.getName = function () {
        return this.name;
    };
    BankCustomer.prototype.verifyPinput = function (input) {
        if (this.code === input) {
            return true;
        }
        else {
            return false;
        }
    };
    return BankCustomer;
}());
var customer = new BankCustomer('John Doe', '3579');
assert.equal(typeof customer.getName, 'function');
assert.equal(typeof customer.verifyPinput, 'function');
assert.equal(customer.getName(), 'John Doe');
assert.equal(customer.verifyPinput('3579'), true);
