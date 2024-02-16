import ImgRegister from "../../Assets/images/Image-register.png"
import { ImageContainer, Image, FraseSobre } from "./styles";

const ImageRegister = () => {
    return(
        <ImageContainer>
            <Image src={ImgRegister}
                   alt="image-background"
            />
            <FraseSobre>
                <h1>"A jornada para um corpo saudável e forte começa com um único passo. Dê esse passo hoje!"</h1>
            </FraseSobre>
        </ImageContainer>
    )
}

export default ImageRegister;