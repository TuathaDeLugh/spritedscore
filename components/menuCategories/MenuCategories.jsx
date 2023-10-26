import Link from "next/link";
import React from "react";
import styles from "./menuCategories.module.css";

const MenuCategories = () => {
  return (
    <div className={styles.categoryList}>
      <Link
        href="/blog?cat=style"
        className={`${styles.categoryItem} ${styles.style}`}
      >
        Fantasy
      </Link>
      <Link href="/blog" className={`${styles.categoryItem} ${styles.fashion}`}>
        Slice Of Life
      </Link>
      <Link href="/blog" className={`${styles.categoryItem} ${styles.food}`}>
        Shounen
      </Link>
      <Link href="/blog" className={`${styles.categoryItem} ${styles.travel}`}>
        Isekai
      </Link>
      <Link href="/blog" className={`${styles.categoryItem} ${styles.culture}`}>
        Romance
      </Link>
      <Link href="/blog" className={`${styles.categoryItem} ${styles.coding}`}>
        Comady
      </Link>
    </div>
  );
};

export default MenuCategories;
