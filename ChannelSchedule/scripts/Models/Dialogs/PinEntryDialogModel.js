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
//# sourceMappingURL=PinEntryDialogModel.js.map