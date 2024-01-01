"use client"
import Image from 'next/image';
import styles from 'app/sass/global-error.module.sass';
import Error from './(home)/error';

export default function GlobalError({reset}: ErrorPageProps) {
  return (
    <main className={styles.Error}>
      <h1 className={styles.Error__title}>Ha ocurrido un error</h1>
      <Image 
        src="/images/error.png"
        alt="Error"
        width={500}
        height={500}
      />
      <p className={styles.Error__message}>Por favor, recarga la página.</p>
      <button onClick={reset} className={styles.Error__button}>Reintentar</button>
    </main>
  )
}