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
            var CloudSyncController = (function (_super) {
                __extends(CloudSyncController, _super);
                function CloudSyncController($scope, $ionicHistory) {
                    _super.call(this, $scope, SampleApp.ViewModels.CloudSyncViewModel);
                    this.$ionicHistory = $ionicHistory;
                    this.scope.$on("icon-panel.cloud-icon-panel.created", _.bind(this.iconPanel_created, this));
                }
                Object.defineProperty(CloudSyncController, "$inject", {
                    get: function () {
                        return [
                            "$scope",
                            "$ionicHistory"
                        ];
                    },
                    enumerable: true,
                    configurable: true
                });
                //#region BaseController Overrides
                CloudSyncController.prototype.view_beforeEnter = function (event, eventArgs) {
                    _super.prototype.view_beforeEnter.call(this, event, eventArgs);
                    // Setup the view model.
                    this.viewModel.showButton = true;
                    this.viewModel.showUserCount = true;
                    this.viewModel.icon = "ion-ios-cloud-upload-outline";
                    this.viewModel.userCount = 2344;
                };
                CloudSyncController.prototype.view_leave = function (event, eventArgs) {
                    _super.prototype.view_leave.call(this, event, eventArgs);
                    // Stop the toggleIcon function from firing.
                    clearInterval(this._updateInterval);
                };
                CloudSyncController.prototype.iconPanel_created = function (event, instance) {
                    // Store a reference to the instance of this icon-panel so we can use it later.
                    this._cloudIconPanel = instance;
                    // Register the toggleIcon function to fire every second to swap the cloud icon.
                    this._updateInterval = setInterval(_.bind(this.toggleIcon, this), 1000);
                };
                //#endregion
                //#region Private Methods
                CloudSyncController.prototype.toggleIcon = function () {
                    // Simply switch the icon depending on which icon is currently set.
                    if (this._cloudIconPanel.getIcon() === "ion-ios-cloud-upload-outline") {
                        this._cloudIconPanel.setIcon("ion-ios-cloud-download-outline");
                    }
                    else {
                        this._cloudIconPanel.setIcon("ion-ios-cloud-upload-outline");
                    }
                    // We have to notify Angular that we want an update manually since the
                    // setInterval causes this function to be executed outside of an Angular
                    // digest cycle.
                    this.scope.$apply();
                };
                //#endregion
                //#region Controller Methods
                CloudSyncController.prototype.setup_click = function () {
                    // Stop the auto icon swapping.
                    clearInterval(this._updateInterval);
                    // Change the text on the icon panel using the instance directly.
                    this._cloudIconPanel.setText("Unable to contact the cloud!");
                    // Can change the icon via a setIcon call on the directive instance
                    // or by changing the view model property that it is bound to.
                    //this.iconPanel.setIcon("ion-ios-rainy"); // Change via directly the instance.
                    this.viewModel.icon = "ion-ios-rainy"; // Change via view model binding.
                    // Hide the button and user count text.
                    this.viewModel.showButton = false;
                    this.viewModel.showUserCount = false;
                };
                //#region Injection
                CloudSyncController.ID = "CloudSyncController";
                return CloudSyncController;
            })(Controllers.BaseController);
            Controllers.CloudSyncController = CloudSyncController;
        })(Controllers = SampleApp.Controllers || (SampleApp.Controllers = {}));
    })(SampleApp = JustinCredible.SampleApp || (JustinCredible.SampleApp = {}));
})(JustinCredible || (JustinCredible = {}));
//# sourceMappingURL=CloudSyncController.js.map