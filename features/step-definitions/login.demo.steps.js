const { Given, When, Then } = require('@wdio/cucumber-framework');
const { $, browser } = require('@wdio/globals');
const chai = require('chai');
const expect = chai.expect;

Given(/^user is on login page$/, async() => {
    await browser.url('https://the-internet.herokuapp.com/login')
});

When(/^user enters username and password$/, async() => {

    await $('#username').setValue('tomsmith')
    await $('#password').setValue('SuperSecretPassword!')
});


When(/^user enters (.*) and (.*)$/, async(username, password) => {
    await $('#username').setValue(username)
    await $('#password').setValue(password)
});

When(/^clicks on the login button$/, async() => {

    await $('button[type="submit"]').click()
});

Then(/^user is navigated to the home page$/, async() => {

    const flashText = await $('#flash').getText();
    expect(flashText).to.include('Youii logged into a secure area!');
});


Then(/^this (.*) is displayed$/, async(message) => {
	const flashText = await $('#flash').getText();
    expect(flashText).to.include(message);
});
