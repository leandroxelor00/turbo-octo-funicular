import styles from "./Grid.module.css";

export function Grid({ rows, columns }) {
  const rowsArr = Array.from({ length: rows }, (_, i) => i);
  const columnArr = Array.from({ length: columns }, (_, i) => i);

  return (
    <div className={styles.grid} style={{ "--columns": columns }}>
      {rowsArr.map((row) =>
        columnArr.map((column) => (
          <div className={styles.cell} key={`${row}-${column}`}>
            {row + 1} {column + 1}
          </div>
        )),
      )}
    </div>
  );
}
