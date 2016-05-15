module JustinCredible.SampleApp.ViewModels {

    export class ChannelDetailViewModel {
        private _channel: Models.Channel;

        constructor() {
            this.Channel = new Models.Channel();
            this.Channel.Id = 1;
            this.Channel.Name = "SCTV1";            
            this.Channel.Programs = this.createPrograms();

            this.createPrograms();
        }

        private createPrograms(): Models.Program[] {
            var programs = [];
            var program: Models.Program;
            var fromDate = new Date();
            var toDate = new Date();
            for (var index = 0; index < 10; index++) {
                program = new Models.Program();
                var tempIndex = (index + 1);
                program.Id = tempIndex;
                program.Channel = "SCTV" + tempIndex;
                program.Program = "Program " + tempIndex;
                var time = fromDate.getHours();


                fromDate.setHours(time + 1);
                toDate.setHours(time + tempIndex + 1);
                program.FromTime = fromDate;
                program.ToTime = toDate;
                programs[index] = program;
            }

            return programs;
        }

        get Name(): string {
            return "MainFormViewModel";
        }

        get Channel(): Models.Channel {
            return this._channel;
        }

        set Channel(channel: Models.Channel) {
            this._channel = channel;
        }
    }
}
 