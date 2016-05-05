/**
 * Created by betrayer on 05.05.16.
 */
"use strict";
var Button = function Button(text) {
    this._text = text;
    this._element = document.createElement("input");
    this._element.setAttribute("type", "button");
    this._element.setAttribute("value", this._text);

    this._element.style.backgroundColor = "pink";
    this._element.style.display = "block";
    this._element.style.fontSize = "20px";
    this._element.style.border = "1px solid gray";
    this._element.style.borderRadius = "4px";
};

Button.prototype.add = function() {
    document.body.appendChild(this._element);
};