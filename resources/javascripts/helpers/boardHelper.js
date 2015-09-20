export var boardHelper = {
  getBoardFor: (id) => {
    var board = document.createElement('div');
    board.setAttribute('id', id);
    board.setAttribute('class', 'board');

    var title = document.createElement('div');
    title.setAttribute('class', 'title');
    title.innerHTML = id;

    board.appendChild(title);
    for (var i = 0; i < 8; i++) {
      var row = document.createElement('div');
      board.appendChild(row);
      row.setAttribute('id', id + '_row_' + i);
      row.setAttribute('class', 'row');
      for (var j = 0; j < 8; j++) {
        var cell = document.createElement('div');
        row.appendChild(cell);
        cell.setAttribute('id', id + '_cell_' + i + '_' + j);
        cell.setAttribute('class', 'cell');
      }
    }
    return board;
  }
};
