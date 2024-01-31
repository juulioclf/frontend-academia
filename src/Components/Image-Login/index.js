import ImgLogin from "../../assets/images/Image-Login.svg"
import styles from './LoginImage.module.css'

const ImageLogin = () => {
    return(
        <div className={styles.imagecontainer}>
            <img src={ImgLogin}
                 alt="image-background"
                 className={styles.image} 
            />
        </div>
    )
}

export default ImageLogin;