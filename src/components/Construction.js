import { useLottie } from 'lottie-react'
import animationData from '../Images/construction.json'

const style = {
    height: 500,
    width: 600,
    marginLeft: 400
}

const ConstructionAnimation = () => {
    
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        }
    };
    
    const { View } = useLottie(defaultOptions, style)

    return View;
}

export default ConstructionAnimation;