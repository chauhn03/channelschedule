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
//# sourceMappingURL=Utilities.js.map