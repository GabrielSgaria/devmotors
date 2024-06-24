'use client'
import Link from 'next/link'
import styles from './styles.module.scss'
import { useEffect, useState } from 'react'

export function Header() {
    const [top, setTop] = useState(true)

    const scrollHendler = () => {
        window.scrollY > 10 ? setTop(false) : setTop(true);
    }

    useEffect(() => {
        window.addEventListener('scroll', scrollHendler)
    }, [top])

    return (
        <header className={`${styles.header} ${!top ? styles.fixed : styles.background}`}>
            <div className={styles.container}>
                <div className={styles.content}>
                    <div className={styles.contentLogo}>
                        <Link href='/'>
                            Dev Motors
                        </Link>
                    </div>
                    <nav>
                        <Link href='/'>
                            Home
                        </Link>
                        <Link href='/#serviços'>
                            Serviços
                        </Link>
                        <Link href='/#contatos'>
                            Contatos
                        </Link>

                    </nav>
                </div>
            </div>
        </header>
    )
}