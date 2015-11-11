var JustinCredible;
(function (JustinCredible) {
    var SampleApp;
    (function (SampleApp) {
        var Directives;
        (function (Directives) {
            /**
             * This is the base directive that all other directives for elements should utilize.
             *
             * It handles saving references to the various objects in its constructor.
             *
             * T - The parameter type for the scope.
             */
            var BaseElementDirective = (function () {
                function BaseElementDirective() {
                }
                BaseElementDirective.prototype.initialize = function () {
                    throw new Error("Directives that extend BaseElementDirective should implement their own initialize method.");
                };
                BaseElementDirective.prototype.render = function () {
                    throw new Error("Directives that extend BaseElementDirective should implement their own render method.");
                };
                /**
                 * A flag that can be used to identify element directives that use this
                 * class as their base class.
                 */
                BaseElementDirective.__BaseElementDirective = true;
                return BaseElementDirective;
            })();
            Directives.BaseElementDirective = BaseElementDirective;
        })(Directives = SampleApp.Directives || (SampleApp.Directives = {}));
    })(SampleApp = JustinCredible.SampleApp || (JustinCredible.SampleApp = {}));
})(JustinCredible || (JustinCredible = {}));
//# sourceMappingURL=BaseElementDirective.js.map