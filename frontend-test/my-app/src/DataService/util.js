export default class util {
    static capital_letter(str)
    {
        if (str !== undefined) {
            str = str.split(" ");
            console.log(str)
            for (var i = 0, x = str.length; i < x; i++) {
                if (str[i][0] !== undefined || str[i] !== "") {
                    str[i] = str[i][0].toUpperCase() + str[i].substr(1);
                }
            }

            return str.join(" ");
        }
    }
}