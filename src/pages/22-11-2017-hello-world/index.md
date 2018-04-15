---
path: '/most-of-the-push-api'
title: 'Most of the push api'
published: true
date: '2017-11-24'
author: 'Flavio Copes'
identifier: 'SDjkwj8quwjSNDJWq1'
tags: ["javascript", "api"]
avatar: 'url'
minutes: '6'
---

The Push API allows a web app to receive messages pushed by a server, even if the web app is not currently open in the browser or not running on the device.

The Push API is a recent addition to browser APIs, and it’s currently supported by Chrome (Desktop and Mobile), Firefox, and Opera since 2016.

IE and Edge do not support it yet, and Safari has its own implementation of it. Since Chrome and Firefox support it, approximately 60% of users browsing on their desktops have access to it, so it’s quite safe to use.

## What can you do with it
You can send messages to your users, pushing them from the server to the client, even when the user is not browsing the site.

This lets you deliver notifications and content updates, giving you the ability to engage more with your audience.

This is huge, because one of the missing pillars of the mobile web, compared to native apps, used to be the ability to receive notifications, along with offline support.

## How it works
When a user visits your web app, you can trigger a panel asking permission to send updates. A Service Worker is installed, and operates in the background listening for a Push Event.

> Push and Notifications are two separate concepts and APIs. They’re sometimes mixed up because of the push notifications term used in iOS. Basically, the Notifications API is invoked when a push event is received using the Push API.

Your server sends the notification to the client, and the Service Worker, if given permission, receives a push event. The Service Worker reacts to this event by triggering a notification.

## Getting the user’s permission
The first step in working with the Push API is getting the user’s permission to receive data from you.

> Many sites implement this panel badly, showing it on the first page load. The user is not yet convinced your content is good, and they will deny the permission. So do it wisely.

There are six steps to getting permission from your user:

1. Check if Service Workers are supported
2. Check if the Push API is supported
3. Register a Service Worker
4. Request permission from the user
5. Subscribe the user and get the PushSubscription object
6. Send the PushSubscription object to your server

Let’s go through them one by one.

## Check if Service Workers are supported
```javascript
if (!('serviceWorker' in navigator)) {
  // Service Workers are not supported. Return
  return
}
```

## Check if the Push API is supported
```javascript
if (!('PushManager' in window)) {
  // The Push API is not supported. Return
  return
}
```

## Register a Service Worker
This code registers the Service Worker located in the worker.js file placed in the domain root:

```javascript
window.addEventListener('load', () => {
  navigator.serviceWorker.register('/worker.js')
  .then((registration) => {
    console.log('Service Worker registration completed with scope: ',
      registration.scope)
  }, (err) => {
    console.log('Service Worker registration failed', err)
  })
})
```

To know more about how Service Workers work in detail, check out the Service Workers guide.