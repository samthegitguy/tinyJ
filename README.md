# tinyJ
***Warning - This is not in any way endorsed, created, coded, built or otherwise made by the Jquery Team. If you are looking for the official jquery product please go to [the official jquery website](jquery.com).***

TinyJ - a short, succinct DOM interactions library inspired by Jquery. 

It doesn't have all the features that Jquery has and certainly no plugins, but minified and zipped it comes down to (TODO: update minified data) and it has the core features that JQuery has. You'll also find that a lot of the syntax is quite similar.

## Usage
In plain HTML
```html
<script src="https://unpkg.com/tinyJ/tinyJ.js"></script>
<script>
    $('#paragraph').html('Hello World!')
</script>
```
Using React (coming soon)
```jsx
import react from 'react'
import $ from 'tinyJ'
ReactDOM.render(
    <p id="example">
    Hello...
    </p>
)
$('#example').html('...world!')
```

As of `0.1.0` only a small subset of CSS selectors are supported: 
* `#idname`
* `.classname`
* `tagname`

You can also use `$.ajax` very simply: (maybe we should use callbacks)

```javascript
console.log($.ajax('google.com'))
```
See the changelog for more information.