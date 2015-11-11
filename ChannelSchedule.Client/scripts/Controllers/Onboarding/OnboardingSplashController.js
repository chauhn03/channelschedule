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
            var OnboardingSplashController = (function (_super) {
                __extends(OnboardingSplashController, _super);
                function OnboardingSplashController($scope, $location, $ionicHistory, Utilities, UiHelper, Configuration) {
                    _super.call(this, $scope, SampleApp.ViewModels.EmptyViewModel);
                    this.$location = $location;
                    this.$ionicHistory = $ionicHistory;
                    this.Utilities = Utilities;
                    this.UiHelper = UiHelper;
                    this.Configuration = Configuration;
                }
                Object.defineProperty(OnboardingSplashController, "$inject", {
                    get: function () {
                        return [
                            "$scope",
                            "$location",
                            "$ionicHistory",
                            SampleApp.Services.Utilities.ID,
                            SampleApp.Services.UiHelper.ID,
                            SampleApp.Services.Configuration.ID
                        ];
                    },
                    enumerable: true,
                    configurable: true
                });
                //#endregion
                //#region BaseController Overrides
                OnboardingSplashController.prototype.view_beforeEnter = function (event, eventArgs) {
                    var _this = this;
                    _super.prototype.view_beforeEnter.call(this, event, eventArgs);
                    // During onboarding the menu shouldn't be visible.
                    _.defer(function () {
                        _this.UiHelper.setAllowSideMenu(false);
                    });
                };
                //#endregion
                //#region UI Events
                OnboardingSplashController.prototype.skip_click = function () {
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
                OnboardingSplashController.ID = "OnboardingSplashController";
                return OnboardingSplashController;
            })(Controllers.BaseController);
            Controllers.OnboardingSplashController = OnboardingSplashController;
        })(Controllers = SampleApp.Controllers || (SampleApp.Controllers = {}));
    })(SampleApp = JustinCredible.SampleApp || (JustinCredible.SampleApp = {}));
})(JustinCredible || (JustinCredible = {}));
//# sourceMappingURL=OnboardingSplashController.js.map