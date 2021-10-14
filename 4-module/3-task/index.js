function highlight(table) {
  for (let i = 0; i < table.rows.length; i++) {
    let tr = table.rows[i];

    if (!tr.cells[3].hasAttribute('data-available')) {
      tr.hidden = true;
    } else if (tr.cells[3].getAttribute('data-available') == 'true') {
      tr.classList.add('available');
    } else {
      tr.classList.add('unavailable');
    }

    if (tr.cells[2].innerHTML == 'm') {
      tr.classList.add('male');
    } else {
      tr.classList.add('female');
    }
    if (tr.cells[1].innerHTML < 18) {
      tr.style.textDecoration = 'line-through';
    }
  }
}
