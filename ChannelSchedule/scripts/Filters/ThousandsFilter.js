var JustinCredible;
(function (JustinCredible) {
    var SampleApp;
    (function (SampleApp) {
        var Filters;
        (function (Filters) {
            /**
             * Formats numbers greater than one thousand to include the K suffix.
             *
             * Numbers greater than 10,000 will not show decimal places, while numbers
             * between 1,000 and 9,999 will show decimal places unless the number is
             * a multiple of one thousand.
             *
             * For example:
             *      200   -> 200
             *      2000  -> 2K
             *      1321  -> 1.3K
             *      10700 -> 10K
             */
            var ThousandsFilter = (function () {
                function ThousandsFilter() {
                }
                ThousandsFilter.filter = function (input) {
                    if (input == null) {
                        return "";
                    }
                    if (input > 9999) {
                        if (input % 10 === 0) {
                            return (input / 1000) + "K";
                        }
                        else {
                            return (input / 1000).toFixed(0) + "K";
                        }
                    }
                    else if (input > 999) {
                        if (input % 10 === 0) {
                            return (input / 1000) + "K";
                        }
                        else {
                            return (input / 1000).toFixed(1) + "K";
                        }
                    }
                    else {
                        return input + "";
                    }
                };
                ThousandsFilter.ID = "Thousands";
                return ThousandsFilter;
            })();
            Filters.ThousandsFilter = ThousandsFilter;
        })(Filters = SampleApp.Filters || (SampleApp.Filters = {}));
    })(SampleApp = JustinCredible.SampleApp || (JustinCredible.SampleApp = {}));
})(JustinCredible || (JustinCredible = {}));
//# sourceMappingURL=ThousandsFilter.js.map