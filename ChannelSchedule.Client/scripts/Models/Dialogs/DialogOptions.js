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
//# sourceMappingURL=DialogOptions.js.map