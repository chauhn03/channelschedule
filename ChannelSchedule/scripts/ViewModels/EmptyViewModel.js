var JustinCredible;
(function (JustinCredible) {
    var SampleApp;
    (function (SampleApp) {
        var ViewModels;
        (function (ViewModels) {
            /**
             * A ViewModel that has no properties. Useful for controllers that
             * do not have any view model properties, but need to pass something
             * to the BaseController constructor.
             */
            var EmptyViewModel = (function () {
                function EmptyViewModel() {
                }
                return EmptyViewModel;
            })();
            ViewModels.EmptyViewModel = EmptyViewModel;
        })(ViewModels = SampleApp.ViewModels || (SampleApp.ViewModels = {}));
    })(SampleApp = JustinCredible.SampleApp || (JustinCredible.SampleApp = {}));
})(JustinCredible || (JustinCredible = {}));
//# sourceMappingURL=EmptyViewModel.js.map