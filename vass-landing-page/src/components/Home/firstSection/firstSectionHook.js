import { useState, useEffect } from "react";

export const FirstSectionHook = () => {

    const [currentOption, setCurrentOption] = useState(null)
    const [backgroundOptionRendering, setBackgroundOptionRendering] = useState('https://vod-progressive.akamaized.net/exp=1691600032~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F3178%2F14%2F365891117%2F1509404902.mp4~hmac=b89f115542e8995bd15051c90fdc92af9dc394e3c0d82784dc7b5c147dca6d6e/vimeo-prod-skyfire-std-us/01/3178/14/365891117/1509404902.mp4?filename=file.mp4')

    const [renderKey, setRenderKey] = useState('default')

    useEffect(() => {

        document.getElementById('renderElement').style.opacity = 0;

        setTimeout(() => {
            
            //Render change
            switch (currentOption) {

                case 'brand':

                    setBackgroundOptionRendering('https://vod-progressive.akamaized.net/exp=1691600087~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F1179%2F16%2F405897623%2F1738366727.mp4~hmac=4b7abfeaff2d0c0aee7b0744a33fbe82f2cef9328b22f20375270d47ef07beb7/vimeo-prod-skyfire-std-us/01/1179/16/405897623/1738366727.mp4?filename=file.mp4')

                    break;

                case 'product':
                    setBackgroundOptionRendering('https://vod-progressive.akamaized.net/exp=1691600146~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F3195%2F19%2F490977482%2F2205528811.mp4~hmac=96f4a47fa5ace5e7a80ed69f1ead0aada684b46b270f766d59c41fd1d2852676/vimeo-prod-skyfire-std-us/01/3195/19/490977482/2205528811.mp4?filename=file.mp4')

                    break;

                case 'motion':
                    setBackgroundOptionRendering('https://vod-progressive.akamaized.net/exp=1691600182~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F1757%2F7%2F183786490%2F604916426.mp4~hmac=f31c339f3ff297c0ee896e83fde26ab615b62fcfeab1e09717fc26e7af5f78f8/vimeo-prod-skyfire-std-us/01/1757/7/183786490/604916426.mp4?filename=file.mp4')

                    break;
                default:

                    setBackgroundOptionRendering('https://vod-progressive.akamaized.net/exp=1691600032~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F3178%2F14%2F365891117%2F1509404902.mp4~hmac=b89f115542e8995bd15051c90fdc92af9dc394e3c0d82784dc7b5c147dca6d6e/vimeo-prod-skyfire-std-us/01/3178/14/365891117/1509404902.mp4?filename=file.mp4')

                    break;
            }
            document.getElementById('renderElement').style.opacity = 1;

            //Key change
            switch (currentOption) {

                case 'brand':

                    setRenderKey('brand')

                    break;

                case 'product':
                    setRenderKey('product')

                    break;

                case 'motion':
                    setRenderKey('motion')

                    break;
                default:
                    setRenderKey('default')

                    break;
            }
        }, 200);


    }, [currentOption])

    return {
        setCurrentOption,
        backgroundOptionRendering,
        renderKey,
    };
};

