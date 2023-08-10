import { useState, useEffect } from "react";

export const FirstSectionHook = () => {

    const [currentOption, setCurrentOption] = useState(null)
    const [backgroundOptionRendering, setBackgroundOptionRendering] = useState('https://vod-progressive.akamaized.net/exp=1691694064~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F3178%2F14%2F365891117%2F1509404902.mp4~hmac=78c8153608bc39bd3840c1ecd71899c04f404c6affa79614d39476befddb7f7b/vimeo-prod-skyfire-std-us/01/3178/14/365891117/1509404902.mp4?filename=file.mp4')

    const [renderKey, setRenderKey] = useState('default')

    useEffect(() => {

        document.getElementById('renderElement').style.opacity = 0;

        setTimeout(() => {
            
            //Render change
            switch (currentOption) {

                case 'brand':

                    setBackgroundOptionRendering('https://vod-progressive.akamaized.net/exp=1691694102~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F1179%2F16%2F405897623%2F1738366727.mp4~hmac=8f749c1dd8c5b2b62a2363a8b530b927e04b1e97f60b307bf2e976da9d62047b/vimeo-prod-skyfire-std-us/01/1179/16/405897623/1738366727.mp4?filename=file.mp4')

                    break;

                case 'product':
                    setBackgroundOptionRendering('https://vod-progressive.akamaized.net/exp=1691694121~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F3497%2F9%2F242487547%2F870949973.mp4~hmac=1c0dd47b6b0756aa79dd64796ea829507ab48c679ea9ba541cf3d2822bacb359/vimeo-prod-skyfire-std-us/01/3497/9/242487547/870949973.mp4?filename=file.mp4')

                    break;

                case 'motion':
                    setBackgroundOptionRendering('https://vod-progressive.akamaized.net/exp=1691694137~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F1757%2F7%2F183786490%2F604916426.mp4~hmac=ce6b1adbfc77d1a2977a42dc002d787a1b779782c31a96b4ea3afef97eaa6b9d/vimeo-prod-skyfire-std-us/01/1757/7/183786490/604916426.mp4?filename=file.mp4')

                    break;
                default:

                    setBackgroundOptionRendering('https://vod-progressive.akamaized.net/exp=1691694064~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F3178%2F14%2F365891117%2F1509404902.mp4~hmac=78c8153608bc39bd3840c1ecd71899c04f404c6affa79614d39476befddb7f7b/vimeo-prod-skyfire-std-us/01/3178/14/365891117/1509404902.mp4?filename=file.mp4')

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

