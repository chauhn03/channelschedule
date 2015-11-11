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
//# sourceMappingURL=DeveloperController.js.map