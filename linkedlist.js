import Node from "./node.js";

export default class LinkedList {
  constructor() {
    this.listHead = null;
  }
  append(value) {
    const newNode = new Node(value);
    if (this.listHead === null) return this.listHead = newNode;
    let current = this.listHead;
    while (current !== null && current.next !== null) {
      current = current.next;
    }
    return current.next = newNode;
  }
  prepend(value) {
    const newNode = new Node(value);
    if (this.listHead === null) return this.listHead = newNode;
    let current = this.listHead;
    newNode.next = current;
    return this.listHead = newNode;
  }

  insertAt(value, index) {
    if (index < 0) return console.error('Invalid index');
    if (index === 0) this.prepend(value);
    let current = this.listHead;
    if (current === null && index !== 0) return console.error('List empty, index not valid.')
    let previous = null;
    const newNode = new Node(value);
    for (let i = 0; i < index; i++) {
        if (current === null && i < index) return console.error('Invalid index')
        previous = current;
        current = current.next;
    }
    newNode.next = current;
    return previous.next = newNode;
  }
  size() {
    let count = 0;
    let current = this.listHead;
    if (current !== null){
        count++;
        while(current.next !== null) {
            count++;
            current = current.next;
        }
    }
    return count;
  }
  head() {
    let current = this.listHead;
    if (current !== null) return this.listHead;
    return console.error('List is empty.');
  }
  tail() {
    let current = this.listHead;
    if (current === null) return console.error('List is empty');
    while(current !== null && current.next !== null) {
        current = current.next;
    }
    return current;
  }
  at(index) {
    let current = this.listHead;
    if (current === null) return console.error('List is empty')
    if (index === 0) return current;
    for (let i = 0; i < index; i++) {
        current = current.next;
        if (current === null) {
            return console.error(`No item at index ${index}`)
        }
    }
    return current;
  }

  pop() {
    let current = this.listHead;
    let previous = null;
    if (current === null) return console.error('List is empty')
    if (current.next === null) return this.listHead = null;
    while(current.next !== null) {
        previous = current;
        current = current.next;
    }
    return previous.next = null;
  }

  contains(value) {
    let current = this.listHead;
    if (current === null) return false
    while (current.next !== null) {
        if (current.value === value) return true;
        current = current.next
    }
    return false;
  }
  
  find(value) {
    let current = this.listHead
    let index = 0;
    if (current === null) return console.error('List is empty');
    if (current.value === value) return index;
    while (current.value !== value && current.next !== null) {
        current = current.next;
        index++
    }
    if(current.value === value) return index;
    return console.error(`'${value}' not found`)
  }

  toString() {
    let current = this.listHead
    let string = ''
    if (current === null) return console.error('List is empty')
    while(current !== null){
        string += `( ${current.value} ) -> `
        current = current.next;
    }
    return string += ' null'
  }
}
