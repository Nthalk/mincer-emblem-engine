// DOM
var Element = {};
Element.firstChild = function () {
    return Element;
};
Element.innerHTML = function () {
    return Element;
};
Element.setAttribute = function () {
    return Element;
};
Element.appendChild = function () {
    return Element;
};
Element.childNodes = [0, 1]
var document = { createRange: false, createElement: function () {
    return Element;
} };
var window = this;
this.document = document;
// Console
var console = window.console = {};
console.log = console.info = console.warn = console.error = function () {
};
// jQuery
var jQuery = function () {
    return jQuery;
};
jQuery.ready = function () {
    return jQuery;
};
jQuery.inArray = function () {
    return jQuery;
};
jQuery.jquery = "1.7.1";
jQuery.event = { fixHooks: {} };
var $ = jQuery;
