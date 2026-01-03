/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    let map={}
    for(let cha of magazine){
        map[cha]=(map[cha] || 0)+1
    }
    for(let cha of ransomNote){
        if(!map[cha])return false
        map[cha]--
    }
    return true
};