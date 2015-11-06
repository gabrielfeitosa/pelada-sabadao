'use strict';

describe('Controller: SampleCtrl', function () {

  // load the controller's module
  beforeEach(module('peladaApp'));

  var SampleCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SampleCtrl = $controller('SampleCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(SampleCtrl.awesomeThings.length).toBe(3);
  });
});
