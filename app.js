'use strict'

function flaxa(fn){
  
  let subscribers = []

  const _flaxa = (...args) =>
    fn(emit, onFinally)(...args)
  
  const addSubscriber = (value) => {
    subscribers = [...subscribers, value]
  }
  
  const onFinally = () => {
    subscribers = []
    _flaxa.on = null
  }
  
  const emit = (id, value, ...args) => {
    subscribers.forEach(object => 
      object.id === id && 
      object.fn(value, ...args))
      
    if(id === 'finally'){
      onFinally()
      return _flaxa
    }
    return _flaxa
  }
  
  _flaxa.on = (id, fn) => {
    addSubscriber({ id, fn})
    return _flaxa
  }
  
  return _flaxa
}

module.exports = flaxa