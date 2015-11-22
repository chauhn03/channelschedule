module ChannelSchedule.HydridApp.Controllers {

    export class SideBarController {
        public static ID = "SideBarController";

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