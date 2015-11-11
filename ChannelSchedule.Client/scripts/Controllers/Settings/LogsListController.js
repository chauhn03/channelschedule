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
            var LogsListController = (function (_super) {
                __extends(LogsListController, _super);
                function LogsListController($scope, $ionicPopover, Logger, UiHelper) {
                    _super.call(this, $scope, SampleApp.ViewModels.LogsListViewModel);
                    this.$ionicPopover = $ionicPopover;
                    this.Logger = Logger;
                    this.UiHelper = UiHelper;
                }
                Object.defineProperty(LogsListController, "$inject", {
                    get: function () {
                        return [
                            "$scope",
                            "$ionicPopover",
                            SampleApp.Services.Logger.ID,
                            SampleApp.Services.UiHelper.ID
                        ];
                    },
                    enumerable: true,
                    configurable: true
                });
                //#region BaseController Overrides
                LogsListController.prototype.view_beforeEnter = function (event, eventArgs) {
                    var _this = this;
                    _super.prototype.view_beforeEnter.call(this, event, eventArgs);
                    this.$ionicPopover.fromTemplateUrl("templates/Settings/Log-Filter-Menu.html", {
                        scope: this.scope
                    }).then(function (popover) {
                        _this._popover = popover;
                    });
                    this.viewModel.showError = true;
                    this.viewModel.showWarn = true;
                    this.viewModel.showFatal = true;
                    this.populateViewModel(this.Logger.logs);
                };
                //#endregion
                //#region Private Helper Methods
                LogsListController.prototype.populateViewModel = function (logEntries) {
                    var _this = this;
                    if (logEntries == null) {
                        logEntries = [];
                    }
                    this.viewModel.logs = {};
                    // First, lets sort by the time stamp ascending, then reverse
                    // it so we have the most recent log entries at the top.
                    logEntries = _.sortBy(logEntries, "timestamp").reverse();
                    // Now use the actual log entry to create the view model.
                    logEntries.forEach(function (logEntry) {
                        var formattedDate, viewModel;
                        if (!_this.isApplicableForCurrentFilter(logEntry)) {
                            return;
                        }
                        viewModel = new SampleApp.ViewModels.LogEntryViewModel();
                        // Put the actual log entry into the view model.
                        viewModel.logEntry = logEntry;
                        viewModel.time = moment(logEntry.timestamp).format("h:mm:ss a");
                        viewModel.icon = _this.Logger.getIconForLevel(logEntry.level);
                        viewModel.color = _this.Logger.getColorForLevel(logEntry.level);
                        viewModel.levelDisplay = _this.Logger.getDisplayLevelForLevel(logEntry.level);
                        // Format the date and time for display.
                        formattedDate = moment(logEntry.timestamp).format("l");
                        // The view model is a dictionary of formatted dates to an
                        // array of log entries that happened on that date. So first,
                        // we'll make sure the array exists for this date...
                        if (!_this.viewModel.logs[formattedDate]) {
                            _this.viewModel.logs[formattedDate] = [];
                        }
                        // ... then we'll push this entry into that days collection.
                        _this.viewModel.logs[formattedDate].push(viewModel);
                    });
                };
                LogsListController.prototype.isApplicableForCurrentFilter = function (logEntry) {
                    if (!logEntry || logEntry.level == null) {
                        return true;
                    }
                    switch (logEntry.level) {
                        case SampleApp.Models.LogLevel.TRACE:
                            return this.viewModel.showTrace;
                        case SampleApp.Models.LogLevel.DEBUG:
                            return this.viewModel.showDebug;
                        case SampleApp.Models.LogLevel.WARN:
                            return this.viewModel.showWarn;
                        case SampleApp.Models.LogLevel.INFO:
                            return this.viewModel.showInfo;
                        case SampleApp.Models.LogLevel.ERROR:
                            return this.viewModel.showError;
                        case SampleApp.Models.LogLevel.FATAL:
                            return this.viewModel.showFatal;
                        default:
                            return true;
                    }
                };
                //#endregion
                //#region Controller Methods
                LogsListController.prototype.filter_click = function (event) {
                    this._popover.show(event);
                };
                LogsListController.prototype.trace_click = function () {
                    this.viewModel.showTrace = !this.viewModel.showTrace;
                    this.populateViewModel(this.Logger.logs);
                };
                LogsListController.prototype.debug_click = function () {
                    this.viewModel.showDebug = !this.viewModel.showDebug;
                    this.populateViewModel(this.Logger.logs);
                };
                LogsListController.prototype.info_click = function () {
                    this.viewModel.showInfo = !this.viewModel.showInfo;
                    this.populateViewModel(this.Logger.logs);
                };
                LogsListController.prototype.warn_click = function () {
                    this.viewModel.showWarn = !this.viewModel.showWarn;
                    this.populateViewModel(this.Logger.logs);
                };
                LogsListController.prototype.error_click = function () {
                    this.viewModel.showError = !this.viewModel.showError;
                    this.populateViewModel(this.Logger.logs);
                };
                LogsListController.prototype.fatal_click = function () {
                    this.viewModel.showFatal = !this.viewModel.showFatal;
                    this.populateViewModel(this.Logger.logs);
                };
                LogsListController.prototype.clear_click = function () {
                    var _this = this;
                    this.UiHelper.confirm("Are you sure you want to clear the logs?", "Clear Logs").then(function (result) {
                        if (result === SampleApp.Constants.Buttons.Yes) {
                            _this.Logger.clear();
                            _this.viewModel.logs = {};
                        }
                    });
                };
                //#region Injection
                LogsListController.ID = "LogsListController";
                return LogsListController;
            })(Controllers.BaseController);
            Controllers.LogsListController = LogsListController;
        })(Controllers = SampleApp.Controllers || (SampleApp.Controllers = {}));
    })(SampleApp = JustinCredible.SampleApp || (JustinCredible.SampleApp = {}));
})(JustinCredible || (JustinCredible = {}));
//# sourceMappingURL=LogsListController.js.map