import ImgRegister from "../../Assets/images/Image-Register.jpg"
import { ImageContainer, Image} from "./styles";

const ImageRegister = () => {
    return(
        <ImageContainer>
            <Image src={ImgRegister}
                   alt="image-background"
            />
        </ImageContainer>
    )
}

export default ImageRegister;