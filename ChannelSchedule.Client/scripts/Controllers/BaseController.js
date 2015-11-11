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
             * T - The parameter type for the model.
             */
            var BaseController = (function () {
                function BaseController(scope, ModelType) {
                    // Uncomment for debugging view events.
                    //console.log("ctor()  " + this.constructor["ID"]);
                    // Save a reference to Angular's scope object.
                    this.scope = scope;
                    // Create the view model.
                    this.viewModel = new ModelType();
                    /* tslint:disable:no-string-literal */
                    // Push the view model onto the scope so it can be
                    // referenced from the template/views.
                    this.scope["viewModel"] = this.viewModel;
                    // Push the controller onto the scope so it can be
                    // used to reference events for controls etc.
                    this.scope["controller"] = this;
                    /* tslint:enable:no-string-literal */
                    // Subscribe to various events.
                    this.scope.$on("$ionicView.loaded", _.bind(this.view_loaded, this));
                    this.scope.$on("$ionicView.enter", _.bind(this.view_enter, this));
                    this.scope.$on("$ionicView.leave", _.bind(this.view_leave, this));
                    this.scope.$on("$ionicView.beforeEnter", _.bind(this.view_beforeEnter, this));
                    this.scope.$on("$ionicView.beforeLeave", _.bind(this.view_beforeLeave, this));
                    this.scope.$on("$ionicView.afterEnter", _.bind(this.view_afterEnter, this));
                    this.scope.$on("$ionicView.afterLeave", _.bind(this.view_afterLeave, this));
                    this.scope.$on("$ionicView.unloaded", _.bind(this.view_unloaded, this));
                    this.scope.$on("$destroy", _.bind(this.destroy, this));
                }
                /**
                 * Ionic's view event: $ionicView.loaded
                 *
                 * Can be overridden by implementing controllers.
                 */
                BaseController.prototype.view_loaded = function (event, eventArgs) {
                    /* tslint:disable:no-empty */
                    /* tslint:enable:no-empty */
                    // Uncomment for debugging view events.
                    // console.log("view_loaded " + this.constructor["ID"]);
                };
                /**
                 * Ionic's view event: $ionicView.enter
                 *
                 * Can be overridden by implementing controllers.
                 */
                BaseController.prototype.view_enter = function (event, eventArgs) {
                    /* tslint:disable:no-empty */
                    /* tslint:enable:no-empty */
                    // Uncomment for debugging view events.
                    // console.log("view_enter " + this.constructor["ID"]);
                };
                /**
                 * Ionic's view event: $ionicView.leave
                 *
                 * Can be overridden by implementing controllers.
                 */
                BaseController.prototype.view_leave = function (event, eventArgs) {
                    /* tslint:disable:no-empty */
                    /* tslint:enable:no-empty */
                    // Uncomment for debugging view events.
                    // console.log("view_leave " + this.constructor["ID"]);
                };
                /**
                 * Ionic's view event: $ionicView.beforeEnter
                 *
                 * Can be overridden by implementing controllers.
                 */
                BaseController.prototype.view_beforeEnter = function (event, eventArgs) {
                    /* tslint:disable:no-empty */
                    /* tslint:enable:no-empty */
                    // Uncomment for debugging view events.
                    // console.log("view_beforeEnter " + this.constructor["ID"]);
                };
                /**
                 * Ionic's view event: $ionicView.beforeLeave
                 *
                 * Can be overridden by implementing controllers.
                 */
                BaseController.prototype.view_beforeLeave = function (event, eventArgs) {
                    /* tslint:disable:no-empty */
                    /* tslint:enable:no-empty */
                    // Uncomment for debugging view events.
                    // console.log("view_beforeLeave " + this.constructor["ID"]);
                };
                /**
                 * Ionic's view event: $ionicView.afterEnter
                 *
                 * Can be overridden by implementing controllers.
                 */
                BaseController.prototype.view_afterEnter = function (event, eventArgs) {
                    /* tslint:disable:no-empty */
                    /* tslint:enable:no-empty */
                    // Uncomment for debugging view events.
                    // console.log("view_afterEnter " + this.constructor["ID"]);
                };
                /**
                 * Ionic's view event: $ionicView.afterLeave
                 *
                 * Can be overridden by implementing controllers.
                 */
                BaseController.prototype.view_afterLeave = function (event, eventArgs) {
                    /* tslint:disable:no-empty */
                    /* tslint:enable:no-empty */
                    // Uncomment for debugging view events.
                    // console.log("view_afterLeave " + this.constructor["ID"]);
                };
                /**
                 * Ionic's view event: $ionicView.unloaded
                 *
                 * Can be overridden by implementing controllers.
                 */
                BaseController.prototype.view_unloaded = function (event, eventArgs) {
                    /* tslint:disable:no-empty */
                    /* tslint:enable:no-empty */
                    // Uncomment for debugging view events.
                    // console.log("view_unloaded " + this.constructor["ID"]);
                };
                /**
                 * Fired when this controller is destroyed. Can be used for clean-up etc.
                 *
                 * Can be overridden by implementing controllers.
                 */
                BaseController.prototype.destroy = function () {
                    /* tslint:disable:no-empty */
                    /* tslint:enable:no-empty */
                    // Uncomment for debugging view events.
                    // console.log("destroy " + this.constructor["ID"]);
                };
                return BaseController;
            })();
            Controllers.BaseController = BaseController;
        })(Controllers = SampleApp.Controllers || (SampleApp.Controllers = {}));
    })(SampleApp = JustinCredible.SampleApp || (JustinCredible.SampleApp = {}));
})(JustinCredible || (JustinCredible = {}));
//# sourceMappingURL=BaseController.js.map