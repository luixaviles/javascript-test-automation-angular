'use strict';

var LoginPage = function () {
    this.username = element(by.model('user.username'));
    this.password = element(by.model('user.password'));

    this.login = element(by.css('[ng-click="login()"]'));
    this.error = element(by.css('[type="danger"]'));

    this.CREDENTIALS = {
        username: 'test',
        password: 'test'
    };
    this.MESSAGE_INVALID_CREDENTIALS = 'Invalid credentials';

    this.setCredentials = function(credentials) {
        if(credentials.username) {
            this.username.clear();
            this.username.sendKeys(credentials.username);
        }
        if(credentials.password) {
            this.password.clear();
            this.password.sendKeys(credentials.password);
        }
    }

    this.doLogin = function() {
        this.login.click();
    }

    this.getError = function() {
        return this.error.getText();
    }
};

module.exports = new LoginPage();

