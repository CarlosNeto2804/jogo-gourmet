class GourmetGame{

  constructor(gourmetBinaryTree) {
    this._tree = gourmetBinaryTree;
  }

  startGame() {
    do {
      alert("Pense em um prato que você gosta");
      this._play(this._tree.root);
    } while (confirm("continuar jogando?"));
  }
  /**
   * @param {GourmetNode} currentNode
   */
  _play(currentNode) {
    const message = `O prato que você pensou é ${currentNode.value}?`;
    const userResponse = confirm(message);
    const isLeaf = this._tree.nodeIsLeaf(currentNode);
    if (userResponse) {
      if (isLeaf) return alert(`Acertei de Novo`);
      this._play(currentNode.nodeLeft);
    } else {
      if (isLeaf) return this._learning(currentNode);
      this._play(currentNode.nodeRight);
    }
  }
  /**
   * @param {GourmetNode} lastNode
   */
  _learning(lastNode) {
    const name = prompt("Qual prato você pensou?", "");
    const attribute = prompt(`${name} é _________, mas ${lastNode.value} não.`);
    this._tree.addNode(lastNode, name, attribute);
    return;
  }
}

