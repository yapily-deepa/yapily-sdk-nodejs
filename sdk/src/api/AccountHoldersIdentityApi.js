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
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/Identity'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/Identity'));
  } else {
    // Browser globals (root is window)
    if (!root.YapilyRestApiExplorer) {
      root.YapilyRestApiExplorer = {};
    }
    root.YapilyRestApiExplorer.AccountHoldersIdentityApi = factory(root.YapilyRestApiExplorer.ApiClient, root.YapilyRestApiExplorer.Identity);
  }
}(this, function(ApiClient, Identity) {
  'use strict';

  /**
   * AccountHoldersIdentity service.
   * @module api/AccountHoldersIdentityApi
   * @version 0.0.2
   */

  /**
   * Constructs a new AccountHoldersIdentityApi. 
   * @alias module:api/AccountHoldersIdentityApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the identityUsingGET operation.
     * @callback module:api/AccountHoldersIdentityApi~identityUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Identity} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * identity
     * @param {String} userUuid userUuid
     * @param {String} institutionId institutionId
     * @param {module:api/AccountHoldersIdentityApi~identityUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Identity}
     */
    this.identityUsingGET = function(userUuid, institutionId, callback) {
      var postBody = null;

      // verify the required parameter 'userUuid' is set
      if (userUuid === undefined || userUuid === null) {
        throw new Error("Missing the required parameter 'userUuid' when calling identityUsingGET");
      }

      // verify the required parameter 'institutionId' is set
      if (institutionId === undefined || institutionId === null) {
        throw new Error("Missing the required parameter 'institutionId' when calling identityUsingGET");
      }


      var pathParams = {
        'userUuid': userUuid,
        'institutionId': institutionId
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json;charset=UTF-8'];
      var returnType = Identity;

      return this.apiClient.callApi(
        '/users/{userUuid}/institutions/{institutionId}/identity', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
