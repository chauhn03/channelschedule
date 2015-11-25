module JustinCredible.SampleApp.Models {

    export class Program {
        private _id: number;
        private _program: string;
        private _channel: string;
        private _fromTime: Date;
        private _toTime: Date;

        get Id(): number {
            return this._id;
        }

        set Id(value: number) {
            this._id = value;
        }

        get Program(): string {
            return this._program;
        }

        set Program(value: string) {
            this._program = value;
        }

        get Channel(): string {
            return this._channel;
        }

        set Channel(value: string) {
            this._channel = value;
        }

        get FromTime(): Date {
            return this._fromTime;
        }

        set FromTime(value: Date) {
            this._fromTime = value;
        }

        get ToTime(): Date {
            return this._toTime;
        }

        set ToTime(value: Date) {
            this._toTime = value;
        }
    }
}
 