module JustinCredible.SampleApp.Filters {

    /**
     * Formats numbers greater than one thousand to include the K suffix.
     * 
     * Numbers greater than 10,000 will not show decimal places, while numbers
     * between 1,000 and 9,999 will show decimal places unless the number is
     * a multiple of one thousand.
     * 
     * For example:
     *      200   -> 200
     *      2000  -> 2K
     *      1321  -> 1.3K
     *      10700 -> 10K
     */
    export class DateTimeFilter {

        public static ID = "DateTime";

        public static filter(input: number, format: string): string {

            if (!(_.isDate(input))) {
                return "";
            }

            if (_.isNull(format)) {
                return new Date(input).toLocaleTimeString();
            }

            return new Date(inpu
        }
    }
}
 