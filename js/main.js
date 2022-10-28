'use strict'

window.addEventListener('load', () => {
    const controller = new Controller();
    controller.addAllListeners();
    const table6x6 = document.getElementById('table6x6');
    fillTable(table6x6, 6);
    const cell1 = document.getElementById('1');
    cell1.addEventListener('mouseover', () => {
        cell1.style.backgroundColor = getRandomColor();
    });
    cell1.addEventListener('click', () => {
        cell1.style.backgroundColor = document.getElementById('color-picker').value;
    });
    cell1.addEventListener('dblclick', () => {
        document.getElementById('row1').style.backgroundColor = document.getElementById('color-picker').value;
    });
});

const fillTable = (table, n) => {
    let count = 1;
    for(let i = 0; i < n; i++) {
        let rowNode = document.createElement("tr");
        rowNode.id = `row${count}`;
        for(let j = 0; j < n; j++) {
            let cellNode = document.createElement("td");
            cellNode.id = count;
            let textNode = document.createTextNode(count);
            cellNode.appendChild(textNode);
            rowNode.appendChild(cellNode);
            count++;
        }
        table.appendChild(rowNode);
    }
};

const getRandomInt = (min, max) => {
    return Math.floor(Math.random() * (max - min)) + min;
  }

const getRandomColor = () => {
    return 'rgb('+getRandomInt(0,255) + ', ' + getRandomInt(0,255) + ', ' + getRandomInt(0,255)+')';
}