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
            var AboutController = (function (_super) {
                __extends(AboutController, _super);
                function AboutController($scope, $ionicHistory, Utilities, Configuration, Plugins, versionInfo) {
                    _super.call(this, $scope, SampleApp.ViewModels.AboutViewModel);
                    this.$ionicHistory = $ionicHistory;
                    this.Utilities = Utilities;
                    this.Configuration = Configuration;
                    this.Plugins = Plugins;
                    this.versionInfo = versionInfo;
                }
                Object.defineProperty(AboutController, "$inject", {
                    get: function () {
                        return [
                            "$scope",
                            "$ionicHistory",
                            SampleApp.Services.Utilities.ID,
                            SampleApp.Services.Configuration.ID,
                            SampleApp.Services.Plugins.ID,
                            "versionInfo"
                        ];
                    },
                    enumerable: true,
                    configurable: true
                });
                //#endregion
                //#region BaseController Overrides
                AboutController.prototype.view_beforeEnter = function (event, eventArgs) {
                    _super.prototype.view_beforeEnter.call(this, event, eventArgs);
                    this.viewModel.logoClickCount = 0;
                    this.viewModel.applicationName = this.versionInfo.applicationName;
                    this.viewModel.versionString = this.Utilities.format("{0}.{1}.{2}", this.versionInfo.majorVersion, this.versionInfo.minorVersion, this.versionInfo.buildVersion);
                    this.viewModel.timestamp = this.versionInfo.buildTimestamp;
                };
                //#endregion
                //#region Controller Methods
                AboutController.prototype.logo_click = function () {
                    if (this.Configuration.enableDeveloperTools) {
                        return;
                    }
                    this.viewModel.logoClickCount += 1;
                    // If they've clicked the logo 10 times, then enable development tools
                    // and push them back to the settings page.
                    if (this.viewModel.logoClickCount > 9) {
                        this.Configuration.enableDeveloperTools = true;
                        this.Plugins.toast.showShortBottom("Development Tools Enabled!");
                        this.$ionicHistory.goBack();
                    }
                };
                AboutController.prototype.copyrightInfo_click = function () {
                    window.open(this.versionInfo.copyrightInfoUrl, "_system");
                };
                AboutController.prototype.website_click = function () {
                    window.open(this.versionInfo.websiteUrl, "_system");
                };
                AboutController.prototype.gitHubRepo_click = function () {
                    window.open(this.versionInfo.githubUrl, "_system");
                };
                //#region Injection
                AboutController.ID = "AboutController";
                return AboutController;
            })(Controllers.BaseController);
            Controllers.AboutController = AboutController;
        })(Controllers = SampleApp.Controllers || (SampleApp.Controllers = {}));
    })(SampleApp = JustinCredible.SampleApp || (JustinCredible.SampleApp = {}));
})(JustinCredible || (JustinCredible = {}));
//# sourceMappingURL=AboutController.js.map