---
path: '/web-scraping-in-javascript-using-cheerio'
title: 'Web Scraping in JavaScript using cheerio'
published: true
date: '2018-05-10'
author: 'Andrew Musgrave'
identifier: 'sdf93JHSd82'
tags: ["JavaScript", "node", "web scraping", "beginner"]
minutes: '7'
image: 'https://images.unsplash.com/photo-1446508577056-c6e637f50230?ixlib=rb-0.3.5&s=e02bffe1997245212c5582a9b17b427f&auto=format&fit=crop&w=1050&q=80'
---

Are you a spy? Do you like going incognito and stealing information? Is it your dream to scrape websites but have avoided it because you don’t know languages like python or ruby? Fear not, there is a beautiful JavaScript library for just this. You may have even used it in popular libraries like enzyme.

I’ll walk you through the basics of setting up and running a web scraper using cheerio. The only requirement is that you have node installed. If you don’t no worries, it’s a very quick install.

***

### Setup

Let’s begin by creating a directory for our scraper. Open the terminal and `cd` to wherever you would like the scraper to be placed. Next we’ll create a new directory and cd into it.

```bash
mkdir node-scraper && cd node-scraper
```

Then we’ll create a package.json. I won’t be changing the package defaults so I’ll add the `-y` flag to skip the questions.

```bash
npm init -y
```

Install any HTTP client you feel comfortable using. I’m choosing axios. `i` is the flag for install and `-save` will save the package as a dependency in your package.json

```bash
npm i -save axios
```

Then we’ll want to install cheerio for the scraping which will give you the familiar syntax of Jquery.

> *As a side note you could have installed axios and cheerio at the same time*

```bash
npm i -save cheerio
```

We’ll want to create a file to scrape in, so that's what we’ll do that next.

```bash
touch index.js
```

***

### Coding

Open the project up in your text editor and let’s get started! By now you should should have a node_modules folder, index.js, package-lock.json and a package.json file. Head into the index and we’ll create the scraper.

First we’ll need to import the packages needed, so start off by requiring axios and cheerio.

```js
const axios = require('axios');
const cheerio = require('cheerio');
```

Next we’ll want a url to scrape, for now let’s use Google.

```js
const SCRAPING_URL = 'https://www.google.com/search?q=web+scraping';
```

Because we’re all a little hipster and want to hop on the async / await train we’re going to use an immediately invoked function expression for a top level async / await.

```js
(async () => {
  // Place your code inside here
})();
```

Next we’ll make our request.

> *As a side note a caveat of using axios is having to return the data. The catch is incase of any errors.*

```js
const response = await axios.get(SCRAPING_URL)
  .then(res => res.data)
  .catch(err => console.log(err));
```

We don't want to continue without our data so let's add an if statement and load our request into cheerio. Be careful where you place results or you may create scoping issues.

```js
const results = [];

if (response) {
  const $ = cheerio.load(response);
  // Place code inside here
}
```

Now that we have our data ready, let’s parse it! We’ll look for all of the search results (which are h3’s) and push them into results.

```js
$('h3').each(function() {
  results.push($(this).text());
});
```

Let’s end this party by logging the results.

> *This may be place inside or outside of the if statement*

```js
console.log(results);
```

Now run the program.

```bash
node index.js
```

Here’s what the code looks like together, have fun scraping!

```js
const axios = require('axios');
const cheerio = require('cheerio');
const SCRAPING_URL = 'https://www.google.com/search?q=web+scraping';

(async () => {
  const response = await axios.get(SCRAPING_URL)
    .then(res => res.data)
    .catch(err => console.log(err));

  const results = [];

  if (response) {
    const $ = cheerio.load(response);

    $('h3').each(function() {
      results.push($(this).text());
    });
  }

  console.log(results);
})();

```
