module JustinCredible.SampleApp.Controllers {

    export class MainFormController extends BaseController<ViewModels.MainFormViewModel> {
        public static ID = "MainFormController";

        public static get $inject(): string[] {
            return [
                "$scope"
            ];
        }

        constructor(
            $scope: ng.IScope) {
            super($scope, ViewModels.MainFormViewModel);
        }
    }
}