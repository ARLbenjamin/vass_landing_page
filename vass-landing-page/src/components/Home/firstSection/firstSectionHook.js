import { useState, useEffect } from "react";

export const FirstSectionHook = () => {

    const [currentOption, setCurrentOption] = useState(null)
    const [backgroundOptionRendering, setBackgroundOptionRendering] = useState('https://vod-progressive.akamaized.net/exp=1691688720~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F3178%2F14%2F365891117%2F1509404902.mp4~hmac=6980f33635bff23aa9f2b6b09f053ce170a6d7a9ef339dee3e7e9ee64a348aa6/vimeo-prod-skyfire-std-us/01/3178/14/365891117/1509404902.mp4?filename=file.mp4')

    const [renderKey, setRenderKey] = useState('default')

    useEffect(() => {

        document.getElementById('renderElement').style.opacity = 0;

        setTimeout(() => {
            
            //Render change
            switch (currentOption) {

                case 'brand':

                    setBackgroundOptionRendering('https://vod-progressive.akamaized.net/exp=1691688899~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F1179%2F16%2F405897623%2F1738366727.mp4~hmac=64a41db66ddf40c943f226ce8bff56e20d65666517bef32c23ea7fde3595e375/vimeo-prod-skyfire-std-us/01/1179/16/405897623/1738366727.mp4?filename=file.mp4')

                    break;

                case 'product':
                    setBackgroundOptionRendering('https://vod-progressive.akamaized.net/exp=1691689138~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F3497%2F9%2F242487547%2F870949973.mp4~hmac=9cccb3b0c99b8b5456ff151fb0fd77316f45aca451945d599415165afcacc382/vimeo-prod-skyfire-std-us/01/3497/9/242487547/870949973.mp4?filename=file.mp4')

                    break;

                case 'motion':
                    setBackgroundOptionRendering('https://vod-progressive.akamaized.net/exp=1691688858~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F1757%2F7%2F183786490%2F604916426.mp4~hmac=353eb3b4e512cf59519c86ddeb438b7f0fd4facbddb197ad93e7e115d0c53010/vimeo-prod-skyfire-std-us/01/1757/7/183786490/604916426.mp4?filename=file.mp4')

                    break;
                default:

                    setBackgroundOptionRendering('https://vod-progressive.akamaized.net/exp=1691688720~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F3178%2F14%2F365891117%2F1509404902.mp4~hmac=6980f33635bff23aa9f2b6b09f053ce170a6d7a9ef339dee3e7e9ee64a348aa6/vimeo-prod-skyfire-std-us/01/3178/14/365891117/1509404902.mp4?filename=file.mp4')

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

