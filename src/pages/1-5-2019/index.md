---
path: '/recursively-flatten-arrays-in-javascript'
title: 'Recursively flatten arrays in JavaScript'
published: true
date: '2018-05-1'
author: 'Andrew Musgrave'
identifier: 'ds8FE72jsFswe'
tags: ["JavaScript","array"]
minutes: '2'
image: 'https://images.unsplash.com/photo-1472783725153-dd7f61cd8b1e?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=593f65f2a27a49092e31f914a6cbf681&auto=format&fit=crop&w=1858&q=80'
---

Have you ever had to flatten an array? Did you run off to lodash or another functional library? When developing in JavaScript you’ll find having to flatten arrays is a common occurrence and not something an external library is needed for. In this post  I’ll show you a couple methods to flatten arrays: starting with single level, then moving to multidimensional.

A quick side note: if your unaware of the term flattening an array, flattening an array will return a one dimensional array from a nested array.

***

### Flatten a single level array using the spread operator

```js
const flatten = a => [].concat(...a);
```

### Flatten a single level array using apply

```js
const flatten = a => [].concat.apply([], a);
```

***

## Now we’ll head into flattening multidimensional arrays using recursion.</figcaption>

### Using reduce

```js
const flatten = a => a.reduce(
    (b, c) => b.concat(Array.isArray(c) ? flatten(c) : c), []
);
```

### Using some

```js
const flatten = a => a.some(Array.isArray)
  ? flatten([].concat(...a))
  : a;
```


***

*-Happy coding*
