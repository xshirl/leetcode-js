# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def mergeKLists(self, lists: List[ListNode]) -> ListNode:
        head = current = ListNode(0)
        nodes = []
        for list in lists:
            while list:
                nodes.append(list.val)
        for node in sorted(nodes):
            current.next = ListNode(node)
            current = current.next
        return head.next

        