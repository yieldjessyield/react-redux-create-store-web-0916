# Create Store from Redux

## Objectives

1. Add the Redux library to our projects
2. Use the `createStore` method from the Redux library.

## Overview
Now that we understand how `createStore` works, let's take a look at how we can use Redux in our application.

## Using Redux

Lucky for us, we don't actually have to build out our own `createStore` function. We can use the built in function from the Redux library to make our store. This will give us all the methods that come built in, plus some other great functionality that we'll use later on.

To get started, let's add the Redux library to our project.

`npm install --save redux`

Next, let's define a reducer function in `reducers/counterReducer.js` to pass to our `createStore` function.

```javascript
// src/reducers/counterReducer.js
function counterReducer(state=0, action){
  switch (action.type) {
    case 'INCREMENT_COUNT':
      return state + 1;
    case 'DECREMENT_COUNT':
      return state - 1;
    case 'RESET_COUNT':
      return 0;
    default:
      return state;
  }
}
```

Finally, let's take a look at the `index.js` file inside of our `src` directory. Here, we'll create our store by importing the `createStore` method from redux, as well as the reducer we just made.

```javascript
import { createStore } from 'redux';
import counterReducer from './reducers/counterReducer';

const store = createStore(counterReducer);
```

Let's start our server by using `npm start`. Visit http://localhost:8080 in your browser and open up your JavaScript Console. Now, let's play around a little bit by dispatching some actions and logging the state to the console.

```javascript
import { createStore } from 'redux';
import counterReducer from './reducers/counterReducer';

const store = createStore(counterReducer);

console.log( store.getState() );
store.dispatch({type: 'INCREMENT_COUNT'})
store.dispatch({type: 'INCREMENT_COUNT'})
console.log( store.getState() );
store.dispatch({type: 'DECREMENT_COUNT'})
console.log( store.getState() );
store.dispatch({type: 'INCREMENT_COUNT'})
store.dispatch({type: 'INCREMENT_COUNT'})
console.log( store.getState() );
store.dispatch({type: 'RESET_COUNT'});
console.log( store.getState() );
```

This will log out:

```bash
0
2
1
3
0
```
Awesome!

## Conclusion / So What?

Now you know how the store works in Redux. In future lessons, we'll take a deeper dive into Reducers and look at how we can connect Redux into our React applications. 
