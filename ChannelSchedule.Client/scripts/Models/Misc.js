var JustinCredible;
(function (JustinCredible) {
    var SampleApp;
    (function (SampleApp) {
        var Models;
        (function (Models) {
            /**
             * A simple class that can be used to define a key/value pair of objects.
             */
            var KeyValuePair = (function () {
                function KeyValuePair(key, value) {
                    this.key = key;
                    this.value = value;
                }
                return KeyValuePair;
            })();
            Models.KeyValuePair = KeyValuePair;
        })(Models = SampleApp.Models || (SampleApp.Models = {}));
    })(SampleApp = JustinCredible.SampleApp || (JustinCredible.SampleApp = {}));
})(JustinCredible || (JustinCredible = {}));
//# sourceMappingURL=Misc.js.map