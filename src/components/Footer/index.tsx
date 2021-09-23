import styles from './styles.module.scss'

export const Footer: React.FC = () => {
    return(
        <footer id="intersection" className={styles.footer}>
            <h2>Copyright © 2020 <span>Eduick</span>. Todos os direitos reservados.</h2>
        </footer>
    )
}