'use strict';

describe('Controller: TesteCtrl', function () {

  // load the controller's module
  beforeEach(module('peladaApp'));

  var TesteCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    TesteCtrl = $controller('TesteCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(TesteCtrl.awesomeThings.length).toBe(3);
  });
});
