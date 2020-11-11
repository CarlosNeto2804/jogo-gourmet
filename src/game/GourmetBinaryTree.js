class GourmetBinaryTree {
  constructor() {
    this.root = null;
    this._buildStandardTree();
  }
  nodeIsLeaf(node) {
    if (node) {
      return node.nodeLeft == null;
    }
  }
  addNode(current, nodeLeftValue, nodeFatherValue) {
    const aux = current.value;
    current.value = nodeFatherValue;
    current.nodeLeft = new GourmetNode(nodeLeftValue);
    current.nodeRight = new GourmetNode(aux);
  }
  _buildStandardTree() {
    this.root = new GourmetNode("Massa");
    this.root.nodeLeft = new GourmetNode("Lasanha");
    this.root.nodeRight = new GourmetNode("Bolo de Chocolate");
  }
}
