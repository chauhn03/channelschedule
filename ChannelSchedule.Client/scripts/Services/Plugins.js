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
//# sourceMappingURL=Plugins.js.map