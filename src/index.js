module.exports = function check(str, bracketsConfig) {
    // your solution

    str = str.split("");
    var result = [];

    for (var i = 0; i < str.length; i++) {
        for(var b = 0; b < bracketsConfig.length; b++) {
            if(str[i] === bracketsConfig[b][0]) {
                result.push(bracketsConfig[b][0]);
                if(str[i] === bracketsConfig[b][1] &&
                    str[i] === result[result.length-2]) {
                    result.pop();
                    result.pop();
                }
            }
            else if (str[i] == bracketsConfig[b][1]) {
                if(result[result.length-1] != bracketsConfig[b][0]) return false;

                result.pop();
            }
        }
    }

    return result.length === 0;
};
