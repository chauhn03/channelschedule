var JustinCredible;
(function (JustinCredible) {
    var SampleApp;
    (function (SampleApp) {
        var ViewModels;
        (function (ViewModels) {
            var CategoryItemViewModel = (function () {
                function CategoryItemViewModel(name, href, icon, order) {
                    this.name = name;
                    this.href = href;
                    this.icon = icon;
                    this.order = order;
                }
                return CategoryItemViewModel;
            })();
            ViewModels.CategoryItemViewModel = CategoryItemViewModel;
        })(ViewModels = SampleApp.ViewModels || (SampleApp.ViewModels = {}));
    })(SampleApp = JustinCredible.SampleApp || (JustinCredible.SampleApp = {}));
})(JustinCredible || (JustinCredible = {}));
//# sourceMappingURL=CategoryItemViewModel.js.map