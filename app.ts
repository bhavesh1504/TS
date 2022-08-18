interface userType{
    name:string;
    age:number;
    address:string;
    getAge:() => number
}
let users:userType = {
    name:'bhavesh',
    age:21,
    getAge()
    {
        return 22
    },
    address:'mumbai'
}
console.log(users);

console.log('age:',users.getAge());


function getUser (a:number, b?:number):number{
    return b?a+b:a;
}
console.log(getUser(100,150));

class App{
    name = 'suraj';
    constructor(name:string){
        this.name = name 
    }
    getApp():string{
        return this.name;
    }
}

let a1 =  new App('jay');
console.log(a1.getApp());


class Parent{
    name:string;
    setName(name):void
    {
        this.name = name;
    }
}
class Child extends Parent{
    
    getName():string
    {
        return this.name
    }
}
    
    let a = new Child();
    a.setName('Bhavesh Nair')
    console.log(a.getName());
     

import mens from './mens';
import ladies from './ladies';

let men = new mens;
console.log(men.data);

let lady = new ladies;
console.log(lady.data);

