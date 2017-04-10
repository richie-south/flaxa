'use strict'

const flaxa = require('./app')

const getPromise = (time = 100, doFail = false) => 
  new Promise((resolve, reject) =>
    setTimeout(() => doFail ? reject(doFail) : resolve(doFail), time))


const addOverTime = flaxa((emit) => async (a) => {
  const result = await getPromise(500)
  emit('my emit value', result)

  emit(a, 'hello')

  return a
})
 
// your subscriptions 
addOverTime.on('my emit value', (value) => {
  console.log(value) // hello world 
})

addOverTime.on('hello world', (value) => {
  console.log(value) // hello world 
})
 
// run your function 
addOverTime('hello world') // hello world 

console.log(addOverTime)
