import Link from 'next/link'
import styles from './styles.module.scss'
import { Menu } from 'lucide-react'



export function Submenu() {
    return (
        <section className={styles.submenu}>
            <div>
                <Menu size={34} color='#121212'/>
            </div>

            <ul className={styles.ul}>
                <li>
                    <Link href='/post/pagina-1'>
                        Pagina 1
                    </Link>
                    <Link href='/post/pagina-1'>
                        Pagina 2
                    </Link>
                </li>
            </ul>
        </section>
    )
}