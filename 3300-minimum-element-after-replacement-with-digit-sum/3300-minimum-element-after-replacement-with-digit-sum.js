/**
 * @param {number[]} nums
 * @return {number}
 */
var minElement = function(nums) {
    let nums1 = []
    let value = 0
    for(let i=0; i<nums.length; i++){
        let sum = 0
        value = nums[i]
        while(value>0){
            sum+=value%10
            value = Math.floor(value/10)
        }
        nums1.push(sum)
    }
    
    return Math.min(...nums1)
};