/**
 * Created by betrayer on 05.05.16.
 */
"use strict";
var Button = function Button(text, callback) {
    this._text = text;
    this._callback = callback;
    this._element = document.createElement("input");
    this._element.setAttribute("type", "button");
    this._element.setAttribute("value", this._text);
    this._element.setAttribute("class", "button");

    this._element.addEventListener('click', Button.prototype._onClick.bind(this), false)
};

Button.prototype.add = function() {
    document.body.appendChild(this._element);
};

Button.prototype._onClick = function (){
    if (this._callback) {
        this._callback();
    } else {
        console.log ("You forgot to give callback in the constructor of button named " + this._text);
    }
};




var Page = function Page(name) {
    this._name = name;

    this._header = document.createElement("div");
    this._header.setAttribute("class", "page-header");
    this._header.innerHTML = this._name;
    this._content = document.createElement("div");
    this._content.setAttribute("class", "page-content");

    this._content.appendChild(this._header);

    this._elements = [];
};

Page.prototype.addElement = function(element) {
    this._elements.push(element);
    this._content.appendChild(element._element);
};

Page.prototype.show = function() {
    if (window.currentPage) {
        if (window.currentPage === this) {
            return;
        }
        window.currentPage.hide();
    }
    document.body.appendChild(this._content);
    window.currentPage = this;
};

Page.prototype.hide = function() {
    if (window.currentPage === this) {
        document.body.removeChild(this._content);
        delete window.currentPage;
    }
};