
var React = require('react-native');
var {
    NativeModules
} = React;
console.log('NativeModules ',NativeModules)
var CRTToast= NativeModules.Toast;
var Toast = {};

var optionsBuilder = function () {

  // defaults
  var message = null;
  var duration = "long";
  var position = "center";
  var addPixelsY = 0;

  return {
    withMessage: function(m) {
      message = m;
      return this;
    },

    withDuration: function(d) {
      duration = d;
      return this;
    },

    withPosition: function(p) {
      position = p;
      return this;
    },

    withAddPixelsY: function(y) {
      addPixelsY = y;
      return this;
    },

    build: function() {
      return {
        message: message,
        duration: duration,
        position: position,
        addPixelsY: addPixelsY
      }
    }
  }
};


var showWithOptions = function (options) {
    CRTToast.show(options);
};

var showToast = function (message, duration, position) {
  showWithOptions(
      optionsBuilder()
          .withMessage(message)
          .withPosition(position)
          .build()
      );
};

Toast.showShortTop = function (message) {
  show(message)
};

Toast.showShortCenter = function (message) {
  show(message)
};

Toast.showShortBottom = function (message) {
  show(message)
};

Toast.showLongTop = function (message) {
  show(message)
};

Toast.showLongCenter = function (message) {
  show(message)
};

Toast.showLongBottom = function (message) {
  show(message)
};

Toast.show = function (message) {
  show(message)
};

Toast.hide = function () {
  CRTToast.hide();
};
const show = message => {
  if(message === undefined || message === null || typeof(message) != 'string'){
    message = 'Something went wrong'
  }
  setTimeout(()=>{
    showToast(message, "long", "bottom");
  },300)
}
module.exports = Toast;
