'use strict';

var homePage = require('./main.po');
var loginPage = require('../login/login.po');

describe('Users homePage', function () {

    beforeEach(function () {
        browser.get('/login');
        loginPage.setCredentials(loginPage.CREDENTIALS);
        loginPage.doLogin();
    });

    it('should add a new user', function () {
        expect(homePage.users.count()).toBe(3);
        homePage.addNewButton.click();

        homePage.username.sendKeys('New User');
        homePage.age.sendKeys('20');
        homePage.city.sendKeys('Cochabamba');
        homePage.saveButton.click();
        expect(homePage.users.count()).toBe(4);
    });
});
