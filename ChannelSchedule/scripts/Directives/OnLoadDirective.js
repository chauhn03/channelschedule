var JustinCredible;
(function (JustinCredible) {
    var SampleApp;
    (function (SampleApp) {
        var Directives;
        (function (Directives) {
            /**
             * A directive for handling an element's onload event (eg an image tag).
             *
             * http://stackoverflow.com/questions/11868393/angularjs-inputtext-ngchange-fires-while-the-value-is-changing
             */
            var OnLoadDirective = (function () {
                function OnLoadDirective($parse) {
                    this.$parse = $parse;
                    //#endregion
                    this.restrict = "A";
                    // Ensure that the link function is bound to this instance so we can
                    // access instance variables like $parse. AngularJs normally executes
                    // the link function in the context of the global scope.
                    this.link = _.bind(this.link, this);
                }
                Object.defineProperty(OnLoadDirective, "$inject", {
                    get: function () {
                        return ["$parse"];
                    },
                    enumerable: true,
                    configurable: true
                });
                OnLoadDirective.prototype.link = function (scope, element, attributes, controller, transclude) {
                    // Parse the value of the on-load property; this will be a function
                    // that the user has set on the element for example: <img on-load="load()"/>
                    /* tslint:disable:no-string-literal */
                    var fn = this.$parse(attributes["onLoad"]);
                    /* tslint:enable:no-string-literal */
                    // Subscribe to the load event of the image element.
                    element.on("load", function (event) {
                        // When the load event occurs, execute the user defined load function.
                        scope.$apply(function () {
                            fn(scope, { $event: event });
                        });
                    });
                };
                //#region Injection
                OnLoadDirective.ID = "onLoad";
                return OnLoadDirective;
            })();
            Directives.OnLoadDirective = OnLoadDirective;
        })(Directives = SampleApp.Directives || (SampleApp.Directives = {}));
    })(SampleApp = JustinCredible.SampleApp || (JustinCredible.SampleApp = {}));
})(JustinCredible || (JustinCredible = {}));
//# sourceMappingURL=OnLoadDirective.js.map