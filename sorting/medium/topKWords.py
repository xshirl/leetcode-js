class Solution:
    def topKFrequent(self, words: List[str], k: int) -> List[str]:
        map = {}
        for word in words:
            map[word] = map.get(word, 0) + 1
        sortedWords = sorted(map.items(), key=lambda x: (-x[1], x[0]))
        keys = [i[0] for i in sortedWords[:k]]
        
        return keys