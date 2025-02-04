import LinkedList from "./linkedlist.js";

const list = new LinkedList();

console.log(list.toString());
list.append('dog');
console.log(list.toString());
list.append('cat');
list.append('parrot');
console.log(list.toString());
list.append('snake')
list.append('turtle')

console.log(list.find('horse'));

list.prepend('horse')

console.log(list.find('horse'));


console.log(list.toString());