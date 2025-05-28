import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import styles from '@/styles/Dashboard.module.css'
export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={styles.drawer}>
      <aside>
        <Header/>
        <main className={styles.layout}>
          {children}
        </main>
      </aside>
    </div>
  );
}
