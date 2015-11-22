var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var ChannelSchedule;
(function (ChannelSchedule) {
    var HydridApp;
    (function (HydridApp) {
        var Controllers;
        (function (Controllers) {
            var MainFormController = (function (_super) {
                __extends(MainFormController, _super);
                function MainFormController($scope) {
                    _super.call(this, $scope, HydridApp.ViewModels.MainFormViewModel);
                }
                Object.defineProperty(MainFormController, "$inject", {
                    get: function () {
                        return [
                            "$scope"
                        ];
                    },
                    enumerable: true,
                    configurable: true
                });
                MainFormController.ID = "MainFormController";
                return MainFormController;
            })(Controllers.BaseController);
            Controllers.MainFormController = MainFormController;
        })(Controllers = HydridApp.Controllers || (HydridApp.Controllers = {}));
    })(HydridApp = ChannelSchedule.HydridApp || (ChannelSchedule.HydridApp = {}));
})(ChannelSchedule || (ChannelSchedule = {}));
//# sourceMappingURL=MainFormController.js.map