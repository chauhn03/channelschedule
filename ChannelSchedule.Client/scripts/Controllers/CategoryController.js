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
            var CategoryController = (function (_super) {
                __extends(CategoryController, _super);
                function CategoryController($scope, $stateParams) {
                    _super.call(this, $scope, SampleApp.ViewModels.CategoryViewModel);
                    this.$stateParams = $stateParams;
                }
                Object.defineProperty(CategoryController, "$inject", {
                    get: function () {
                        return [
                            "$scope",
                            "$stateParams"
                        ];
                    },
                    enumerable: true,
                    configurable: true
                });
                //#endregion
                //#region BaseController Events
                CategoryController.prototype.view_beforeEnter = function (event, eventArgs) {
                    _super.prototype.view_beforeEnter.call(this, event, eventArgs);
                    // Set the category number into the view model using the value as provided
                    // in the view route (via the $stateParameters).
                    this.viewModel.categoryNumber = this.$stateParams.categoryNumber;
                };
                //#region Injection
                CategoryController.ID = "CategoryController";
                return CategoryController;
            })(Controllers.BaseController);
            Controllers.CategoryController = CategoryController;
        })(Controllers = SampleApp.Controllers || (SampleApp.Controllers = {}));
    })(SampleApp = JustinCredible.SampleApp || (JustinCredible.SampleApp = {}));
})(JustinCredible || (JustinCredible = {}));
//# sourceMappingURL=CategoryController.js.map