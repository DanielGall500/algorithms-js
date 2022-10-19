/**
Goal: return the middle node of a linked list. If the list contains an even number of items, return the second.

@param {ListNode} head
@return {ListNode}
*/

// count the number of nodes and half it
var middle_index = function(curr, i) {
    // general case
    if(curr) {
        return middle_index(curr.next, i+1);
    }
    // base case
    else {
        n_nodes = i-1;
        return n_nodes % 2 == 0 ? (n_nodes/2)+1 : Math.ceil(n_nodes/2);
    }
}

// given the index i, iterate through the nodes until the ith is reached
var find_node = function(head, i) {
    // general case
    if (i != 1) {
        return find_node(head.next,i-1);
    }
    // base case
    else {
        return head;
    }
}

var middleNode = function(head) {
    mn = middle_index(head,1);
    return find_node(head,mn);
};
