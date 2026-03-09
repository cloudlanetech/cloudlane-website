import styles from "../theme/bentoGrid.module.css";

export default function BentoGrid() {
    return (
        <section className={styles.bentoGrid}>
            <div className={styles.grid}>
                {/* Row 1 */}
                <div className={`${styles.cell} ${styles.cell1}`} />
                <div className={`${styles.cell} ${styles.cell2}`} />
                <div className={`${styles.cell} ${styles.cell3}`} />
                <div className={`${styles.cell} ${styles.cell4}`} />

                {/* Row 2 */}
                <div className={`${styles.cell} ${styles.cellTall} ${styles.cell5}`} />
                <div className={`${styles.cell} ${styles.cellTall} ${styles.cell6}`} />
                <div className={`${styles.cell} ${styles.cellTall} ${styles.cell7}`} />
                <div className={`${styles.cell} ${styles.cellTall} ${styles.cell8}`} />
            </div>
        </section>
    );
}
