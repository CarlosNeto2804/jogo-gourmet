window.onload = () => {
  alert('Nos dialogos de confirmação o botão "OK" representa SIM e o botão "Cancelar" representa NÃO')
  const gourmetBinaryTree = new GourmetBinaryTree();
  const game = new GourmetGame(gourmetBinaryTree);
  game.startGame();
};
