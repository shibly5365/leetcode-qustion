/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    let store={}
    for(let str of strs)
    {
        const key  = str.split('').sort().join('')

        store[key]=store[key] || []
        store[key].push(str)
    }
    return Object.values(store).reverse()
};