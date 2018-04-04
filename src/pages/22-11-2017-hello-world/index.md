---
path: '/first-post'
title: 'First Blog Post'
published: true
date: '2017-11-24'
author: 'Andrew Musgrave'
tags: ["first", "post"]
avatar: 'url'
minutes: '6'
---

Hello! This is our first blog post.Hello! This is our first blog post.Hello! This is our first blog post.Hello! This is our first blog post.Hello! This is our first blog post.Hello! This is our first blog post.Hello! This is our first blog post.Hello! This is our first blog post.Hello! This is our first blog post.Hello! This is our first blog post.In HTML, form elements such as , , and  typically maintain their own state and update it based on user input. In React, mutable state is typically kept in the state property of components, and only updated with setState().

We can combine the two by making the React state be the “single source of truth”. Then the React component that renders a form also controls what happens in that form on subsequent user input. An input form element whose value is controlled by React in this way is called a “controlled component”.

For example, if we want to make the previous example log the name when it is submitted, we can write the form as a controlled component: