# Baseline headroom.js example

> [My #workflow is pretty much: establish baseline, push baseline, repeat.](https://twitter.com/thomasreggi/status/474309298839764992)

* [Simple Example](http://reggi.github.io/example-headroom.js)
* [Bootstrap Example](http://reggi.github.io/example-headroom.js/bootstrap.html)
* [Require.js Example](http://reggi.github.io/example-headroom.js/required.html)

So when I started messing around with [headroom.js](http://wicky.nillia.ms/headroom.js/) I was lost. This is a repo that has the minimal elements you need to get started.

## Download Dependancies

```
bower install
```

## Regenerate Less File

```
npm install less -g
lessc style.less > style.css
```

## Regenerate Require.js File

To generate the javascript file run. 

```
r.js -o bundle.js
```
