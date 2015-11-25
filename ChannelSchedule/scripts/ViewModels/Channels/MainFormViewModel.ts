module JustinCredible.SampleApp.ViewModels {

    export class MainFormViewModel {
        private _programs: Models.Program[];

        constructor() {
            this.createPrograms();
        }

        private createPrograms() {
            this.Programs = [];
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
                this.Programs[index] = program;
            }
        }

        get Name(): string {
            return "MainFormViewModel";
        }

        get Programs(): Models.Program[] {
            return this._programs;
        }

        set Programs(programs: Models.Program[]) {
            this._programs = programs;
        }
    }
}
