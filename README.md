# Initialize

npm init vite .


# change vite port

vite.config.ts :
```
export default defineConfig({
  plugins: [svelte()],
  server: {
    port: 3000
  }
})
```

npm run build

npm run dev


# Props

Export keyword 

```
export let bar = 'algo'
```


## Class, functions and const are readonly from outside the component

```
// these are readonly
export const thisIs = 'readonly';

export function greet(name) {
    alert(`hello ${name}!`);
}

// this is a prop
export let format = n => n.toFixed(2);
```


# Assignments are reactivee

To change component state and trigger a re-render, just assign to a locally declared variable.
```
let count = 0;

function handleClick () {
    // calling this function will trigger an
    // update if the markup references `count`
    count = count + 1;
}
```


# Marks a statement as reactive: "$:"

Only values which directly appear within the $: block will become dependencies of the reactive statement. For example, in the code below total will only update when x changes, but not y.

```
let x = 0;
let y = 0;

function yPlusAValue(value) {
    return value + y;
}

$: total = yPlusAValue(x);
```



# Reactivity 

https://svelte.dev/tutorial/updating-arrays-and-objects

# Slots