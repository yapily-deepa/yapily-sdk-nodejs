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

(function(factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/Account', 'model/ApplicationUser', 'model/Country', 'model/Identity', 'model/IdentityAddress', 'model/Institution', 'model/InstitutionConsent', 'model/Transaction', 'api/AccountHoldersIdentityApi', 'api/AccountsApi', 'api/TransactionsApi', 'api/YapilyApplicationsUsersApi', 'api/YapilyInstitutionsApi'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('./ApiClient'), require('./model/Account'), require('./model/ApplicationUser'), require('./model/Country'), require('./model/Identity'), require('./model/IdentityAddress'), require('./model/Institution'), require('./model/InstitutionConsent'), require('./model/Transaction'), require('./api/AccountHoldersIdentityApi'), require('./api/AccountsApi'), require('./api/TransactionsApi'), require('./api/YapilyApplicationsUsersApi'), require('./api/YapilyInstitutionsApi'));
  }
}(function(ApiClient, Account, ApplicationUser, Country, Identity, IdentityAddress, Institution, InstitutionConsent, Transaction, AccountHoldersIdentityApi, AccountsApi, TransactionsApi, YapilyApplicationsUsersApi, YapilyInstitutionsApi) {
  'use strict';

  /**
   * To_access_endpoints_that_require_authentication_use_your_Application_bkeyb_and_bsecretb_created_on_the_a_hrefhttpsdashboard_yapily_com_target_blankDashboarda.<br>
   * The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
   * <p>
   * An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
   * <pre>
   * var YapilyRestApiExplorer = require('index'); // See note below*.
   * var xxxSvc = new YapilyRestApiExplorer.XxxApi(); // Allocate the API class we're going to use.
   * var yyyModel = new YapilyRestApiExplorer.Yyy(); // Construct a model instance.
   * yyyModel.someProperty = 'someValue';
   * ...
   * var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
   * ...
   * </pre>
   * <em>*NOTE: For a top-level AMD script, use require(['index'], function(){...})
   * and put the application logic within the callback function.</em>
   * </p>
   * <p>
   * A non-AMD browser application (discouraged) might do something like this:
   * <pre>
   * var xxxSvc = new YapilyRestApiExplorer.XxxApi(); // Allocate the API class we're going to use.
   * var yyy = new YapilyRestApiExplorer.Yyy(); // Construct a model instance.
   * yyyModel.someProperty = 'someValue';
   * ...
   * var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
   * ...
   * </pre>
   * </p>
   * @module index
   * @version 0.0.2
   */
  var exports = {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient: ApiClient,
    /**
     * The Account model constructor.
     * @property {module:model/Account}
     */
    Account: Account,
    /**
     * The ApplicationUser model constructor.
     * @property {module:model/ApplicationUser}
     */
    ApplicationUser: ApplicationUser,
    /**
     * The Country model constructor.
     * @property {module:model/Country}
     */
    Country: Country,
    /**
     * The Identity model constructor.
     * @property {module:model/Identity}
     */
    Identity: Identity,
    /**
     * The IdentityAddress model constructor.
     * @property {module:model/IdentityAddress}
     */
    IdentityAddress: IdentityAddress,
    /**
     * The Institution model constructor.
     * @property {module:model/Institution}
     */
    Institution: Institution,
    /**
     * The InstitutionConsent model constructor.
     * @property {module:model/InstitutionConsent}
     */
    InstitutionConsent: InstitutionConsent,
    /**
     * The Transaction model constructor.
     * @property {module:model/Transaction}
     */
    Transaction: Transaction,
    /**
     * The AccountHoldersIdentityApi service constructor.
     * @property {module:api/AccountHoldersIdentityApi}
     */
    AccountHoldersIdentityApi: AccountHoldersIdentityApi,
    /**
     * The AccountsApi service constructor.
     * @property {module:api/AccountsApi}
     */
    AccountsApi: AccountsApi,
    /**
     * The TransactionsApi service constructor.
     * @property {module:api/TransactionsApi}
     */
    TransactionsApi: TransactionsApi,
    /**
     * The YapilyApplicationsUsersApi service constructor.
     * @property {module:api/YapilyApplicationsUsersApi}
     */
    YapilyApplicationsUsersApi: YapilyApplicationsUsersApi,
    /**
     * The YapilyInstitutionsApi service constructor.
     * @property {module:api/YapilyInstitutionsApi}
     */
    YapilyInstitutionsApi: YapilyInstitutionsApi
  };

  return exports;
}));
