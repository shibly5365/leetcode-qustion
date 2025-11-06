/**
 * @param {string} s1
 * @param {string} s2
 * @return {string[]}
 */
var uncommonFromSentences = function(s1, s2) {
      const words = (s1 + " " + s2).split(" ");
    const map = {};
    
    for (let word of words) {
        map[word] = (map[word] || 0) + 1;
    }

    const result = [];
    for (let word in map) {
        if (map[word] === 1) {
            result.push(word);
        }
    }

    return result;
};