module JustinCredible.SampleApp.Controllers {

    export class FavoriteChannelsController extends BaseController<ViewModels.MainFormViewModel> {
        public static ID = "FavoriteChannelsController";

        test: string = "FavoriteChannels";
        public static get $inject(): string[] {
            return [
                "$scope",
                "$state"
            ];
        }

        constructor(
            $scope: ng.IScope, private $state: ng.ui.IStateService) {
            super($scope, ViewModels.MainFormViewModel);
        }

        navigateToChannelSchedule() {
            this.$state.go("app.channeldetail");
        }

        removeFavoriteChannel(channelId: any) {
            alert("Remove channel Id: " + channelId);
        }
    }
} 