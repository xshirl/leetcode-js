/**
 * @param {number[][]} intervals
 * @return {number}
 */
var minMeetingRooms = function (intervals) {
  intervals.sort((a, b) => a[0] - b[0])
  let hashmap = {}
  for (let interval of intervals) {
    hashmap[interval] = [interval]
  }

  for (let i = 0; i < intervals.length; i++) {
    for (let j = i + 1; j < intervals.length; j++) {
      if (intervals[i][1] <= intervals[j][0]) {
        hashmap[intervals[i]].push(intervals[j])
        delete hashmap[intervals[j]]
      }
    }
  }
  console.log(hashmap)
  return Object.keys(hashmap).length
}


/**
 * @param {number[][]} intervals
 * @return {number}
 */
var minMeetingRooms = function(intervals) {
    intervals.sort((a,b) => a[0] - b[0])
    let hashmap = {}
    for(let i = 0; i < intervals.length; i++) {
        hashmap[i] = [intervals[i]]
    }
    
    for(let i = 0; i < intervals.length; i++) {
        for(let j = i+1; j < intervals.length; j++) {
            if(intervals[i][1] <= intervals[j][0]){
                hashmap[i].push(intervals[j])
                delete hashmap[j]
                
            }
        }
    }
    console.log(hashmap)
    return Object.keys(hashmap).length
};