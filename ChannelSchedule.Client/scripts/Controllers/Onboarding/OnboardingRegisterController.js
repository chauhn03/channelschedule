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
            var OnboardingRegisterController = (function (_super) {
                __extends(OnboardingRegisterController, _super);
                function OnboardingRegisterController($scope, $location, $ionicHistory, Plugins, Utilities, UiHelper, Configuration) {
                    _super.call(this, $scope, SampleApp.ViewModels.OnboardingRegisterViewModel);
                    this.$location = $location;
                    this.$ionicHistory = $ionicHistory;
                    this.Plugins = Plugins;
                    this.Utilities = Utilities;
                    this.UiHelper = UiHelper;
                    this.Configuration = Configuration;
                }
                Object.defineProperty(OnboardingRegisterController, "$inject", {
                    get: function () {
                        return [
                            "$scope",
                            "$location",
                            "$ionicHistory",
                            SampleApp.Services.Plugins.ID,
                            SampleApp.Services.Utilities.ID,
                            SampleApp.Services.UiHelper.ID,
                            SampleApp.Services.Configuration.ID
                        ];
                    },
                    enumerable: true,
                    configurable: true
                });
                //#endregion
                //#region BaseController Events
                OnboardingRegisterController.prototype.view_beforeEnter = function (event, eventArgs) {
                    _super.prototype.view_beforeEnter.call(this, event, eventArgs);
                    this.viewModel.showSignIn = false;
                };
                //#endregion
                //#region UI Events
                OnboardingRegisterController.prototype.createAccount_click = function () {
                    var _this = this;
                    if (!this.viewModel.email) {
                        this.UiHelper.alert("Please enter a valid e-mail address.");
                        return;
                    }
                    if (!this.viewModel.password || !this.viewModel.confirmPassword) {
                        this.UiHelper.alert("Please fill in both password fields.");
                        return;
                    }
                    if (this.viewModel.password !== this.viewModel.confirmPassword) {
                        this.UiHelper.alert("The passwords do not match; please try again.");
                        this.viewModel.password = "";
                        this.viewModel.confirmPassword = "";
                        return;
                    }
                    this.Plugins.progressIndicator.showSimpleWithLabel(true, "Creating Account...");
                    // Simulate a wait period for an HTTP request.
                    // This is where you'd use a service to interact with your API.
                    setTimeout(function () {
                        _this.Plugins.progressIndicator.hide();
                        // Tell Ionic to to hide the back button for the next view.
                        _this.$ionicHistory.nextViewOptions({
                            disableBack: true
                        });
                        // Navigate the user to the next onboarding view.
                        _this.$location.path("/app/onboarding/share");
                        _this.$location.replace();
                        _this.scope.$apply();
                    }, 3000);
                };
                OnboardingRegisterController.prototype.signIn_click = function () {
                    var _this = this;
                    if (!this.viewModel.email) {
                        this.UiHelper.alert("Please enter a valid e-mail address.");
                        return;
                    }
                    if (!this.viewModel.password) {
                        this.UiHelper.alert("Please enter a password.");
                        return;
                    }
                    this.Plugins.progressIndicator.showSimpleWithLabel(true, "Signing in...");
                    // Simulate a wait period for an HTTP request.
                    // This is where you'd use a service to interact with your API.
                    setTimeout(function () {
                        _this.Plugins.progressIndicator.hide();
                        // Tell Ionic to to hide the back button for the next view.
                        _this.$ionicHistory.nextViewOptions({
                            disableBack: true
                        });
                        // Navigate the user to the next onboarding view.
                        _this.$location.path("/app/onboarding/share");
                        _this.$location.replace();
                        _this.scope.$apply();
                    }, 3000);
                };
                OnboardingRegisterController.prototype.needToCreateAccount_click = function () {
                    this.viewModel.password = "";
                    this.viewModel.confirmPassword = "";
                    this.viewModel.showSignIn = false;
                };
                OnboardingRegisterController.prototype.alreadyHaveAccount_click = function () {
                    this.viewModel.confirmPassword = "";
                    this.viewModel.showSignIn = true;
                };
                OnboardingRegisterController.prototype.skip_click = function () {
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
                OnboardingRegisterController.ID = "OnboardingRegisterController";
                return OnboardingRegisterController;
            })(Controllers.BaseController);
            Controllers.OnboardingRegisterController = OnboardingRegisterController;
        })(Controllers = SampleApp.Controllers || (SampleApp.Controllers = {}));
    })(SampleApp = JustinCredible.SampleApp || (JustinCredible.SampleApp = {}));
})(JustinCredible || (JustinCredible = {}));
//# sourceMappingURL=OnboardingRegisterController.js.map