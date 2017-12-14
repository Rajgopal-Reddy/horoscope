'use strict';

describe('Controller: HoroscopeCtrl', function () {

  // load the controller's module
  beforeEach(module('horoscopeApp'));

  var HoroscopeCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    HoroscopeCtrl = $controller('HoroscopeCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(HoroscopeCtrl.awesomeThings.length).toBe(3);
  });
});
