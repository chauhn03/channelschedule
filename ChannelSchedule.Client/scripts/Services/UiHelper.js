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
//# sourceMappingURL=UiHelper.js.map