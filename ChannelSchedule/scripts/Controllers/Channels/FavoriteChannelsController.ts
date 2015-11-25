module JustinCredible.SampleApp.Controllers {

    export class FavoriteChannelsController extends BaseController<ViewModels.MainFormViewModel> {
        public static ID = "FavoriteChannelsController";

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