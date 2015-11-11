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
            var ConfigurePinController = (function (_super) {
                __extends(ConfigurePinController, _super);
                function ConfigurePinController($scope, Plugins, UiHelper, Preferences) {
                    _super.call(this, $scope, SampleApp.ViewModels.ConfigurePinViewModel);
                    this.Plugins = Plugins;
                    this.UiHelper = UiHelper;
                    this.Preferences = Preferences;
                }
                Object.defineProperty(ConfigurePinController, "$inject", {
                    get: function () {
                        return [
                            "$scope",
                            SampleApp.Services.Plugins.ID,
                            SampleApp.Services.UiHelper.ID,
                            SampleApp.Services.Preferences.ID
                        ];
                    },
                    enumerable: true,
                    configurable: true
                });
                //#endregion
                //#region BaseController Overrides
                ConfigurePinController.prototype.view_beforeEnter = function (event, eventArgs) {
                    _super.prototype.view_beforeEnter.call(this, event, eventArgs);
                    this.viewModel.isPinSet = this.Preferences.pin !== null;
                };
                //#endregion
                //#region Controller Methods
                ConfigurePinController.prototype.setPin_click = function () {
                    var _this = this;
                    var options, model;
                    model = new SampleApp.Models.PinEntryDialogModel("Enter a value for your new PIN", null, true);
                    options = new SampleApp.Models.DialogOptions(model);
                    // Show the PIN entry dialog.
                    this.UiHelper.showDialog(Controllers.PinEntryController.ID, options).then(function (result1) {
                        // If there was a PIN returned, they didn't cancel.
                        if (result1.pin) {
                            // Show a second prompt to make sure they enter the same PIN twice.
                            // We pass in the first PIN value because we want them to be able to match it.
                            model.promptText = "Confirm your new PIN";
                            model.pinToMatch = result1.pin;
                            options.dialogData = model;
                            _this.UiHelper.showDialog(Controllers.PinEntryController.ID, options).then(function (result2) {
                                // If the second PIN entered matched the first one, then use it.
                                if (result2.matches) {
                                    _this.Preferences.pin = result2.pin;
                                    _this.viewModel.isPinSet = true;
                                    _this.Plugins.toast.showShortBottom("Your PIN has been configured.");
                                }
                            });
                        }
                    });
                };
                ConfigurePinController.prototype.changePin_click = function () {
                    var _this = this;
                    var options, model;
                    model = new SampleApp.Models.PinEntryDialogModel("Enter your current PIN", this.Preferences.pin, true);
                    options = new SampleApp.Models.DialogOptions(model);
                    // Show the PIN entry dialog; pass the existing PIN which they need to match.
                    this.UiHelper.showDialog(Controllers.PinEntryController.ID, options).then(function (result1) {
                        // If the PIN matched, then we can continue.
                        if (result1.matches) {
                            // Prompt for a new PIN.
                            model.promptText = "Enter your new PIN";
                            model.pinToMatch = null;
                            options.dialogData = model;
                            _this.UiHelper.showDialog(Controllers.PinEntryController.ID, options).then(function (result2) {
                                // Show a second prompt to make sure they enter the same PIN twice.
                                // We pass in the first PIN value because we want them to be able to match it.
                                model.promptText = "Confirm your new PIN";
                                model.pinToMatch = result2.pin;
                                options.dialogData = model;
                                _this.UiHelper.showDialog(Controllers.PinEntryController.ID, options).then(function (result3) {
                                    // If the second new PIN entered matched the new first one, then use it.
                                    if (result3.matches) {
                                        _this.Preferences.pin = result3.pin;
                                        _this.viewModel.isPinSet = true;
                                        _this.Plugins.toast.showShortBottom("Your PIN has been configured.");
                                    }
                                });
                            });
                        }
                    });
                };
                ConfigurePinController.prototype.removePin_click = function () {
                    var _this = this;
                    var options, model;
                    model = new SampleApp.Models.PinEntryDialogModel("Enter your current PIN", this.Preferences.pin, true);
                    options = new SampleApp.Models.DialogOptions(model);
                    // Show the PIN entry dialog; pass the existing PIN which they need to match.
                    this.UiHelper.showDialog(Controllers.PinEntryController.ID, options).then(function (result) {
                        // If the PIN entered matched, then we can remove it.
                        if (result.matches) {
                            _this.Preferences.pin = null;
                            _this.viewModel.isPinSet = false;
                            _this.Plugins.toast.showShortBottom("The PIN has been removed.");
                        }
                    });
                };
                //#region Injection
                ConfigurePinController.ID = "ConfigurePinController";
                return ConfigurePinController;
            })(Controllers.BaseController);
            Controllers.ConfigurePinController = ConfigurePinController;
        })(Controllers = SampleApp.Controllers || (SampleApp.Controllers = {}));
    })(SampleApp = JustinCredible.SampleApp || (JustinCredible.SampleApp = {}));
})(JustinCredible || (JustinCredible = {}));
//# sourceMappingURL=ConfigurePinController.js.map