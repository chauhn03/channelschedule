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
            var LogEntryController = (function (_super) {
                __extends(LogEntryController, _super);
                function LogEntryController($scope, $stateParams, Logger, Plugins, Utilities, versionInfo) {
                    _super.call(this, $scope, SampleApp.ViewModels.LogEntryViewModel);
                    this.$stateParams = $stateParams;
                    this.Logger = Logger;
                    this.Plugins = Plugins;
                    this.Utilities = Utilities;
                    this.versionInfo = versionInfo;
                }
                Object.defineProperty(LogEntryController, "$inject", {
                    get: function () {
                        return [
                            "$scope",
                            "$stateParams",
                            SampleApp.Services.Logger.ID,
                            SampleApp.Services.Plugins.ID,
                            SampleApp.Services.Utilities.ID,
                            "versionInfo"];
                    },
                    enumerable: true,
                    configurable: true
                });
                //#endregion
                //#region BaseController Overrides
                LogEntryController.prototype.view_beforeEnter = function (event, eventArgs) {
                    _super.prototype.view_beforeEnter.call(this, event, eventArgs);
                    this.viewModel.logEntry = this.Logger.getLog(this.$stateParams.id);
                    this.viewModel.date = moment(this.viewModel.logEntry.timestamp).format("MMMM Do YYYY");
                    this.viewModel.time = moment(this.viewModel.logEntry.timestamp).format("h:mm:ss a");
                    try {
                        this.viewModel.formattedMetadata = JSON.stringify(this.viewModel.logEntry.metadata, null, 4);
                    }
                    catch (exception) {
                        this.viewModel.formattedMetadata = "Unable to stringify metadata: " + exception;
                    }
                    this.viewModel.icon = this.Logger.getIconForLevel(this.viewModel.logEntry.level);
                    this.viewModel.color = this.Logger.getColorForLevel(this.viewModel.logEntry.level);
                    this.viewModel.levelDisplay = this.Logger.getDisplayLevelForLevel(this.viewModel.logEntry.level);
                };
                //#endregion
                //#region Controller Methods
                LogEntryController.prototype.copy_click = function () {
                    var _this = this;
                    this.Plugins.clipboard.copy(JSON.stringify(this.viewModel.logEntry), function () {
                        _this.Plugins.toast.showShortBottom("Log copied to clipboard!");
                    }, null);
                };
                LogEntryController.prototype.email_click = function () {
                    var uri = this.Utilities.format("mailto:{0}?subject={1} Error Log&body={2}", this.versionInfo.email, this.versionInfo.applicationName, JSON.stringify(this.viewModel.logEntry));
                    uri = encodeURI(uri);
                    window.open(uri, "_system");
                };
                //#region Injection
                LogEntryController.ID = "LogEntryController";
                return LogEntryController;
            })(Controllers.BaseController);
            Controllers.LogEntryController = LogEntryController;
        })(Controllers = SampleApp.Controllers || (SampleApp.Controllers = {}));
    })(SampleApp = JustinCredible.SampleApp || (JustinCredible.SampleApp = {}));
})(JustinCredible || (JustinCredible = {}));
//# sourceMappingURL=LogEntryController.js.map