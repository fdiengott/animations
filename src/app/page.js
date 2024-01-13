import Fire2 from "@/components/Fire2";
import styles from "./page.module.css";

import Fire from "@/components/Fire";

export default function Home() {
    return (
        <main className={styles.main}>
            {/* <Fire /> */}
            <Fire2 />
        </main>
    );
}
