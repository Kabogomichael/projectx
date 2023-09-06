"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.payment = void 0;
var payment = /** @class */ (function () {
    function payment(recipient, details, amount) {
        this.recipient = recipient;
        this.details = details;
        this.amount = amount;
    }
    payment.prototype.format = function () {
        return "".concat(this.recipient, " is owed ").concat(this.amount, " for ").concat(this.details);
    };
    return payment;
}());
exports.payment = payment;
