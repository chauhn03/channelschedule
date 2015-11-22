module ChannelSchedule.HydridApp.Controllers {

    export class SchduleController {
        public static ID = "SchduleController";

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