var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var JustinCredible;
(function (JustinCredible) {
    var SampleApp;
    (function (SampleApp) {
        var Controllers;
        (function (Controllers) {
            var RootController = (function (_super) {
                __extends(RootController, _super);
                function RootController($scope, $location, $http, Plugins, Utilities, UiHelper, Preferences) {
                    _super.call(this, $scope, SampleApp.ViewModels.RootViewModel);
                    this.$location = $location;
                    this.$http = $http;
                    this.Plugins = Plugins;
                    this.Utilities = Utilities;
                    this.UiHelper = UiHelper;
                    this.Preferences = Preferences;
                    //#endregion
                    this._hasLoaded = false;
                }
                Object.defineProperty(RootController, "$inject", {
                    get: function () {
                        return [
                            "$scope",
                            "$location",
                            "$http",
                            SampleApp.Services.Plugins.ID,
                            SampleApp.Services.Utilities.ID,
                            SampleApp.Services.UiHelper.ID,
                            SampleApp.Services.Preferences.ID
                        ];
                    },
                    enumerable: true,
                    configurable: true
                });
                //#region BaseController Overrides
                RootController.prototype.view_loaded = function (event, eventArgs) {
                    _super.prototype.view_loaded.call(this, event, eventArgs);
                    // In most cases Ionic's load event only fires once, the first time the controller is
                    // initialize and attached to the DOM. However, abstract controllers (eg this one) will
                    // have their Ionic view events fired for child views as well. Here we ensure that we
                    // don't run the code below if we've already loaded before and a child is loading.
                    if (this._hasLoaded) {
                        return;
                    }
                    this._hasLoaded = true;
                    this.scope.$on(SampleApp.Constants.Events.HTTP_UNAUTHORIZED, _.bind(this.http_unauthorized, this));
                    this.scope.$on(SampleApp.Constants.Events.HTTP_FORBIDDEN, _.bind(this.http_forbidden, this));
                    this.scope.$on(SampleApp.Constants.Events.HTTP_NOT_FOUND, _.bind(this.http_notFound, this));
                    this.scope.$on(SampleApp.Constants.Events.HTTP_UNKNOWN_ERROR, _.bind(this.http_unknownError, this));
                    this.scope.$on(SampleApp.Constants.Events.HTTP_ERROR, _.bind(this.http_error, this));
                    this.viewModel.categories = this.Utilities.categories;
                };
                //#endregion
                //#region Event Handlers
                RootController.prototype.http_unauthorized = function (event, response) {
                    // Unauthorized should mean that a token wasn't sent, but we'll null these out anyways.
                    this.Preferences.userId = null;
                    this.Preferences.token = null;
                    this.Plugins.toast.showLongBottom("You do not have a token (401); please login.");
                };
                RootController.prototype.http_forbidden = function (event, response) {
                    // A token was sent, but was no longer valid. Null out the invalid token.
                    this.Preferences.userId = null;
                    this.Preferences.token = null;
                    this.Plugins.toast.showLongBottom("Your token has expired (403); please login again.");
                };
                RootController.prototype.http_notFound = function (event, response) {
                    // The restful API services are down maybe?
                    this.Plugins.toast.showLongBottom("Server not available (404); please contact your administrator.");
                };
                RootController.prototype.http_unknownError = function (event, response) {
                    // No network connection, invalid certificate, or other system level error.
                    this.Plugins.toast.showLongBottom("Network error; please try again later.");
                };
                /**
                 * A generic catch all for HTTP errors that are not handled above in the other
                 * error handlers.
                 */
                RootController.prototype.http_error = function (event, response) {
                    this.Plugins.toast.showLongBottom("An error has occurred; please try again.");
                };
                //#endregion
                //#region Controller Methods
                RootController.prototype.reorder_click = function () {
                    var _this = this;
                    this.UiHelper.showDialog(Controllers.ReorderCategoriesController.ID).then(function () {
                        // After the re-order dialog is closed, re-populate the category
                        // items since they may have been re-ordered.
                        _this.viewModel.categories = _this.Utilities.categories;
                    });
                };
                //#region Injection
                RootController.ID = "RootController";
                return RootController;
            })(Controllers.BaseController);
            Controllers.RootController = RootController;
        })(Controllers = SampleApp.Controllers || (SampleApp.Controllers = {}));
    })(SampleApp = JustinCredible.SampleApp || (JustinCredible.SampleApp = {}));
})(JustinCredible || (JustinCredible = {}));
//# sourceMappingURL=RootController.js.map