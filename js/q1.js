//Write a code in javascript isomorphic string

function isIsomorphic(str1, str2) {
    if(str1.length !== str2.length){
        return false;
    }
    const map = {};
    for(let i = 0; i < str1.length; i++){
        const letterA = str1[i];
        const letterB = str2[i];
        if(map[letterA] === undefined){
            map[letterA] = letterB;

        }
        else if(map[letterA] !== letterB) {
            return false;
        }
    }
    return true;
}

console.log(isIsomorphic("add", "egg"));
console.log(isIsomorphic("XYZX", "ABCA"));