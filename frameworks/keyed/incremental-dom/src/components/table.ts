import { elementOpen, elementClose, close, text } from 'incremental-dom';
import { DataEntry } from '../data-collection';


export function Table(func: () => void) {
    elementOpen('table', null, null, 'class', 'table table-hover table-striped test-data');
    elementOpen('tbody', null, null, 'id', 'tbody');
    func();
    elementClose('tbody');
    elementClose('table');
}

function TableCell(value: string) {
    elementOpen('td');
    text(value);
    close();
}

export function TableRow(data: DataEntry) {
    elementOpen('tr', data.id);

    TableCell(data.id.toString());
    TableCell(data.label);

    close();
}