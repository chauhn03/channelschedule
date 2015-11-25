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
var JustinCredible;
(function (JustinCredible) {
    var SampleApp;
    (function (SampleApp) {
        var Directives;
        (function (Directives) {
            /**
             * This is the base directive that all other directives for elements should utilize.
             *
             * It handles saving references to the various objects in its constructor.
             *
             * T - The parameter type for the scope.
             */
            var BaseElementDirective = (function () {
                function BaseElementDirective() {
                }
                BaseElementDirective.prototype.initialize = function () {
                    throw new Error("Directives that extend BaseElementDirective should implement their own initialize method.");
                };
                BaseElementDirective.prototype.render = function () {
                    throw new Error("Directives that extend BaseElementDirective should implement their own render method.");
                };
                /**
                 * A flag that can be used to identify element directives that use this
                 * class as their base class.
                 */
                BaseElementDirective.__BaseElementDirective = true;
                return BaseElementDirective;
            })();
            Directives.BaseElementDirective = BaseElementDirective;
        })(Directives = SampleApp.Directives || (SampleApp.Directives = {}));
    })(SampleApp = JustinCredible.SampleApp || (JustinCredible.SampleApp = {}));
})(JustinCredible || (JustinCredible = {}));
/**
 * This file exists to control the order in which compiled TypeScript files are concatenated
 * into the resulting appBundle.js file. While all *.ts files could be listed here, we don't
 * need to list them all since the tsc compiler will automatically traverse the directory tree.
 * Here we can list base components that are needed by other components (eg base classes) that
 * must be parsed before the dependent class.
 */
/// <reference path="Controllers/BaseController.ts" />
/// <reference path="Controllers/Dialogs/BaseDialogController.ts" />
/// <reference path="Directives/BaseElementDirective.ts" />
var JustinCredible;
(function (JustinCredible) {
    var SampleApp;
    (function (SampleApp) {
        var Application;
        (function (Application) {
            //#region Variables
            /**
             * The root Angular application module.
             */
            var ngModule;
            /**
             * Used to hold references to several of the Angular-injected services for use within
             * this local scope. These references are populated in angular_initialize().
             */
            var services;
            /**
             * Indicates if the PIN entry dialog is currently being shown. This is used to determine
             * if the device_pause event should update the lastPausedAt timestamp (we don't want to
             * update the timestamp if the dialog is open because it will allow the user to pause
             * and then kill the app and bypass the PIN entry screen on next resume).
             */
            var isShowingPinPrompt;
            /**
             * Keeps track of the application being in the background or not.
             * This flag is updated via the device_pause and device_resume events.
             */
            var appIsInBackground = false;
            /**
             * Stores the current Angular route for debugging.
             */
            var currentRoute = "";
            //#endregion
            /**
             * This is the main entry point for the application. It is used to setup Angular and
             * configure its controllers, services, etc.
             *
             * It is invoked via the Main.js script included from the index.html page.
             */
            function main() {
                var versionInfo;
                // Set the default error handler for all uncaught exceptions.
                window.onerror = window_onerror;
                //versionInfo = {
                //    applicationName: "Sample App",
                //    copyrightInfoUrl: "https://github.com/Justin-Credible/Ionic-TypeScript-MDHA-Starter/blob/master/LICENSE",
                //    websiteUrl: "http://www.justin-credible.net",
                //    githubUrl: "https://github.com/Justin-Credible",
                //    email: "justin.unterreiner@gmail.com",
                //    majorVersion: window.buildVars.majorVersion,
                //    minorVersion: window.buildVars.minorVersion,
                //    buildVersion: window.buildVars.buildVersion,
                //    versionString: window.buildVars.majorVersion + "." + window.buildVars.minorVersion + "." + window.buildVars.buildVersion,
                //    buildTimestamp: window.buildVars.buildTimestamp
                //};
                // Define the top level Angular module for the application.
                // Here we also specify the Angular modules this module depends upon.
                ngModule = angular.module("JustinCredible.SampleApp.Application", ["ui.router", "ionic", "ngMockE2E"]);
                // Define our constants.
                ngModule.constant("isRipple", !!(window.parent && window.parent.ripple));
                ngModule.constant("isCordova", typeof (cordova) !== "undefined");
                ngModule.constant("buildVars", window.buildVars);
                ngModule.constant("isChromeExtension", typeof (chrome) !== "undefined" && typeof (chrome.runtime) !== "undefined" && typeof (chrome.runtime.id) !== "undefined");
                //ngModule.constant("versionInfo", versionInfo);
                ngModule.constant("apiVersion", "1.0");
                // Register the services, directives, filters, and controllers with Angular.
                registerServices();
                registerDirectives();
                registerFilters();
                registerControllers();
                // Specify the initialize/run and configuration functions.
                ngModule.run(angular_initialize);
                ngModule.config(angular_configure);
            }
            Application.main = main;
            //#region Helpers
            /**
             * Used construct an instance of an object using the new operator with the given constructor
             * function and arguments.
             *
             * http://stackoverflow.com/a/1608546/4005811
             *
             * @param constructor The constructor function to invoke with the new keyword.
             * @param args The arguments to be passed into the constructor function.
             */
            function construct(constructor, args) {
                function F() {
                    return constructor.apply(this, args);
                }
                ;
                F.prototype = constructor.prototype;
                return new F();
            }
            /**
             * Used to register each of the services that exist in the Service namespace
             * with the given Angular module.
             */
            function registerServices() {
                // Register each of the services that exist in the Service namespace.
                _.each(SampleApp.Services, function (Service) {
                    // A static ID property is required to register a service.
                    if (Service.ID) {
                        if (typeof (Service.getFactory) === "function") {
                            // If a static method named getFactory() is available we'll invoke it
                            // to get a factory function to register as a factory.
                            console.log("Registering factory " + Service.ID + "...");
                            ngModule.factory(Service.ID, Service.getFactory());
                        }
                        else {
                            console.log("Registering service " + Service.ID + "...");
                            ngModule.service(Service.ID, Service);
                        }
                    }
                });
            }
            /**
             * Used to register each of the directives that exist in the Directives namespace
             * with the given Angular module.
             */
            function registerDirectives() {
                _.each(SampleApp.Directives, function (Directive) {
                    if (Directive.ID) {
                        if (Directive.__BaseElementDirective) {
                            console.log("Registering element directive " + Directive.ID + "...");
                            ngModule.directive(Directive.ID, getElementDirectiveFactoryFunction(Directive));
                        }
                        else {
                            ngModule.directive(Directive.ID, getDirectiveFactoryParameters(Directive));
                        }
                    }
                });
            }
            /**
             * Used to register each of the filters that exist in the Filters namespace
             * with the given Angular module.
             */
            function registerFilters() {
                _.each(SampleApp.Filters, function (Filter) {
                    if (Filter.ID && typeof (Filter.filter) === "function") {
                        console.log("Registering filter " + Filter.ID + "...");
                        ngModule.filter(Filter.ID, getFilterFactoryFunction(Filter.filter));
                    }
                });
            }
            /**
             * Used to register each of the controllers that exist in the Controller namespace
             * with the given Angular module.
             */
            function registerControllers() {
                // Register each of the controllers that exist in the Controllers namespace.
                _.each(SampleApp.Controllers, function (Controller) {
                    if (Controller.ID) {
                        console.log("Registering controller " + Controller.ID + "...");
                        ngModule.controller(Controller.ID, Controller);
                    }
                });
            }
            /**
             * Used to register each of the Controller classes that extend BaseDialog as dialogs
             * with the UiHelper.
             */
            function registerDialogs() {
                // Loop over each of the controllers, and for any controller that dervies from BaseController
                // register it as a dialog using its ID with the UiHelper.
                _.each(SampleApp.Controllers, function (Controller) {
                    // Don't try to register the BaseDialogController since it is abstract.
                    if (Controller === SampleApp.Controllers.BaseDialogController) {
                        return; // Continue
                    }
                    if (services.Utilities.derivesFrom(Controller, SampleApp.Controllers.BaseDialogController)) {
                        services.UiHelper.registerDialog(Controller.ID, Controller.TemplatePath);
                    }
                });
            }
            /**
             * Used to create a function that returns a data structure describing an Angular directive
             * for an element from one of our own classes implementing IElementDirective. It handles
             * creating an instance and invoked the render method when linking is invoked.
             *
             * @param Directive A class reference (not instance) to a element directive class that implements Directives.IElementDirective.
             * @returns A factory function that can be used by Angular to create an instance of the element directive.
             */
            function getElementDirectiveFactoryFunction(Directive) {
                var params = [], injectedArguments = null, descriptor = {};
                /* tslint:disable:no-string-literal */
                // If the directive is annotated with an injection array, we'll add the injection
                // array's values to the list first.
                if (Directive["$inject"]) {
                    params = params.concat(Directive["$inject"]);
                }
                // Here we set the options for the Angular directive descriptor object.
                // We get these values from the static fields on the class reference.
                descriptor.restrict = Directive["restrict"];
                descriptor.template = Directive["template"];
                descriptor.replace = Directive["replace"];
                descriptor.transclude = Directive["transclude"];
                descriptor.scope = Directive["scope"];
                /* tslint:enable:no-string-literal */
                if (descriptor.restrict !== "E") {
                    console.warn("BaseElementDirectives are meant to restrict only to element types.");
                }
                // Here we define the link function that Angular invokes when it is linking the
                // directive to the element.
                descriptor.link = function (scope, instanceElement, instanceAttributes, controller, transclude) {
                    // New up an instance of the directive for to link to this element.
                    // Pass along the arguments that were injected so the instance can receive them.
                    var instance = construct(Directive, injectedArguments);
                    /* tslint:disable:no-string-literal */
                    // Set the protected properties.
                    instance["scope"] = scope;
                    instance["element"] = instanceElement;
                    instance["attributes"] = instanceAttributes;
                    instance["controller"] = controller;
                    instance["transclude"] = transclude;
                    /* tslint:enable:no-string-literal */
                    // Delegate to the initialize and render methods.
                    instance.initialize();
                    instance.render();
                };
                // The last parameter in the array is the function that will be executed by Angular
                // when the directive is being used.
                params.push(function () {
                    // Save off a reference to the array of injected objects so we can use them when
                    // constructing an instance of the directive (see above). These arguments are the
                    // objects that were injected via the $inject property.
                    injectedArguments = arguments;
                    // Return the descriptor object which describes the directive to Angular.
                    return descriptor;
                });
                return params;
            }
            /**
             * Used to create an array of injection property names followed by a function that will be
             * used by Angular to create an instance of the given directive.
             *
             * @param Directive A class reference (not instance) to a directive class.
             * @returns An array of injection property names followed by a factory function for use by Angular.
             */
            function getDirectiveFactoryParameters(Directive) {
                var params = [];
                /* tslint:disable:no-string-literal */
                // If the directive is annotated with an injection array, we'll add the injection
                // array's values to the list first.
                if (Directive["$inject"]) {
                    params = params.concat(Directive["$inject"]);
                }
                /* tslint:enable:no-string-literal */
                // The last parameter in the array is the function that will be executed by Angular
                // when the directive is being used.
                params.push(function () {
                    // Create a new instance of the directive, passing along the arguments (which
                    // will be the values injected via the $inject annotation).
                    return construct(Directive, arguments);
                });
                return params;
            }
            /**
             * Used to create a function that returns a function for use by a filter.
             *
             * @param fn The function that will provide the filter's logic.
             */
            function getFilterFactoryFunction(fn) {
                return function () { return fn; };
            }
            //#endregion
            //#region Platform Configuration
            /**
             * The main initialize/run function for Angular; fired once the AngularJs framework is done loading.
             *
             * The parameters to this method are automatically determined by Angular's dependency injection based
             * on the name of each parameter.
             */
            function angular_initialize($rootScope, $location, $ionicHistory, $ionicPlatform, Plugins, Utilities, UiHelper, Preferences, Configuration, MockHttpApis, Logger) {
                // Save off references to the modules for use within this application module.
                services = {
                    $rootScope: $rootScope,
                    $location: $location,
                    $ionicHistory: $ionicHistory,
                    Plugins: Plugins,
                    Utilities: Utilities,
                    UiHelper: UiHelper,
                    Preferences: Preferences,
                    Configuration: Configuration,
                    MockHttpApis: MockHttpApis,
                    Logger: Logger
                };
                // Once AngularJs has loaded we'll wait for the Ionic platform's ready event.
                // This event will be fired once the device ready event fires via Cordova.
                $ionicPlatform.ready(function () {
                    ionicPlatform_ready();
                });
                // Mock up or allow HTTP responses.
                MockHttpApis.mockHttpCalls(Configuration.enableMockHttpCalls);
            }
            ;
            /**
             * Fired once the Ionic framework determines that the device is ready.
             */
            function ionicPlatform_ready() {
                // Subscribe to device events.
                document.addEventListener("pause", device_pause);
                document.addEventListener("resume", device_resume);
                document.addEventListener("menubutton", device_menuButton);
                // Subscribe to Angular events.
                services.$rootScope.$on("$locationChangeStart", angular_locationChangeStart);
                // Register all of the dialogs with the UiHelper.
                registerDialogs();
                // We use this combination of settings so prevent the visual jank that
                // would otherwise occur when tapping an input that shows the keyboard.
                services.Plugins.keyboard.disableScroll(true);
                services.Plugins.keyboard.hideKeyboardAccessoryBar(false);
                // Now that the platform is ready, we'll delegate to the resume event.
                // We do this so the same code that fires on resume also fires when the
                // application is started for the first time.
                device_resume();
            }
            /**
             * Function that is used to configure AngularJs.
             *
             * The parameters to this method are automatically determined by Angular's
             * dependency injection based on the name of each parameter.
             */
            function angular_configure($stateProvider, $urlRouterProvider, $provide, $httpProvider, $compileProvider) {
                // Intercept the default Angular exception handler.
                $provide.decorator("$exceptionHandler", function ($delegate) {
                    return function (exception, cause) {
                        // Delegate to our custom handler.
                        angular_exceptionHandler(exception, cause);
                        // Delegate to the default/base Angular behavior.
                        $delegate(exception, cause);
                    };
                });
                // Whitelist several URI schemes to prevent Angular from marking them as un-safe.
                // http://stackoverflow.com/questions/19590818/angularjs-and-windows-8-route-error
                $compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|ftp|mailto|file|ghttps?|ms-appx|x-wmapp0|chrome-extension):/);
                $compileProvider.imgSrcSanitizationWhitelist(/^\s*(https?|ftp|file|ms-appx|x-wmapp0):|data:image\//);
                // Register our custom interceptor with the HTTP provider so we can hook into AJAX request events.
                $httpProvider.interceptors.push(SampleApp.Services.HttpInterceptor.ID);
                // Setup all of the client side routes and their controllers and views.
                SampleApp.RouteConfig.setupRoutes($stateProvider, $urlRouterProvider);
                // If mock API calls are enabled, then we'll add a random delay for all HTTP requests to simulate
                // network latency so we can see the spinners and loading bars. Useful for demo purposes.
                if (localStorage.getItem("ENABLE_MOCK_HTTP_CALLS") === "true") {
                    SampleApp.Services.MockHttpApis.setupMockHttpDelay($provide);
                }
            }
            ;
            //#endregion
            //#region Event Handlers
            /**
             * Fired when the OS decides to minimize or pause the application. This usually
             * occurs when the user presses the device's home button or switches applications.
             */
            function device_pause() {
                appIsInBackground = true;
                if (!isShowingPinPrompt) {
                    // Store the current date/time. This will be used to determine if we need to
                    // show the PIN lock screen the next time the application is resumed.
                    services.Configuration.lastPausedAt = moment();
                }
            }
            /**
             * Fired when the OS restores an application to the foreground. This usually occurs
             * when the user launches an app that is already open or uses the OS task manager
             * to switch back to the application.
             */
            function device_resume() {
                appIsInBackground = false;
                isShowingPinPrompt = true;
                // Potentially display the PIN screen.
                services.UiHelper.showPinEntryAfterResume().then(function () {
                    isShowingPinPrompt = false;
                    // We should show onboarding if the user hasn't completed it yet and they are not
                    // already in the process of working through it. Note that we do this purposefully
                    // after the PIN screen for the case where the user may be upgrading from a version
                    // of the application that doesn't have onboarding (we wouldn't want them to be able
                    // to bypass the PIN entry in that case).
                    var shouldShowOnboarding = !services.Configuration.hasCompletedOnboarding
                        && services.$location.path().indexOf("/app/onboarding") === -1;
                    if (shouldShowOnboarding) {
                        // Tell Ionic to not animate and clear the history (hide the back button)
                        // for the next view that we'll be navigating to below.
                        services.$ionicHistory.nextViewOptions({
                            disableAnimate: true,
                            disableBack: true
                        });
                        // Navigate the user to the onboarding splash view.
                        services.$location.path("/app/onboarding/splash");
                        services.$location.replace();
                        return;
                    }
                    // If the user is still at the blank sreen, then push them to their default view.
                    if (services.$location.url() === "/app/blank") {
                        // Tell Ionic to not animate and clear the history (hide the back button)
                        // for the next view that we'll be navigating to below.
                        services.$ionicHistory.nextViewOptions({
                            disableAnimate: true,
                            disableBack: true
                        });
                        // Navigate the user to their default view.
                        services.$location.path(services.Utilities.defaultCategory.href.substring(1));
                        services.$location.replace();
                    }
                });
            }
            /**
             * Fired when the menu hard (or soft) key is pressed on the device (eg Android menu key).
             * This isn't used for iOS devices because they do not have a menu button key.
             */
            function device_menuButton() {
                // Broadcast this event to all child scopes. This allows controllers for individual
                // views to handle this event and show a contextual menu etc.
                services.$rootScope.$broadcast(SampleApp.Constants.Events.APP_MENU_BUTTON);
            }
            /**
             * Fired when Angular's route/location (eg URL hash) is changing.
             */
            function angular_locationChangeStart(event, newRoute, oldRoute) {
                // Chop off the long "file://..." prefix (we only care about the hash tag).
                newRoute = newRoute.substring(newRoute.indexOf("#"));
                oldRoute = oldRoute.substring(oldRoute.indexOf("#"));
                // Save off the current route so we can use it for logging.
                currentRoute = newRoute;
                services.Logger.trace("Application", "angular_locationChangeStart", "Angular location changed.", { oldRoute: oldRoute, newRoute: newRoute });
            }
            ;
            /**
             * Fired when an unhandled JavaScript exception occurs outside of Angular.
             */
            function window_onerror(message, uri, lineNumber, columnNumber) {
                // Log the exception using the built-in logger.
                try {
                    services.Logger.error("Application", "window_onerror", message, { uri: uri, lineNumber: lineNumber, columnNumber: columnNumber, currentRoute: currentRoute });
                }
                catch (ex) {
                }
                try {
                    // Show a generic message to the user.
                    services.Plugins.toast.showLongBottom("An error has occurred; please try again.");
                    // If this exception occurred in the HttpInterceptor, there may still be a progress indicator on the scrren.
                    services.Plugins.progressIndicator.hide();
                }
                catch (ex) {
                    services.Logger.warn("Application", "window_onerror", "There was a problem alerting the user to an Angular error; falling back to a standard alert().", ex);
                    alert("An error has occurred; please try again.");
                }
            }
            /**
             * Fired when an exception occurs within Angular.
             *
             * This includes uncaught exceptions in ng-click methods for example.
             */
            function angular_exceptionHandler(exception, cause) {
                var message = exception.message;
                if (!message) {
                    message = "An unknown error ocurred in an Angular event.";
                }
                if (!cause) {
                    cause = "[Unknown]";
                }
                // Log the exception using the built-in logger.
                try {
                    services.Logger.error("Application", "angular_exceptionHandler", message, { cause: cause, exception: exception, route: currentRoute });
                }
                catch (ex) {
                }
                try {
                    // Show a generic message to the user.
                    services.Plugins.toast.showLongBottom("An error has occurred; please try again.");
                    // If this exception occurred in the HttpInterceptor, there may still be a progress indicator on the scrren.
                    services.Plugins.progressIndicator.hide();
                }
                catch (ex) {
                    services.Logger.warn("Application", "angular_exceptionHandler", "There was a problem alerting the user to an Angular error; falling back to a standard alert().", ex);
                    alert("An error has occurred; please try again.");
                }
            }
        })(Application = SampleApp.Application || (SampleApp.Application = {}));
    })(SampleApp = JustinCredible.SampleApp || (JustinCredible.SampleApp = {}));
})(JustinCredible || (JustinCredible = {}));
/**
 * A common location for application-wide constant values.
 */
var JustinCredible;
(function (JustinCredible) {
    var SampleApp;
    (function (SampleApp) {
        var Constants;
        (function (Constants) {
            /**
             * Value for rejection of a promise when opening a dialog using the showDialog
             * helper method. This value will be used when showDialog was called with a dialog
             * ID of a dialog that is already open.
             */
            Constants.DIALOG_ALREADY_OPEN = "DIALOG_ALREADY_OPEN";
            /**
             * Value for rejection of a promise when opening a dialog using the showDialog
             * helper method. This value will be used when showDialog was called with a dialog
             * ID who is not registered in the dialogTemplateMap map.
             */
            Constants.DIALOG_ID_NOT_REGISTERED = "DIALOG_ID_NOT_REGISTERED";
        })(Constants = SampleApp.Constants || (SampleApp.Constants = {}));
    })(SampleApp = JustinCredible.SampleApp || (JustinCredible.SampleApp = {}));
})(JustinCredible || (JustinCredible = {}));
/**
 * A collection of titles for buttons commonly used with dialogs.
 */
var JustinCredible;
(function (JustinCredible) {
    var SampleApp;
    (function (SampleApp) {
        var Constants;
        (function (Constants) {
            var Buttons;
            (function (Buttons) {
                Buttons.Yes = "Yes";
                Buttons.No = "No";
                Buttons.OK = "OK";
                Buttons.Cancel = "Cancel";
            })(Buttons = Constants.Buttons || (Constants.Buttons = {}));
        })(Constants = SampleApp.Constants || (SampleApp.Constants = {}));
    })(SampleApp = JustinCredible.SampleApp || (JustinCredible.SampleApp = {}));
})(JustinCredible || (JustinCredible = {}));
/**
 * A collection of names of events used within the application.
 */
var JustinCredible;
(function (JustinCredible) {
    var SampleApp;
    (function (SampleApp) {
        var Constants;
        (function (Constants) {
            var Events;
            (function (Events) {
                Events.HTTP_UNAUTHORIZED = "http.unauthorized";
                Events.HTTP_FORBIDDEN = "http.forbidden";
                Events.HTTP_NOT_FOUND = "http.notFound";
                Events.HTTP_UNKNOWN_ERROR = "http.unknownError";
                Events.HTTP_ERROR = "http.error";
                Events.APP_MENU_BUTTON = "app.menuButton";
            })(Events = Constants.Events || (Constants.Events = {}));
        })(Constants = SampleApp.Constants || (SampleApp.Constants = {}));
    })(SampleApp = JustinCredible.SampleApp || (JustinCredible.SampleApp = {}));
})(JustinCredible || (JustinCredible = {}));
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
var JustinCredible;
(function (JustinCredible) {
    var SampleApp;
    (function (SampleApp) {
        var Controllers;
        (function (Controllers) {
            var FavoriteChannelsController = (function (_super) {
                __extends(FavoriteChannelsController, _super);
                function FavoriteChannelsController($scope) {
                    _super.call(this, $scope, SampleApp.ViewModels.MainFormViewModel);
                }
                Object.defineProperty(FavoriteChannelsController, "$inject", {
                    get: function () {
                        return [
                            "$scope"
                        ];
                    },
                    enumerable: true,
                    configurable: true
                });
                FavoriteChannelsController.ID = "FavoriteChannelsController";
                return FavoriteChannelsController;
            })(Controllers.BaseController);
            Controllers.FavoriteChannelsController = FavoriteChannelsController;
        })(Controllers = SampleApp.Controllers || (SampleApp.Controllers = {}));
    })(SampleApp = JustinCredible.SampleApp || (JustinCredible.SampleApp = {}));
})(JustinCredible || (JustinCredible = {}));
var JustinCredible;
(function (JustinCredible) {
    var SampleApp;
    (function (SampleApp) {
        var Controllers;
        (function (Controllers) {
            var MainFormController = (function (_super) {
                __extends(MainFormController, _super);
                function MainFormController($scope) {
                    _super.call(this, $scope, SampleApp.ViewModels.MainFormViewModel);
                }
                Object.defineProperty(MainFormController, "$inject", {
                    get: function () {
                        return [
                            "$scope"
                        ];
                    },
                    enumerable: true,
                    configurable: true
                });
                MainFormController.ID = "MainFormController";
                return MainFormController;
            })(Controllers.BaseController);
            Controllers.MainFormController = MainFormController;
        })(Controllers = SampleApp.Controllers || (SampleApp.Controllers = {}));
    })(SampleApp = JustinCredible.SampleApp || (JustinCredible.SampleApp = {}));
})(JustinCredible || (JustinCredible = {}));
var ChannelSchedule;
(function (ChannelSchedule) {
    var HydridApp;
    (function (HydridApp) {
        var Controllers;
        (function (Controllers) {
            var SchduleController = (function () {
                function SchduleController($scope) {
                }
                Object.defineProperty(SchduleController, "$inject", {
                    get: function () {
                        return [
                            "$scope"
                        ];
                    },
                    enumerable: true,
                    configurable: true
                });
                SchduleController.ID = "SchduleController";
                return SchduleController;
            })();
            Controllers.SchduleController = SchduleController;
        })(Controllers = HydridApp.Controllers || (HydridApp.Controllers = {}));
    })(HydridApp = ChannelSchedule.HydridApp || (ChannelSchedule.HydridApp = {}));
})(ChannelSchedule || (ChannelSchedule = {}));
var ChannelSchedule;
(function (ChannelSchedule) {
    var HydridApp;
    (function (HydridApp) {
        var Controllers;
        (function (Controllers) {
            var SideBarController = (function () {
                function SideBarController($scope) {
                }
                Object.defineProperty(SideBarController, "$inject", {
                    get: function () {
                        return [
                            "$scope"
                        ];
                    },
                    enumerable: true,
                    configurable: true
                });
                SideBarController.ID = "SideBarController";
                return SideBarController;
            })();
            Controllers.SideBarController = SideBarController;
        })(Controllers = HydridApp.Controllers || (HydridApp.Controllers = {}));
    })(HydridApp = ChannelSchedule.HydridApp || (ChannelSchedule.HydridApp = {}));
})(ChannelSchedule || (ChannelSchedule = {}));
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
var JustinCredible;
(function (JustinCredible) {
    var SampleApp;
    (function (SampleApp) {
        var Controllers;
        (function (Controllers) {
            var RootController = (function (_super) {
                __extends(RootController, _super);
                function RootController($scope, $location, $http, Plugins, Utilities, UiHelper, Preferences) {
                    _super.call(this, $scope, SampleApp.ViewModels.RootViewModel);
                    this.$location = $location;
                    this.$http = $http;
                    this.Plugins = Plugins;
                    this.Utilities = Utilities;
                    this.UiHelper = UiHelper;
                    this.Preferences = Preferences;
                    //#endregion
                    this._hasLoaded = false;
                }
                Object.defineProperty(RootController, "$inject", {
                    get: function () {
                        return [
                            "$scope",
                            "$location",
                            "$http",
                            SampleApp.Services.Plugins.ID,
                            SampleApp.Services.Utilities.ID,
                            SampleApp.Services.UiHelper.ID,
                            SampleApp.Services.Preferences.ID
                        ];
                    },
                    enumerable: true,
                    configurable: true
                });
                //#region BaseController Overrides
                RootController.prototype.view_loaded = function (event, eventArgs) {
                    _super.prototype.view_loaded.call(this, event, eventArgs);
                    // In most cases Ionic's load event only fires once, the first time the controller is
                    // initialize and attached to the DOM. However, abstract controllers (eg this one) will
                    // have their Ionic view events fired for child views as well. Here we ensure that we
                    // don't run the code below if we've already loaded before and a child is loading.
                    if (this._hasLoaded) {
                        return;
                    }
                    this._hasLoaded = true;
                    this.scope.$on(SampleApp.Constants.Events.HTTP_UNAUTHORIZED, _.bind(this.http_unauthorized, this));
                    this.scope.$on(SampleApp.Constants.Events.HTTP_FORBIDDEN, _.bind(this.http_forbidden, this));
                    this.scope.$on(SampleApp.Constants.Events.HTTP_NOT_FOUND, _.bind(this.http_notFound, this));
                    this.scope.$on(SampleApp.Constants.Events.HTTP_UNKNOWN_ERROR, _.bind(this.http_unknownError, this));
                    this.scope.$on(SampleApp.Constants.Events.HTTP_ERROR, _.bind(this.http_error, this));
                    this.viewModel.categories = this.Utilities.categories;
                };
                //#endregion
                //#region Event Handlers
                RootController.prototype.http_unauthorized = function (event, response) {
                    // Unauthorized should mean that a token wasn't sent, but we'll null these out anyways.
                    this.Preferences.userId = null;
                    this.Preferences.token = null;
                    this.Plugins.toast.showLongBottom("You do not have a token (401); please login.");
                };
                RootController.prototype.http_forbidden = function (event, response) {
                    // A token was sent, but was no longer valid. Null out the invalid token.
                    this.Preferences.userId = null;
                    this.Preferences.token = null;
                    this.Plugins.toast.showLongBottom("Your token has expired (403); please login again.");
                };
                RootController.prototype.http_notFound = function (event, response) {
                    // The restful API services are down maybe?
                    this.Plugins.toast.showLongBottom("Server not available (404); please contact your administrator.");
                };
                RootController.prototype.http_unknownError = function (event, response) {
                    // No network connection, invalid certificate, or other system level error.
                    this.Plugins.toast.showLongBottom("Network error; please try again later.");
                };
                /**
                 * A generic catch all for HTTP errors that are not handled above in the other
                 * error handlers.
                 */
                RootController.prototype.http_error = function (event, response) {
                    this.Plugins.toast.showLongBottom("An error has occurred; please try again.");
                };
                //#endregion
                //#region Controller Methods
                RootController.prototype.reorder_click = function () {
                    var _this = this;
                    this.UiHelper.showDialog(Controllers.ReorderCategoriesController.ID).then(function () {
                        // After the re-order dialog is closed, re-populate the category
                        // items since they may have been re-ordered.
                        _this.viewModel.categories = _this.Utilities.categories;
                    });
                };
                //#region Injection
                RootController.ID = "RootController";
                return RootController;
            })(Controllers.BaseController);
            Controllers.RootController = RootController;
        })(Controllers = SampleApp.Controllers || (SampleApp.Controllers = {}));
    })(SampleApp = JustinCredible.SampleApp || (JustinCredible.SampleApp = {}));
})(JustinCredible || (JustinCredible = {}));
var JustinCredible;
(function (JustinCredible) {
    var SampleApp;
    (function (SampleApp) {
        var Controllers;
        (function (Controllers) {
            var AboutController = (function (_super) {
                __extends(AboutController, _super);
                function AboutController($scope, $ionicHistory, Utilities, Configuration, Plugins, versionInfo) {
                    _super.call(this, $scope, SampleApp.ViewModels.AboutViewModel);
                    this.$ionicHistory = $ionicHistory;
                    this.Utilities = Utilities;
                    this.Configuration = Configuration;
                    this.Plugins = Plugins;
                    this.versionInfo = versionInfo;
                }
                Object.defineProperty(AboutController, "$inject", {
                    get: function () {
                        return [
                            "$scope",
                            "$ionicHistory",
                            SampleApp.Services.Utilities.ID,
                            SampleApp.Services.Configuration.ID,
                            SampleApp.Services.Plugins.ID,
                            "versionInfo"
                        ];
                    },
                    enumerable: true,
                    configurable: true
                });
                //#endregion
                //#region BaseController Overrides
                AboutController.prototype.view_beforeEnter = function (event, eventArgs) {
                    _super.prototype.view_beforeEnter.call(this, event, eventArgs);
                    this.viewModel.logoClickCount = 0;
                    this.viewModel.applicationName = this.versionInfo.applicationName;
                    this.viewModel.versionString = this.Utilities.format("{0}.{1}.{2}", this.versionInfo.majorVersion, this.versionInfo.minorVersion, this.versionInfo.buildVersion);
                    this.viewModel.timestamp = this.versionInfo.buildTimestamp;
                };
                //#endregion
                //#region Controller Methods
                AboutController.prototype.logo_click = function () {
                    if (this.Configuration.enableDeveloperTools) {
                        return;
                    }
                    this.viewModel.logoClickCount += 1;
                    // If they've clicked the logo 10 times, then enable development tools
                    // and push them back to the settings page.
                    if (this.viewModel.logoClickCount > 9) {
                        this.Configuration.enableDeveloperTools = true;
                        this.Plugins.toast.showShortBottom("Development Tools Enabled!");
                        this.$ionicHistory.goBack();
                    }
                };
                AboutController.prototype.copyrightInfo_click = function () {
                    window.open(this.versionInfo.copyrightInfoUrl, "_system");
                };
                AboutController.prototype.website_click = function () {
                    window.open(this.versionInfo.websiteUrl, "_system");
                };
                AboutController.prototype.gitHubRepo_click = function () {
                    window.open(this.versionInfo.githubUrl, "_system");
                };
                //#region Injection
                AboutController.ID = "AboutController";
                return AboutController;
            })(Controllers.BaseController);
            Controllers.AboutController = AboutController;
        })(Controllers = SampleApp.Controllers || (SampleApp.Controllers = {}));
    })(SampleApp = JustinCredible.SampleApp || (JustinCredible.SampleApp = {}));
})(JustinCredible || (JustinCredible = {}));
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
var JustinCredible;
(function (JustinCredible) {
    var SampleApp;
    (function (SampleApp) {
        var Controllers;
        (function (Controllers) {
            var DeveloperController = (function (_super) {
                __extends(DeveloperController, _super);
                function DeveloperController($scope, Plugins, Utilities, UiHelper, FileUtilities, Logger, Preferences, Configuration, MockPlatformApis) {
                    _super.call(this, $scope, SampleApp.ViewModels.DeveloperViewModel);
                    this.Plugins = Plugins;
                    this.Utilities = Utilities;
                    this.UiHelper = UiHelper;
                    this.FileUtilities = FileUtilities;
                    this.Logger = Logger;
                    this.Preferences = Preferences;
                    this.Configuration = Configuration;
                    this.MockPlatformApis = MockPlatformApis;
                }
                Object.defineProperty(DeveloperController, "$inject", {
                    get: function () {
                        return [
                            "$scope",
                            SampleApp.Services.Plugins.ID,
                            SampleApp.Services.Utilities.ID,
                            SampleApp.Services.UiHelper.ID,
                            SampleApp.Services.FileUtilities.ID,
                            SampleApp.Services.Logger.ID,
                            SampleApp.Services.Preferences.ID,
                            SampleApp.Services.Configuration.ID,
                            SampleApp.Services.MockPlatformApis.ID
                        ];
                    },
                    enumerable: true,
                    configurable: true
                });
                //#endregion
                //#region BaseController Overrides
                DeveloperController.prototype.view_beforeEnter = function (event, eventArgs) {
                    _super.prototype.view_beforeEnter.call(this, event, eventArgs);
                    this.viewModel.mockApiRequests = this.Configuration.enableMockHttpCalls;
                    this.viewModel.userId = this.Preferences.userId;
                    this.viewModel.token = this.Preferences.token;
                    this.viewModel.devicePlatform = this.Utilities.platform;
                    this.viewModel.deviceModel = this.Utilities.device.model;
                    this.viewModel.deviceOsVersion = this.Utilities.device.version;
                    this.viewModel.deviceUuid = this.Utilities.device.uuid;
                    this.viewModel.deviceCordovaVersion = this.Utilities.device.cordova;
                    this.viewModel.defaultStoragePathId = this.FileUtilities.getDefaultRootPathId();
                    this.viewModel.defaultStoragePath = this.FileUtilities.getDefaultRootPath();
                    this.viewModel.apiUrl = this.Configuration.apiUrl;
                };
                //#endregion
                //#region Private Helper Methods
                DeveloperController.prototype.alertFileIoError = function (error) {
                    if (error) {
                        if (error.code) {
                            this.UiHelper.alert(error.code);
                        }
                        else if (error.message) {
                            this.UiHelper.alert(error.message);
                        }
                        else {
                            this.UiHelper.alert(error);
                        }
                    }
                };
                //#endregion
                //#region Controller Methods
                DeveloperController.prototype.help_click = function (helpMessage) {
                    this.UiHelper.alert(helpMessage, "Help");
                };
                DeveloperController.prototype.mockApiRequests_change = function () {
                    this.Configuration.enableMockHttpCalls = this.viewModel.mockApiRequests;
                    var message = "The application needs to be reloaded for changes to take effect.\n\nReload now?";
                    this.UiHelper.confirm(message, "Confirm Reload").then(function (result) {
                        if (result === SampleApp.Constants.Buttons.Yes) {
                            document.location.href = "index.html";
                        }
                    });
                };
                DeveloperController.prototype.apiUrl_click = function () {
                    var _this = this;
                    var message = "Here you can edit the API URL for this session.";
                    this.UiHelper.prompt(message, "API URL", null, this.Configuration.apiUrl).then(function (result) {
                        if (result.key === SampleApp.Constants.Buttons.Cancel) {
                            return;
                        }
                        _this.Configuration.apiUrl = result.value;
                        _this.viewModel.apiUrl = result.value;
                        _this.Plugins.toast.showShortBottom("API URL changed for this session only.");
                    });
                };
                DeveloperController.prototype.userToken_click = function (token) {
                    var _this = this;
                    this.UiHelper.confirm("Copy token to clipboard?").then(function (result) {
                        if (result === SampleApp.Constants.Buttons.Yes) {
                            _this.Plugins.clipboard.copy(token);
                            _this.Plugins.toast.showShortBottom("Token copied to clipboard.");
                        }
                    });
                };
                DeveloperController.prototype.addServicesToGlobalScope_click = function () {
                    /* tslint:disable:no-string-literal */
                    window["__ngServices"] = {
                        "FileUtilities": this.FileUtilities,
                        "Logger": this.Logger,
                        "Utilities": this.Utilities,
                        "UiHelper": this.UiHelper,
                        "Plugins": this.Plugins,
                        "Preferences": this.Preferences,
                        "MockPlatformApis": this.MockPlatformApis
                    };
                    /* tslint:enable:no-string-literal */
                    this.UiHelper.alert("Added services to the global variable __ngServices.");
                };
                DeveloperController.prototype.setRequirePinThreshold_click = function () {
                    var _this = this;
                    var message = this.Utilities.format("Enter the value (in minutes) for PIN prompt threshold? Current setting is {0} minutes.", this.Configuration.requirePinThreshold);
                    this.UiHelper.prompt(message, "Require PIN Threshold", null, this.Configuration.requirePinThreshold.toString()).then(function (result) {
                        if (result.key !== SampleApp.Constants.Buttons.OK) {
                            return;
                        }
                        if (isNaN(parseInt(result.value, 10))) {
                            _this.UiHelper.alert("Invalid value; a number is required.");
                            return;
                        }
                        _this.Configuration.requirePinThreshold = parseInt(result.value, 10);
                        _this.UiHelper.alert(_this.Utilities.format("PIN prompt threshold is now set to {0} minutes.", result.value));
                    });
                };
                DeveloperController.prototype.resetPinTimeout_click = function () {
                    this.Configuration.lastPausedAt = moment("01-01-2000", "MM-DD-yyyy");
                    var message = "The PIN timeout has been set to more than 10 minutes ago. To see the PIN screen, terminate the application via the OS task manager (don't just background it), and then re-launch.";
                    this.UiHelper.alert(message, "Reset PIN Timeout");
                };
                DeveloperController.prototype.reEnableOnboarding_click = function () {
                    this.Configuration.hasCompletedOnboarding = false;
                    this.UiHelper.alert("Onboarding has been enabled and will occur upon next app boot.");
                };
                DeveloperController.prototype.testNativeException_click = function () {
                    var _this = this;
                    this.UiHelper.confirm("Are you sure you want to cause a native crash? This requires the Crashlytics plug-in to be installed.").then(function (result) {
                        if (result === SampleApp.Constants.Buttons.Yes) {
                            _this.Plugins.crashlytics.simulateCrash();
                        }
                    });
                };
                DeveloperController.prototype.testJsException_click = function () {
                    /* tslint:disable:no-string-literal */
                    // Cause an exception by referencing an undefined variable.
                    // We use defer so we can execute outside of the context of Angular.
                    _.defer(function () {
                        var x = window["____asdf"].blah();
                    });
                    /* tslint:enable:no-string-literal */
                };
                DeveloperController.prototype.testAngularException_click = function () {
                    /* tslint:disable:no-string-literal */
                    // Cause an exception by referencing an undefined variable.
                    var x = window["____asdf"].blah();
                    /* tslint:enable:no-string-literal */
                };
                DeveloperController.prototype.showFullScreenBlock_click = function () {
                    var _this = this;
                    this.Plugins.progressIndicator.showSimpleWithLabel(true, "Blocking...");
                    setTimeout(function () {
                        _this.Plugins.progressIndicator.hide();
                    }, 4000);
                };
                DeveloperController.prototype.showToast_top = function () {
                    this.Plugins.toast.showShortTop("This is a test toast notification.");
                };
                DeveloperController.prototype.showToast_center = function () {
                    this.Plugins.toast.showShortCenter("This is a test toast notification.");
                };
                DeveloperController.prototype.showToast_bottom = function () {
                    this.Plugins.toast.showShortBottom("This is a test toast notification.");
                };
                DeveloperController.prototype.clipboard_copy = function () {
                    var _this = this;
                    this.UiHelper.prompt("Enter a value to copy to the clipboard.").then(function (result) {
                        if (result.key !== SampleApp.Constants.Buttons.OK) {
                            return;
                        }
                        _this.Plugins.clipboard.copy(result.value, function () {
                            _this.UiHelper.alert("Copy OK!");
                        }, function (err) {
                            _this.UiHelper.alert("Copy Failed!\n\n" + (err ? err.message : "Unknown Error"));
                        });
                    });
                };
                DeveloperController.prototype.clipboard_paste = function () {
                    var _this = this;
                    this.Plugins.clipboard.paste(function (result) {
                        _this.UiHelper.alert("Paste OK! Value retrieved is:\n\n" + result);
                    }, function (err) {
                        _this.UiHelper.alert("Paste Failed!\n\n" + (err ? err.message : "Unknown Error"));
                    });
                };
                DeveloperController.prototype.startProgress_click = function () {
                    NProgress.start();
                };
                DeveloperController.prototype.incrementProgress_click = function () {
                    NProgress.inc();
                };
                DeveloperController.prototype.doneProgress_click = function () {
                    NProgress.done();
                };
                DeveloperController.prototype.readFile_click = function () {
                    var _this = this;
                    this.UiHelper.prompt("Enter file name to read from", "File I/O Test", null, "/").then(function (result) {
                        if (result.key !== SampleApp.Constants.Buttons.OK) {
                            return;
                        }
                        _this.FileUtilities.readTextFile(result.value)
                            .then(function (text) { _this.Logger.debug(DeveloperController.ID, "readFile_click", "Read OK.", text); _this.UiHelper.alert(text); }, function (err) { _this.Logger.error(DeveloperController.ID, "readFile_click", "An error occurred.", err); _this.alertFileIoError(err); });
                    });
                };
                DeveloperController.prototype.writeFile_click = function () {
                    var _this = this;
                    var path, contents;
                    this.UiHelper.prompt("Enter file name to write to", "File I/O Test", null, "/").then(function (result) {
                        if (result.key !== SampleApp.Constants.Buttons.OK) {
                            return;
                        }
                        path = result.value;
                        _this.UiHelper.prompt("Enter file contents").then(function (result) {
                            if (result.key !== SampleApp.Constants.Buttons.OK) {
                                return;
                            }
                            contents = result.value;
                            _this.FileUtilities.writeTextFile(path, contents, false)
                                .then(function () { _this.Logger.debug(DeveloperController.ID, "writeFile_click", "Write OK.", { path: path, contents: contents }); _this.UiHelper.alert("Write OK."); }, function (err) { _this.Logger.error(DeveloperController.ID, "writeFile_click", "An error occurred.", err); _this.alertFileIoError(err); });
                        });
                    });
                };
                DeveloperController.prototype.appendFile_click = function () {
                    var _this = this;
                    var path, contents;
                    this.UiHelper.prompt("Enter file name to write to", "File I/O Test", null, "/").then(function (result) {
                        if (result.key !== SampleApp.Constants.Buttons.OK) {
                            return;
                        }
                        _this.UiHelper.prompt("Enter file contents", "File I/O Test", null, " / ").then(function (result) {
                            if (result.key !== SampleApp.Constants.Buttons.OK) {
                                return;
                            }
                            contents = result.value;
                            _this.FileUtilities.writeTextFile(path, contents, true)
                                .then(function () { _this.Logger.debug(DeveloperController.ID, "appendFile_click", "Append OK.", { path: path, contents: contents }); _this.UiHelper.alert("Append OK."); }, function (err) { _this.Logger.error(DeveloperController.ID, "appendFile_click", "An error occurred.", err); _this.alertFileIoError(err); });
                        });
                    });
                };
                DeveloperController.prototype.createDir_click = function () {
                    var _this = this;
                    var path;
                    this.UiHelper.prompt("Enter dir name to create", "File I/O Test", null, "/").then(function (result) {
                        if (result.key !== SampleApp.Constants.Buttons.OK) {
                            return;
                        }
                        path = result.value;
                        _this.FileUtilities.createDirectory(path)
                            .then(function () { _this.Logger.debug(DeveloperController.ID, "createDir_click", "Create directory OK.", path); _this.UiHelper.alert("Create directory OK."); }, function (err) { _this.Logger.error(DeveloperController.ID, "createDir_click", "An error occurred.", err); _this.alertFileIoError(err); });
                    });
                };
                DeveloperController.prototype.listFiles_click = function () {
                    var _this = this;
                    var path, list = "";
                    this.UiHelper.prompt("Enter path to list files", "File I/O Test", null, "/").then(function (result) {
                        if (result.key !== SampleApp.Constants.Buttons.OK) {
                            return;
                        }
                        path = result.value;
                        _this.FileUtilities.getFilePaths(path)
                            .then(function (files) {
                            _this.Logger.debug(DeveloperController.ID, "listFiles_click", "Get file paths OK.", files);
                            files.forEach(function (value) {
                                list += "\n" + value;
                            });
                            _this.UiHelper.alert(list);
                        }, function (err) {
                            _this.Logger.error(DeveloperController.ID, "listFiles_click", "An error occurred.", err);
                            _this.alertFileIoError(err);
                        });
                    });
                };
                DeveloperController.prototype.listDirs_click = function () {
                    var _this = this;
                    var path, list = "";
                    this.UiHelper.prompt("Enter path to list dirs", "File I/O Test", null, "/").then(function (result) {
                        if (result.key !== SampleApp.Constants.Buttons.OK) {
                            return;
                        }
                        path = result.value;
                        _this.FileUtilities.getDirectoryPaths(path)
                            .then(function (dirs) {
                            _this.Logger.debug(DeveloperController.ID, "listDirs_click", "Get directory paths OK.", dirs);
                            dirs.forEach(function (value) {
                                list += "\n" + value;
                            });
                            _this.UiHelper.alert(list);
                        }, function (err) {
                            _this.Logger.error(DeveloperController.ID, "listDirs_click", "An error occurred.", err);
                            _this.alertFileIoError(err);
                        });
                    });
                };
                DeveloperController.prototype.deleteFile_click = function () {
                    var _this = this;
                    var path;
                    this.UiHelper.prompt("Enter path to delete file", "File I/O Test", null, "/").then(function (result) {
                        if (result.key !== SampleApp.Constants.Buttons.OK) {
                            return;
                        }
                        path = result.value;
                        _this.FileUtilities.deleteFile(path)
                            .then(function () { _this.Logger.debug(DeveloperController.ID, "deleteFile_click", "Delete file OK.", path); _this.UiHelper.alert("Delete file OK."); }, function (err) { _this.Logger.error(DeveloperController.ID, "deleteFile_click", "An error occurred.", err); _this.alertFileIoError(err); });
                    });
                };
                DeveloperController.prototype.deleteDir_click = function () {
                    var _this = this;
                    var path;
                    this.UiHelper.prompt("Enter path to delete dir", "File I/O Test", null, "/").then(function (result) {
                        if (result.key !== SampleApp.Constants.Buttons.OK) {
                            return;
                        }
                        path = result.value;
                        _this.FileUtilities.deleteDirectory(path)
                            .then(function () { _this.Logger.debug(DeveloperController.ID, "deleteDir_click", "Delete directory OK.", path); _this.UiHelper.alert("Delete directory OK"); }, function (err) { _this.Logger.error(DeveloperController.ID, "deleteDir_click", "An error occurred.", err); _this.alertFileIoError(err); });
                    });
                };
                //#region Injection
                DeveloperController.ID = "DeveloperController";
                return DeveloperController;
            })(Controllers.BaseController);
            Controllers.DeveloperController = DeveloperController;
        })(Controllers = SampleApp.Controllers || (SampleApp.Controllers = {}));
    })(SampleApp = JustinCredible.SampleApp || (JustinCredible.SampleApp = {}));
})(JustinCredible || (JustinCredible = {}));
var JustinCredible;
(function (JustinCredible) {
    var SampleApp;
    (function (SampleApp) {
        var Controllers;
        (function (Controllers) {
            var LogEntryController = (function (_super) {
                __extends(LogEntryController, _super);
                function LogEntryController($scope, $stateParams, Logger, Plugins, Utilities, versionInfo) {
                    _super.call(this, $scope, SampleApp.ViewModels.LogEntryViewModel);
                    this.$stateParams = $stateParams;
                    this.Logger = Logger;
                    this.Plugins = Plugins;
                    this.Utilities = Utilities;
                    this.versionInfo = versionInfo;
                }
                Object.defineProperty(LogEntryController, "$inject", {
                    get: function () {
                        return [
                            "$scope",
                            "$stateParams",
                            SampleApp.Services.Logger.ID,
                            SampleApp.Services.Plugins.ID,
                            SampleApp.Services.Utilities.ID,
                            "versionInfo"];
                    },
                    enumerable: true,
                    configurable: true
                });
                //#endregion
                //#region BaseController Overrides
                LogEntryController.prototype.view_beforeEnter = function (event, eventArgs) {
                    _super.prototype.view_beforeEnter.call(this, event, eventArgs);
                    this.viewModel.logEntry = this.Logger.getLog(this.$stateParams.id);
                    this.viewModel.date = moment(this.viewModel.logEntry.timestamp).format("MMMM Do YYYY");
                    this.viewModel.time = moment(this.viewModel.logEntry.timestamp).format("h:mm:ss a");
                    try {
                        this.viewModel.formattedMetadata = JSON.stringify(this.viewModel.logEntry.metadata, null, 4);
                    }
                    catch (exception) {
                        this.viewModel.formattedMetadata = "Unable to stringify metadata: " + exception;
                    }
                    this.viewModel.icon = this.Logger.getIconForLevel(this.viewModel.logEntry.level);
                    this.viewModel.color = this.Logger.getColorForLevel(this.viewModel.logEntry.level);
                    this.viewModel.levelDisplay = this.Logger.getDisplayLevelForLevel(this.viewModel.logEntry.level);
                };
                //#endregion
                //#region Controller Methods
                LogEntryController.prototype.copy_click = function () {
                    var _this = this;
                    this.Plugins.clipboard.copy(JSON.stringify(this.viewModel.logEntry), function () {
                        _this.Plugins.toast.showShortBottom("Log copied to clipboard!");
                    }, null);
                };
                LogEntryController.prototype.email_click = function () {
                    var uri = this.Utilities.format("mailto:{0}?subject={1} Error Log&body={2}", this.versionInfo.email, this.versionInfo.applicationName, JSON.stringify(this.viewModel.logEntry));
                    uri = encodeURI(uri);
                    window.open(uri, "_system");
                };
                //#region Injection
                LogEntryController.ID = "LogEntryController";
                return LogEntryController;
            })(Controllers.BaseController);
            Controllers.LogEntryController = LogEntryController;
        })(Controllers = SampleApp.Controllers || (SampleApp.Controllers = {}));
    })(SampleApp = JustinCredible.SampleApp || (JustinCredible.SampleApp = {}));
})(JustinCredible || (JustinCredible = {}));
var JustinCredible;
(function (JustinCredible) {
    var SampleApp;
    (function (SampleApp) {
        var Controllers;
        (function (Controllers) {
            var LogsListController = (function (_super) {
                __extends(LogsListController, _super);
                function LogsListController($scope, $ionicPopover, Logger, UiHelper) {
                    _super.call(this, $scope, SampleApp.ViewModels.LogsListViewModel);
                    this.$ionicPopover = $ionicPopover;
                    this.Logger = Logger;
                    this.UiHelper = UiHelper;
                }
                Object.defineProperty(LogsListController, "$inject", {
                    get: function () {
                        return [
                            "$scope",
                            "$ionicPopover",
                            SampleApp.Services.Logger.ID,
                            SampleApp.Services.UiHelper.ID
                        ];
                    },
                    enumerable: true,
                    configurable: true
                });
                //#region BaseController Overrides
                LogsListController.prototype.view_beforeEnter = function (event, eventArgs) {
                    var _this = this;
                    _super.prototype.view_beforeEnter.call(this, event, eventArgs);
                    this.$ionicPopover.fromTemplateUrl("templates/Settings/Log-Filter-Menu.html", {
                        scope: this.scope
                    }).then(function (popover) {
                        _this._popover = popover;
                    });
                    this.viewModel.showError = true;
                    this.viewModel.showWarn = true;
                    this.viewModel.showFatal = true;
                    this.populateViewModel(this.Logger.logs);
                };
                //#endregion
                //#region Private Helper Methods
                LogsListController.prototype.populateViewModel = function (logEntries) {
                    var _this = this;
                    if (logEntries == null) {
                        logEntries = [];
                    }
                    this.viewModel.logs = {};
                    // First, lets sort by the time stamp ascending, then reverse
                    // it so we have the most recent log entries at the top.
                    logEntries = _.sortBy(logEntries, "timestamp").reverse();
                    // Now use the actual log entry to create the view model.
                    logEntries.forEach(function (logEntry) {
                        var formattedDate, viewModel;
                        if (!_this.isApplicableForCurrentFilter(logEntry)) {
                            return;
                        }
                        viewModel = new SampleApp.ViewModels.LogEntryViewModel();
                        // Put the actual log entry into the view model.
                        viewModel.logEntry = logEntry;
                        viewModel.time = moment(logEntry.timestamp).format("h:mm:ss a");
                        viewModel.icon = _this.Logger.getIconForLevel(logEntry.level);
                        viewModel.color = _this.Logger.getColorForLevel(logEntry.level);
                        viewModel.levelDisplay = _this.Logger.getDisplayLevelForLevel(logEntry.level);
                        // Format the date and time for display.
                        formattedDate = moment(logEntry.timestamp).format("l");
                        // The view model is a dictionary of formatted dates to an
                        // array of log entries that happened on that date. So first,
                        // we'll make sure the array exists for this date...
                        if (!_this.viewModel.logs[formattedDate]) {
                            _this.viewModel.logs[formattedDate] = [];
                        }
                        // ... then we'll push this entry into that days collection.
                        _this.viewModel.logs[formattedDate].push(viewModel);
                    });
                };
                LogsListController.prototype.isApplicableForCurrentFilter = function (logEntry) {
                    if (!logEntry || logEntry.level == null) {
                        return true;
                    }
                    switch (logEntry.level) {
                        case SampleApp.Models.LogLevel.TRACE:
                            return this.viewModel.showTrace;
                        case SampleApp.Models.LogLevel.DEBUG:
                            return this.viewModel.showDebug;
                        case SampleApp.Models.LogLevel.WARN:
                            return this.viewModel.showWarn;
                        case SampleApp.Models.LogLevel.INFO:
                            return this.viewModel.showInfo;
                        case SampleApp.Models.LogLevel.ERROR:
                            return this.viewModel.showError;
                        case SampleApp.Models.LogLevel.FATAL:
                            return this.viewModel.showFatal;
                        default:
                            return true;
                    }
                };
                //#endregion
                //#region Controller Methods
                LogsListController.prototype.filter_click = function (event) {
                    this._popover.show(event);
                };
                LogsListController.prototype.trace_click = function () {
                    this.viewModel.showTrace = !this.viewModel.showTrace;
                    this.populateViewModel(this.Logger.logs);
                };
                LogsListController.prototype.debug_click = function () {
                    this.viewModel.showDebug = !this.viewModel.showDebug;
                    this.populateViewModel(this.Logger.logs);
                };
                LogsListController.prototype.info_click = function () {
                    this.viewModel.showInfo = !this.viewModel.showInfo;
                    this.populateViewModel(this.Logger.logs);
                };
                LogsListController.prototype.warn_click = function () {
                    this.viewModel.showWarn = !this.viewModel.showWarn;
                    this.populateViewModel(this.Logger.logs);
                };
                LogsListController.prototype.error_click = function () {
                    this.viewModel.showError = !this.viewModel.showError;
                    this.populateViewModel(this.Logger.logs);
                };
                LogsListController.prototype.fatal_click = function () {
                    this.viewModel.showFatal = !this.viewModel.showFatal;
                    this.populateViewModel(this.Logger.logs);
                };
                LogsListController.prototype.clear_click = function () {
                    var _this = this;
                    this.UiHelper.confirm("Are you sure you want to clear the logs?", "Clear Logs").then(function (result) {
                        if (result === SampleApp.Constants.Buttons.Yes) {
                            _this.Logger.clear();
                            _this.viewModel.logs = {};
                        }
                    });
                };
                //#region Injection
                LogsListController.ID = "LogsListController";
                return LogsListController;
            })(Controllers.BaseController);
            Controllers.LogsListController = LogsListController;
        })(Controllers = SampleApp.Controllers || (SampleApp.Controllers = {}));
    })(SampleApp = JustinCredible.SampleApp || (JustinCredible.SampleApp = {}));
})(JustinCredible || (JustinCredible = {}));
var JustinCredible;
(function (JustinCredible) {
    var SampleApp;
    (function (SampleApp) {
        var Controllers;
        (function (Controllers) {
            var SettingsListController = (function (_super) {
                __extends(SettingsListController, _super);
                function SettingsListController($scope, Utilities, Configuration) {
                    _super.call(this, $scope, SampleApp.ViewModels.SettingsListViewModel);
                    this.Utilities = Utilities;
                    this.Configuration = Configuration;
                }
                Object.defineProperty(SettingsListController, "$inject", {
                    get: function () {
                        return [
                            "$scope",
                            SampleApp.Services.Utilities.ID,
                            SampleApp.Services.Configuration.ID
                        ];
                    },
                    enumerable: true,
                    configurable: true
                });
                //#endregion
                //#region BaseController Overrides
                SettingsListController.prototype.view_beforeEnter = function (event, eventArgs) {
                    _super.prototype.view_beforeEnter.call(this, event, eventArgs);
                    this.viewModel.isDebugMode = this.Utilities.isDebugMode;
                    this.viewModel.isDeveloperMode = this.Configuration.enableDeveloperTools;
                };
                //#region Injection
                SettingsListController.ID = "SettingsListController";
                return SettingsListController;
            })(Controllers.BaseController);
            Controllers.SettingsListController = SettingsListController;
        })(Controllers = SampleApp.Controllers || (SampleApp.Controllers = {}));
    })(SampleApp = JustinCredible.SampleApp || (JustinCredible.SampleApp = {}));
})(JustinCredible || (JustinCredible = {}));
var JustinCredible;
(function (JustinCredible) {
    var SampleApp;
    (function (SampleApp) {
        var Directives;
        (function (Directives) {
            //#endregion
            /**
             * A simple element for showing a large icon centered, with optional text below it.
             */
            var IconPanelDirective = (function (_super) {
                __extends(IconPanelDirective, _super);
                function IconPanelDirective(Utilities) {
                    _super.call(this);
                    this.Utilities = Utilities;
                }
                Object.defineProperty(IconPanelDirective, "$inject", {
                    get: function () {
                        return [
                            SampleApp.Services.Utilities.ID
                        ];
                    },
                    enumerable: true,
                    configurable: true
                });
                IconPanelDirective.prototype.initialize = function () {
                    var _this = this;
                    // Grab a reference to the root div element.
                    this._rootElement = this.element[0];
                    // Watch for the changing of the value attributes.
                    this.scope.$watch(function () { return _this.scope.icon; }, _.bind(this.icon_listener, this));
                    this.scope.$watch(function () { return _this.scope.iconSize; }, _.bind(this.iconSize_listener, this));
                    this.scope.$watch(function () { return _this.scope.text; }, _.bind(this.text_listener, this));
                    // Fire a created event sending along this directive instance.
                    // Parent scopes can listen for this so they can obtain a reference
                    // to the instance so they can call getters/setters etc.
                    if (this.scope.name) {
                        this.scope.$emit(this.Utilities.format("icon-panel.{0}.created", this.scope.name), this);
                    }
                    else {
                        this.scope.$emit("icon-panel.created", this);
                    }
                };
                /**
                 * Used to render the icon panel.
                 */
                IconPanelDirective.prototype.render = function () {
                    this._root = angular.element(this._rootElement);
                    this._root.addClass("icon-panel");
                    this._iconContainer = angular.element("<p></p>");
                    this._iconContainer.addClass("icon-container");
                    this._root.append(this._iconContainer);
                    this._iconElement = angular.element("<i></i>");
                    this._iconElement.addClass("icon");
                    this._iconContainer.append(this._iconElement);
                    this._textContainer = angular.element("<p></p>");
                    this._root.append(this._textContainer);
                };
                /**
                 * Returns the name of this instance.
                 */
                IconPanelDirective.prototype.getName = function () {
                    return this.scope.name;
                };
                /**
                 * Returns the icon for this instance.
                 */
                IconPanelDirective.prototype.getIcon = function () {
                    return this._currentIcon;
                };
                /**
                 * Sets the icon class for this instance.
                 *
                 * This should be one of the Ionic icon class names (eg ion-ios-bell-outline).
                 */
                IconPanelDirective.prototype.setIcon = function (icon) {
                    if (this._currentIcon) {
                        this._iconElement.removeClass(this._currentIcon);
                    }
                    this._currentIcon = icon;
                    this._iconElement.addClass(icon);
                };
                /**
                 * Returns the font size in points used for the icon.
                 */
                IconPanelDirective.prototype.getIconSize = function () {
                    return parseInt(this.scope.iconSize, 10);
                };
                /**
                 * Sets the font size in points used for the icon.
                 */
                IconPanelDirective.prototype.setIconSize = function (size) {
                    this.scope.iconSize = (size ? size + "" : "0");
                    this._iconElement.css("font-size", this.scope.iconSize + "pt");
                };
                /**
                 * Returns the display text for this instance.
                 */
                IconPanelDirective.prototype.getText = function () {
                    return this.scope.text;
                };
                /**
                 * Sets the display text for this instance.
                 */
                IconPanelDirective.prototype.setText = function (text) {
                    this._textContainer.text(text);
                };
                //#region Listeners
                IconPanelDirective.prototype.icon_listener = function (newValue, oldValue, scope) {
                    this._currentIcon = newValue;
                    if (this._iconElement != null) {
                        this._iconElement.removeClass(oldValue);
                        this._iconElement.addClass(newValue);
                    }
                };
                IconPanelDirective.prototype.iconSize_listener = function (newValue, oldValue, scope) {
                    if (this._iconElement != null) {
                        this._iconElement.css("font-size", newValue + "pt");
                    }
                };
                IconPanelDirective.prototype.text_listener = function (newValue, oldValue, scope) {
                    if (this._textContainer != null) {
                        this._textContainer.text(newValue);
                    }
                };
                //#region Injection
                IconPanelDirective.ID = "iconPanel";
                //#endregion
                //#region Angular Directive Options
                IconPanelDirective.restrict = "E";
                IconPanelDirective.template = "<div></div>";
                IconPanelDirective.replace = true;
                IconPanelDirective.scope = {
                    name: "@",
                    icon: "@",
                    iconSize: "@",
                    text: "@"
                };
                return IconPanelDirective;
            })(Directives.BaseElementDirective);
            Directives.IconPanelDirective = IconPanelDirective;
        })(Directives = SampleApp.Directives || (SampleApp.Directives = {}));
    })(SampleApp = JustinCredible.SampleApp || (JustinCredible.SampleApp = {}));
})(JustinCredible || (JustinCredible = {}));
var JustinCredible;
(function (JustinCredible) {
    var SampleApp;
    (function (SampleApp) {
        var Directives;
        (function (Directives) {
            /**
             * A directive for handling an element's onload event (eg an image tag).
             *
             * http://stackoverflow.com/questions/11868393/angularjs-inputtext-ngchange-fires-while-the-value-is-changing
             */
            var OnLoadDirective = (function () {
                function OnLoadDirective($parse) {
                    this.$parse = $parse;
                    //#endregion
                    this.restrict = "A";
                    // Ensure that the link function is bound to this instance so we can
                    // access instance variables like $parse. AngularJs normally executes
                    // the link function in the context of the global scope.
                    this.link = _.bind(this.link, this);
                }
                Object.defineProperty(OnLoadDirective, "$inject", {
                    get: function () {
                        return ["$parse"];
                    },
                    enumerable: true,
                    configurable: true
                });
                OnLoadDirective.prototype.link = function (scope, element, attributes, controller, transclude) {
                    // Parse the value of the on-load property; this will be a function
                    // that the user has set on the element for example: <img on-load="load()"/>
                    /* tslint:disable:no-string-literal */
                    var fn = this.$parse(attributes["onLoad"]);
                    /* tslint:enable:no-string-literal */
                    // Subscribe to the load event of the image element.
                    element.on("load", function (event) {
                        // When the load event occurs, execute the user defined load function.
                        scope.$apply(function () {
                            fn(scope, { $event: event });
                        });
                    });
                };
                //#region Injection
                OnLoadDirective.ID = "onLoad";
                return OnLoadDirective;
            })();
            Directives.OnLoadDirective = OnLoadDirective;
        })(Directives = SampleApp.Directives || (SampleApp.Directives = {}));
    })(SampleApp = JustinCredible.SampleApp || (JustinCredible.SampleApp = {}));
})(JustinCredible || (JustinCredible = {}));
var JustinCredible;
(function (JustinCredible) {
    var SampleApp;
    (function (SampleApp) {
        var Filters;
        (function (Filters) {
            /**
             * Formats numbers greater than one thousand to include the K suffix.
             *
             * Numbers greater than 10,000 will not show decimal places, while numbers
             * between 1,000 and 9,999 will show decimal places unless the number is
             * a multiple of one thousand.
             *
             * For example:
             *      200   -> 200
             *      2000  -> 2K
             *      1321  -> 1.3K
             *      10700 -> 10K
             */
            var ThousandsFilter = (function () {
                function ThousandsFilter() {
                }
                ThousandsFilter.filter = function (input) {
                    if (input == null) {
                        return "";
                    }
                    if (input > 9999) {
                        if (input % 10 === 0) {
                            return (input / 1000) + "K";
                        }
                        else {
                            return (input / 1000).toFixed(0) + "K";
                        }
                    }
                    else if (input > 999) {
                        if (input % 10 === 0) {
                            return (input / 1000) + "K";
                        }
                        else {
                            return (input / 1000).toFixed(1) + "K";
                        }
                    }
                    else {
                        return input + "";
                    }
                };
                ThousandsFilter.ID = "Thousands";
                return ThousandsFilter;
            })();
            Filters.ThousandsFilter = ThousandsFilter;
        })(Filters = SampleApp.Filters || (SampleApp.Filters = {}));
    })(SampleApp = JustinCredible.SampleApp || (JustinCredible.SampleApp = {}));
})(JustinCredible || (JustinCredible = {}));
var JustinCredible;
(function (JustinCredible) {
    var SampleApp;
    (function (SampleApp) {
        var Models;
        (function (Models) {
            var Program = (function () {
                function Program() {
                }
                Object.defineProperty(Program.prototype, "Id", {
                    get: function () {
                        return this._id;
                    },
                    set: function (value) {
                        this._id = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Program.prototype, "Program", {
                    get: function () {
                        return this._program;
                    },
                    set: function (value) {
                        this._program = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Program.prototype, "Channel", {
                    get: function () {
                        return this._channel;
                    },
                    set: function (value) {
                        this._channel = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Program.prototype, "FromTime", {
                    get: function () {
                        return this._fromTime;
                    },
                    set: function (value) {
                        this._fromTime = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Program.prototype, "ToTime", {
                    get: function () {
                        return this._toTime;
                    },
                    set: function (value) {
                        this._toTime = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                return Program;
            })();
            Models.Program = Program;
        })(Models = SampleApp.Models || (SampleApp.Models = {}));
    })(SampleApp = JustinCredible.SampleApp || (JustinCredible.SampleApp = {}));
})(JustinCredible || (JustinCredible = {}));
var JustinCredible;
(function (JustinCredible) {
    var SampleApp;
    (function (SampleApp) {
        var Models;
        (function (Models) {
            /**
             * Used to specify options for a dialog.
             * For use with UiHelper.openDialog().
             */
            var DialogOptions = (function () {
                function DialogOptions(dialogData) {
                    this.dialogData = dialogData;
                    this.backdropClickToClose = true;
                    this.hardwareBackButtonClose = true;
                    this.showBackground = true;
                }
                return DialogOptions;
            })();
            Models.DialogOptions = DialogOptions;
        })(Models = SampleApp.Models || (SampleApp.Models = {}));
    })(SampleApp = JustinCredible.SampleApp || (JustinCredible.SampleApp = {}));
})(JustinCredible || (JustinCredible = {}));
var JustinCredible;
(function (JustinCredible) {
    var SampleApp;
    (function (SampleApp) {
        var Models;
        (function (Models) {
            var PinEntryDialogModel = (function () {
                function PinEntryDialogModel(promptText, pinToMatch, showBackButton) {
                    this.promptText = promptText;
                    this.pinToMatch = pinToMatch;
                    this.showBackButton = showBackButton;
                }
                return PinEntryDialogModel;
            })();
            Models.PinEntryDialogModel = PinEntryDialogModel;
        })(Models = SampleApp.Models || (SampleApp.Models = {}));
    })(SampleApp = JustinCredible.SampleApp || (JustinCredible.SampleApp = {}));
})(JustinCredible || (JustinCredible = {}));
var JustinCredible;
(function (JustinCredible) {
    var SampleApp;
    (function (SampleApp) {
        var Models;
        (function (Models) {
            var PinEntryDialogResultModel = (function () {
                function PinEntryDialogResultModel(matches, cancelled, pin) {
                    this.matches = matches;
                    this.cancelled = cancelled;
                    this.pin = pin;
                }
                return PinEntryDialogResultModel;
            })();
            Models.PinEntryDialogResultModel = PinEntryDialogResultModel;
        })(Models = SampleApp.Models || (SampleApp.Models = {}));
    })(SampleApp = JustinCredible.SampleApp || (JustinCredible.SampleApp = {}));
})(JustinCredible || (JustinCredible = {}));
var JustinCredible;
(function (JustinCredible) {
    var SampleApp;
    (function (SampleApp) {
        var Models;
        (function (Models) {
            var LogEntry = (function () {
                function LogEntry() {
                }
                return LogEntry;
            })();
            Models.LogEntry = LogEntry;
        })(Models = SampleApp.Models || (SampleApp.Models = {}));
    })(SampleApp = JustinCredible.SampleApp || (JustinCredible.SampleApp = {}));
})(JustinCredible || (JustinCredible = {}));
var JustinCredible;
(function (JustinCredible) {
    var SampleApp;
    (function (SampleApp) {
        var Models;
        (function (Models) {
            (function (LogLevel) {
                LogLevel[LogLevel["TRACE"] = 0] = "TRACE";
                LogLevel[LogLevel["DEBUG"] = 1] = "DEBUG";
                LogLevel[LogLevel["INFO"] = 2] = "INFO";
                LogLevel[LogLevel["WARN"] = 3] = "WARN";
                LogLevel[LogLevel["ERROR"] = 4] = "ERROR";
                LogLevel[LogLevel["FATAL"] = 5] = "FATAL";
            })(Models.LogLevel || (Models.LogLevel = {}));
            var LogLevel = Models.LogLevel;
        })(Models = SampleApp.Models || (SampleApp.Models = {}));
    })(SampleApp = JustinCredible.SampleApp || (JustinCredible.SampleApp = {}));
})(JustinCredible || (JustinCredible = {}));
var JustinCredible;
(function (JustinCredible) {
    var SampleApp;
    (function (SampleApp) {
        var Models;
        (function (Models) {
            /**
             * A simple class that can be used to define a key/value pair of objects.
             */
            var KeyValuePair = (function () {
                function KeyValuePair(key, value) {
                    this.key = key;
                    this.value = value;
                }
                return KeyValuePair;
            })();
            Models.KeyValuePair = KeyValuePair;
        })(Models = SampleApp.Models || (SampleApp.Models = {}));
    })(SampleApp = JustinCredible.SampleApp || (JustinCredible.SampleApp = {}));
})(JustinCredible || (JustinCredible = {}));
var JustinCredible;
(function (JustinCredible) {
    var SampleApp;
    (function (SampleApp) {
        /**
         * Used to define all of the client-side routes for the application.
         * This maps routes to the controller/view that should be used.
         */
        var RouteConfig = (function () {
            function RouteConfig() {
            }
            RouteConfig.setupRoutes = function ($stateProvider, $urlRouterProvider) {
                // Setup an abstract state for the tabs directive.
                $stateProvider.state("app", {
                    url: "/app",
                    abstract: true,
                    templateUrl: "templates/Root.html",
                    controller: SampleApp.Controllers.RootController.ID
                });
                // An blank view useful as a place holder etc.
                $stateProvider.state("app.blank", {
                    url: "/blank",
                    views: {
                        "root-view": {
                            templateUrl: "templates/Blank.html"
                        }
                    }
                });
                $stateProvider.state("app.mainform", {
                    url: "/mainform",
                    views: {
                        "root-view": {
                            templateUrl: "templates/MainForm.html",
                            controller: SampleApp.Controllers.MainFormController.ID
                        }
                    }
                });
                $stateProvider.state("app.favorite", {
                    url: "/favorite",
                    views: {
                        "root-view": {
                            templateUrl: "templates/Channels/FavoriteChannels.html",
                            controller: SampleApp.Controllers.FavoriteChannelsController.ID
                        }
                    }
                });
                // A shared view used between categories, assigned a number via the route URL (categoryNumber).
                $stateProvider.state("app.category", {
                    url: "/category/:categoryNumber",
                    views: {
                        "root-view": {
                            templateUrl: "templates/Category.html",
                            controller: SampleApp.Controllers.CategoryController.ID
                        }
                    }
                });
                //#region Onboarding
                $stateProvider.state("app.onboarding-splash", {
                    url: "/onboarding/splash",
                    views: {
                        "root-view": {
                            templateUrl: "templates/Onboarding/Onboarding-Splash.html",
                            controller: SampleApp.Controllers.OnboardingSplashController.ID
                        }
                    }
                });
                $stateProvider.state("app.onboarding-register", {
                    url: "/onboarding/register",
                    views: {
                        "root-view": {
                            templateUrl: "templates/Onboarding/Onboarding-Register.html",
                            controller: SampleApp.Controllers.OnboardingRegisterController.ID
                        }
                    }
                });
                $stateProvider.state("app.onboarding-share", {
                    url: "/onboarding/share",
                    views: {
                        "root-view": {
                            templateUrl: "templates/Onboarding/Onboarding-Share.html",
                            controller: SampleApp.Controllers.OnboardingShareController.ID
                        }
                    }
                });
                //#endregion
                //#region Settings
                $stateProvider.state("app.settings-list", {
                    url: "/settings/list",
                    views: {
                        "root-view": {
                            templateUrl: "templates/Settings/Settings-List.html",
                            controller: SampleApp.Controllers.SettingsListController.ID
                        }
                    }
                });
                $stateProvider.state("app.cloud-sync", {
                    url: "/settings/cloud-sync",
                    views: {
                        "root-view": {
                            templateUrl: "templates/Settings/Cloud-Sync.html",
                            controller: SampleApp.Controllers.CloudSyncController.ID
                        }
                    }
                });
                $stateProvider.state("app.configure-pin", {
                    url: "/settings/configure-pin",
                    views: {
                        "root-view": {
                            templateUrl: "templates/Settings/Configure-Pin.html",
                            controller: SampleApp.Controllers.ConfigurePinController.ID
                        }
                    }
                });
                $stateProvider.state("app.developer", {
                    url: "/settings/developer",
                    views: {
                        "root-view": {
                            templateUrl: "templates/Settings/Developer.html",
                            controller: SampleApp.Controllers.DeveloperController.ID
                        }
                    }
                });
                $stateProvider.state("app.logs", {
                    url: "/settings/logs",
                    views: {
                        "root-view": {
                            templateUrl: "templates/Settings/Logs-List.html",
                            controller: SampleApp.Controllers.LogsListController.ID
                        }
                    }
                });
                $stateProvider.state("app.log-entry", {
                    url: "/settings/log-entry/:id",
                    params: {
                        id: {
                            value: "",
                            squash: false
                        }
                    },
                    views: {
                        "root-view": {
                            templateUrl: "templates/Settings/Log-Entry.html",
                            controller: SampleApp.Controllers.LogEntryController.ID
                        }
                    }
                });
                $stateProvider.state("app.about", {
                    url: "/settings/about",
                    views: {
                        "root-view": {
                            templateUrl: "templates/Settings/About.html",
                            controller: SampleApp.Controllers.AboutController.ID
                        }
                    }
                });
                //#endregion
                // If none of the above states are matched, use the blank route.
                $urlRouterProvider.otherwise("/app/blank");
            };
            return RouteConfig;
        })();
        SampleApp.RouteConfig = RouteConfig;
    })(SampleApp = JustinCredible.SampleApp || (JustinCredible.SampleApp = {}));
})(JustinCredible || (JustinCredible = {}));
var JustinCredible;
(function (JustinCredible) {
    var SampleApp;
    (function (SampleApp) {
        var Services;
        (function (Services) {
            /**
             * Provides a way to easily get/set application configuration.
             *
             * The current backing store is local storage and/or session storage:
             * https://cordova.apache.org/docs/en/3.0.0/cordova_storage_storage.md.html#localStorage
             */
            var Configuration = (function () {
                function Configuration(buildVars) {
                    this.buildVars = buildVars;
                    //#endregion
                    //#region apiUrl - Path to the application's services
                    this._apiUrl = null;
                }
                Object.defineProperty(Configuration, "$inject", {
                    get: function () {
                        return [
                            "buildVars"
                        ];
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Configuration.prototype, "apiUrl", {
                    /**
                     * Path to the application's services.
                     */
                    get: function () {
                        // If an API URL has been set via the developer tools for this session,
                        // then use it, otherwise use the URL defined by the build configuration.
                        if (this._apiUrl) {
                            return this._apiUrl;
                        }
                        else {
                            return this.buildVars.apiUrl;
                        }
                    },
                    /**
                     * Allows for setting the API URL temporarily for the current session only.
                     */
                    set: function (value) {
                        this._apiUrl = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Configuration.prototype, "enableDeveloperTools", {
                    //#endregion
                    //#region Framework Settings
                    get: function () {
                        return sessionStorage.getItem(Configuration.ENABLE_DEVELOPER_TOOLS) === "true";
                    },
                    set: function (value) {
                        if (value == null) {
                            sessionStorage.removeItem(Configuration.ENABLE_DEVELOPER_TOOLS);
                        }
                        else {
                            sessionStorage.setItem(Configuration.ENABLE_DEVELOPER_TOOLS, value.toString());
                        }
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Configuration.prototype, "enableFullHttpLogging", {
                    get: function () {
                        return localStorage.getItem(Configuration.ENABLE_FULL_HTTP_LOGGING) === "true";
                    },
                    set: function (value) {
                        if (value == null) {
                            localStorage.removeItem(Configuration.ENABLE_FULL_HTTP_LOGGING);
                        }
                        else {
                            localStorage.setItem(Configuration.ENABLE_FULL_HTTP_LOGGING, value.toString());
                        }
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Configuration.prototype, "enableMockHttpCalls", {
                    get: function () {
                        return localStorage.getItem(Configuration.ENABLE_MOCK_HTTP_CALLS) === "true";
                    },
                    set: function (value) {
                        if (value == null) {
                            localStorage.removeItem(Configuration.ENABLE_MOCK_HTTP_CALLS);
                        }
                        else {
                            localStorage.setItem(Configuration.ENABLE_MOCK_HTTP_CALLS, value.toString());
                        }
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Configuration.prototype, "requirePinThreshold", {
                    get: function () {
                        var value = localStorage.getItem(Configuration.REQUIRE_PIN_THRESHOLD);
                        return value == null ? Configuration.REQUIRE_PIN_THRESHOLD_DEFAULT : parseInt(value, 10);
                    },
                    set: function (value) {
                        if (value == null) {
                            localStorage.removeItem(Configuration.REQUIRE_PIN_THRESHOLD);
                        }
                        else {
                            localStorage.setItem(Configuration.REQUIRE_PIN_THRESHOLD, value.toString());
                        }
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Configuration.prototype, "lastPausedAt", {
                    get: function () {
                        var lastPausedAt;
                        lastPausedAt = localStorage.getItem(Configuration.LAST_PAUSED_AT);
                        return moment(lastPausedAt).isValid() ? moment(lastPausedAt) : null;
                    },
                    set: function (value) {
                        if (value == null) {
                            localStorage.removeItem(Configuration.LAST_PAUSED_AT);
                        }
                        else {
                            localStorage.setItem(Configuration.LAST_PAUSED_AT, moment(value).format());
                        }
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Configuration.prototype, "hasCompletedOnboarding", {
                    get: function () {
                        return localStorage.getItem(Configuration.HAS_COMPLETED_ONBOARDING) === "true";
                    },
                    set: function (value) {
                        if (value == null) {
                            localStorage.removeItem(Configuration.HAS_COMPLETED_ONBOARDING);
                        }
                        else {
                            localStorage.setItem(Configuration.HAS_COMPLETED_ONBOARDING, value.toString());
                        }
                    },
                    enumerable: true,
                    configurable: true
                });
                //#region Injection
                Configuration.ID = "Configuration";
                //#endregion
                //#region Local Storage Keys
                Configuration.ENABLE_DEVELOPER_TOOLS = "ENABLE_DEVELOPER_TOOLS";
                Configuration.ENABLE_FULL_HTTP_LOGGING = "ENABLE_FULL_HTTP_LOGGING";
                Configuration.ENABLE_MOCK_HTTP_CALLS = "ENABLE_MOCK_HTTP_CALLS";
                Configuration.REQUIRE_PIN_THRESHOLD = "REQUIRE_PIN_THRESHOLD";
                Configuration.LAST_PAUSED_AT = "LAST_PAUSED_AT";
                Configuration.HAS_COMPLETED_ONBOARDING = "HAS_COMPLETED_ONBOARDING";
                //#endregion
                //#region Defaults
                Configuration.REQUIRE_PIN_THRESHOLD_DEFAULT = 10; // Default setting is 10 minutes.
                return Configuration;
            })();
            Services.Configuration = Configuration;
        })(Services = SampleApp.Services || (SampleApp.Services = {}));
    })(SampleApp = JustinCredible.SampleApp || (JustinCredible.SampleApp = {}));
})(JustinCredible || (JustinCredible = {}));
var JustinCredible;
(function (JustinCredible) {
    var SampleApp;
    (function (SampleApp) {
        var Services;
        (function (Services) {
            /**
             * Provides a common set of helper/utility methods for performing file I/O.
             *
             * Note that all I/O operations are asynchronous.
             */
            var FileUtilities = (function () {
                function FileUtilities($q, Utilities) {
                    this.$q = $q;
                    this.Utilities = Utilities;
                }
                Object.defineProperty(FileUtilities, "$inject", {
                    get: function () {
                        return [
                            "$q",
                            Services.Utilities.ID
                        ];
                    },
                    enumerable: true,
                    configurable: true
                });
                //#endregion
                /**
                 * This helper provides a common location to manipulate the path before it is used. This is
                 * useful for scenarios in which different platforms handle paths differently.
                 *
                 * @param path The requested file path to use.
                 * @returns A potentially manipulated path to use instead.
                 */
                FileUtilities.prototype.preparePath = function (path) {
                    if (!path) {
                        return null;
                    }
                    // On Android platforms the default root path can contain a trailing forward slash
                    // and it can't handle two consecutive forward slashes in a path. Here we remove the
                    // leading backslash from the given path, if it is present (iOS on the other had requires
                    // a leading slash).
                    if (this.Utilities.isAndroid && this.Utilities.startsWith(path, "/")) {
                        path = path.substr(1);
                    }
                    return path;
                };
                /**
                 * Used to get the default root directory for file I/O on local storage.
                 *
                 * This makes it easy for all API calls to use a common location that could be configurable
                 * by the user and/or development vs production environments.
                 *
                 * The current implementation is hard coded.
                 *
                 * If an externalDataDirectory is available it will be used. This makes it easier to
                 * access files on Android devices as the external data directory is normally accessible
                 * on non-rooted devices (while the dataDirectory is only available if you have root).
                 */
                FileUtilities.prototype.getDefaultRootPath = function () {
                    if (typeof (cordova) === "undefined" || typeof (cordova.file) === "undefined") {
                        return "";
                    }
                    else {
                        return cordova.file.externalDataDirectory ? cordova.file.externalDataDirectory : cordova.file.dataDirectory;
                    }
                };
                /**
                 * Used to get the ID of the default root directory for file I/O on local storage.
                 */
                FileUtilities.prototype.getDefaultRootPathId = function () {
                    if (typeof (cordova) === "undefined" || typeof (cordova.file) === "undefined") {
                        return "";
                    }
                    else {
                        return cordova.file.externalDataDirectory ? "cordova.file.externalDataDirectory" : "cordova.file.dataDirectory";
                    }
                };
                /**
                 * Used to read a text file from local storage.
                 *
                 * The path is relative to the current default root directory.
                 *
                 * @param path The path to the file to read.
                 * @param rootPath The root path to which the given path will be relative to.
                 * @returns A promise of type string which will be the contents of the text file.
                 */
                FileUtilities.prototype.readTextFile = function (path, rootPath) {
                    var q = this.$q.defer();
                    if (!rootPath) {
                        rootPath = this.getDefaultRootPath();
                    }
                    path = this.preparePath(path);
                    if (typeof (window.resolveLocalFileSystemURL) === "undefined") {
                        q.reject(new Error("window.resolveLocalFileSystemURL was not available; ensure that the Cordova file plugin (cordova-plugin-file) is installed properly."));
                        return q.promise;
                    }
                    window.resolveLocalFileSystemURL(rootPath, function (rootEntry) {
                        var flags = {
                            create: false,
                            exclusive: false
                        };
                        rootEntry.getFile(path, flags, function (fileEntry) {
                            fileEntry.file(function (file) {
                                var reader = new FileReader();
                                reader.onload = function (evt) {
                                    q.resolve(reader.result);
                                };
                                reader.onerror = q.reject;
                                reader.readAsText(file);
                            }, q.reject);
                        }, q.reject);
                    }, q.reject);
                    return q.promise;
                };
                /**
                 * Used to write a string of text to a file in local storage.
                 *
                 * @param path The path to the file to write.
                 * @param text The string of text to write to the file.
                 * @param append True to append, false to overwrite (defaults to false).
                 * @param rootPath The root path to which the given path will be relative to.
                 * @returns A promise of type string which will be the contents of the text file.
                 */
                FileUtilities.prototype.writeTextFile = function (path, text, append, rootPath) {
                    var q = this.$q.defer();
                    if (!rootPath) {
                        rootPath = this.getDefaultRootPath();
                    }
                    path = this.preparePath(path);
                    // Default to overwriting if not specified.
                    if (append == null) {
                        append = false;
                    }
                    if (typeof (window.resolveLocalFileSystemURL) === "undefined") {
                        q.reject(new Error("window.resolveLocalFileSystemURL was not available; ensure that the Cordova file plugin (cordova-plugin-file) is installed properly."));
                        return q.promise;
                    }
                    window.resolveLocalFileSystemURL(rootPath, function (rootEntry) {
                        var flags = {
                            create: true,
                            exclusive: false
                        };
                        rootEntry.getFile(path, flags, function (fileEntry) {
                            fileEntry.createWriter(function (writer) {
                                var blobOptions;
                                if (append) {
                                    writer.seek(writer.length);
                                }
                                else {
                                    writer.truncate(0);
                                }
                                blobOptions = {
                                    type: "text/plain"
                                };
                                writer.onwrite = function () {
                                    q.resolve();
                                };
                                writer.onerror = q.reject;
                                writer.write(new Blob([text], blobOptions));
                            }, q.reject);
                        }, q.reject);
                    }, q.reject);
                    return q.promise;
                };
                /**
                 * Used to get a list of directories in the given path.
                 *
                 * @param path The path to the directory to examine.
                 * @param rootPath The root path to which the given path will be relative to.
                 * @returns A promise of type DirectoryEntry[] which will be a list of directories.
                 */
                FileUtilities.prototype.getDirectories = function (path, rootPath) {
                    var q = this.$q.defer();
                    path = this.preparePath(path);
                    if (typeof (window.resolveLocalFileSystemURL) === "undefined") {
                        q.reject(new Error("window.resolveLocalFileSystemURL was not available; ensure that the Cordova file plugin (cordova-plugin-file) is installed properly."));
                        return q.promise;
                    }
                    window.resolveLocalFileSystemURL(rootPath, function (rootEntry) {
                        var flags = {
                            create: false,
                            exclusive: false
                        };
                        rootEntry.getDirectory(path, flags, function (directoryEntry) {
                            var reader;
                            reader = directoryEntry.createReader();
                            reader.readEntries(function (entries) {
                                var directories = [];
                                entries.forEach(function (entry) {
                                    if (entry.isDirectory) {
                                        directories.push(entry);
                                    }
                                });
                                q.resolve(directories);
                            }, q.reject);
                        }, q.reject);
                    }, q.reject);
                    return q.promise;
                };
                /**
                 * Used to get a list of directories in the given directory.
                 *
                 * @param directory The directory to examine.
                 * @returns A promise of type DirectoryEntry[] which will be a list of directories.
                 */
                FileUtilities.prototype.getDirectoriesUsingEntry = function (directory) {
                    var q = this.$q.defer();
                    var reader;
                    reader = directory.createReader();
                    reader.readEntries(function (entries) {
                        var directories = [];
                        entries.forEach(function (entry) {
                            if (entry.isDirectory) {
                                directories.push(entry);
                            }
                        });
                        q.resolve(directories);
                    }, q.reject);
                    return q.promise;
                };
                /**
                 * Used to get a list of directory names in the given path.
                 *
                 * @param path The path to the directory to examine.
                 * @param rootPath The root path to which the given path will be relative to.
                 * @returns A promise of type string[] which will be a list of directory names.
                 */
                FileUtilities.prototype.getDirectoryNames = function (path, rootPath) {
                    var q = this.$q.defer();
                    if (!rootPath) {
                        rootPath = this.getDefaultRootPath();
                    }
                    path = this.preparePath(path);
                    if (typeof (window.resolveLocalFileSystemURL) === "undefined") {
                        q.reject(new Error("window.resolveLocalFileSystemURL was not available; ensure that the Cordova file plugin (cordova-plugin-file) is installed properly."));
                        return q.promise;
                    }
                    window.resolveLocalFileSystemURL(rootPath, function (rootEntry) {
                        var flags = {
                            create: false,
                            exclusive: false
                        };
                        rootEntry.getDirectory(path, flags, function (directoryEntry) {
                            var reader;
                            reader = directoryEntry.createReader();
                            reader.readEntries(function (entries) {
                                var directoryNames = [];
                                entries.forEach(function (entry) {
                                    if (entry.isDirectory) {
                                        directoryNames.push(entry.name);
                                    }
                                });
                                q.resolve(directoryNames);
                            }, q.reject);
                        }, q.reject);
                    }, q.reject);
                    return q.promise;
                };
                /**
                 * Used to get a list of full paths to directories in the given path.
                 *
                 * @param path The path to the directory to examine.
                 * @param rootPath The root path to which the given path will be relative to.
                 * @returns A promise of type string[] which will be a list of full directory paths.
                 */
                FileUtilities.prototype.getDirectoryPaths = function (path, rootPath) {
                    var q = this.$q.defer();
                    if (!rootPath) {
                        rootPath = this.getDefaultRootPath();
                    }
                    path = this.preparePath(path);
                    if (typeof (window.resolveLocalFileSystemURL) === "undefined") {
                        q.reject(new Error("window.resolveLocalFileSystemURL was not available; ensure that the Cordova file plugin (cordova-plugin-file) is installed properly."));
                        return q.promise;
                    }
                    window.resolveLocalFileSystemURL(rootPath, function (rootEntry) {
                        var flags = {
                            create: false,
                            exclusive: false
                        };
                        rootEntry.getDirectory(path, flags, function (directoryEntry) {
                            var reader;
                            reader = directoryEntry.createReader();
                            reader.readEntries(function (entries) {
                                var directoryPaths = [];
                                entries.forEach(function (entry) {
                                    if (entry.isDirectory) {
                                        directoryPaths.push(entry.fullPath);
                                    }
                                });
                                q.resolve(directoryPaths);
                            }, q.reject);
                        }, q.reject);
                    }, q.reject);
                    return q.promise;
                };
                /**
                 * Used to get a list of files in the given path.
                 *
                 * @param path The path to the directory to examine.
                 * @param rootPath The root path to which the given path will be relative to.
                 * @returns A promise of type FileEntry[] which will be a list of files.
                 */
                FileUtilities.prototype.getFiles = function (path, rootPath) {
                    var q = this.$q.defer();
                    if (!rootPath) {
                        rootPath = this.getDefaultRootPath();
                    }
                    path = this.preparePath(path);
                    if (typeof (window.resolveLocalFileSystemURL) === "undefined") {
                        q.reject(new Error("window.resolveLocalFileSystemURL was not available; ensure that the Cordova file plugin (cordova-plugin-file) is installed properly."));
                        return q.promise;
                    }
                    window.resolveLocalFileSystemURL(rootPath, function (rootEntry) {
                        var flags = {
                            create: false,
                            exclusive: false
                        };
                        rootEntry.getDirectory(path, flags, function (directoryEntry) {
                            var reader;
                            reader = directoryEntry.createReader();
                            reader.readEntries(function (entries) {
                                var files = [];
                                entries.forEach(function (entry) {
                                    if (entry.isFile) {
                                        files.push(entry);
                                    }
                                });
                                q.resolve(files);
                            }, q.reject);
                        }, q.reject);
                    }, q.reject);
                    return q.promise;
                };
                /**
                 * Used to get a list of files in the given directory.
                 *
                 * @param directory The directory to examine.
                 * @returns A promise of type FileEntry[] which will be a list of files.
                 */
                FileUtilities.prototype.getFilesUsingEntry = function (directory) {
                    var q = this.$q.defer();
                    var reader;
                    reader = directory.createReader();
                    reader.readEntries(function (entries) {
                        var files = [];
                        entries.forEach(function (entry) {
                            if (entry.isFile) {
                                files.push(entry);
                            }
                        });
                        q.resolve(files);
                    }, q.reject);
                    return q.promise;
                };
                /**
                 * Used to get a list of file names in the given path.
                 *
                 * @param path The path to the directory to examine.
                 * @param rootPath The root path to which the given path will be relative to.
                 * @returns A promise of type string[] which will be a list of file names.
                 */
                FileUtilities.prototype.getFileNames = function (path, rootPath) {
                    var q = this.$q.defer();
                    if (!rootPath) {
                        rootPath = this.getDefaultRootPath();
                    }
                    path = this.preparePath(path);
                    if (typeof (window.resolveLocalFileSystemURL) === "undefined") {
                        q.reject(new Error("window.resolveLocalFileSystemURL was not available; ensure that the Cordova file plugin (cordova-plugin-file) is installed properly."));
                        return q.promise;
                    }
                    window.resolveLocalFileSystemURL(rootPath, function (rootEntry) {
                        var flags = {
                            create: false,
                            exclusive: false
                        };
                        rootEntry.getDirectory(path, flags, function (directoryEntry) {
                            var reader;
                            reader = directoryEntry.createReader();
                            reader.readEntries(function (entries) {
                                var fileNames = [];
                                entries.forEach(function (entry) {
                                    if (entry.isFile) {
                                        fileNames.push(entry.name);
                                    }
                                });
                                q.resolve(fileNames);
                            }, q.reject);
                        }, q.reject);
                    }, q.reject);
                    return q.promise;
                };
                /**
                 * Used to get a list of full paths to files in the given path.
                 *
                 * @param path The path to the directory to examine.
                 * @param rootPath The root path to which the given path will be relative to.
                 * @returns A promise of type string[] which will be a list of file names.
                 */
                FileUtilities.prototype.getFilePaths = function (path, rootPath) {
                    var q = this.$q.defer();
                    if (!rootPath) {
                        rootPath = this.getDefaultRootPath();
                    }
                    path = this.preparePath(path);
                    if (typeof (window.resolveLocalFileSystemURL) === "undefined") {
                        q.reject(new Error("window.resolveLocalFileSystemURL was not available; ensure that the Cordova file plugin (cordova-plugin-file) is installed properly."));
                        return q.promise;
                    }
                    window.resolveLocalFileSystemURL(rootPath, function (rootEntry) {
                        var flags = {
                            create: false,
                            exclusive: false
                        };
                        rootEntry.getDirectory(path, flags, function (directoryEntry) {
                            var reader;
                            reader = directoryEntry.createReader();
                            reader.readEntries(function (entries) {
                                var filePaths = [];
                                entries.forEach(function (entry) {
                                    if (entry.isFile) {
                                        filePaths.push(entry.fullPath);
                                    }
                                });
                                q.resolve(filePaths);
                            }, q.reject);
                        }, q.reject);
                    }, q.reject);
                    return q.promise;
                };
                /**
                 * Used to get all of the files in the given path.
                 * This method searches child directories recursively.
                 *
                 * @param path The path to the directory to examine.
                 * @param rootPath The root path to which the given path will be relative to.
                 * @returns A promise of type FileEntry[] which will be a list of files.
                 */
                FileUtilities.prototype.getAllFiles = function (path, rootPath) {
                    var _this = this;
                    var q = this.$q.defer(), allFiles = [], promises = [];
                    if (!rootPath) {
                        rootPath = this.getDefaultRootPath();
                    }
                    path = this.preparePath(path);
                    // First lets make sure the directory exists.
                    this.directoryExists(path, rootPath).then(function (exists) {
                        // If this directory doesn't exist, then there are no files to get.
                        if (!exists) {
                            q.resolve([]);
                        }
                        // Get all of the child subdirectories.
                        _this.getAllDirectories(path, rootPath).then(function (directories) {
                            var promise;
                            // Now we are going loop over each of the directories...
                            directories.forEach(function (directory) {
                                // ... and get the files in each directory.
                                promise = _this.getFilesUsingEntry(directory);
                                promise.then(function (files) {
                                    // Add the files for this directory to the full list.
                                    allFiles = allFiles.concat(files);
                                }, q.reject);
                                // Store the promise for the getFiles operation.
                                promises.push(promise);
                            });
                            // We also need to include the files in passed in directory path.
                            promise = _this.getFiles(path, rootPath);
                            promise.then(function (files) {
                                allFiles = allFiles.concat(files);
                            }, q.reject);
                            // Store the promise for the getFile operation.
                            promises.push(promise);
                            // Once all of the getFile I/O operations complete, we can finish.
                            _this.$q.all(promises).then(function () { q.resolve(allFiles); }, function () { q.reject(); });
                        }, q.reject);
                    }, q.reject);
                    return q.promise;
                };
                /**
                 * Used to get all of the files in the given path.
                 * This method searches child directories recursively.
                 *
                 * @param path The path to the directory to examine.
                 * @param rootPath The root path to which the given path will be relative to.
                 * @returns A promise of type DirectoryEntry[] which will be a list of directories.
                 */
                FileUtilities.prototype.getAllDirectories = function (path, rootPath) {
                    var _this = this;
                    var q = this.$q.defer(), allDirectories = [];
                    if (!rootPath) {
                        rootPath = this.getDefaultRootPath();
                    }
                    path = this.preparePath(path);
                    // First lets make sure the directory exists.
                    this.directoryExists(path, rootPath).then(function (exists) {
                        // If this directory doesn't exist, then there are no directories to get.
                        if (!exists) {
                            q.resolve([]);
                        }
                        // To kick off recursion, we need to get the directories at this first level.
                        _this.getDirectories(path, rootPath).then(function (directories) {
                            // Save off these first directories.
                            allDirectories = allDirectories.concat(directories);
                            // Kick off recursion.
                            _this.getAllDirectories_recursive(directories, allDirectories, q);
                        }, q.reject);
                    }, q.resolve);
                    return q.promise;
                };
                FileUtilities.prototype.getAllDirectories_recursive = function (dirsToCheck, allDirs, q) {
                    var _this = this;
                    var newDirs = [], promises = [];
                    dirsToCheck.forEach(function (directoryToCheck) {
                        var promise;
                        // Get the child directories for the passed in directories.
                        promise = _this.getDirectoriesUsingEntry(directoryToCheck);
                        promise.then(function (directories) {
                            // Save off the list of directories for this directory.
                            newDirs = newDirs.concat(directories);
                            // Add the directories to the full list
                            allDirs = allDirs.concat(directories);
                        }, q.reject);
                        // Save off the promise for this getDirectories I/O operation.
                        promises.push(promise);
                    });
                    // Once all of the I/O operations for the getDirectories call completes we need
                    // to check to see if we need to continue to recurse or not.
                    this.$q.all(promises).then(function () {
                        if (newDirs.length === 0) {
                            // If there are no more child directories, then we're finally done!
                            q.resolve(allDirs);
                        }
                        else {
                            // If there are more child directories, then we need to recurse.
                            _this.getAllDirectories_recursive(newDirs, allDirs, q);
                        }
                    });
                };
                /**
                 * Used to create a directory at the given path.
                 *
                 * If the directory already exists, it will still return successfully.
                 *
                 * @param path The path to the directory to examine.
                 * @param createParents True to create parent directories if they do not exist.
                 * @param rootPath The root path to which the given path will be relative to.
                 * @returns A promise of type void.
                 */
                FileUtilities.prototype.createDirectory = function (path, createParents, rootPath) {
                    var q = this.$q.defer();
                    if (!rootPath) {
                        rootPath = this.getDefaultRootPath();
                    }
                    // Default createParents to false so that the caller has to explicitly opt in to this behavior.
                    if (createParents == null) {
                        createParents = false;
                    }
                    path = this.preparePath(path);
                    if (createParents) {
                        //TODO Make this create parent directories recursively if they don't exist.
                        throw new Error("FileUtilities.createDirectory() createParents=true not implemented.");
                    }
                    if (typeof (window.resolveLocalFileSystemURL) === "undefined") {
                        q.reject(new Error("window.resolveLocalFileSystemURL was not available; ensure that the Cordova file plugin (cordova-plugin-file) is installed properly."));
                        return q.promise;
                    }
                    window.resolveLocalFileSystemURL(rootPath, function (rootEntry) {
                        var flags;
                        flags = {
                            create: true,
                            exclusive: false
                        };
                        rootEntry.getDirectory(path, flags, function (entry) {
                            // If the call succeeded, then we know the directory was created.
                            q.resolve();
                        }, q.reject);
                    }, q.reject);
                    return q.promise;
                };
                /**
                 * Used to remove all of the files and directories underneath the given directory.
                 * The given directory will not be removed.
                 *
                 * @param path The path to the directory to empty.
                 * @param rootPath The root path to which the given path will be relative to.
                 * @returns A promise of type void.
                 */
                FileUtilities.prototype.emptyDirectory = function (path, rootPath) {
                    var _this = this;
                    var q = this.$q.defer();
                    if (!rootPath) {
                        rootPath = this.getDefaultRootPath();
                    }
                    path = this.preparePath(path);
                    this.directoryExists(path, rootPath).then(function (exists) {
                        // If the directory we are attempting to delete doesn't exist, then
                        // return without failing.
                        if (!exists) {
                            q.resolve();
                        }
                        // First, get a list of ALL child files.
                        _this.getAllFiles(path, rootPath).then(function (fileEntries) {
                            // Then delete all of those files.
                            _this.deleteFilesUsingEntries(fileEntries).then(function () {
                                // Next, get a list of ALL of the child directories.
                                _this.getAllDirectories(path, rootPath).then(function (directoryEntries) {
                                    // Then delete all of those directories.
                                    _this.deleteDirectoriesUsingEntries(directoryEntries).then(q.resolve, q.reject);
                                }, q.reject);
                            }, q.reject);
                        }, q.reject);
                    }, q.reject);
                    return q.promise;
                };
                /**
                 * Used to create a directory at the given path.
                 *
                 * If the directory does not exist, it will still return successfully.
                 * The directory must be completely empty, or the call will fail unless the
                 * recursive flag is set to true.
                 *
                 * @param path The path to the directory to examine.
                 * @param recursive If true, will delete all descendant directories and files.
                 * @param rootPath The root path to which the given path will be relative to.
                 * @returns A promise of type void.
                 */
                FileUtilities.prototype.deleteDirectory = function (path, recursive, rootPath) {
                    var q = this.$q.defer();
                    if (!rootPath) {
                        rootPath = this.getDefaultRootPath();
                    }
                    // Default recursive to false so that the caller has to explicitly opt in to this behavior.
                    if (recursive == null) {
                        recursive = false;
                    }
                    path = this.preparePath(path);
                    this.directoryExists(path, rootPath).then(function (exists) {
                        // If the directory we are attempting to delete doesn't exist, then
                        // return without failing.
                        if (!exists) {
                            q.resolve();
                        }
                        if (typeof (window.resolveLocalFileSystemURL) === "undefined") {
                            q.reject(new Error("window.resolveLocalFileSystemURL was not available; ensure that the Cordova file plugin (cordova-plugin-file) is installed properly."));
                            return q.promise;
                        }
                        window.resolveLocalFileSystemURL(rootPath, function (rootEntry) {
                            var flags = {
                                create: false,
                                exclusive: false
                            };
                            rootEntry.getDirectory(path, flags, function (entry) {
                                if (recursive) {
                                    entry.removeRecursively(q.resolve, q.reject);
                                }
                                else {
                                    entry.remove(q.resolve, q.reject);
                                }
                            }, q.reject);
                        }, q.reject);
                    }, q.reject);
                    return q.promise;
                };
                /**
                 * Used to delete the given directory.
                 *
                 * @param directory The directory to delete.
                 * @returns A promise of type void.
                 */
                FileUtilities.prototype.deleteDirectoryUsingEntry = function (directory) {
                    var q = this.$q.defer();
                    directory.remove(q.resolve, q.reject);
                    return q.promise;
                };
                /**
                 * Used to delete the given directories.
                 *
                 * @param directories The directories to delete.
                 * @returns A promise of type void.
                 */
                FileUtilities.prototype.deleteDirectoriesUsingEntries = function (directories) {
                    var _this = this;
                    var q = this.$q.defer(), promises = [];
                    // Kick off a delete of each of the directories.
                    directories.forEach(function (directory) {
                        var promise;
                        promise = _this.deleteDirectoryUsingEntry(directory);
                        // Save off the promise, so we know when to complete.
                        promises.push(promise);
                    });
                    // Once all of the I/O operations have completed, then we can finish.
                    this.$q.all(promises).then(function () { q.resolve(); }, function () { q.reject(); });
                    return q.promise;
                };
                /**
                 * Used to delete a file at the given path.
                 *
                 * If the file does not exist, it will still return successfully.
                 *
                 * @param path The path to the file to delete.
                 * @param rootPath The root path to which the given path will be relative to.
                 * @returns A promise of type void.
                 */
                FileUtilities.prototype.deleteFile = function (path, rootPath) {
                    var q = this.$q.defer();
                    if (!rootPath) {
                        rootPath = this.getDefaultRootPath();
                    }
                    path = this.preparePath(path);
                    this.fileExists(path, rootPath).then(function (exists) {
                        // If the file we are attempting to delete doesn't exist, then
                        // return without failing.
                        if (!exists) {
                            q.resolve();
                        }
                        if (typeof (window.resolveLocalFileSystemURL) === "undefined") {
                            q.reject(new Error("window.resolveLocalFileSystemURL was not available; ensure that the Cordova file plugin (cordova-plugin-file) is installed properly."));
                            return q.promise;
                        }
                        window.resolveLocalFileSystemURL(rootPath, function (rootEntry) {
                            var flags = {
                                create: false,
                                exclusive: false
                            };
                            rootEntry.getFile(path, flags, function (entry) {
                                entry.remove(q.resolve, q.reject);
                            }, q.reject);
                        }, q.reject);
                    }, q.reject);
                    return q.promise;
                };
                /**
                 * Used to delete the given file.
                 *
                 * @param file The file to delete.
                 * @returns A promise of type void.
                 */
                FileUtilities.prototype.deleteFileUsingEntry = function (file) {
                    var q = this.$q.defer();
                    file.remove(q.resolve, q.reject);
                    return q.promise;
                };
                /**
                 * Used to delete the given files.
                 *
                 * @param files The files to delete.
                 * @returns A promise of type void.
                 */
                FileUtilities.prototype.deleteFilesUsingEntries = function (files) {
                    var _this = this;
                    var q = this.$q.defer(), promises = [];
                    var promise;
                    // Kick off a delete of each of the files.
                    files.forEach(function (file) {
                        promise = _this.deleteFileUsingEntry(file);
                        // Save off the promise, so we know when to complete.
                        promises.push(promise);
                    });
                    // Once all of the I/O operations have completed, then we can finish.
                    this.$q.all(promises).then(function () { q.resolve(); }, function () { q.reject(); });
                    return q.promise;
                };
                /**
                 * Used to check if a file exists at the given path.
                 *
                 * @param path The path to the file check.
                 * @param rootPath The root path to which the given path will be relative to.
                 * @returns A promise of type boolean; true if the file exists, false otherwise.
                 */
                FileUtilities.prototype.fileExists = function (path, rootPath) {
                    var q = this.$q.defer();
                    if (!rootPath) {
                        rootPath = this.getDefaultRootPath();
                    }
                    path = this.preparePath(path);
                    if (typeof (window.resolveLocalFileSystemURL) === "undefined") {
                        q.reject(new Error("window.resolveLocalFileSystemURL was not available; ensure that the Cordova file plugin (cordova-plugin-file) is installed properly."));
                        return q.promise;
                    }
                    window.resolveLocalFileSystemURL(rootPath, function (rootEntry) {
                        var flags;
                        flags = {
                            create: false,
                            exclusive: false
                        };
                        rootEntry.getFile(path, flags, function (entry) {
                            // If we were able to get a file, then it exists.
                            q.resolve(true);
                        }, function () {
                            // If we weren't able to get a file, then it doesn't exist.
                            q.resolve(false);
                        });
                    }, q.reject);
                    return q.promise;
                };
                /**
                 * Used to check if a directory exists at the given path.
                 *
                 * @param path The path to the directory check.
                 * @param rootPath The root path to which the given path will be relative to.
                 * @returns A promise of type boolean; true if the directory exists, false otherwise.
                 */
                FileUtilities.prototype.directoryExists = function (path, rootPath) {
                    var q = this.$q.defer();
                    if (!rootPath) {
                        rootPath = this.getDefaultRootPath();
                    }
                    path = this.preparePath(path);
                    if (typeof (window.resolveLocalFileSystemURL) === "undefined") {
                        q.reject(new Error("window.resolveLocalFileSystemURL was not available; ensure that the Cordova file plugin (cordova-plugin-file) is installed properly."));
                        return q.promise;
                    }
                    window.resolveLocalFileSystemURL(rootPath, function (rootEntry) {
                        var flags;
                        flags = {
                            create: false,
                            exclusive: false
                        };
                        rootEntry.getDirectory(path, flags, function (entry) {
                            // If we were able to get a directory, then it exists.
                            q.resolve(true);
                        }, function () {
                            // If we weren't able to get a directory, then it doesn't exist.
                            q.resolve(false);
                        });
                    }, q.reject);
                    return q.promise;
                };
                //#region Injection
                FileUtilities.ID = "FileUtilities";
                return FileUtilities;
            })();
            Services.FileUtilities = FileUtilities;
        })(Services = SampleApp.Services || (SampleApp.Services = {}));
    })(SampleApp = JustinCredible.SampleApp || (JustinCredible.SampleApp = {}));
})(JustinCredible || (JustinCredible = {}));
var JustinCredible;
(function (JustinCredible) {
    var SampleApp;
    (function (SampleApp) {
        var Services;
        (function (Services) {
            /**
             * This is a custom interceptor for Angular's $httpProvider.
             *
             * It allows us to inject the token into the header, log request and responses,
             * and handle the showing and hiding of the user blocking UI elements, progress
             * bar and spinner.
             *
             * Note: The $injector service is used to obtain most of the other services that
             * this service depends on so we can avoid circular dependency references on startup.
             */
            var HttpInterceptor = (function () {
                function HttpInterceptor($rootScope, $injector, $q, apiVersion) {
                    this.$rootScope = $rootScope;
                    this.$injector = $injector;
                    this.$q = $q;
                    this.apiVersion = apiVersion;
                    //#endregion
                    this.requestsInProgress = 0;
                    this.blockingRequestsInProgress = 0;
                    this.spinnerRequestsInProgress = 0;
                }
                Object.defineProperty(HttpInterceptor.prototype, "Utilities", {
                    get: function () {
                        return this.$injector.get(Services.Utilities.ID);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(HttpInterceptor.prototype, "Plugins", {
                    get: function () {
                        return this.$injector.get(Services.Plugins.ID);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(HttpInterceptor.prototype, "Preferences", {
                    get: function () {
                        return this.$injector.get(Services.Preferences.ID);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(HttpInterceptor.prototype, "Configuration", {
                    get: function () {
                        return this.$injector.get(Services.Configuration.ID);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(HttpInterceptor.prototype, "Logger", {
                    get: function () {
                        return this.$injector.get(Services.Logger.ID);
                    },
                    enumerable: true,
                    configurable: true
                });
                /**
                 * This function can be used to return a factory function that Angular can consume
                 * when defining an Angular factory. It is basically a wrapper for the HttpInterceptor
                 * service so we can do dependency injection and have everything called in the correct
                 * context at runtime.
                 *
                 * @returns A factory that can be used like this: ngModule.factory(HttpInterceptor.getFactory());
                 */
                HttpInterceptor.getFactory = function () {
                    var factory;
                    // Angular expects the factory function to return the object that is used
                    // for the factory when it is injected into other objects.
                    factory = function ($rootScope, $injector, $q, apiVersion) {
                        // Create an instance our strongly-typed service.
                        var instance = new HttpInterceptor($rootScope, $injector, $q, apiVersion);
                        // Return an object that exposes the functions that we want to be exposed.
                        // We use bind here so that the correct context is used (Angular normally
                        // would just use the context of the window when invoking the functions).
                        return {
                            request: _.bind(instance.request, instance),
                            response: _.bind(instance.response, instance),
                            requestError: _.bind(instance.requestError, instance),
                            responseError: _.bind(instance.responseError, instance)
                        };
                    };
                    // Annotate the factory function with the things that should be injected.
                    factory.$inject = [
                        "$rootScope",
                        "$injector",
                        "$q",
                        "apiVersion"
                    ];
                    return factory;
                };
                //#region HttpInterceptor specific methods
                /**
                 * Fired when an HTTP request is being made. This is where the configuration
                 * object (eg URL, HTTP headers, etc) can be modified before the request goes
                 * out.
                 */
                HttpInterceptor.prototype.request = function (config) {
                    var baseUrl;
                    // Do nothing for Angular's template requests.
                    if (this.Utilities.endsWith(config.url, ".html")) {
                        return config;
                    }
                    // Keep track of how many requests are in progress and show spinners etc.
                    this.handleRequestStart(config);
                    // If the URL starts with a tilde, we know this is a URL for one of our own restful API
                    // endpoints. In this case, we'll add our required headers, authorization token, and the
                    // base URL for the current data source.
                    if (this.Utilities.startsWith(config.url, "~")) {
                        /* tslint:disable:no-string-literal */
                        // Specify the version of the API we can consume.
                        config.headers["X-API-Version"] = this.apiVersion;
                        // Specify the content type we are sending and the payload type that we want to receive.
                        config.headers["Content-Type"] = "application/json";
                        config.headers["Accept"] = "application/json";
                        // If we currently have a user ID and token, then include it in the authorization header.
                        if (this.Preferences.userId && this.Preferences.token) {
                            config.headers["Authorization"] = this.getAuthorizationHeader(this.Preferences.userId, this.Preferences.token);
                        }
                        /* tslint:enable:no-string-literal */
                        if (this.Configuration.apiUrl && this.Configuration.apiUrl) {
                            // Grab the base data source URL.
                            baseUrl = this.Configuration.apiUrl;
                            // Remove the leading tilde character.
                            config.url = config.url.substring(1);
                            // If the root path ends with a forward slash and the path
                            // starts with a forward slash, we don't need two slashes in
                            // a row, so remove the leading slash from the path.
                            if (this.Utilities.endsWith(baseUrl, "/") && this.Utilities.startsWith(config.url, "/")) {
                                config.url = config.url.substr(1, config.url.length - 1);
                            }
                            // If the root path doesn't end with a forward slash AND the path
                            // doesn't end with a forward slash, we need to make sure there is
                            // a forward slash in-between the two before we concatenate them.
                            if (!this.Utilities.endsWith(baseUrl, "/") && !this.Utilities.startsWith(config.url, "/")) {
                                config.url = "/" + config.url;
                            }
                            // Prepend the base data source URL.
                            config.url = baseUrl + config.url;
                        }
                        else {
                            throw new Error("An HTTP call cannot be made because a data source was not selected.");
                        }
                    }
                    return config;
                };
                /**
                 * Fired when an HTTP request completes with a status code in the 200 range.
                 */
                HttpInterceptor.prototype.response = function (httpResponse) {
                    var config;
                    // Cast to our custom type which includes some extra flags.
                    config = httpResponse.config;
                    // Do nothing for Angular's template requests.
                    if (this.Utilities.endsWith(config.url, ".html")) {
                        return httpResponse;
                    }
                    this.Logger.debug(HttpInterceptor.ID, "response", "A response was received.", this.Utilities.sanitizeResponseForLogging(httpResponse));
                    // Keep track of how many requests are still in progress and hide spinners etc.
                    this.handleResponseEnd(config);
                    return httpResponse;
                };
                /**
                 * Fired when there is an unhandled exception (eg JavaScript error) in the HttpInterceptor.request
                 * OR when there are problems with the request going out.
                 */
                HttpInterceptor.prototype.requestError = function (rejection) {
                    var httpResponse, exception, config;
                    if (rejection instanceof Error) {
                        // Occurs for any uncaught exceptions that occur in other interceptors.
                        exception = rejection;
                        this.Logger.error(HttpInterceptor.ID, "requestError", "An uncaught exception occurred during an HTTP interceptor's request method.", exception);
                        this.handleFatalError();
                    }
                    else {
                        // Occurs if any other interceptors reject the request.
                        httpResponse = rejection;
                        // Cast to our custom type which includes some extra flags.
                        config = httpResponse.config;
                        this.Logger.error(HttpInterceptor.ID, "requestError", "A request rejection was encountered.", this.Utilities.sanitizeResponseForLogging(httpResponse));
                        // Keep track of how many requests are still in progress and hide spinners etc.
                        if (config) {
                            this.handleResponseEnd(config);
                        }
                    }
                    return this.$q.reject(rejection);
                };
                /**
                 * Fired when a response completes with a non-200 level status code.
                 *
                 * Additionally, this can fire when there are uncaught exceptions (eg JavaScript errors)
                 * in the HttpInterceptor response method.
                 */
                HttpInterceptor.prototype.responseError = function (responseOrError) {
                    var httpResponse, exception, config;
                    if (responseOrError instanceof Error) {
                        exception = responseOrError;
                        this.Logger.error(HttpInterceptor.ID, "responseError", "An uncaught exception occurred during an HTTP interceptor's response method.", exception);
                        this.handleFatalError();
                    }
                    else {
                        httpResponse = responseOrError;
                        // Cast to our custom type which includes some extra flags.
                        config = httpResponse.config;
                        // Do nothing for Angular's template requests.
                        if (this.Utilities.endsWith(config.url, ".html")) {
                            return this.$q.reject(responseOrError);
                        }
                        this.Logger.debug(HttpInterceptor.ID, "responseError", "A non-200 level status code was received.", this.Utilities.sanitizeResponseForLogging(httpResponse));
                        // Keep track of how many requests are still in progress and hide spinners etc.
                        this.handleResponseEnd(config);
                        // For certain response codes, we'll broadcast an event to the rest of the app
                        // so that it can handle the event in whatever way is appropriate.
                        if (httpResponse.status === 401) {
                            this.$rootScope.$broadcast(SampleApp.Constants.Events.HTTP_UNAUTHORIZED, httpResponse);
                        }
                        else if (httpResponse.status === 403) {
                            this.$rootScope.$broadcast(SampleApp.Constants.Events.HTTP_FORBIDDEN, httpResponse);
                        }
                        else if (httpResponse.status === 404) {
                            this.$rootScope.$broadcast(SampleApp.Constants.Events.HTTP_NOT_FOUND, httpResponse);
                        }
                        else if (httpResponse.status === 0) {
                            this.$rootScope.$broadcast(SampleApp.Constants.Events.HTTP_UNKNOWN_ERROR, httpResponse);
                        }
                        else {
                            this.$rootScope.$broadcast(SampleApp.Constants.Events.HTTP_ERROR, httpResponse);
                        }
                    }
                    return this.$q.reject(responseOrError);
                };
                //#endregion
                //#region Private Helpers
                /**
                 * Handles keeping track of the number of requests that are currently in progress as well
                 * as shows any UI blocking or animated spinners.
                 */
                HttpInterceptor.prototype.handleRequestStart = function (config) {
                    // Default the blocking flag if it isn't present.
                    if (typeof (config.blocking) === "undefined") {
                        config.blocking = true;
                    }
                    // Default the show spinner flag if it isn't present.
                    if (typeof (config.showSpinner) === "undefined") {
                        config.showSpinner = true;
                    }
                    // Increment the total number of HTTP requests that are in progress.
                    this.requestsInProgress += 1;
                    // If this request should block the UI, then we have extra work to do.
                    if (config.blocking) {
                        // Increment the total number of HTTP requests that are in progress that
                        // are also currently blocking the UI.
                        this.blockingRequestsInProgress += 1;
                        // If this wasn't the first blocking HTTP request, we need to hide the previous
                        // blocking progress indicator before we show the new one.
                        if (this.blockingRequestsInProgress > 1) {
                            this.Plugins.progressIndicator.hide();
                        }
                        // Show the blocking progress indicator with or without text.
                        if (config.blockingText) {
                            this.Plugins.progressIndicator.showSimpleWithLabel(true, config.blockingText);
                        }
                        else {
                            this.Plugins.progressIndicator.showSimple(true);
                        }
                    }
                    // If this request should show the spinner, then we have extra work to do.
                    if (config.showSpinner) {
                        // Increment the total number of HTTP requests that are in progress that
                        // are also currently showing the spinner.
                        this.spinnerRequestsInProgress += 1;
                        // If the spinner isn't already visible, then show it.
                        if (!NProgress.isStarted()) {
                            NProgress.start();
                        }
                    }
                };
                /**
                 * This method should be called when there is a fatal error during one of our interceptor
                 * methods. It ensures that all of the progress bars and overlays are removed from the
                 * screen so we don't block the user.
                 */
                HttpInterceptor.prototype.handleFatalError = function () {
                    this.requestsInProgress = 0;
                    this.blockingRequestsInProgress = 0;
                    this.spinnerRequestsInProgress = 0;
                    NProgress.done();
                    this.Plugins.progressIndicator.hide();
                };
                /**
                 * Handles keeping track of the number of requests that are currently in progress as well
                 * as hides any UI blocking or animated spinners.
                 */
                HttpInterceptor.prototype.handleResponseEnd = function (config) {
                    // Decrement the total number of HTTP requests that are in progress.
                    this.requestsInProgress -= 1;
                    // If this was a blocking request, also decrement the blocking counter.
                    if (config.blocking) {
                        this.blockingRequestsInProgress -= 1;
                    }
                    // If this was a spinner request, also decrement the spinner counter.
                    if (config.showSpinner) {
                        this.spinnerRequestsInProgress -= 1;
                    }
                    // If there are no more blocking requests in progress, then hide the blocker.
                    if (config.blocking && this.blockingRequestsInProgress === 0) {
                        this.Plugins.progressIndicator.hide();
                    }
                    if (config.showSpinner && this.spinnerRequestsInProgress === 0) {
                        // If there are no more spinner requests in progress, then hide the spinner.
                        NProgress.done();
                    }
                    else if (config.showSpinner) {
                        // If there are still spinner requests in progress, then kick up the progress
                        // bar a little bit to show some of the work has completed.
                        NProgress.inc();
                    }
                };
                /**
                 * Used to create a header value for use with the basic Authorization HTTP header using
                 * the given user name and password value.
                 *
                 * http://en.wikipedia.org/wiki/Basic_access_authentication
                 *
                 * @param The user name to use.
                 * @param The password to use.
                 * @returns A value to use for the HTTP Authorization header.
                 */
                HttpInterceptor.prototype.getAuthorizationHeader = function (userName, password) {
                    var headerValue;
                    // Concatenate the user name and password with a colon.
                    headerValue = this.Utilities.format("{0}:{1}", userName, password);
                    // Base64 encode the user name and password and prepend "Basic".
                    return "Basic " + btoa(headerValue);
                };
                //#region Injection
                HttpInterceptor.ID = "HttpInterceptor";
                return HttpInterceptor;
            })();
            Services.HttpInterceptor = HttpInterceptor;
        })(Services = SampleApp.Services || (SampleApp.Services = {}));
    })(SampleApp = JustinCredible.SampleApp || (JustinCredible.SampleApp = {}));
})(JustinCredible || (JustinCredible = {}));
var JustinCredible;
(function (JustinCredible) {
    var SampleApp;
    (function (SampleApp) {
        var Services;
        (function (Services) {
            /**
             * Provides a common set of helper/utility methods for logging errors.
             */
            var Logger = (function () {
                function Logger(Utilities) {
                    this.Utilities = Utilities;
                    this._maxLogEntries = 20;
                    this._logs = [];
                }
                Object.defineProperty(Logger, "$inject", {
                    get: function () {
                        return [
                            Services.Utilities.ID
                        ];
                    },
                    enumerable: true,
                    configurable: true
                });
                //#region Logging Convenience Methods
                /**
                 * Used to log debbuging information (like method timings etc).
                 *
                 * @param tagPrefix The prefix for the log entries tag (normally the ID of the service or controller).
                 * @param tag The tag for the log (normally the name of the method).
                 * @param message The descriptive text for the log entry.
                 * @param metadata An optional object to be logged with the log entry.
                 */
                Logger.prototype.trace = function (tagPrefix, tag, message, metadata) {
                    this.log(SampleApp.Models.LogLevel.TRACE, tagPrefix, tag, message, metadata);
                };
                /**
                 * Used to log debugging information.
                 *
                 * @param tagPrefix The prefix for the log entries tag (normally the ID of the service or controller).
                 * @param tag The tag for the log (normally the name of the method).
                 * @param message The descriptive text for the log entry.
                 * @param metadata An optional object to be logged with the log entry.
                 */
                Logger.prototype.debug = function (tagPrefix, tag, message, metadata) {
                    this.log(SampleApp.Models.LogLevel.DEBUG, tagPrefix, tag, message, metadata);
                };
                /**
                 * Used to log an informational message.
                 *
                 * @param tagPrefix The prefix for the log entries tag (normally the ID of the service or controller).
                 * @param tag The tag for the log (normally the name of the method).
                 * @param message The descriptive text for the log entry.
                 * @param metadata An optional object to be logged with the log entry.
                 */
                Logger.prototype.info = function (tagPrefix, tag, message, metadata) {
                    this.log(SampleApp.Models.LogLevel.INFO, tagPrefix, tag, message, metadata);
                };
                /**
                 * Used to log a warning.
                 *
                 * @param tagPrefix The prefix for the log entries tag (normally the ID of the service or controller).
                 * @param tag The tag for the log (normally the name of the method).
                 * @param message The descriptive text for the log entry.
                 * @param metadata An optional object to be logged with the log entry.
                 */
                Logger.prototype.warn = function (tagPrefix, tag, message, metadata) {
                    this.log(SampleApp.Models.LogLevel.WARN, tagPrefix, tag, message, metadata);
                };
                /**
                 * Used to log an error.
                 *
                 * @param tagPrefix The prefix for the log entries tag (normally the ID of the service or controller).
                 * @param tag The tag for the log (normally the name of the method).
                 * @param message The descriptive text for the log entry.
                 * @param metadata An optional object to be logged with the log entry.
                 */
                Logger.prototype.error = function (tagPrefix, tag, message, metadata) {
                    this.log(SampleApp.Models.LogLevel.ERROR, tagPrefix, tag, message, metadata);
                };
                /**
                 * Used to log a fatal error.
                 *
                 * @param tagPrefix The prefix for the log entries tag (normally the ID of the service or controller).
                 * @param tag The tag for the log (normally the name of the method).
                 * @param message The descriptive text for the log entry.
                 * @param metadata An optional object to be logged with the log entry.
                 */
                Logger.prototype.fatal = function (tagPrefix, tag, message, metadata) {
                    this.log(SampleApp.Models.LogLevel.FATAL, tagPrefix, tag, message, metadata);
                };
                //#endregion
                //#region Public Methods
                /**
                 * Used to clear the logs that are current in memory.
                 */
                Logger.prototype.clear = function () {
                    this._logs = [];
                };
                Object.defineProperty(Logger.prototype, "logs", {
                    /**
                     * Used to return all of the logs that are currently in memory.
                     *
                     * @returns An array of log entries.
                     */
                    get: function () {
                        return this._logs;
                    },
                    enumerable: true,
                    configurable: true
                });
                /**
                 * Used to get a single log entry by log ID.
                 *
                 * @param id The log ID of the log to retrieve.
                 * @returns A single log entry with the given ID.
                 */
                Logger.prototype.getLog = function (id) {
                    return _.find(this._logs, function (logEntry) {
                        return logEntry.id === id;
                    });
                };
                /**
                 * A helper used to get an icon name for the given log level.
                 *
                 * @param level The level of the log to get an icon name for.
                 * @returns A string of an icon name for the given log level.
                 */
                Logger.prototype.getIconForLevel = function (level) {
                    if (level == null) {
                        return "";
                    }
                    switch (level) {
                        case SampleApp.Models.LogLevel.TRACE:
                            return "ion-code-working";
                        case SampleApp.Models.LogLevel.DEBUG:
                            return "ion-bug";
                        case SampleApp.Models.LogLevel.INFO:
                            return "ion-information-circled";
                        case SampleApp.Models.LogLevel.WARN:
                            return "ion-alert-circled";
                        case SampleApp.Models.LogLevel.ERROR:
                            return "ion-alert";
                        case SampleApp.Models.LogLevel.FATAL:
                            return "ion-nuclear";
                        default:
                            return "ion-alert";
                    }
                };
                /**
                 * A helper used to get a color in hex value for the given log level.
                 *
                 * @param level The level of the log to get a color for.
                 * @returns A hex value of a color for the given log level.
                 */
                Logger.prototype.getColorForLevel = function (level) {
                    if (level == null) {
                        return "";
                    }
                    switch (level) {
                        case SampleApp.Models.LogLevel.TRACE:
                            return "#551A8B"; // Purple
                        case SampleApp.Models.LogLevel.DEBUG:
                            return "#000080"; // Navy
                        case SampleApp.Models.LogLevel.INFO:
                            return "#000000"; // Black
                        case SampleApp.Models.LogLevel.WARN:
                            return "#ff8000"; // Orange
                        case SampleApp.Models.LogLevel.ERROR:
                            return "#ff0000"; // Red
                        case SampleApp.Models.LogLevel.FATAL:
                            return "#ff0000"; // Red
                        default:
                            return "#000000"; // Black
                    }
                };
                /**
                 * A helper used to get friendly name for display for the given log level.
                 *
                 * @param level The level of the log to get a display name for.
                 * @returns A display name of for the given log level.
                 */
                Logger.prototype.getDisplayLevelForLevel = function (level) {
                    if (level == null) {
                        return "";
                    }
                    switch (level) {
                        case SampleApp.Models.LogLevel.TRACE:
                            return "Trace";
                        case SampleApp.Models.LogLevel.DEBUG:
                            return "Debug";
                        case SampleApp.Models.LogLevel.INFO:
                            return "Info";
                        case SampleApp.Models.LogLevel.WARN:
                            return "Warning";
                        case SampleApp.Models.LogLevel.ERROR:
                            return "Error";
                        case SampleApp.Models.LogLevel.FATAL:
                            return "Fatal";
                        default:
                            return "Unknown";
                    }
                };
                //#endregion
                //#region Base logging method
                /**
                 * Logs a log entry.
                 *
                 * Currently logs to an in-memory array whose max size is _maxLogEntries.
                 *
                 * This can easily be modified to use a third party logging service (eg Ouralabs).
                 *
                 * @param logLevel The severity of the log (see Models.LogLevel for possible values).
                 * @param tagPrefix The prefix for the log entries tag (normally the ID of the service or controller).
                 * @param tag The tag for the log (normally the name of the method).
                 * @param message The descriptive text for the log entry.
                 * @param metadata An optional object to be logged with the log entry.
                 */
                Logger.prototype.log = function (logLevel, tagPrefix, tag, message, metadata) {
                    if (logLevel == null) {
                        logLevel = SampleApp.Models.LogLevel.DEBUG;
                    }
                    if (!tag) {
                        tag = "[No Tag]";
                    }
                    if (!tagPrefix) {
                        tagPrefix = "";
                    }
                    if (!message) {
                        message = "[No Message]";
                    }
                    var logEntry = new SampleApp.Models.LogEntry();
                    logEntry.id = this.Utilities.generateGuid();
                    logEntry.level = logLevel;
                    logEntry.tag = tagPrefix ? tagPrefix + "." + tag : tag;
                    logEntry.message = message;
                    logEntry.metadata = metadata;
                    if (this._logs.length >= this._maxLogEntries) {
                        this._logs = this._logs.slice(1);
                    }
                    this._logs.push(logEntry);
                    var consoleMessage = this.Utilities.format("[{0}] {1}", tagPrefix ? tagPrefix + "." + tag : tag, message);
                    /* tslint:disable:no-console */
                    switch (logLevel) {
                        case SampleApp.Models.LogLevel.TRACE:
                            console.trace.call(console, consoleMessage, metadata);
                            break;
                        case SampleApp.Models.LogLevel.DEBUG:
                            console.debug(consoleMessage, metadata);
                            break;
                        case SampleApp.Models.LogLevel.INFO:
                            console.info(consoleMessage, metadata);
                            break;
                        case SampleApp.Models.LogLevel.WARN:
                            console.warn(consoleMessage, metadata);
                            break;
                        case SampleApp.Models.LogLevel.ERROR:
                            console.error(consoleMessage, metadata);
                            break;
                        case SampleApp.Models.LogLevel.FATAL:
                            console.error(consoleMessage + " (FATAL)", metadata);
                            break;
                        default:
                            console.debug(consoleMessage, metadata);
                            break;
                    }
                    /* tslint:enable:no-console */
                };
                //#region Injection
                Logger.ID = "Logger";
                return Logger;
            })();
            Services.Logger = Logger;
        })(Services = SampleApp.Services || (SampleApp.Services = {}));
    })(SampleApp = JustinCredible.SampleApp || (JustinCredible.SampleApp = {}));
})(JustinCredible || (JustinCredible = {}));
var JustinCredible;
(function (JustinCredible) {
    var SampleApp;
    (function (SampleApp) {
        var Services;
        (function (Services) {
            /**
             * Provides mock responses for HTTP requests.
             *
             * This can be useful for unit testing or demoing or developing applications
             * without a live internet connection or access to the HTTP APIs.
             */
            var MockHttpApis = (function () {
                function MockHttpApis($httpBackend) {
                    this.$httpBackend = $httpBackend;
                }
                Object.defineProperty(MockHttpApis, "$inject", {
                    get: function () {
                        return [
                            "$httpBackend"
                        ];
                    },
                    enumerable: true,
                    configurable: true
                });
                //#endregion
                //#region Public API
                /**
                 * Used to setup a random delay time for mock HTTP requests.
                 *
                 * @param $provide The provider service which will be used to obtain and decorate the httpBackend service.
                 */
                MockHttpApis.setupMockHttpDelay = function ($provide) {
                    var maxDelay = 3000, minDelay = 1000;
                    // Example taken from the following blog post:
                    // http://endlessindirection.wordpress.com/2013/05/18/angularjs-delay-response-from-httpbackend/
                    $provide.decorator("$httpBackend", function ($delegate) {
                        var proxy = function (method, url, data, callback, headers) {
                            var interceptor = function () {
                                var _this = this, _arguments = arguments, delay;
                                if (url.indexOf(".html") > -1) {
                                    // Don't apply a delay for templates.
                                    callback.apply(_this, _arguments);
                                }
                                else {
                                    // http://jsfiddle.net/alanwsmith/GfAhy/
                                    delay = Math.floor(Math.random() * (maxDelay - minDelay + 1) + minDelay);
                                    setTimeout(function () {
                                        callback.apply(_this, _arguments);
                                    }, delay);
                                }
                            };
                            return $delegate.call(this, method, url, data, interceptor, headers);
                        };
                        /* tslint:disable:forin */
                        for (var key in $delegate) {
                            proxy[key] = $delegate[key];
                        }
                        /* tslint:enable:forin */
                        return proxy;
                    });
                };
                /**
                 * Used to mock the responses for the $http service. Useful when debugging
                 * or demo scenarios when a backend is not available.
                 *
                 * This can only be called once per page (ie on page load). Subsequent calls
                 * will not remove existing mock rules.
                 *
                 * @param mock True to mock API calls, false to let them pass through normally.
                 */
                MockHttpApis.prototype.mockHttpCalls = function (mock) {
                    // Always allow all requests for templates to go through.
                    this.$httpBackend.whenGET(/.*\.html/).passThrough();
                    if (mock) {
                    }
                    else {
                        // Allow ALL HTTP requests to go through.
                        this.$httpBackend.whenDELETE(/.*/).passThrough();
                        this.$httpBackend.whenGET(/.*/).passThrough();
                        //this.$httpBackend.whenHEAD(/.*/).passThrough(); //TODO The ts.d includes whenHEAD but this version of Angular doesn't?
                        this.$httpBackend.whenJSONP(/.*/).passThrough();
                        this.$httpBackend.whenPATCH(/.*/).passThrough();
                        this.$httpBackend.whenPOST(/.*/).passThrough();
                        this.$httpBackend.whenPUT(/.*/).passThrough();
                    }
                };
                //#region Injection
                MockHttpApis.ID = "MockHttpApis";
                return MockHttpApis;
            })();
            Services.MockHttpApis = MockHttpApis;
        })(Services = SampleApp.Services || (SampleApp.Services = {}));
    })(SampleApp = JustinCredible.SampleApp || (JustinCredible.SampleApp = {}));
})(JustinCredible || (JustinCredible = {}));
var JustinCredible;
(function (JustinCredible) {
    var SampleApp;
    (function (SampleApp) {
        var Services;
        (function (Services) {
            /**
             * Provides mock implementation APIs that may not be available on all platforms.
             */
            var MockPlatformApis = (function () {
                function MockPlatformApis($q, $ionicPopup, $ionicLoading, Utilities) {
                    this.$q = $q;
                    this.$ionicPopup = $ionicPopup;
                    this.$ionicLoading = $ionicLoading;
                    this.Utilities = Utilities;
                    //#endregion
                    this._isProgressIndicatorShown = false;
                }
                Object.defineProperty(MockPlatformApis, "$inject", {
                    get: function () {
                        return [
                            "$q",
                            "$ionicPopup",
                            "$ionicLoading",
                            Services.Utilities.ID
                        ];
                    },
                    enumerable: true,
                    configurable: true
                });
                //#region Public API
                MockPlatformApis.prototype.getToastPlugin = function () {
                    return {
                        show: _.bind(this.toast, this),
                        showLongBottom: _.bind(this.toast, this),
                        showLongCenter: _.bind(this.toast, this),
                        showLongTop: _.bind(this.toast, this),
                        showShortBottom: _.bind(this.toast, this),
                        showShortCenter: _.bind(this.toast, this),
                        showShortTop: _.bind(this.toast, this)
                    };
                };
                MockPlatformApis.prototype.getPushNotificationPlugin = function () {
                    return {
                        register: _.bind(this.pushNotification_register, this),
                        unregister: _.bind(this.pushNotification_unregister, this),
                        setApplicationIconBadgeNumber: _.bind(this.pushNotification_setApplicationIconBadgeNumber, this)
                    };
                };
                MockPlatformApis.prototype.getClipboardPlugin = function () {
                    return {
                        copy: _.bind(this.clipboard_copy, this),
                        paste: _.bind(this.clipboard_paste, this)
                    };
                };
                MockPlatformApis.prototype.getClipboardPluginForWindows = function () {
                    return {
                        copy: _.bind(this.clipboard_windows_copy, this),
                        paste: _.bind(this.clipboard_windows_paste, this)
                    };
                };
                MockPlatformApis.prototype.getClipboardPluginForChromeExtension = function () {
                    return {
                        copy: _.bind(this.clipboard_chromeExtension_copy, this),
                        paste: _.bind(this.clipboard_chromeExtension_paste, this)
                    };
                };
                MockPlatformApis.prototype.getNotificationPlugin = function () {
                    return {
                        alert: _.bind(this.notification_alert, this),
                        confirm: _.bind(this.notification_confirm, this),
                        prompt: _.bind(this.notification_prompt, this),
                        beep: _.bind(this.notification_beep, this),
                        vibrate: _.bind(this.notification_vibrate, this),
                        vibrateWithPattern: _.bind(this.notification_vibrateWithPattern, this),
                        cancelVibration: _.bind(this.notification_cancelVibration, this)
                    };
                };
                MockPlatformApis.prototype.getProgressIndicatorPlugin = function () {
                    return {
                        hide: _.bind(this.progressIndicator_hide, this),
                        showSimple: _.bind(this.progressIndicator_show, this),
                        showSimpleWithLabel: _.bind(this.progressIndicator_show, this),
                        showSimpleWithLabelDetail: _.bind(this.progressIndicator_show, this),
                        showDeterminate: _.bind(this.progressIndicator_show, this),
                        showDeterminateWithLabel: _.bind(this.progressIndicator_show, this),
                        showAnnular: _.bind(this.progressIndicator_show, this),
                        showAnnularWithLabel: _.bind(this.progressIndicator_show, this),
                        showBar: _.bind(this.progressIndicator_show, this),
                        showBarWithLabel: _.bind(this.progressIndicator_show, this),
                        showSuccess: _.bind(this.progressIndicator_show, this),
                        showText: _.bind(this.progressIndicator_show, this)
                    };
                };
                MockPlatformApis.prototype.getStatusBarPlugin = function () {
                    return {
                        overlaysWebView: _.bind(this.noOp, this),
                        styleDefault: _.bind(this.noOp, this),
                        styleLightContent: _.bind(this.noOp, this),
                        styleBlackTranslucent: _.bind(this.noOp, this),
                        styleBlackOpaque: _.bind(this.noOp, this),
                        backgroundColorByName: _.bind(this.noOp, this),
                        backgroundColorByHexString: _.bind(this.noOp, this),
                        hide: _.bind(this.noOp, this),
                        show: _.bind(this.noOp, this),
                        isVisible: false
                    };
                };
                MockPlatformApis.prototype.getKeyboardPlugin = function () {
                    return {
                        hideKeyboardAccessoryBar: _.bind(this.noOp, this),
                        close: _.bind(this.noOp, this),
                        disableScroll: _.bind(this.noOp, this),
                        isVisible: false
                    };
                };
                MockPlatformApis.prototype.getCrashlyticsPlugin = function () {
                    return {
                        logException: _.bind(this.crashlytics_logException, this),
                        log: _.bind(this.crashlytics_log, this),
                        setBool: _.bind(this.noOp, this),
                        setDouble: _.bind(this.noOp, this),
                        setFloat: _.bind(this.noOp, this),
                        setInt: _.bind(this.noOp, this),
                        setLong: _.bind(this.noOp, this),
                        setString: _.bind(this.noOp, this),
                        setUserEmail: _.bind(this.noOp, this),
                        setUserIdentifier: _.bind(this.noOp, this),
                        setUserName: _.bind(this.noOp, this),
                        simulateCrash: _.bind(this.noOp, this)
                    };
                };
                //#endregion
                //#region Misc
                MockPlatformApis.prototype.noOp = function () {
                    // No Op!
                };
                //#endregion
                //#region Toast
                MockPlatformApis.prototype.toast = function (message) {
                    var div = document.createElement("div");
                    div.className = "mockToast";
                    div.style.position = "absolute";
                    div.style.bottom = "60px";
                    div.style.width = "100%";
                    div.style.textAlign = "center";
                    div.style.zIndex = "9000";
                    var span = document.createElement("span");
                    span.style.backgroundColor = "#444444";
                    span.style.opacity = "0.8";
                    span.style.color = "#fff";
                    span.style.padding = "10px";
                    span.style.borderRadius = "40px";
                    span.innerText = message;
                    div.appendChild(span);
                    document.body.appendChild(div);
                    var removeToast = function () {
                        try {
                            document.body.removeChild(div);
                        }
                        catch (err) { }
                    };
                    div.addEventListener("click", removeToast);
                    setTimeout(removeToast, 3000);
                };
                //#endregion
                //#region Push Notifications
                MockPlatformApis.prototype.pushNotification_register = function (successCallback, errorCallback, registrationOptions) {
                    console.warn("window.pushNotification.register()", registrationOptions);
                    setTimeout(function () {
                        errorCallback(new Error("Not implemented in MockPlatformApis.ts"));
                    }, 0);
                };
                MockPlatformApis.prototype.pushNotification_unregister = function (successCallback, errorCallback) {
                    console.warn("window.pushNotification.unregister()");
                    setTimeout(function () {
                        errorCallback(new Error("Not implemented in MockPlatformApis.ts"));
                    }, 0);
                };
                MockPlatformApis.prototype.pushNotification_setApplicationIconBadgeNumber = function (successCallback, errorCallback, badgeCount) {
                    console.warn("window.pushNotification.setApplicationIconBadgeNumber()", badgeCount);
                    setTimeout(function () {
                        errorCallback(new Error("Not implemented in MockPlatformApis.ts"));
                    }, 0);
                };
                //#endregion
                //#region Clipboard
                MockPlatformApis.prototype.clipboard_copy = function (text, onSuccess, onFail) {
                    var confirmed = confirm("The following text was requested for copy to the clipboard:\n\n" + text);
                    // Simulate the asynchronous operation with defer.
                    if (confirmed) {
                        _.defer(function () {
                            if (onSuccess) {
                                onSuccess();
                            }
                        });
                    }
                    else {
                        _.defer(function () {
                            if (onFail) {
                                onFail(new Error("The operation was cancelled."));
                            }
                        });
                    }
                };
                MockPlatformApis.prototype.clipboard_windows_copy = function (text, onSuccess, onFail) {
                    try {
                        // Obtain a reference to the UWP API namespace.
                        var Windows = window["Windows"];
                        var dataPackage = new Windows.ApplicationModel.DataTransfer.DataPackage();
                        dataPackage.setText(text);
                        Windows.ApplicationModel.DataTransfer.Clipboard.setContent(dataPackage);
                        onSuccess();
                    }
                    catch (exception) {
                        onFail(exception);
                    }
                };
                MockPlatformApis.prototype.clipboard_chromeExtension_copy = function (text, onSuccess, onFail) {
                    // The following is based on http://stackoverflow.com/a/12693636
                    try {
                        /* tslint:disable:no-string-literal */
                        // First, subscribe to the oncopy event. Normally executing the copy command for
                        // the current document will copy the currently selected text block. In this case
                        // we use our handler to override this and use the text that was passed into this
                        // method instead.
                        document["oncopy"] = function (event) {
                            event.clipboardData.setData("Text", text);
                            event.preventDefault();
                        };
                        // Execute the copy command for the document, which will fire our oncopy handler.
                        document.execCommand("Copy");
                        // Finally, remove our copy handler.
                        document["oncopy"] = undefined;
                        /* tslint:enable:no-string-literal */
                        _.defer(function () {
                            onSuccess();
                        });
                    }
                    catch (error) {
                        _.defer(function () {
                            onFail(error);
                        });
                    }
                };
                MockPlatformApis.prototype.clipboard_paste = function (onSuccess, onFail) {
                    var result = prompt("A paste from clipboard was requested; enter text for the paste operation:");
                    // Simulate the asynchronous operation with defer.
                    if (result === null) {
                        _.defer(function () {
                            if (onFail) {
                                onFail(new Error("The operation was cancelled."));
                            }
                        });
                    }
                    else {
                        _.defer(function () {
                            if (onSuccess) {
                                onSuccess(result);
                            }
                        });
                    }
                };
                MockPlatformApis.prototype.clipboard_windows_paste = function (onSuccess, onFail) {
                    try {
                        // Obtain a reference to the UWP API namespace.
                        var Windows = window["Windows"];
                        var dataPackage = Windows.ApplicationModel.DataTransfer.Clipboard.getContent();
                        dataPackage.getTextAsync().then(onSuccess, onFail);
                    }
                    catch (exception) {
                        onFail(exception);
                    }
                };
                MockPlatformApis.prototype.clipboard_chromeExtension_paste = function (onSuccess, onFail) {
                    _.defer(function () {
                        onFail(new Error("The paste operation is not currently implemented for Chrome extensions."));
                    });
                };
                //#endregion
                //#region Notifications
                MockPlatformApis.prototype.notification_alert = function (message, alertCallback, title, buttonName) {
                    var buttons = [];
                    // Default the title.
                    title = title || "Alert";
                    // Default the button label text.
                    buttonName = buttonName || SampleApp.Constants.Buttons.OK;
                    // Build each of the buttons.
                    buttons.push({ text: buttonName });
                    // The Ionic pop-up uses HTML to display content, so for line breaks (\n) to render
                    // we need to replace them with actual line break takes.
                    message = message.replace(/\n/g, "<br/>");
                    // Delegate to Ionic's pop-up framework.
                    this.$ionicPopup.show({ title: title, template: message, buttons: buttons }).then(function () {
                        if (alertCallback) {
                            alertCallback();
                        }
                    });
                };
                MockPlatformApis.prototype.notification_confirm = function (message, confirmCallback, title, buttonLabels) {
                    var buttons = [];
                    // Default the title.
                    title = title || "Confirm";
                    // Default the buttons array.
                    buttonLabels = buttonLabels || [SampleApp.Constants.Buttons.Yes, SampleApp.Constants.Buttons.No];
                    // Build each of the buttons.
                    buttonLabels.forEach(function (value, index) {
                        buttons.push({
                            text: value,
                            onTap: function (e) {
                                // The native confirm API uses a 1 based button index (not zero based!).
                                return index + 1;
                            }
                        });
                    });
                    // The Ionic pop-up uses HTML to display content, so for line breaks (\n) to render
                    // we need to replace them with actual line break takes.
                    message = message.replace(/\n/g, "<br/>");
                    // Delegate to Ionic's pop-up framework.
                    this.$ionicPopup.show({ title: title, template: message, buttons: buttons }).then(function (result) {
                        if (confirmCallback) {
                            confirmCallback(result);
                        }
                    });
                };
                MockPlatformApis.prototype.notification_prompt = function (message, promptCallback, title, buttonLabels, defaultText) {
                    var buttons = [], template;
                    // The Ionic pop-up uses HTML to display content, so for line breaks (\n) to render
                    // we need to replace them with actual line break takes.
                    message = message.replace(/\n/g, "<br/>");
                    // Here we manually build the HTML template for the prompt dialog.
                    template = this.Utilities.format("<p>{0}</p><input type='text' id='notification_prompt_input' style='border: solid 1px #3e3e3e;'/>", message);
                    // Default the title.
                    title = title || "Prompt";
                    // Default the buttons array.
                    buttonLabels = buttonLabels || [SampleApp.Constants.Buttons.OK, SampleApp.Constants.Buttons.Cancel];
                    // Build each of the buttons.
                    buttonLabels.forEach(function (value, index) {
                        buttons.push({
                            text: value,
                            onTap: function (e) {
                                var result, input;
                                input = document.getElementById("notification_prompt_input");
                                result = {
                                    // The native confirm API uses a 1 based button index (not zero based!).
                                    buttonIndex: index + 1,
                                    input1: input.value
                                };
                                return result;
                            }
                        });
                    });
                    // Handle defaulting the value.
                    if (defaultText) {
                        _.defer(function () {
                            var input;
                            input = document.getElementById("notification_prompt_input");
                            input.value = defaultText;
                        });
                    }
                    // Delegate to Ionic's pop-up framework.
                    this.$ionicPopup.show({ title: title, template: template, buttons: buttons }).then(function (result) {
                        if (promptCallback) {
                            promptCallback(result);
                        }
                    });
                };
                MockPlatformApis.prototype.notification_beep = function (times) {
                    this.$ionicPopup.alert({ title: "Beep", template: "Beep count: " + times });
                };
                MockPlatformApis.prototype.notification_vibrate = function (time) {
                    this.$ionicPopup.alert({ title: "Vibrate", template: "Vibrate time: " + time });
                };
                MockPlatformApis.prototype.notification_vibrateWithPattern = function (pattern, repeat) {
                    this.$ionicPopup.alert({ title: "Vibrate with Pattern", template: "Pattern: " + pattern + "\nRepeat: " + repeat });
                };
                MockPlatformApis.prototype.notification_cancelVibration = function () {
                    this.$ionicPopup.alert({ title: "Cancel Vibration", template: "cancel" });
                };
                //#endregion
                //#region ProgressIndicator
                MockPlatformApis.prototype.progressIndicator_hide = function () {
                    var _this = this;
                    // There seems to be a bug in the Ionic framework when you close the loading panel
                    // very quickly (before it has fully been shown) that the backdrop will remain visible
                    // and the user won't be able to click anything. Here we ensure that all calls to hide
                    // happen after at least waiting one second.
                    setTimeout(function () {
                        _this.$ionicLoading.hide();
                        _this._isProgressIndicatorShown = false;
                    }, 1000);
                };
                MockPlatformApis.prototype.progressIndicator_show = function (dimBackground, labelOrTimeout, labelOrPosition) {
                    var _this = this;
                    var label, timeout;
                    if (this._isProgressIndicatorShown) {
                        return;
                    }
                    this._isProgressIndicatorShown = true;
                    if (typeof (labelOrTimeout) === "string") {
                        label = labelOrTimeout;
                    }
                    if (typeof (labelOrTimeout) === "number") {
                        timeout = labelOrTimeout;
                    }
                    if (!label) {
                        label = "Please Wait...";
                    }
                    this.$ionicLoading.show({
                        template: "<div class='progress-spinner'></div><br/>" + label
                    });
                    if (timeout) {
                        setTimeout(function () {
                            _this._isProgressIndicatorShown = false;
                            _this.$ionicLoading.hide();
                        }, timeout);
                    }
                };
                //#endregion
                //#region Crashlytics
                MockPlatformApis.prototype.crashlytics_logException = function (exception) {
                    console.error(exception);
                };
                MockPlatformApis.prototype.crashlytics_log = function (message) {
                    console.warn(message);
                };
                //#region Injection
                MockPlatformApis.ID = "MockPlatformApis";
                return MockPlatformApis;
            })();
            Services.MockPlatformApis = MockPlatformApis;
        })(Services = SampleApp.Services || (SampleApp.Services = {}));
    })(SampleApp = JustinCredible.SampleApp || (JustinCredible.SampleApp = {}));
})(JustinCredible || (JustinCredible = {}));
var JustinCredible;
(function (JustinCredible) {
    var SampleApp;
    (function (SampleApp) {
        var Services;
        (function (Services) {
            /**
             * Provides access to Cordova plugins.
             *
             * If the application is not running in Cordova it will return mock implementations.
             */
            var Plugins = (function () {
                function Plugins(Utilities, MockPlatformApis) {
                    this.Utilities = Utilities;
                    this.MockPlatformApis = MockPlatformApis;
                }
                Object.defineProperty(Plugins, "$inject", {
                    get: function () {
                        return [
                            Services.Utilities.ID,
                            Services.MockPlatformApis.ID
                        ];
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Plugins.prototype, "notification", {
                    //#endregion
                    //#region Plug-in Accessors
                    /**
                     * Exposes an API for showing user notifications (eg dialogs).
                     */
                    get: function () {
                        if (!this.Utilities.isRipple && typeof (navigator) !== "undefined" && navigator.notification) {
                            return navigator.notification;
                        }
                        else {
                            return this.MockPlatformApis.getNotificationPlugin();
                        }
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Plugins.prototype, "toast", {
                    /**
                     * Exposes an API for showing toast messages.
                     */
                    get: function () {
                        if (!this.Utilities.isRipple && !this.Utilities.isWindows && !this.Utilities.isWindows8 && window.plugins && window.plugins.toast) {
                            return window.plugins.toast;
                        }
                        else {
                            return this.MockPlatformApis.getToastPlugin();
                        }
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Plugins.prototype, "progressIndicator", {
                    /**
                     * Exposes an API for working with progress indicators.
                     */
                    get: function () {
                        if (!this.Utilities.isRipple && !this.Utilities.isWindows && window.ProgressIndicator && !this.Utilities.isAndroid) {
                            return window.ProgressIndicator;
                        }
                        else {
                            return this.MockPlatformApis.getProgressIndicatorPlugin();
                        }
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Plugins.prototype, "clipboard", {
                    /**
                     * Exposes an API for working with the operating system's clipboard.
                     */
                    get: function () {
                        if (this.Utilities.isWindows) {
                            return this.MockPlatformApis.getClipboardPluginForWindows();
                        }
                        else if (!this.Utilities.isRipple && typeof (cordova) !== "undefined" && cordova.plugins && cordova.plugins.clipboard) {
                            return cordova.plugins.clipboard;
                        }
                        else if (this.Utilities.isChromeExtension) {
                            return this.MockPlatformApis.getClipboardPluginForChromeExtension();
                        }
                        else {
                            return this.MockPlatformApis.getClipboardPlugin();
                        }
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Plugins.prototype, "statusBar", {
                    /**
                     * Exposes an API for manipulating the device's native status bar.
                     */
                    get: function () {
                        if (!this.Utilities.isRipple && window.StatusBar) {
                            return window.StatusBar;
                        }
                        else {
                            return this.MockPlatformApis.getStatusBarPlugin();
                        }
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Plugins.prototype, "keyboard", {
                    /**
                     * Exposes an API for adjusting keyboard behavior.
                     */
                    get: function () {
                        if (!this.Utilities.isRipple && typeof (cordova) !== "undefined" && cordova.plugins && cordova.plugins.Keyboard) {
                            return cordova.plugins.Keyboard;
                        }
                        else {
                            return this.MockPlatformApis.getKeyboardPlugin();
                        }
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Plugins.prototype, "crashlytics", {
                    /**
                     * Exposes an API for logging exception information to the Crashlytics backend service.
                     */
                    get: function () {
                        if (!this.Utilities.isRipple && typeof (navigator) !== "undefined" && navigator.crashlytics) {
                            return navigator.crashlytics;
                        }
                        else {
                            return this.MockPlatformApis.getCrashlyticsPlugin();
                        }
                    },
                    enumerable: true,
                    configurable: true
                });
                //#region Injection
                Plugins.ID = "Plugins";
                return Plugins;
            })();
            Services.Plugins = Plugins;
        })(Services = SampleApp.Services || (SampleApp.Services = {}));
    })(SampleApp = JustinCredible.SampleApp || (JustinCredible.SampleApp = {}));
})(JustinCredible || (JustinCredible = {}));
var JustinCredible;
(function (JustinCredible) {
    var SampleApp;
    (function (SampleApp) {
        var Services;
        (function (Services) {
            /**
             * Provides a way to easily get/set user preferences.
             *
             * The current backing store is local storage and/or session storage:
             * https://cordova.apache.org/docs/en/3.0.0/cordova_storage_storage.md.html#localStorage
             */
            var Preferences = (function () {
                function Preferences() {
                }
                Object.defineProperty(Preferences.prototype, "userId", {
                    //#endregion
                    //#region User ID/Token
                    get: function () {
                        return localStorage.getItem(Preferences.USER_ID);
                    },
                    set: function (value) {
                        if (value == null) {
                            localStorage.removeItem(Preferences.USER_ID);
                        }
                        else {
                            localStorage.setItem(Preferences.USER_ID, value);
                        }
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Preferences.prototype, "token", {
                    get: function () {
                        return localStorage.getItem(Preferences.TOKEN);
                    },
                    set: function (value) {
                        if (value == null) {
                            localStorage.removeItem(Preferences.TOKEN);
                        }
                        else {
                            localStorage.setItem(Preferences.TOKEN, value);
                        }
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Preferences.prototype, "pin", {
                    //#endregion
                    //#region Mobile Application Specific
                    get: function () {
                        return localStorage.getItem(Preferences.PIN);
                    },
                    set: function (value) {
                        if (value == null) {
                            localStorage.removeItem(Preferences.PIN);
                        }
                        else {
                            localStorage.setItem(Preferences.PIN, value);
                        }
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Preferences.prototype, "categoryOrder", {
                    get: function () {
                        var categoryOrder = localStorage.getItem(Preferences.CATEGORY_ORDER);
                        if (categoryOrder == null) {
                            return null;
                        }
                        else {
                            return JSON.parse(categoryOrder);
                        }
                    },
                    set: function (value) {
                        if (value == null) {
                            localStorage.removeItem(Preferences.CATEGORY_ORDER);
                        }
                        else {
                            localStorage.setItem(Preferences.CATEGORY_ORDER, JSON.stringify(value));
                        }
                    },
                    enumerable: true,
                    configurable: true
                });
                //#region Injection
                Preferences.ID = "Preferences";
                //#endregion
                //#region Local Storage Keys
                Preferences.USER_ID = "USER_ID";
                Preferences.TOKEN = "TOKEN";
                Preferences.PIN = "PIN";
                Preferences.CATEGORY_ORDER = "CATEGORY_ORDER";
                return Preferences;
            })();
            Services.Preferences = Preferences;
        })(Services = SampleApp.Services || (SampleApp.Services = {}));
    })(SampleApp = JustinCredible.SampleApp || (JustinCredible.SampleApp = {}));
})(JustinCredible || (JustinCredible = {}));
var JustinCredible;
(function (JustinCredible) {
    var SampleApp;
    (function (SampleApp) {
        var Services;
        (function (Services) {
            /**
             * Provides a common set of helper methods for working with the UI.
             */
            var UiHelper = (function () {
                function UiHelper($window, $q, $ionicModal, $ionicSideMenuDelegate, Plugins, Logger, Preferences, Configuration) {
                    this.$window = $window;
                    this.$q = $q;
                    this.$ionicModal = $ionicModal;
                    this.$ionicSideMenuDelegate = $ionicSideMenuDelegate;
                    this.Plugins = Plugins;
                    this.Logger = Logger;
                    this.Preferences = Preferences;
                    this.Configuration = Configuration;
                    //#endregion
                    this.isPinEntryOpen = false;
                    //#endregion
                    //#region Side Menu
                    /**
                     * The media query used to show the side menu on a tablet in landscape.
                     */
                    this._sideMenuMediaQueryVisibleOnLandscapeTablet = "(min-width: 768px) and (orientation: landscape)";
                    /**
                     * Media query used to ensure the side menu is always hidden.
                     */
                    this._sideMenuMediaQueryNeverVisible = "(min-width: 99999999px) and (orientation: landscape)";
                    /**
                     * The actual media query that is exposed via the sideMenuMediaQuery property.
                     *
                     * This value is manipulated via the setAllowSideMenu() method.
                     */
                    this._sideMenuMediaQuery = this._sideMenuMediaQueryVisibleOnLandscapeTablet;
                }
                Object.defineProperty(UiHelper, "$inject", {
                    get: function () {
                        return [
                            "$window",
                            "$q",
                            "$ionicModal",
                            "$ionicSideMenuDelegate",
                            Services.Plugins.ID,
                            Services.Logger.ID,
                            Services.Preferences.ID,
                            Services.Configuration.ID
                        ];
                    },
                    enumerable: true,
                    configurable: true
                });
                /**
                 * Shows a native alert dialog.
                 *
                 * @param message The message text to display.
                 * @param title The title of the dialog, defaults to "Alert".
                 * @param buttonName The label for the button, defaults to Buttons.OK.
                 *
                 * @returns A promise of void which will be resolved when the alert is closed.
                 */
                UiHelper.prototype.alert = function (message, title, buttonName) {
                    var q = this.$q.defer(), callback;
                    // Default the title.
                    title = title || "Alert";
                    // Default the button name.
                    buttonName = buttonName || SampleApp.Constants.Buttons.OK;
                    // Define the callback that is executed when the dialog is closed.
                    callback = function () {
                        q.resolve();
                    };
                    // Show the alert dialog.
                    this.Plugins.notification.alert(message, callback, title, buttonName);
                    return q.promise;
                };
                /**
                 * Displays a native confirm dialog.
                 *
                 * @param message The message text to display.
                 * @param title The title of the dialog, defaults to "Confirm".
                 * @param buttonLabels An array of strings for specifying button labels, defaults to Buttons.Yes and Buttons.No.
                 *
                 * @returns A promise of type string which will be resolved when the confirm is closed with the button that was clicked.
                 */
                UiHelper.prototype.confirm = function (message, title, buttonLabels) {
                    var q = this.$q.defer(), callback;
                    // Default the title.
                    title = title || "Confirm";
                    // Default the buttons array.
                    buttonLabels = buttonLabels || [SampleApp.Constants.Buttons.Yes, SampleApp.Constants.Buttons.No];
                    // Define the callback that is executed when the dialog is closed.
                    callback = function (choice) {
                        var buttonText;
                        // Get the button text for the button that was clicked; the callback
                        // gives us a button index that is 1 based (not zero based!).
                        buttonText = buttonLabels[choice - 1];
                        q.resolve(buttonText);
                    };
                    // Show the confirm dialog.
                    this.Plugins.notification.confirm(message, callback, title, buttonLabels);
                    return q.promise;
                };
                /**
                 * Shows a native prompt dialog.
                 *
                 * @param message The message text to display.
                 * @param title The title of the dialog, defaults to "Prompt".
                 * @param buttonLabels An array of strings for specifying button labels, defaults to Buttons.OK and Buttons.Cancel.
                 * @param defaultText Default text box input value, default is an empty string.
                 *
                 * @returns A promise of key/value pair of strings; the key is the button that was clicked and the value is the value of the text box.
                 */
                UiHelper.prototype.prompt = function (message, title, buttonLabels, defaultText) {
                    var q = this.$q.defer(), callback, notificationPlugin;
                    // Default the title
                    title = title || "Prompt";
                    // Default the buttons array.
                    buttonLabels = buttonLabels || [SampleApp.Constants.Buttons.OK, SampleApp.Constants.Buttons.Cancel];
                    // Define the callback that is executed when the dialog is closed.
                    callback = function (promptResult) {
                        var promiseResult, buttonText;
                        // Get the button text for the button that was clicked; the callback
                        // gives us a button index that is 1 based (not zero based!).
                        buttonText = buttonLabels[promptResult.buttonIndex - 1];
                        // Define the result object that we'll use the resolve the promise.
                        // This contains the button that was selected as well as the contents
                        // of the text box.
                        promiseResult = new SampleApp.Models.KeyValuePair(buttonText, promptResult.input1);
                        q.resolve(promiseResult);
                    };
                    // Show the prompt dialog.
                    this.Plugins.notification.prompt(message, callback, title, buttonLabels, defaultText);
                    return q.promise;
                };
                //#endregion
                //#region Modal Dialogs
                /**
                 * Used to register a dialog for use with showDialog().
                 *
                 * @param dialogId The unique identifier for the dialog.
                 * @param templatePath The path to the Angular HTML template for the dialog.
                 */
                UiHelper.prototype.registerDialog = function (dialogId, templatePath) {
                    if (!dialogId) {
                        throw new Error("A dialogId is required when registering a dialog.");
                    }
                    if (!templatePath) {
                        throw new Error("A templatePath is required when registering a dialog.");
                    }
                    if (UiHelper.dialogTemplateMap[dialogId]) {
                        this.Logger.warn(UiHelper.ID, "registerDialog", "A dialog with the same ID has already been registered; it will be overwritten.", dialogId);
                    }
                    UiHelper.dialogTemplateMap[dialogId] = templatePath;
                };
                /**
                 * Used to open the modal dialog with the given dialog ID.
                 *
                 * If a dialog with the given ID is already open, another will not be opened
                 * and the promise will be rejected with Constants.DIALOG_ALREADY_OPEN.
                 *
                 * @param dialogId The ID of the dialog to show/open.
                 * @param options The options to use when opening the dialog.
                 * @returns A promise that will be resolved when the dialog is closed with the dialog's return type.
                 */
                UiHelper.prototype.showDialog = function (dialogId, options) {
                    var q = this.$q.defer(), template, creationArgs, creationPromise;
                    // Ensure the options object is present.
                    if (!options) {
                        options = new SampleApp.Models.DialogOptions();
                    }
                    // Ensure the array is initialized.
                    if (UiHelper._openDialogIds == null) {
                        UiHelper._openDialogIds = [];
                    }
                    // If a dialog with this ID is already open, we can reject immediately.
                    // This ensures that only a single dialog with a given ID can be open
                    // at one time.
                    if (_.contains(UiHelper._openDialogIds, dialogId)) {
                        this.$q.reject(SampleApp.Constants.DIALOG_ALREADY_OPEN);
                        return q.promise;
                    }
                    // Lookup the template to use for this dialog based on the dialog ID.
                    template = UiHelper.dialogTemplateMap[dialogId];
                    // If we were unable to find a dialog ID in the template map then we
                    // can bail out here as there is nothing to do.
                    if (!template) {
                        this.Logger.warn(UiHelper.ID, "showDialog", "A call was made to openDialog, but a template is not registered with the given ID in the dialogTemplateMap.", dialogId);
                        this.$q.reject(SampleApp.Constants.DIALOG_ID_NOT_REGISTERED);
                        return q.promise;
                    }
                    // Add the ID of this dialog to the list of dialogs that are open.
                    UiHelper._openDialogIds.push(dialogId);
                    // Define the arguments that will be used to create the modal instance.
                    creationArgs = {
                        // Include the dialog ID so we can identify the dialog later on.
                        dialogId: dialogId,
                        // Include the dialog data object so the BaseDialogController can
                        // get the dialog for the dialog.
                        dialogData: options.dialogData,
                        // Include Ionic modal options.
                        backdropClickToClose: options.backdropClickToClose,
                        hardwareBackButtonClose: options.hardwareBackButtonClose
                    };
                    // Schedule the modal instance to be created.
                    creationPromise = this.$ionicModal.fromTemplateUrl(template, creationArgs);
                    // Once the modal instance has been created...
                    creationPromise.then(function (modal) {
                        var backdrop;
                        // Show it.
                        modal.show();
                        if (!options.showBackground) {
                            // HACK: Here we adjust the background color's alpha value so the user can't
                            // see through the overlay. At some point we should update this to use a blur
                            // effect similar to this: http://ionicframework.com/demos/frosted-glass/
                            backdrop = document.querySelector("div.modal-backdrop");
                            backdrop.style.backgroundColor = "rgba(0, 0, 0, 1)";
                        }
                        // Subscribe to the close event.
                        modal.scope.$on("modal.hidden", function (eventArgs, instance) {
                            // Only handle events for the relevant dialog.
                            if (dialogId !== instance.dialogId) {
                                return;
                            }
                            // If we were blocking out the background, we need to revert that now that
                            // we are closing this instance.
                            if (!options.showBackground) {
                                // HACK: Restore the backdrop's background color value.
                                backdrop.style.backgroundColor = "";
                            }
                            // Remove this dialog's ID from the list of ones that are open.
                            UiHelper._openDialogIds = _.without(UiHelper._openDialogIds, dialogId);
                            // Once the dialog is closed, resolve the original promise
                            // using the result data object from the dialog (if any).
                            q.resolve(modal.result);
                        });
                    });
                    return q.promise;
                };
                Object.defineProperty(UiHelper.prototype, "sideMenuMediaQuery", {
                    /**
                     * Property used to expose the media query for the side menu.
                     */
                    get: function () {
                        return this._sideMenuMediaQuery;
                    },
                    enumerable: true,
                    configurable: true
                });
                /**
                 * Sets a flag that indicates if the side menu should be available.
                 *
                 * By default a media query is used to show the side menu when the device is in landscape
                 * and has a minimum width of 768px (eg a tablet).
                 *
                 * @param allow Set to true to use the media query to determine if the menu is available, false to ensure the menu isn't available.
                 */
                UiHelper.prototype.setAllowSideMenu = function (allow) {
                    if (allow) {
                        this._sideMenuMediaQuery = this._sideMenuMediaQueryVisibleOnLandscapeTablet;
                    }
                    else {
                        this._sideMenuMediaQuery = this._sideMenuMediaQueryNeverVisible;
                    }
                    this.$ionicSideMenuDelegate._instances[0].exposeAside(this.$window.matchMedia(this._sideMenuMediaQuery).matches);
                    this.$ionicSideMenuDelegate.canDragContent(allow);
                };
                //#endregion
                //#region Helpers for the device_resume event
                UiHelper.prototype.showPinEntryAfterResume = function () {
                    var q = this.$q.defer(), resumedAt, options, model;
                    // If the PIN entry dialog then there is nothing to do.
                    if (this.isPinEntryOpen) {
                        q.reject(SampleApp.Constants.DIALOG_ALREADY_OPEN);
                        return q.promise;
                    }
                    // If there is a PIN set and a last paused time then we need to determine if we
                    // need to show the lock screen.
                    if (this.Preferences.pin && this.Configuration.lastPausedAt != null && this.Configuration.lastPausedAt.isValid()) {
                        // Get the current time.
                        resumedAt = moment();
                        // If the time elapsed since the last pause event is greater than the threshold,
                        // then we need to show the lock screen.
                        if (resumedAt.diff(this.Configuration.lastPausedAt, "minutes") > this.Configuration.requirePinThreshold) {
                            model = new SampleApp.Models.PinEntryDialogModel("PIN Required", this.Preferences.pin, false);
                            options = new SampleApp.Models.DialogOptions(model);
                            options.backdropClickToClose = false;
                            options.hardwareBackButtonClose = false;
                            options.showBackground = false;
                            this.showDialog(SampleApp.Controllers.PinEntryController.ID, options).then(function (result) {
                                // Once a matching PIN is entered, then we can resolve.
                                q.resolve();
                            });
                        }
                        else {
                            // If we don't need to show the PIN screen, then immediately resolve.
                            q.resolve();
                        }
                    }
                    else {
                        // If we don't need to show the PIN screen, then immediately resolve.
                        q.resolve();
                    }
                    return q.promise;
                };
                //#region Injection
                UiHelper.ID = "UiHelper";
                /**
                 * A map of dialog IDs to the templates that they use. Used by the showDialog helper method.
                 * Entries are added to this map via the registerDialog method.
                 *
                 * The template's root element should have a controller that extends BaseDialogController.
                 */
                UiHelper.dialogTemplateMap = {};
                return UiHelper;
            })();
            Services.UiHelper = UiHelper;
        })(Services = SampleApp.Services || (SampleApp.Services = {}));
    })(SampleApp = JustinCredible.SampleApp || (JustinCredible.SampleApp = {}));
})(JustinCredible || (JustinCredible = {}));
var JustinCredible;
(function (JustinCredible) {
    var SampleApp;
    (function (SampleApp) {
        var Services;
        (function (Services) {
            /**
             * Provides a common set of helper/utility methods.
             */
            var Utilities = (function () {
                function Utilities(_isRipple_, _isCordova_, buildVars, _isChromeExtension_, Preferences) {
                    this._isRipple_ = _isRipple_;
                    this._isCordova_ = _isCordova_;
                    this.buildVars = buildVars;
                    this._isChromeExtension_ = _isChromeExtension_;
                    this.Preferences = Preferences;
                }
                Object.defineProperty(Utilities, "$inject", {
                    get: function () {
                        return [
                            "isRipple",
                            "isCordova",
                            "buildVars",
                            "isChromeExtension",
                            Services.Preferences.ID
                        ];
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Utilities.prototype, "isRipple", {
                    //#endregion
                    //#region Platforms
                    /**
                     * Can be used to determine if this application is being run in the Apache
                     * Ripple Emulator, which runs in a desktop browser, and not Cordova.
                     *
                     * @returns True if the application is running in the Ripple emulator, false otherwise.
                     */
                    get: function () {
                        return this._isRipple_;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Utilities.prototype, "isCordova", {
                    /**
                     * Can be used to determine if this application is being run in the Apache
                     * Cordova runtime.
                     *
                     * @returns True if the application is running in the Apache Cordova runtime, false otherwise.
                     */
                    get: function () {
                        return this._isCordova_;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Utilities.prototype, "isDebugMode", {
                    /**
                     * Can be used to determine if the application is in debug or release mode.
                     *
                     * @returns True if the application is in debug mode, false otherwise.
                     */
                    get: function () {
                        return this.buildVars.debug;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Utilities.prototype, "isChromeExtension", {
                    /**
                     * Can be used to determine if the application is running as a Chrome browser Extension.
                     *
                     * @returns True if the application is running as a Chrome Extension, false otherwise.
                     */
                    get: function () {
                        return this._isChromeExtension_;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Utilities.prototype, "isAndroid", {
                    /**
                     * Used to check if the current platform is Android.
                     */
                    get: function () {
                        return typeof (device) !== "undefined" && device.platform === "Android";
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Utilities.prototype, "isIos", {
                    /**
                     * Used to check if the current platform is iOS.
                     */
                    get: function () {
                        return typeof (device) !== "undefined" && device.platform === "iOS";
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Utilities.prototype, "isWindowsPhone8", {
                    /**
                     * Used to check if the current platform is Windows Phone 8.x.
                     */
                    get: function () {
                        return typeof (device) !== "undefined" && device.platform === "WP8";
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Utilities.prototype, "isWindows8", {
                    /**
                     * Used to check if the current platform is Windows 8.
                     */
                    get: function () {
                        return typeof (device) !== "undefined" && device.platform === "Windows8";
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Utilities.prototype, "isWindows", {
                    /**
                     * Used to check if the current platform is Windows 10 / UWP.
                     */
                    get: function () {
                        return typeof (device) !== "undefined" && device.platform === "windows";
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Utilities.prototype, "platform", {
                    /**
                    * Used to return the name of the platform as specified via Cordova.
                    */
                    get: function () {
                        if (typeof (device) === "undefined") {
                            return typeof (window.ripple) !== "undefined" ? "Ripple" : "Unknown";
                        }
                        else {
                            return device.platform;
                        }
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Utilities.prototype, "device", {
                    /**
                     * Used to return the global device object.
                     */
                    get: function () {
                        if (typeof (device) === "undefined") {
                            return {
                                cordova: "unknown",
                                platform: "unknown",
                                model: "unknown",
                                uuid: "unknown",
                                version: "unknown",
                                capture: null
                            };
                        }
                        else {
                            return device;
                        }
                    },
                    enumerable: true,
                    configurable: true
                });
                //#endregion
                //#region String Manipulation
                /**
                 * Used to determine if a string ends with a specified string.
                 *
                 * @param str The string to check.
                 * @param suffix The value to check for.
                 * @returns True if str ends with the gtiven suffix, false otherwise.
                 */
                Utilities.prototype.endsWith = function (str, suffix) {
                    if (str == null || str === "") {
                        return false;
                    }
                    if (suffix == null || suffix === "") {
                        return true;
                    }
                    return (str.substr(str.length - suffix.length) === suffix);
                };
                /**
                 * Used to determine if a string starts with a specified string.
                 *
                 * @param str The string to check.
                 * @param prefix The value to check for.
                 * @returns True if str starts with the given prefix, false otherwise.
                 */
                Utilities.prototype.startsWith = function (str, prefix) {
                    if (str == null || str === "") {
                        return false;
                    }
                    if (prefix == null || prefix === "") {
                        return true;
                    }
                    return (str.substr(0, prefix.length) === prefix);
                };
                /**
                 * Used to morph a string to title-case; that is, any character that
                 * is proceeded by a space will be capitalized.
                 *
                 * @param str The string to convert to title-case.
                 * @returns The title-case version of the string.
                 */
                Utilities.prototype.toTitleCase = function (str) {
                    if (!str) {
                        return "";
                    }
                    // http://stackoverflow.com/questions/196972/convert-string-to-title-case-with-javascript
                    return str.replace(/\w\S*/g, function (txt) { return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase(); });
                };
                /**
                 * Used to format a string by replacing values with the given arguments.
                 * Arguments should be provided in the format of {x} where x is the index
                 * of the argument to be replaced corresponding to the arguments given.
                 *
                 * For example, the string t = "Hello there {0}, it is {1} to meet you!"
                 * used like this: Utilities.format(t, "dude", "nice") would result in:
                 * "Hello there dude, it is nice to meet you!".
                 *
                 * @param str The string value to use for formatting.
                 * @param ... args The values to inject into the format string.
                 */
                Utilities.prototype.format = function (formatString) {
                    var args = [];
                    for (var _i = 1; _i < arguments.length; _i++) {
                        args[_i - 1] = arguments[_i];
                    }
                    var i, reg;
                    i = 0;
                    for (i = 0; i < arguments.length - 1; i += 1) {
                        reg = new RegExp("\\{" + i + "\\}", "gm");
                        formatString = formatString.replace(reg, arguments[i + 1]);
                    }
                    return formatString;
                };
                //#endregion
                //#region Reflection-like Helpers
                /**
                 * Used to get a value from an object with the given property name.
                 *
                 * @param object The object to obtain the value from.
                 * @param propertyString A dotted notation string of properties to use to obtain the value.
                 * @returns The value specified by the property string from the given object.
                 */
                Utilities.prototype.getValue = function (object, propertyString) {
                    var properties, property, i;
                    if (!object) {
                        return null;
                    }
                    if (!propertyString) {
                        return null;
                    }
                    // This handles the simplest case (a property string without a dotted notation)
                    // as well as an edge case (a property whose name contains dots).
                    if (object[propertyString]) {
                        return object[propertyString];
                    }
                    // Break the property string down into individual properties.
                    properties = propertyString.split(".");
                    // Dig down into the object hierarchy using the properties.
                    for (i = 0; i < properties.length; i += 1) {
                        // Grab the property for this index.
                        property = properties[i];
                        // Grab the object with this property name.
                        object = object[property];
                        // If we've hit a null, then we can bail out early.
                        if (object == null) {
                            return null;
                        }
                    }
                    // Finally, return the object that we've obtained.
                    return object;
                };
                /**
                 * Sets the value of a property with the specified propertyString on the supplied model object.
                 *
                 * @param object The object on which to set the value.
                 * @param propertyString A dotted notation string of properties to use to set the value.
                 * @param value The value to set.
                 * @param instantiateObjects True to create objects in the hierarchy that do not yet exist; defaults to true.
                 */
                Utilities.prototype.setValue = function (object, propertyString, value, instantiateObjects) {
                    var properties, property, i;
                    if (!object) {
                        return;
                    }
                    if (!propertyString) {
                        return;
                    }
                    // Default the flag to true if it is not specified.
                    if (typeof (instantiateObjects) === "undefined") {
                        instantiateObjects = true;
                    }
                    // Break the property string down into individual properties.
                    properties = propertyString.split(".");
                    // Dig down into the object hierarchy using the properties.
                    for (i = 0; i < properties.length; i += 1) {
                        // Grab the property for this index.
                        property = properties[i];
                        if (properties.length - 1 === i) {
                            // If this is the last property, then set the value.
                            object[property] = value;
                        }
                        else {
                            // If this is not the last property, then we need to traverse.
                            // Grab the object with this property name.
                            if (object[property]) {
                                // We encountered a non-null object! Grab it and traverse.
                                object = object[property];
                            }
                            else if (instantiateObjects) {
                                // If we've hit a null, and the flag is true create a new
                                // empty object and continue traversal.
                                object[property] = {};
                                object = object[property];
                            }
                            else {
                                // If we've hit a null, and the flag is false, then bail out.
                                return;
                            }
                        }
                    }
                };
                /**
                 * Used to check if the given class reference dervies from the given base class reference.
                 *
                 * @param TargetClass A reference to a class to check.
                 * @param BaseClass A reference to the base class to check.
                 * @returns True if TargetClass or any of its parent classes dervice from BaseClass.
                 */
                Utilities.prototype.derivesFrom = function (TargetClass, BaseClass) {
                    // First we'll handle the edge case where the same class reference is passed.
                    if (TargetClass.prototype === BaseClass.prototype) {
                        return true;
                    }
                    // This will hold all of the prototypes for the object hiearchy.
                    var prototypes = [];
                    // Initialize the current class we will be examining in the loop below.
                    // We'll start out with the TargetClass.
                    var CurrentClass = TargetClass;
                    // Save off the prototype of the target class.
                    prototypes.push(TargetClass.prototype);
                    // Walk upwards in the class hiearchy saving off each of the prototypes.
                    while (true) {
                        // Update the current class that we will be examining to be it's parent.
                        CurrentClass = CurrentClass.prototype.__proto__.constructor;
                        // Once we've reached a class whose prototype is the Object's prototype
                        // we know we've reached the top and can stop traversing.
                        if (CurrentClass.prototype === Object.prototype) {
                            break;
                        }
                        // Save off the prototype for this class.
                        prototypes.push(CurrentClass.prototype);
                        // Once we've reached a class whose parent's prototype is the Object's prototype
                        // we know we've reached the top and can stop traversing.
                        if (CurrentClass.prototype.__proto__ === Object.prototype) {
                            break;
                        }
                    }
                    // Now that we've finished walking up the class hierarchy, we need to see if
                    // any of the prototypes match the prototype of the Base class in question.
                    var foundMatch = false;
                    prototypes.forEach(function (prototype) {
                        if (prototype === BaseClass.prototype) {
                            foundMatch = true;
                        }
                    });
                    return foundMatch;
                };
                /**
                 * Used to obtain a function from the given scope using the dotted notation property string.
                 *
                 * If inferContext is true, then the method will attempt to determine which context the function should be executed in.
                 * For example, given the string "something.else.theFunction" where "theFunction" is a function reference, the context
                 * would be "something.else". In this case the function returned will be wrapped in a function that will invoke the original
                 * function in the correct context. This is most useful for client event strings as passed from the server. Defaults to true.
                 *
                 * @param scopeOrPropertyString The scope to being the search at OR a property string (which assumes the scope is window).
                 * @param propertyString The dotted notation property string used to obtain the function reference from the scope.
                 * @param inferContext Indicates that we should attempt determine the context in which the function should be called.
                 */
                Utilities.prototype.getFunction = function (scopeOrPropertyString, propertyString, inferContext) {
                    var scope, fn, contextPropertyString, context;
                    // Default the inferContext variable to true.
                    if (inferContext == null) {
                        inferContext = true;
                    }
                    if (typeof (scopeOrPropertyString) === "string") {
                        // If the first parameter was a string, then we know they used the string only overload.
                        // In that case default the scope to be the window object.
                        scope = window;
                        propertyString = scopeOrPropertyString;
                    }
                    else {
                        // Otherwise, treat the first parameter as the scope object.
                        scope = scopeOrPropertyString;
                    }
                    // Delegate to the getValue() function to do the work.
                    fn = this.getValue(scope, propertyString);
                    if (!fn) {
                        return null;
                    }
                    if (inferContext) {
                        // Now that we've obtained a function reference, lets see if we can find the context to use
                        // to invoke the function in.
                        if (propertyString.indexOf(".") > -1) {
                            // Use the property string all the way up to the last segment.
                            // For example, if property string was: something.else.theFunction
                            // then the context string would be: something.else
                            contextPropertyString = propertyString.substr(0, propertyString.lastIndexOf("."));
                            // Now delegate to the getValue() function to do the work.
                            context = this.getValue(scope, contextPropertyString);
                        }
                        else {
                            // If the property string is not a dotted notation string, then use
                            // the scope itself as the context object.
                            context = scope;
                        }
                        // Now that we have a context object, we'll use this underscore helper to wrap the original
                        // function in a function that will call said function with the given context.
                        fn = _.bind(fn, context);
                    }
                    // Return the newly created wrapper function.
                    return fn;
                };
                //#endregion
                //#region Misc
                /**
                 * Returns a random number between the given minimum and maximum values.
                 */
                Utilities.prototype.getRandomNumber = function (min, max) {
                    // http://jsfiddle.net/alanwsmith/GfAhy/
                    return Math.floor(Math.random() * (max - min + 1) + min);
                };
                /**
                 * Used to generate a globally unique identifier in the standard GUID string format.
                 * For example: D99A5596-5478-4BAA-9A42-3BC352DC9D56
                 *
                 * @returns A GUID in string format.
                 */
                Utilities.prototype.generateGuid = function () {
                    var 
                    // Will hold the GUID string as we build it.
                    guid, 
                    // Used to hold the generated hex digit as they are generated.
                    hexDigit, 
                    // Used to keep track of our location in the generated string.
                    j;
                    // Start out with an empty string.
                    guid = "";
                    // Now loop 35 times to generate 35 characters.
                    for (j = 0; j < 32; j++) {
                        // Characters at these indexes are always hyphens.
                        if (j === 8 || j === 12 || j === 16 || j === 20) {
                            guid = guid + "-";
                        }
                        // Get a random number between 0 and 16 and convert it to its hexadecimal value.
                        hexDigit = Math.floor(Math.random() * 16).toString(16).toUpperCase();
                        // Add the digit onto the string.
                        guid = guid + hexDigit;
                    }
                    return guid;
                };
                /**
                 * Used to format a stack trace provided by the stacktrace.js library.
                 *
                 * @param stackTrace An array of stack items provided by stacktrace.js's printStackTrace() call.
                 * @returns A human readable stack trace.
                 */
                Utilities.prototype.formatStackTrace = function (stackTrace) {
                    if (!stackTrace) {
                        return "";
                    }
                    stackTrace.forEach(function (traceEntry, index) {
                        // First, split the entry on the at symbol; each entry is the name of
                        // the function followed by the file name and line info.
                        var parts = traceEntry.split("@");
                        var functionName;
                        var fileAndLineInfo;
                        if (parts.length === 1) {
                            // If there was only one part, then a function name was not specified
                            // and we have only the file path and line info.
                            functionName = "<Anonymous>";
                            fileAndLineInfo = parts[0];
                        }
                        else {
                            // If there was two parts, then we have the function name (first part)
                            // and file path and line info (second part).
                            functionName = parts[0];
                            fileAndLineInfo = parts[1];
                        }
                        // Strip off the full path to the source file on the device, and just use
                        // a relative path so we can more easily read the stack trace.
                        fileAndLineInfo = fileAndLineInfo.substr(fileAndLineInfo.indexOf("/www/") + "/www/".length);
                        // Update the line with the shorter 
                        stackTrace[index] = functionName + "@" + fileAndLineInfo;
                    });
                    return stackTrace.join("\n\n");
                };
                /**
                 * This is a helper method for removing sensitive data from a request response body for logging.
                 *
                 * If the given config object has its logRequestBody property set to false, the data property
                 * will be set to "[FILTERED]" so that it can be logged without the data.
                 *
                 * It is important to note that this method returns a deep copy of the given object if
                 * logRequestBody is false so that it will not mutate the object. In the case of logRequestBody
                 * being set to true, the original, unaltered object will be passed through.
                 *
                 * @param config The HTTP configuration object to be sanitized for logging.
                 * @returns A deep copy with the request body removed or a unaltered pass through of the object.
                 */
                Utilities.prototype.sanitizeConfigForLogging = function (config) {
                    if (config && config.logRequestBody === false) {
                        var filteredConfig = _.cloneDeep(config);
                        filteredConfig.data = "[FILTERED]";
                        return filteredConfig;
                    }
                    else {
                        return config;
                    }
                };
                /**
                 * This is a helper method for removing sensitive data from a request response body (on the HTTP
                 * response object) for logging.
                 *
                 * If the given response's config object has its logRequestBody property set to false, the data
                 * config.data will be set to "[FILTERED]" so that it can be logged without the data.
                 *
                 * It is important to note that this method returns a deep copy of the given object if
                 * logRequestBody is false so that it will not mutate the object. In the case of logRequestBody
                 * being set to true, the original, unaltered object will be passed through.
                 *
                 * @param config The HTTP response's request configuration object to be sanitized for logging.
                 * @returns A deep copy with the request body removed or a unaltered pass through of the object.
                 */
                Utilities.prototype.sanitizeResponseForLogging = function (httpResponse) {
                    /* tslint:disable:no-string-literal */
                    if (httpResponse && httpResponse.config && httpResponse.config.data && httpResponse.config["logRequestBody"] === false) {
                        var filteredResponse = _.cloneDeep(httpResponse);
                        filteredResponse.config.data = "[FILTERED]";
                        return filteredResponse;
                    }
                    else {
                        return httpResponse;
                    }
                    /* tslint:enable:no-string-literal */
                };
                Object.defineProperty(Utilities.prototype, "categories", {
                    /**
                     * Returns the categories for the application in their default sort order.
                     */
                    get: function () {
                        // Define the default set of categories.
                        var categories = [
                            new SampleApp.ViewModels.CategoryItemViewModel("Category 1", "#/app/category/1", "ios-pricetags-outline", 0),
                            new SampleApp.ViewModels.CategoryItemViewModel("Category 2", "#/app/category/2", "ios-pricetags-outline", 1),
                            new SampleApp.ViewModels.CategoryItemViewModel("Category 3", "#/app/category/3", "ios-pricetags-outline", 2),
                            new SampleApp.ViewModels.CategoryItemViewModel("Category 4", "#/app/category/4", "ios-pricetags-outline", 3)
                        ];
                        // If the user has ordering preferences, then apply their custom ordering.
                        if (this.Preferences.categoryOrder) {
                            this.Preferences.categoryOrder.forEach(function (categoryName, index) {
                                var categoryItem = _.where(categories, { name: categoryName })[0];
                                if (categoryItem) {
                                    categoryItem.order = index;
                                }
                            });
                        }
                        // Ensure the list is sorted by the order.
                        categories = _.sortBy(categories, "order");
                        return categories;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Utilities.prototype, "defaultCategory", {
                    /**
                     * Returns the view that is set as the default.
                     *
                     * Currently, this is the category that is set in the first position.
                     */
                    get: function () {
                        return this.categories[0];
                    },
                    enumerable: true,
                    configurable: true
                });
                //#region Injection
                Utilities.ID = "Utilities";
                return Utilities;
            })();
            Services.Utilities = Utilities;
        })(Services = SampleApp.Services || (SampleApp.Services = {}));
    })(SampleApp = JustinCredible.SampleApp || (JustinCredible.SampleApp = {}));
})(JustinCredible || (JustinCredible = {}));
var JustinCredible;
(function (JustinCredible) {
    var SampleApp;
    (function (SampleApp) {
        var ViewModels;
        (function (ViewModels) {
            var CategoryItemViewModel = (function () {
                function CategoryItemViewModel(name, href, icon, order) {
                    this.name = name;
                    this.href = href;
                    this.icon = icon;
                    this.order = order;
                }
                return CategoryItemViewModel;
            })();
            ViewModels.CategoryItemViewModel = CategoryItemViewModel;
        })(ViewModels = SampleApp.ViewModels || (SampleApp.ViewModels = {}));
    })(SampleApp = JustinCredible.SampleApp || (JustinCredible.SampleApp = {}));
})(JustinCredible || (JustinCredible = {}));
var JustinCredible;
(function (JustinCredible) {
    var SampleApp;
    (function (SampleApp) {
        var ViewModels;
        (function (ViewModels) {
            var CategoryViewModel = (function () {
                function CategoryViewModel() {
                }
                return CategoryViewModel;
            })();
            ViewModels.CategoryViewModel = CategoryViewModel;
        })(ViewModels = SampleApp.ViewModels || (SampleApp.ViewModels = {}));
    })(SampleApp = JustinCredible.SampleApp || (JustinCredible.SampleApp = {}));
})(JustinCredible || (JustinCredible = {}));
var JustinCredible;
(function (JustinCredible) {
    var SampleApp;
    (function (SampleApp) {
        var ViewModels;
        (function (ViewModels) {
            var MainFormViewModel = (function () {
                function MainFormViewModel() {
                    this.createPrograms();
                }
                MainFormViewModel.prototype.createPrograms = function () {
                    this.Programs = [];
                    var program;
                    var fromDate = new Date();
                    var toDate = new Date();
                    for (var index = 0; index < 10; index++) {
                        program = new SampleApp.Models.Program();
                        var tempIndex = (index + 1);
                        program.Id = tempIndex;
                        program.Channel = "SCTV" + tempIndex;
                        program.Program = "Program " + tempIndex;
                        var time = fromDate.getHours();
                        fromDate.setHours(time + 1);
                        toDate.setHours(time + tempIndex + 1);
                        program.FromTime = fromDate;
                        program.ToTime = toDate;
                        this.Programs[index] = program;
                    }
                };
                Object.defineProperty(MainFormViewModel.prototype, "Name", {
                    get: function () {
                        return "MainFormViewModel";
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(MainFormViewModel.prototype, "Programs", {
                    get: function () {
                        return this._programs;
                    },
                    set: function (programs) {
                        this._programs = programs;
                    },
                    enumerable: true,
                    configurable: true
                });
                return MainFormViewModel;
            })();
            ViewModels.MainFormViewModel = MainFormViewModel;
        })(ViewModels = SampleApp.ViewModels || (SampleApp.ViewModels = {}));
    })(SampleApp = JustinCredible.SampleApp || (JustinCredible.SampleApp = {}));
})(JustinCredible || (JustinCredible = {}));
var JustinCredible;
(function (JustinCredible) {
    var SampleApp;
    (function (SampleApp) {
        var ViewModels;
        (function (ViewModels) {
            var PinEntryViewModel = (function () {
                function PinEntryViewModel() {
                }
                return PinEntryViewModel;
            })();
            ViewModels.PinEntryViewModel = PinEntryViewModel;
        })(ViewModels = SampleApp.ViewModels || (SampleApp.ViewModels = {}));
    })(SampleApp = JustinCredible.SampleApp || (JustinCredible.SampleApp = {}));
})(JustinCredible || (JustinCredible = {}));
var JustinCredible;
(function (JustinCredible) {
    var SampleApp;
    (function (SampleApp) {
        var ViewModels;
        (function (ViewModels) {
            var ReorderCategoriesViewModel = (function () {
                function ReorderCategoriesViewModel() {
                }
                return ReorderCategoriesViewModel;
            })();
            ViewModels.ReorderCategoriesViewModel = ReorderCategoriesViewModel;
        })(ViewModels = SampleApp.ViewModels || (SampleApp.ViewModels = {}));
    })(SampleApp = JustinCredible.SampleApp || (JustinCredible.SampleApp = {}));
})(JustinCredible || (JustinCredible = {}));
var JustinCredible;
(function (JustinCredible) {
    var SampleApp;
    (function (SampleApp) {
        var ViewModels;
        (function (ViewModels) {
            /**
             * A ViewModel that has no properties. Useful for controllers that
             * do not have any view model properties, but need to pass something
             * to the BaseController constructor.
             */
            var EmptyViewModel = (function () {
                function EmptyViewModel() {
                }
                return EmptyViewModel;
            })();
            ViewModels.EmptyViewModel = EmptyViewModel;
        })(ViewModels = SampleApp.ViewModels || (SampleApp.ViewModels = {}));
    })(SampleApp = JustinCredible.SampleApp || (JustinCredible.SampleApp = {}));
})(JustinCredible || (JustinCredible = {}));
var JustinCredible;
(function (JustinCredible) {
    var SampleApp;
    (function (SampleApp) {
        var ViewModels;
        (function (ViewModels) {
            var OnboardingRegisterViewModel = (function () {
                function OnboardingRegisterViewModel() {
                }
                return OnboardingRegisterViewModel;
            })();
            ViewModels.OnboardingRegisterViewModel = OnboardingRegisterViewModel;
        })(ViewModels = SampleApp.ViewModels || (SampleApp.ViewModels = {}));
    })(SampleApp = JustinCredible.SampleApp || (JustinCredible.SampleApp = {}));
})(JustinCredible || (JustinCredible = {}));
var JustinCredible;
(function (JustinCredible) {
    var SampleApp;
    (function (SampleApp) {
        var ViewModels;
        (function (ViewModels) {
            var RootViewModel = (function () {
                function RootViewModel() {
                }
                return RootViewModel;
            })();
            ViewModels.RootViewModel = RootViewModel;
        })(ViewModels = SampleApp.ViewModels || (SampleApp.ViewModels = {}));
    })(SampleApp = JustinCredible.SampleApp || (JustinCredible.SampleApp = {}));
})(JustinCredible || (JustinCredible = {}));
var JustinCredible;
(function (JustinCredible) {
    var SampleApp;
    (function (SampleApp) {
        var ViewModels;
        (function (ViewModels) {
            var AboutViewModel = (function () {
                function AboutViewModel() {
                }
                return AboutViewModel;
            })();
            ViewModels.AboutViewModel = AboutViewModel;
        })(ViewModels = SampleApp.ViewModels || (SampleApp.ViewModels = {}));
    })(SampleApp = JustinCredible.SampleApp || (JustinCredible.SampleApp = {}));
})(JustinCredible || (JustinCredible = {}));
var JustinCredible;
(function (JustinCredible) {
    var SampleApp;
    (function (SampleApp) {
        var ViewModels;
        (function (ViewModels) {
            var CloudSyncViewModel = (function () {
                function CloudSyncViewModel() {
                }
                return CloudSyncViewModel;
            })();
            ViewModels.CloudSyncViewModel = CloudSyncViewModel;
        })(ViewModels = SampleApp.ViewModels || (SampleApp.ViewModels = {}));
    })(SampleApp = JustinCredible.SampleApp || (JustinCredible.SampleApp = {}));
})(JustinCredible || (JustinCredible = {}));
var JustinCredible;
(function (JustinCredible) {
    var SampleApp;
    (function (SampleApp) {
        var ViewModels;
        (function (ViewModels) {
            var ConfigurePinViewModel = (function () {
                function ConfigurePinViewModel() {
                }
                return ConfigurePinViewModel;
            })();
            ViewModels.ConfigurePinViewModel = ConfigurePinViewModel;
        })(ViewModels = SampleApp.ViewModels || (SampleApp.ViewModels = {}));
    })(SampleApp = JustinCredible.SampleApp || (JustinCredible.SampleApp = {}));
})(JustinCredible || (JustinCredible = {}));
var JustinCredible;
(function (JustinCredible) {
    var SampleApp;
    (function (SampleApp) {
        var ViewModels;
        (function (ViewModels) {
            var DeveloperViewModel = (function () {
                function DeveloperViewModel() {
                }
                return DeveloperViewModel;
            })();
            ViewModels.DeveloperViewModel = DeveloperViewModel;
        })(ViewModels = SampleApp.ViewModels || (SampleApp.ViewModels = {}));
    })(SampleApp = JustinCredible.SampleApp || (JustinCredible.SampleApp = {}));
})(JustinCredible || (JustinCredible = {}));
var JustinCredible;
(function (JustinCredible) {
    var SampleApp;
    (function (SampleApp) {
        var ViewModels;
        (function (ViewModels) {
            var LogEntryViewModel = (function () {
                function LogEntryViewModel() {
                }
                return LogEntryViewModel;
            })();
            ViewModels.LogEntryViewModel = LogEntryViewModel;
        })(ViewModels = SampleApp.ViewModels || (SampleApp.ViewModels = {}));
    })(SampleApp = JustinCredible.SampleApp || (JustinCredible.SampleApp = {}));
})(JustinCredible || (JustinCredible = {}));
var JustinCredible;
(function (JustinCredible) {
    var SampleApp;
    (function (SampleApp) {
        var ViewModels;
        (function (ViewModels) {
            var LogsListViewModel = (function () {
                function LogsListViewModel() {
                    this.logs = {};
                }
                return LogsListViewModel;
            })();
            ViewModels.LogsListViewModel = LogsListViewModel;
        })(ViewModels = SampleApp.ViewModels || (SampleApp.ViewModels = {}));
    })(SampleApp = JustinCredible.SampleApp || (JustinCredible.SampleApp = {}));
})(JustinCredible || (JustinCredible = {}));
var JustinCredible;
(function (JustinCredible) {
    var SampleApp;
    (function (SampleApp) {
        var ViewModels;
        (function (ViewModels) {
            var SettingsListViewModel = (function () {
                function SettingsListViewModel() {
                }
                return SettingsListViewModel;
            })();
            ViewModels.SettingsListViewModel = SettingsListViewModel;
        })(ViewModels = SampleApp.ViewModels || (SampleApp.ViewModels = {}));
    })(SampleApp = JustinCredible.SampleApp || (JustinCredible.SampleApp = {}));
})(JustinCredible || (JustinCredible = {}));
//# sourceMappingURL=appBundle.js.map