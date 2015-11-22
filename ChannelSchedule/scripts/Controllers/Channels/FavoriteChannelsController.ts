module ChannelSchedule.HydridApp.Controllers {

    export class FavoriteChannelsController {
        public static ID = "FavoriteChannelsController";

        public static get $inject(): string[] {
            return [
                "$scope"
            ];
        }

        constructor(
            $scope: ng.IScope) {
        }
    }
} 