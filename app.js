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
exports.__esModule = true;
var users = {
    name: 'bhavesh',
    age: 21,
    getAge: function () {
        return 22;
    },
    address: 'mumbai'
};
console.log(users);
console.log('age:', users.getAge());
function getUser(a, b) {
    return b ? a + b : a;
}
console.log(getUser(100, 150));
var App = /** @class */ (function () {
    function App(name) {
        this.name = 'suraj';
        this.name = name;
    }
    App.prototype.getApp = function () {
        return this.name;
    };
    return App;
}());
var a1 = new App('jay');
console.log(a1.getApp());
var Parent = /** @class */ (function () {
    function Parent() {
    }
    Parent.prototype.setName = function (name) {
        this.name = name;
    };
    return Parent;
}());
var Child = /** @class */ (function (_super) {
    __extends(Child, _super);
    function Child() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Child.prototype.getName = function () {
        return this.name;
    };
    return Child;
}(Parent));
var a = new Child();
a.setName('Bhavesh Nair');
console.log(a.getName());
var mens_1 = require("./mens");
var ladies_1 = require("./ladies");
var men = new mens_1["default"];
console.log(men.data);
var lady = new ladies_1["default"];
console.log(lady.data);
