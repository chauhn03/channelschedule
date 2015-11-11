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
            var ReorderCategoriesController = (function (_super) {
                __extends(ReorderCategoriesController, _super);
                function ReorderCategoriesController($scope, Utilities, Preferences, UiHelper) {
                    _super.call(this, $scope, SampleApp.ViewModels.ReorderCategoriesViewModel, ReorderCategoriesController.ID);
                    this.Utilities = Utilities;
                    this.Preferences = Preferences;
                    this.UiHelper = UiHelper;
                }
                Object.defineProperty(ReorderCategoriesController, "$inject", {
                    get: function () {
                        return [
                            "$scope",
                            SampleApp.Services.Utilities.ID,
                            SampleApp.Services.Preferences.ID,
                            SampleApp.Services.UiHelper.ID
                        ];
                    },
                    enumerable: true,
                    configurable: true
                });
                //#endregion
                //#region BaseDialogController Overrides
                ReorderCategoriesController.prototype.dialog_shown = function () {
                    _super.prototype.dialog_shown.call(this);
                    // Grab the available categories.
                    this.viewModel.categories = this.Utilities.categories;
                };
                //#endregion
                //#region Controller Methods
                ReorderCategoriesController.prototype.item_reorder = function (item, fromIndex, toIndex) {
                    this.viewModel.categories.splice(fromIndex, 1);
                    this.viewModel.categories.splice(toIndex, 0, item);
                };
                ReorderCategoriesController.prototype.done_click = function () {
                    var categoryOrder = [];
                    this.viewModel.categories.forEach(function (categoryItem) {
                        categoryOrder.push(categoryItem.name);
                    });
                    this.Preferences.categoryOrder = categoryOrder;
                    this.close();
                };
                //#region Injection
                ReorderCategoriesController.ID = "ReorderCategoriesController";
                ReorderCategoriesController.TemplatePath = "templates/Dialogs/Reorder-Categories.html";
                return ReorderCategoriesController;
            })(Controllers.BaseDialogController);
            Controllers.ReorderCategoriesController = ReorderCategoriesController;
        })(Controllers = SampleApp.Controllers || (SampleApp.Controllers = {}));
    })(SampleApp = JustinCredible.SampleApp || (JustinCredible.SampleApp = {}));
})(JustinCredible || (JustinCredible = {}));
//# sourceMappingURL=ReorderCategoriesController.js.map