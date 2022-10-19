/**
Goal: detect if there is a cycle in a linked list.

@param {ListNode} head
@return {ListNode}
 */

var detectCycle = function(head) {
    //use a set to store previously seen nodes
    let prevNodes = new Set();

    // as long as we haven't reached a null
    while (head) {
        // check if we've seen a reference to this node before
        // otherwise, add it to the list and continue recursing
        if(prevNodes.has(head)) {
            return head;
        }
        else {
            prevNodes.add(head);
            head = head.next;
        }
    }
    // if no cycle is present...
    return null;
};
