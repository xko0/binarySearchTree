class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(data) {
    var newNode =  new Node(data);
    if(this.root === null) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }

  insertNode(node, newNode) {
    if(newNode.data < node.data) {
      if(node.left === null) {
        node.left = newNode;
      } else {
        this.insertNode(node.left, newNode);
      }
    } else {
      if(node.right === null) {
        node.right = newNode;
      } else {
        this.insertNode(node.right, newNode);
      }
    }
  }
  search(node, data ) {
    if(node === null) {
      return null;
    } else if(data < node.data) {
      return this.search(node.left, data);
      }else if(data > node.data) {
      return this.search(node.right, data);
    } else {
      console.log(node)
      return node;
    }
  }
  dfsInOrder() {
    let result = []
  
    const traverse = node => {
      if (node.left) traverse(node.left)
      result.push(node.data)
      if (node.right) traverse(node.right)
    }
    traverse(this.root)
    return result
  }
}

function sizeHelper(node) {
  if (node) {
    if( node == null && node.left == null && node.right == null) {
      console.log(node)
      console.log(node.left, node.right)
    } else if (node == null && node.left == null && node.right != null) {
      console.log(node)
      console.log(node.left, node.right.data)
    } else if (node == null && node.left != null && node.right == null) {
      console.log(node)
      console.log(node.left.data, node.right)
    } else if (node == null && node.left != null && node.right != null) {
      console.log(node)
      console.log(node.left.data, node.right.data)
    }else if (node != null && node.left == null && node.right != null) {
      console.log(node.data)
      console.log(node.left, node.right.data)
    } else if (node != null && node.left != null && node.right == null) {
      console.log(node.data)
      console.log(node.left.data, node.right)
    } else if (node != null && node.left != null && node.right != null) {
      console.log(node.data)
      console.log(node.left.data, node.right.data)
    }
    return 1 + sizeHelper(node.left) + sizeHelper(node.right);
  }
  return 0;
}

sizeOfBst = function(root) {
  return sizeHelper(root);
}


var array = [4,2,9,5,1,8,15,12,27,25,3,6,7,10,32,21,51];
var bst = new BinarySearchTree(array);
array.map(x => bst.insert(x))

sizeOfBst(bst.root)
bst.search(bst.root, 27)
console.log(bst.dfsInOrder(bst.root))

