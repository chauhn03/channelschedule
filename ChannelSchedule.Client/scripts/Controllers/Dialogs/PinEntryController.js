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
            var PinEntryController = (function (_super) {
                __extends(PinEntryController, _super);
                function PinEntryController($scope, Utilities, Preferences, Plugins) {
                    _super.call(this, $scope, SampleApp.ViewModels.PinEntryViewModel, PinEntryController.ID);
                    this.Utilities = Utilities;
                    this.Preferences = Preferences;
                    this.Plugins = Plugins;
                }
                Object.defineProperty(PinEntryController, "$inject", {
                    get: function () {
                        return [
                            "$scope",
                            SampleApp.Services.Utilities.ID,
                            SampleApp.Services.Preferences.ID,
                            SampleApp.Services.Plugins.ID
                        ];
                    },
                    enumerable: true,
                    configurable: true
                });
                //#endregion
                //#region BaseDialogController Overrides
                PinEntryController.prototype.dialog_shown = function () {
                    _super.prototype.dialog_shown.call(this);
                    this.viewModel.pin = "";
                    this.viewModel.showBackButton = !!this.getData().showBackButton;
                    this.viewModel.promptText = this.getData().promptText;
                    this.viewModel.pinToMatch = this.getData().pinToMatch;
                };
                //#endregion
                //#region Private Methods
                PinEntryController.prototype.validatePin = function () {
                    if (this.viewModel.pinToMatch) {
                        // If there is a PIN to match, then we'll see if it matches. This is
                        // for the case when we are validating a user entered PIN against one
                        // that is already configured.
                        if (this.viewModel.pin === this.viewModel.pinToMatch) {
                            // If the PIN values match, then close this dialog instance.
                            this.close(new SampleApp.Models.PinEntryDialogResultModel(true, false, this.viewModel.pin));
                        }
                        else {
                            // If the PIN values do not match, then clear the fields and remain
                            // open so the user can try again.
                            this.viewModel.pin = "";
                            this.Plugins.toast.showShortTop("Invalid pin; please try again.");
                            this.scope.$apply();
                        }
                    }
                    else {
                        // If we aren't attempting to match a PIN, then this must be a prompt
                        // for a new PIN value. In this case we can just set the result and
                        // close this modal instance.
                        this.close(new SampleApp.Models.PinEntryDialogResultModel(null, false, this.viewModel.pin));
                    }
                };
                //#endregion
                //#region Controller Methods
                PinEntryController.prototype.number_click = function (value) {
                    if (this.viewModel.pin.length < 4) {
                        this.viewModel.pin += value;
                        // If all four digits have been entered then we need to take action.
                        // We wait a fraction of a second so that the user can see the last
                        // digit in the PIN appear in the UI.
                        if (this.viewModel.pin.length === 4) {
                            _.delay(_.bind(this.validatePin, this), 700);
                        }
                    }
                };
                PinEntryController.prototype.clear_click = function () {
                    this.viewModel.pin = "";
                };
                PinEntryController.prototype.back_click = function () {
                    this.close(new SampleApp.Models.PinEntryDialogResultModel(null, true, null));
                };
                //#region Injection
                PinEntryController.ID = "PinEntryController";
                PinEntryController.TemplatePath = "templates/Dialogs/Pin-Entry.html";
                return PinEntryController;
            })(Controllers.BaseDialogController);
            Controllers.PinEntryController = PinEntryController;
        })(Controllers = SampleApp.Controllers || (SampleApp.Controllers = {}));
    })(SampleApp = JustinCredible.SampleApp || (JustinCredible.SampleApp = {}));
})(JustinCredible || (JustinCredible = {}));
//# sourceMappingURL=PinEntryController.js.map