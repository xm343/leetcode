/**
 * @param {string[]} words
 * @return {string[]}
 */
var removeAnagrams = function(words) {
    let result = []
    for(let i=1; i<words.length; i++){
        if(words[i-1].split('').sort().join('')===words[i].split('').sort().join('')){
            words.splice(i,1)
            i--
        }
    }
    return words
};