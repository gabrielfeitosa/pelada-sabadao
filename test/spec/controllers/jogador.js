'use strict';

describe('Controller: JogadorCtrl', function () {

  // load the controller's module
  beforeEach(module('peladaApp'));

  var JogadorCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    JogadorCtrl = $controller('JogadorCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(JogadorCtrl.awesomeThings.length).toBe(3);
  });
});
