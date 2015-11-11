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
            var SettingsListController = (function (_super) {
                __extends(SettingsListController, _super);
                function SettingsListController($scope, Utilities, Configuration) {
                    _super.call(this, $scope, SampleApp.ViewModels.SettingsListViewModel);
                    this.Utilities = Utilities;
                    this.Configuration = Configuration;
                }
                Object.defineProperty(SettingsListController, "$inject", {
                    get: function () {
                        return [
                            "$scope",
                            SampleApp.Services.Utilities.ID,
                            SampleApp.Services.Configuration.ID
                        ];
                    },
                    enumerable: true,
                    configurable: true
                });
                //#endregion
                //#region BaseController Overrides
                SettingsListController.prototype.view_beforeEnter = function (event, eventArgs) {
                    _super.prototype.view_beforeEnter.call(this, event, eventArgs);
                    this.viewModel.isDebugMode = this.Utilities.isDebugMode;
                    this.viewModel.isDeveloperMode = this.Configuration.enableDeveloperTools;
                };
                //#region Injection
                SettingsListController.ID = "SettingsListController";
                return SettingsListController;
            })(Controllers.BaseController);
            Controllers.SettingsListController = SettingsListController;
        })(Controllers = SampleApp.Controllers || (SampleApp.Controllers = {}));
    })(SampleApp = JustinCredible.SampleApp || (JustinCredible.SampleApp = {}));
})(JustinCredible || (JustinCredible = {}));
//# sourceMappingURL=SettingsListController.js.map