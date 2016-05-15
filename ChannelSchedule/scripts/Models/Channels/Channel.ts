module JustinCredible.SampleApp.Models {

    export class Channel {
        private _id: number;
        private _name: string;        
        private _programs: Models.Program[];

        get Id(): number {
            return this._id;
        }

        set Id(value: number) {
            this._id = value;
        }

        get Name(): string {
            return this._name;
        }

        set Name(value: string) {
            this._name = value;
        }     

        get Programs(): Models.Program[] {
            return this._programs;
        }

        set Programs(value: Models.Program[]) {
            this._programs = value;
        }     
    }
}
 