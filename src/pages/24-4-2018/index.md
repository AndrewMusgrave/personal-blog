---
path: '/implementing-queue-data-structure-in-javaScript'
title: 'Implementing Queue data structure in JavaScript'
published: true
date: '2018-04-24'
author: 'Andrew Musgrave'
identifier: 'sdf92ldF0df234'
tags: ["JavaScript","queue","data structure","computer science"]
minutes: '3'
image: "https://images.unsplash.com/photo-1506774518161-b710d10e2733?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=2ff076230a3aea325e5b1ce3f6a7a208&auto=format&fit=crop&w=1500&q=80"
---

## The Queue

This post will cover the basics of a queue along with a few helper methods. You’ll quickly notice queues are very similar to stacks. However, the methodology is completely different. Queues are often used with linked lists, which will be covered in another article.
As with stacks, queues are linear in structure. They follow a first in first out approach. This means that the first element put into the list is the first element out. This is a very common structure you see in everyday life, for example a line in a grocery store.

***

## Why use a queue?

Efficiency. The majority of array methods have a time complexity of o(n) whereas queues can remain entirely at o(1). (This is dependant on the helper methods you would like to add).  As well as with stacks these data structures help you manage your data. They are less flexible than arrays which will help you manage your data.

## What will our queue include?

The core methods of a queue are “enqueue”, which will add, and “dequeue”, which will remove. Some common helper methods I’ve chosen to include are: toString, first, last and isEmpty.

1. enqueue(element): void – Enqueue the element
2. dequeue(): element – Dequeue the element
3. first(): element – Reveals the element from the head of the queue
4. last(): element – Reveals the element from the tail of the queue
5. isEmpty(): boolean – Returns false if the queue is empty or true if not
6. toString(): string – Returns a string of all the elements

```js
class Queue {
	constructor(elements) {
    // Provided array or empty array
    this.elements = elements || [];
    // Provided array length or zero
    this.size = (elements && elements.length) || 0;
	}

  // Enqueue the element to the tail and increment
  enqueue(element) {
    this.size++;
  	this.elements.unshift(element);
  }

  // Returns null if the array is empty otherwise
  // decrement and remove / return the element
  // from the head
  dequeue() {
  	if (this.size === 0)
    	return null;

  	this.size--;
    return this.elements.pop();
  }

  // If array is not empty return the head element
  first() {
  	return Boolean(this.size)
      ? this.elements[this.size -1]
      : null;
  }

// If array is not empty return the tail element
  last() {
  	return Boolean(this.size)
      ? this.elements[0]
      : null;
  }

  // Returns a boolean based on array size
  isEmpty() {
  	return this.size === 0;
  }

  // Returns the contents of the list
  toString() {
  	return this.elements.reduce((a, e) => a += `${e}\n`, '')
  }
}

const queue = new Queue();
// Enqueue Andrew
queue.enqueue('Andrew');
// Enqueue Jersome
queue.enqueue('Jerome');
// Enqueue Kishan
queue.enqueue('Kishan');
// Returns Andrew
console.log(queue.first());
// Returns and removes Andrew
console.log(queue.dequeue());
// Returns false
console.log(queue.isEmpty());
// Return Kishan
console.log(queue.last());
// Returns
// Kishan
// Jerome
console.log(queue.toString());
```

## Time Complexity

1. enqueue – o(1)
2. dequeue – o(1)
3. first – o(1)
4. last – o(1)
5. isEmpty – o(1)
6. toString - o(n)

***

## TLDR:
*A queue is a more efficient data structure than simply using an array and helps manage data.*
