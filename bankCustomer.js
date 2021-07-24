"use strict";
exports.__esModule = true;
var assert_1 = require("assert");
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
assert_1["default"].equal(typeof customer.getName, 'function');
assert_1["default"].equal(typeof customer.verifyPinput, 'function');
assert_1["default"].equal(customer.getName(), 'John Doe');
assert_1["default"].equal(customer.verifyPinput('3579'));
