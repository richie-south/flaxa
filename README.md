# Flaxa: event functions 
Subscribe to function events

[![npm version](https://badge.fury.io/js/flaxa.svg)](https://badge.fury.io/js/flaxa)

`npm install flaxa --save`


**Use flaxa to subscribe to events on your function.**

**Input function can be a promise or async to be more powerful.**

Example
```javascript
const flaxa = require('flaxa')

const addOverTime = flaxa(
  // emit fn from flaxa
  (emit) => 
  // your function that should do stuff... 
  (a) => {
    // emit to all subscribers
    emit('my emit value', a)
    return a
  }
)

// your subscriptions
addOverTime.on('my emit value', (value) => {
  console.log(value) // hello world
})

// run your function
addOverTime('hello world') // hello world

``` 

Example
```javascript

const flaxa = require('flaxa')

const addOverTime = flaxa(
  // flaxa emit function
  (emit) => 
  // your function
  (a, b) => {  
    let i = 0
    const interval = setInterval(() => {

      if(i === 5){
        clearInterval(interval)
        // emit to all subscribers
        // if you emit finally no other emits will work after 
        emit('finally', (a + b) + i)
      }
      // emit to all subscribers
      emit('update', (a + b) + i)

      i++
    }, 500)

    return a + b
})

// your subscriptions
addOverTime.on('update', (files) => {
  console.log('folderDone:', files)
})

addOverTime.on('finally', (value) => {
  console.log('finally:', value)
})

// run your function
addOverTime(1, 1)

```
