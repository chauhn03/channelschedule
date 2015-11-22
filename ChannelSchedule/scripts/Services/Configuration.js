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
//# sourceMappingURL=Configuration.js.map