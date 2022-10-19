/**
Goal: Reverse a Linked List

@param {ListNode} head
@return {ListNode}
**/

// recursive function
var reverse = function(prev, curr) {
    // base case
    if (!curr) return prev;

    // general case
    // save the next node for later
    nxt_tmp = curr.next;

    // connect the current to the previous node
    curr.next = prev;

    // recursively connect the original next node to this current one
    return reverse(curr,nxt_tmp);
}

var reverseList = function(head) {
    // ensure there are at least two nodes
    if(head && head.next) {
        return reverse(null, head)
    }
    else {
        return head;
    }
};
