import { useLoading, ThreeDots } from "@agney/react-loading"
import styles from './styles.module.scss'

type LoaderComponentProps = {
    loading: boolean,
}   

export const Loader: React.FC<LoaderComponentProps> = ({loading}) => {
    const { indicatorEl } = useLoading({
        loading: loading,
        indicator: 
            <ThreeDots 
                height="20" 
                style={{
                    maxHeight: '50px',
                    color: "var(--purple-500)",
                    margin: '0'
                }}
            />
    })

    return(
        <div className={styles.loading}>
            {indicatorEl}
        </div>
    )
}