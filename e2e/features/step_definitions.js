const {Given, Then, When} = require('cucumber');
const expect = require('chai').expect;

Given(/^Open the app$/,() => {
  browser.url("http://www.google.com");
  });
  
Given(/^I go to the website "([^"]*)"$/, function (url) {
    browser.url(url);
  });

Then(/^I expect the title of the page "([^"]*)"$/, function (title) {
    expect(browser.getTitle()).to.be.eql(title);
  });
