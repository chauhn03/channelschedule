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
//# sourceMappingURL=Preferences.js.map