function isAnagrams(first, second) {
    if(typeof first != "string"  || typeof second != "string") {
        console.log("Please enter 2 strings")
        return false
    } else {
        if(first === second) {
            console.log("true");
            return true
        }
    
        if(first.length !== second.length) {
            console.log("false");
            return false
        }

        const charFirst = {};
        const charSecond = {};

        for(let i = 0; i<first.length; i++) {
            const currentFirst = first[i];
            const currentSecond = second[i];
            charFirst[currentFirst]   = charFirst[currentFirst] + 1 || 1;
            charSecond[currentSecond] = charSecond[currentSecond] + 1 || 1;
        }

        for(let char in charFirst) {
            if(charFirst[char] != charSecond[char]) {
                console.log("false");
                return false;
            }
        }
        console.log("true");
        return true
    }
}

isAnagrams("crane","ecran");
isAnagrams("crane","tests");
isAnagrams("crane","unique");
isAnagrams(2,4)
