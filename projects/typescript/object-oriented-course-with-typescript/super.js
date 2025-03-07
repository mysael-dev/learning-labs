"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
var User = /** @class */ (function () {
    function User(name, email) {
        this.name = name;
        this.email = email;
    }
    User.prototype.changeName = function (newName) {
        if (newName.length < 3) {
            throw new Error('invalid name');
        }
        this.name = newName;
    };
    User.prototype.getName = function () {
        return this.name;
    };
    User.prototype.getNumber = function () {
        return 0;
    };
    return User;
}());
exports.User = User;
var Maneger = /** @class */ (function (_super) {
    __extends(Maneger, _super);
    function Maneger(name, email, code) {
        var _this = _super.call(this, name, email) || this;
        _this.code = code;
        return _this;
    }
    Maneger.prototype.getName = function () {
        return "Maneger: ".concat(this.name);
    };
    Maneger.prototype.getNumber = function () {
        return 321;
    };
    return Maneger;
}(User));
var Admin = /** @class */ (function (_super) {
    __extends(Admin, _super);
    function Admin() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Admin.prototype.getName = function () {
        return "Adm: ".concat(this.name);
    };
    Admin.prototype.getNumber = function () {
        return _super.prototype.getNumber.call(this) + 10;
    };
    return Admin;
}(User));
var maneger1 = new Maneger('Maneger1', 'maneger@email.com', '2rja5');
console.log(maneger1.getName());
