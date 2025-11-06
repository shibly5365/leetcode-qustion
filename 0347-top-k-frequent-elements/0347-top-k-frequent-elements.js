/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
   const mapa = {};
  const tempRes = [];
  let result = [];

  for (let i = 0; i < nums.length; i++) {
    if (mapa[nums[i]]) {
      mapa[nums[i]] = mapa[nums[i]] + 1;
    } else {
      mapa[nums[i]] = 1;
    }
  }

  for (let key in mapa) {
    let idx = mapa[key];
    if (typeof tempRes[idx] === "object") {
      tempRes[idx].push(Number(key));
    } else {
      tempRes[idx] = [Number(key)];
    }
  }

  for (let j = tempRes.length - 1; j >= 0 && result.length < k; j--) {
    let tempArr = tempRes[j];
    if (!tempArr) continue;
    for (let i = 0; i < tempArr.length && result.length < k; i++) {
      result.push(tempArr[i]);
    }
  }

  return result;
};