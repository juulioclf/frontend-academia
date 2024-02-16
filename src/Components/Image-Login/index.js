import ImgLogin from "../../Assets/images/Image-Login.svg"
import { ImageContainer, Image } from "./styles";

const ImageLogin = () => {
    return(
        <ImageContainer>
            <Image src={ImgLogin}
                 alt="image-background"
            />
        </ImageContainer>
    )
}

export default ImageLogin;