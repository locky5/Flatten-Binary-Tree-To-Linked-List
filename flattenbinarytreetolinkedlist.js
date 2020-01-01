var flatten = function(root) {
   if (root === null) {
       return null
   }

    let arr = []

    function preOrder(node) {
        if (node !== null) {
            arr.push(node)
            preOrder(node.left)
            preOrder(node.right)
        }
    }
    preOrder(root)

    let dummyNode = new TreeNode(0) //initialize first node to be 0 but don't use it
    let node = dummyNode //for iteration

    while (arr.length) {
        let next = arr.shift() //get first value of arr and pop it out
        node.left = null //left subtree has nothing
        node.right = next //make next value on the right the popped value
        node = next //go to next value
    }

    return dummyNode.next
}
