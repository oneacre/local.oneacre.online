# local.oneacre.online

### using this repository
```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:8080
$ npm run dev

# build for production and launch server
$ npm run build
$ npm start

# generate static project
$ npm run generate
```

### Code examples

#### Components that wrap text
to make a component that wraps text like below you can make use of the `<slot>` tag.
Usage in parent:
```html
<alert-box>Something bad happened.</alert-box>
```
Usage in component:
```html
<div class="demo-alert-box">
    <strong>Error!</strong>
    <slot></slot>
    <img src="arrow-left.jpg" alt="">
</div>
```

#### toggle true/false
Changing variables is how Vue decides to change interfaces.
```html 
<button v-on:click="show = !show">Toggle</button>
```

```Javascript
data: {
    show: true
}
```


#### Enter/Leave transitions
[https://vuejs.org/v2/guide/transitions.html](source) Vue provides a `transition` wrapper component, allowing you to add entering/leaving transitions for any element or component in the following contexts. The transition `name` should correspond with the css classes.
```html
<div id="demo">
  <button v-on:click="show = !show">
    Toggle
  </button>
  <transition name="fade">
    <p v-if="show">hello</p>
  </transition>
</div>
```

```Javascript
data: {
    show: true
}
```

```css
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
```

#### onClick functions
Instead of doing an onclick event in Jquery
```Javascript
$(button).click(function(event) { 
    console.log(event)
})
```

In vue.js we can do it in this way:
```html
<button @click="handleClick">Click</button>
```

```Javascript
  methods: {
    handleClick: (event) => console.log(event)
  }
```

#### Arrow functions
Vue is pretty new and fancy so it's possible to use all sort of new Javascript features. Like for example arrow functions. Arrow functions the same as the usual functions. However they can be written shorter.

Old style:
```Javascript
function functionName(clickEvent) {
    console.log(clickEvent)
}
```

New style:
```Javascript
functionName (clickEvent) => {
    console.log(clickEvent)
}
```

Not much difference you say? well the cool thing is arrow functions can be way shorter than that IF you use then immediately.
```Javascript
(clickEvent) => console.log(clickEvent)
```

#### Map, Filter, Reduce
Whats also new is Map, Filter and Reduce. These three make it easier to change arrays and objects. (look at that sneaky arrow function)
> adapted from [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array](MDN)

Map:
```Javascript
var array1 = [1, 4, 9, 16];
const map1 = array1.map(x => x * 2);
// [2, 8, 18, 32]
```

Filter
```Javascript
var words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
const result = words.filter(word => word.length > 6);
console.log(result);
// expected output: Array ["exuberant", "destruction", "present"]
```

Reduce is a bit more complicated than the previous two. For example you can use Reduce to make a sum of numbers
```Javascript
const array1 = [1, 2, 3, 4];
const reducer = (accumulator, currentValue) => accumulator + currentValue;

// 1 + 2 + 3 + 4
console.log(array1.reduce(reducer));
// expected output: 10

// 5 + 1 + 2 + 3 + 4
console.log(array1.reduce(reducer, 5));
// expected output: 15
```