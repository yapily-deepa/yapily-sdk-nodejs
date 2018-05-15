/**
 * Yapily REST API Explorer
 * To access endpoints that require authentication, use your Application <b>key</b> and <b>secret</b> created on the <a href=https://dashboard.yapily.com/ target=_blank>Dashboard</a>
 *
 * OpenAPI spec version: 0.0.2
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.3.1-SNAPSHOT
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.YapilyRestApiExplorer);
  }
}(this, function(expect, YapilyRestApiExplorer) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new YapilyRestApiExplorer.InstitutionConsent();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('InstitutionConsent', function() {
    it('should create an instance of InstitutionConsent', function() {
      // uncomment below and update the code to test InstitutionConsent
      //var instane = new YapilyRestApiExplorer.InstitutionConsent();
      //expect(instance).to.be.a(YapilyRestApiExplorer.InstitutionConsent);
    });

    it('should have the property institutionId (base name: "institutionId")', function() {
      // uncomment below and update the code to test the property institutionId
      //var instane = new YapilyRestApiExplorer.InstitutionConsent();
      //expect(instance).to.be();
    });

  });

}));