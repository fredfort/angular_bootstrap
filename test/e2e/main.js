'use strict';

describe('angularjs homepage todo list', function() {

	var link1,link2, link3;
	beforeEach(function() {
		browser.get('http://localhost:9003/');
		link1 = element(by.css('.module1Link'));
		link2 = element(by.css('.module2Link'));
		link3 = element(by.css('.module3Link'));
	});

	it('should automatically redirect to /welcome when location hash is empty', function() {
		link2 = element(by.css('.module2Link'));
    	expect(browser.getLocationAbsUrl()).toBe("/welcome");
  	});

	it('should have a title', function() {
	    expect(browser.getTitle()).toEqual('Angular bootstrap');
	});

	it('should go to page 1', function() {
		link1.click();
		expect(browser.getLocationAbsUrl()).toBe("/module1");
	});

	it('should go to page 2', function() {
		link2.click();
		expect(browser.getLocationAbsUrl()).toBe("/module2");
	});

	it('should stay on welcome page', function() {
		link3.click();
		expect(browser.getLocationAbsUrl()).toBe("/welcome");
	});

	/*it('configuration is set up properly', function() {
		var data = element(by.model('data'));
		expect(data.length).toBe("dev");
	});*/
	

});