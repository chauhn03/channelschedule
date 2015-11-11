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
//# sourceMappingURL=Logger.js.map