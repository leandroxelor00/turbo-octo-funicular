import { useRef, useState } from "react";
import styles from "./Grid.module.css";

export function Grid() {
  const id = useRef(1);
  const [rows, setRows] = useState([]);
  const [columns, setColumns] = useState([]);

  function addRows() {
    const newRow = { id: id.current++ };
    setRows([...rows, newRow]);
  }

  function addColumns() {
    const newColumn = { id: id.current++ };
    setColumns([...columns, newColumn]);
  }

  function removeRow(id) {
    setRows(rows.filter((row) => row.id !== id));
  }
  function removeColumn(id) {
    setColumns(columns.filter((column) => column.id !== id));
  }

  return (
    <div>
      <button onClick={addRows}>Add row</button>
      <button onClick={addColumns}>Add column</button>

      <div className={styles.layout} style={{ "--columns": columns.length }}>
        <div />{" "}
        <div className={styles.columnButtons}>
          {columns.map((column) => (
            <button key={column.id} onClick={() => removeColumn(column.id)}>
              x
            </button>
          ))}
        </div>
        <div className={styles.rowButtons}>
          {rows.map((row) => (
            <button key={row.id} onClick={() => removeRow(row.id)}>
              x
            </button>
          ))}
        </div>
        <div className={styles.grid}>
          {rows.map((row) =>
            columns.map((column) => (
              <div className={styles.cell} key={`${row.id}-${column.id}`}></div>
            )),
          )}
        </div>
      </div>
    </div>
  );
}
