require.config({
  paths: {
    //"jquery": "./bower_components/jquery/dist/jquery",
    "headroom": "./bower_components/headroom.js/dist/headroom",
    //"jquery-headroom": "./bower_components/headroom.js/dist/jQuery.headroom"
  },
  shim: {
    "headroom": {
      "exports": "Headroom"
    }
  }
})

define("main", function(require) {

  console.log("is running");

  var Headroom = require("headroom");

  var header = document.querySelector("#navmain");
  if (window.location.hash) {
    header.classList.add("slide--up");
  }

  new Headroom(header, {
    tolerance: {
      down: 10,
      up: 20
    },
    offset: 205,
    classes: {
      initial: "slide",
      pinned: "slide--reset",
      unpinned: "slide--up"
    }
  }).init();

});

require(["main"]);