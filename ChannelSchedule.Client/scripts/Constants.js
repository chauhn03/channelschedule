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
//# sourceMappingURL=Constants.js.map