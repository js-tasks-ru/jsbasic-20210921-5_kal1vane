/**
 * Компонент, который реализует таблицу
 * с возможностью удаления строк
 *
 * Пример одного элемента, описывающего строку таблицы
 *
 *      {
 *          name: 'Ilia',
 *          age: 25,
 *          salary: '1000',
 *          city: 'Petrozavodsk'
 *      }
 *
 */
export default class UserTable {
  constructor(rows) {
    this.rows = rows;
    this._elem = this.createTable();
  }
  
  get elem () {
    return this._elem;
  }

  createTable() {
    this.table = document.createElement('TABLE');

    this.table.innerHTML = this.rows 
        .map(item => `<td>${item.name}</td>` + `<td>${item.age}</td>` + `<td>${item.salary}</td>` + `<td>${item.city}</td>` + `<td><button>X</button></td>`)
        .join(`<tr>`);

    this.table.addEventListener('click', this.onClick);

    this.table.insertAdjacentHTML("afterbegin", `<thead><tr><td>Имя</td>` + `<td>Возраст</td>` + `<td>Зарплата</td>` + `<td>Город</td>` + `<td></td></thead>`);
        
    return this.table;
  }
  onClick = (ev) => {
    if (ev.target.tagName !== 'BUTTON') {return;}
    
    const button = ev.target;

    button.parentNode.parentNode.remove(button.parentNode);

  }
}
