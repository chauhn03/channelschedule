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
            var OnboardingShareController = (function (_super) {
                __extends(OnboardingShareController, _super);
                function OnboardingShareController($scope, $location, $ionicHistory, Utilities, UiHelper, Plugins, Configuration) {
                    _super.call(this, $scope, SampleApp.ViewModels.EmptyViewModel);
                    this.$location = $location;
                    this.$ionicHistory = $ionicHistory;
                    this.Utilities = Utilities;
                    this.UiHelper = UiHelper;
                    this.Plugins = Plugins;
                    this.Configuration = Configuration;
                }
                Object.defineProperty(OnboardingShareController, "$inject", {
                    get: function () {
                        return [
                            "$scope",
                            "$location",
                            "$ionicHistory",
                            SampleApp.Services.Utilities.ID,
                            SampleApp.Services.UiHelper.ID,
                            SampleApp.Services.Plugins.ID,
                            SampleApp.Services.Configuration.ID
                        ];
                    },
                    enumerable: true,
                    configurable: true
                });
                //#endregion
                //#region UI Events
                OnboardingShareController.prototype.share_click = function (platformName) {
                    this.Plugins.toast.showShortCenter("Share for " + platformName);
                };
                OnboardingShareController.prototype.done_click = function () {
                    // Allow the side menu to be shown again.
                    this.UiHelper.setAllowSideMenu(true);
                    // Set the preference value so onboarding doesn't occur again.
                    this.Configuration.hasCompletedOnboarding = true;
                    // Tell Ionic to to hide the back button for the next view.
                    this.$ionicHistory.nextViewOptions({
                        disableBack: true
                    });
                    // Navigate the user to their default view.
                    this.$location.path(this.Utilities.defaultCategory.href.substring(1));
                    this.$location.replace();
                };
                //#region Injection
                OnboardingShareController.ID = "OnboardingShareController";
                return OnboardingShareController;
            })(Controllers.BaseController);
            Controllers.OnboardingShareController = OnboardingShareController;
        })(Controllers = SampleApp.Controllers || (SampleApp.Controllers = {}));
    })(SampleApp = JustinCredible.SampleApp || (JustinCredible.SampleApp = {}));
})(JustinCredible || (JustinCredible = {}));
//# sourceMappingURL=OnboardingShareController.js.map