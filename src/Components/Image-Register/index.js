import ImgRegister from "../../Assets/images/Image-register.png"
import styles from './RegisterLogin.module.css'

const ImageRegister = () => {
    return(
        <div className={styles.imagecontainer}>
            <img src={ImgRegister}
                 alt="image-background"
                 className={styles.image} 
            />
            <div className= {styles.fraseSobre}>
                <h1>"A jornada para um corpo saudável e forte começa com um único passo. Dê esse passo hoje!"</h1>
            </div>
        </div>
    )
}

export default ImageRegister;