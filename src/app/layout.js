import styles from "./page.module.css";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "Fire Animation",
    description: "A little animation I made!",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <main className={styles.main}>{children}</main>
            </body>
        </html>
    );
}
