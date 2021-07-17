import collections 


class Solution: 
    def minMeetingRooms(self, intervals: List[List[int]]) -> int:
        if not intervals:
            return 0
        
        def overlap(x,y):
            return x[0]<y[1] and x[1]>y[0]
        
        D = collections.defaultdict(list)
        num_room = 1
        intervals.sort(key = lambda x : x[0])
        for interval in intervals:
            overlap_flag = 1
            for i in range(num_room):
                print(i)
                if not D or not overlap(D[i][-1], interval):
                   
                    D[i].append(interval)
                    overlap_flag = 0
                    break
            if overlap_flag == 1:
                D[num_room].append(interval)
                num_room+=1
        return num_room