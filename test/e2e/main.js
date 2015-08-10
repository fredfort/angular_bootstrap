'use strict';

describe('angularjs homepage todo list', function() {

	var link1,link2, link3;
	beforeEach(function() {
		browser.get('http://localhost:9003/');
	});

	it('should automatically redirect to /welcome when location hash is empty', function() {
    	expect(browser.getLocationAbsUrl()).toBe("/welcome");
  	});

	it('should have a title', function() {
	    expect(browser.getTitle()).toEqual('Angular bootstrap');
	});

	it('should initialize the data variable', function(){
		var environmentSpan = element(by.css(".environment"));
		expect(environmentSpan.getText()).toContain('dev');
	});

	it('should go to page 1', function() {
		link1 = element(by.css('.module1Link'));
		link1.click();
		expect(browser.getLocationAbsUrl()).toBe("/module1");
	});

	it('should have resolved the module1Data variable', function(){
		var status = element.all(by.repeater('result in module1Data'));
		expect(status.count()).toEqual(3); // This is wrong!
	});

	it('should go to page 2', function() {
		link2 = element(by.css('.module2Link'));
		link2.click();
		expect(browser.getLocationAbsUrl()).toBe("/module2");
	});

	it('should stay on welcome page', function() {
		link3 = element(by.css('.module3Link'));
		link3.click();
		expect(browser.getLocationAbsUrl()).toBe("/welcome");
	});

});