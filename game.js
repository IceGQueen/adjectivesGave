"use strict";

var mainMenu = new Page("Main menu");

var btnstart = new Button("Start", function() {
    gamePage.show();
});
mainMenu.addElement(btnstart);

var btnsettings = new Button("Settings",function (){settingsPage.show();});
mainMenu.addElement(btnsettings);

mainMenu.show();

var gamePage = new Page("Game");
var btnBack = new Button("Back to main menu", function() {
    mainMenu.show();
});
gamePage.addElement(btnBack);

var settingsPage = new Page ("Settings");
var btnBack1 = new Button("Back to main menu", function() {
    mainMenu.show();
});
settingsPage.addElement(btnBack1);