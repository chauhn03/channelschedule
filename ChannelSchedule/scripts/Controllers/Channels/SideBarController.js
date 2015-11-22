var ChannelSchedule;
(function (ChannelSchedule) {
    var HydridApp;
    (function (HydridApp) {
        var Controllers;
        (function (Controllers) {
            var SideBarController = (function () {
                function SideBarController($scope) {
                }
                Object.defineProperty(SideBarController, "$inject", {
                    get: function () {
                        return [
                            "$scope"
                        ];
                    },
                    enumerable: true,
                    configurable: true
                });
                SideBarController.ID = "SideBarController";
                return SideBarController;
            })();
            Controllers.SideBarController = SideBarController;
        })(Controllers = HydridApp.Controllers || (HydridApp.Controllers = {}));
    })(HydridApp = ChannelSchedule.HydridApp || (ChannelSchedule.HydridApp = {}));
})(ChannelSchedule || (ChannelSchedule = {}));
//# sourceMappingURL=SideBarController.js.map