# tinyJ
***Warning - This is not in any way endorsed, created, coded, built or otherwise made by the Jquery Team. If you are looking for the official jquery product please go to [the official jquery website](https://jquery.com).***

TinyJ - a short, succinct DOM interactions library inspired by Jquery. 

It doesn't have all the features that Jquery has and certainly no plugins, but minified and zipped it comes down to (TODO: update minified data) and it has the core features that JQuery has. You'll also find that a lot of the syntax is quite similar.

## Usage
In plain HTML
```html
<script src="https://unpkg.com/tinyJ/bin/tinyJ.min.js"></script>
<script>
    $('#paragraph').html('Hello World!')
</script>
```

If you're reading this from the npm page you probably want to use 
TinyJ for React (coming soon)
```shell
$ npm install tinyJ
```
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

As of `0.1.1` only byId selection is available:
* `idname`

You can also use `$.ajax` in the same way you would use it in Jquery. Note that many features will be missing(for obvious reasons). See the jquery documentation for more information

See the changelog for more information.

## Development

Hooray! You want to help? 

Here's a few guidelines:
We have some git hooks installed, however for a cleaner experience in this dimension, we recommend you install VScode, which has the necessary extensions outlined below:-
1. vivaxy.vscode-conventional-commits
.
.
.

