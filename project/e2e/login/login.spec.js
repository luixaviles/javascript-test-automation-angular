'use strict';

var page = require('./login.po');

describe('Login Page', function () {

    beforeEach(function () {
        browser.get('/login');
    });

    it('should display error message for invalid credentials', function () {
        page.setCredentials({
            username: 'wrong-username',
            password: 'wrong-password'
        });

        page.doLogin();

        browser.debugger();
        page.getError().then(function(text){
            console.log('text', text);
        });
        expect(page.getError()).toBe(page.MESSAGE_INVALID_CREDENTIALS);
    });

    it('should redirect to home page after sucessfull login', function () {
        page.setCredentials(page.CREDENTIALS);
        page.doLogin();
        expect(browser.getCurrentUrl()).toEqual('http://localhost:9000/home');
    });
});
