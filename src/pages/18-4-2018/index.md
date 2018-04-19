---
path: '/implementing-stack-data-structure-in-javaScript'
title: 'Implementing Stack data structure in JavaScript'
published: true
date: '2018-04-18'
author: 'Andrew Musgrave'
identifier: 'we9SDewqq0sdW'
tags: ["JavaScript","stack","data structure","computer science"]
minutes: '3'
---

## The Stack

In this post I’ll be going over the simple data structure stack in JavaScript.  Don’t care about stacks? Keep an eye out for my next article on queues.

Stacks and queues are among the simplest data structures, and are easy to implement in JavaScript. A stack is a strict array: a linear data structure. It follows a last in, first out approach. This means that the last element put into the list is the first element out. An example of this would be reversing the spelling of a word. You’ll push each letter onto the list then pop them off.

***

## Why use a stack?

Efficiency. The majority of array methods have a time complexity of o(n) where as stacks can remain entirely at o(1). (This is dependant on the helper methods you would like to add).

## What will our stack include?

The core methods of a stack are push and pop. Some common helper methods I’ve chosen to include are: toString, peek and isEmpty.

## What will our stack include?

The core methods of a stack are push and pop. Some common helper methods I’ve chosen to include are: toString, peek and isEmpty.

1. push(element): void – Adds the element to the top of the stack
2. pop(): element – Removes the element from the top of the stack
3. peek(): element – Reveals the element from the top of the stack
4. isEmpty(): boolean – Returns false if the stack is empty or true if not
5. toString(): string – Returns a string of all the elements

```js
class Stack {
	constructor(items) {
  	// Provided array or empty array
  	this.items = items || [];
    // Provided array length or zero
    this.size = (items && items.length) || 0;
  }

  // Adds the element to the top of the stack and increment
  push(item) {
    this.size++;
  	this.items.push(item);
  }

  // Returns null if the array is empty otherwise
  // decrement and return the element being removed
  pop() {
  	if (this.size === 0)
    	return null;

  	this.size--;
    return this.items.pop();
  }

  // If array is not empty return the first element
  peek() {
  	return Boolean(this.size)
    	? this.items[this.size - 1]
      : null;
  }

  // Returns a boolean based on array size
  isEmpty() {
  	return this.size === 0;
  }

  // Returns the contents of the list
  toString() {
  	return this.items.reduce((acc, item) => acc += `${item}\n`, '')
  }
}

const stack = new Stack();
// Adds 1
stack.push(1);
// Adds 2
stack.push(2);
// Adds 3
stack.push(3);
// Returns 3
console.log(stack.peek());
// Returns and removes 3
console.log(stack.pop());
// Returns false
console.log(stack.isEmpty());
// Returns
// 1
// 2
console.log(stack.toString());
```

## Time Complexity
1. push– o(1)
2. pop – o(1)
3. peek – o(1)
4. isEmpty – o(1)
5. toString - o(n)

***

## TLDR:
*A stack is a more efficient data structure than simply using an array.*