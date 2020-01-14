function checkUnique (string) {
    const characters = {};

    for(let i=0 ; i< string.length; i++) {
        const currentCh = string[i];

        if (characters[currentCh] != undefined) {
            console.log("false");
            return false;
        } else {
            characters[currentCh] = 0;
        }
    }
    console.log("true");
    return true;
}

function _checkUnique (string) {
    for(let i=0 ; i< string.length; i++) {
        const currentCh = string[i];
        
        for(let j= i + 1; j< string.length - 1; j++) {
            if(string[j] == currentCh) {
                console.log("false");
                return false
            }
        }
    }
    console.log("true");
    return true
}

checkUnique("kenzo");
checkUnique("unique");

_checkUnique("kenzo");
_checkUnique("unique");

