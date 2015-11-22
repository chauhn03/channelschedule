var ChannelSchedule;
(function (ChannelSchedule) {
    var HydridApp;
    (function (HydridApp) {
        /**
         * Used to define all of the client-side routes for the application.
         * This maps routes to the controller/view that should be used.
         */
        var RouteConfig = (function () {
            function RouteConfig() {
            }
            RouteConfig.setupRoutes = function ($stateProvider, $urlRouterProvider) {
                // Setup an abstract state for the tabs directive.
                $stateProvider.state("app", {
                    url: "/app",
                    abstract: true,
                    templateUrl: "templates/tabs.html",
                    controller: HydridApp.Controllers.MainFormController.ID
                });
                //#endregion
                // If none of the above states are matched, use the blank route.
                $urlRouterProvider.otherwise("/tab");
            };
            return RouteConfig;
        })();
        HydridApp.RouteConfig = RouteConfig;
    })(HydridApp = ChannelSchedule.HydridApp || (ChannelSchedule.HydridApp = {}));
})(ChannelSchedule || (ChannelSchedule = {}));
//# sourceMappingURL=RouteConfig.js.map