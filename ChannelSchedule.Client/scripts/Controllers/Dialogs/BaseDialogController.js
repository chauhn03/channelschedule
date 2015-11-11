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
            /**
             * This is the base controller that all other controllers should utilize.
             *
             * It handles saving a reference to the Angular scope, newing up the given
             * model object type, and injecting the view model and controller onto the
             * scope object for use in views.
             *
             * V - The type of the view model that this controller will utilize.
             * D - The type of data object that will be passed in when this dialog is opened.
             * R - The type of the data object that will be returned when this dialog is closed.
             */
            var BaseDialogController = (function (_super) {
                __extends(BaseDialogController, _super);
                function BaseDialogController(scope, ViewModelType, dialogId) {
                    _super.call(this, scope, ViewModelType);
                    this.dialogId = dialogId;
                    this.scope.$on("modal.shown", _.bind(this.modal_shown, this));
                    this.scope.$on("modal.hidden", _.bind(this.modal_hidden, this));
                }
                //#region Events
                BaseDialogController.prototype.modal_shown = function (ngEvent, instance) {
                    // Only respond to modal.shown events for this dialog.
                    if (this.dialogId !== instance.dialogId) {
                        return;
                    }
                    // Save off a reference to the Ionic modal instance.
                    this.modalInstance = instance;
                    // Hold a reference to the data object that was passed in when opening the dialog.
                    this.data = instance.dialogData;
                    // Call the dialog shown event which descendants can override.
                    this.dialog_shown();
                };
                BaseDialogController.prototype.modal_hidden = function (eventArgs, instance) {
                    // Only respond to modal.hidden events for this dialog.
                    if (this.dialogId !== instance.dialogId) {
                        return;
                    }
                    // Call the dialog hidden event which descendants can override.
                    this.dialog_hidden();
                };
                //#endregion
                //#region Protected Methods
                /**
                 * Used to get the data object that this was opened with.
                 */
                BaseDialogController.prototype.getData = function () {
                    return this.data;
                };
                /**
                 * Used to close the dialog.
                 *
                 * @param result The return result value for this dialog.
                 */
                BaseDialogController.prototype.close = function (result) {
                    this.modalInstance.result = result;
                    this.modalInstance.hide();
                    this.modalInstance.remove();
                };
                //#endregion
                //#region Override-able Methods
                /**
                 * Fired when this dialog is shown.
                 *
                 * Can be overridden by implementing controllers.
                 */
                BaseDialogController.prototype.dialog_shown = function () {
                    /* tslint:disable:no-empty */
                    /* tslint:enable:no-empty */
                };
                /**
                 * Fired when this dialog is hidden.
                 *
                 * Can be overridden by implementing controllers.
                 */
                BaseDialogController.prototype.dialog_hidden = function () {
                    /* tslint:disable:no-empty */
                    /* tslint:enable:no-empty */
                };
                return BaseDialogController;
            })(Controllers.BaseController);
            Controllers.BaseDialogController = BaseDialogController;
        })(Controllers = SampleApp.Controllers || (SampleApp.Controllers = {}));
    })(SampleApp = JustinCredible.SampleApp || (JustinCredible.SampleApp = {}));
})(JustinCredible || (JustinCredible = {}));
//# sourceMappingURL=BaseDialogController.js.map