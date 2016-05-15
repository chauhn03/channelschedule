module JustinCredible.SampleApp.Controllers {

    export class ScheduleController extends BaseController<ViewModels.ChannelDetailViewModel>  {
        public static ID = "ScheduleController";

        public static get $inject(): string[] {
            return [
                "$scope"
            ];
        }

        constructor(
            $scope: ng.IScope) {
            super($scope, ViewModels.ChannelDetailViewModel);    
        }
    }
} 