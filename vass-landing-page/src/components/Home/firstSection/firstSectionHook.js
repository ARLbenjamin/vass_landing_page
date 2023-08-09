import { useState, useEffect } from "react";

export const FirstSectionHook = () => {

    const [currentOption, setCurrentOption] = useState(null)
    const [backgroundOptionRendering, setBackgroundOptionRendering] = useState('https://vod-progressive.akamaized.net/exp=1691555706~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F3178%2F14%2F365891117%2F1509404902.mp4~hmac=36da6ceb84732862c1bd2bd2f84b54055183cd62232ff673be2831ba5fac42bd/vimeo-prod-skyfire-std-us/01/3178/14/365891117/1509404902.mp4?filename=file.mp4')

    const [renderKey, setRenderKey] = useState('default')

    useEffect(() => {

        document.getElementById('renderElement').style.opacity = 0;

        setTimeout(() => {
            
            //Render change
            switch (currentOption) {

                case 'brand':

                    setBackgroundOptionRendering('https://vod-progressive.akamaized.net/exp=1691555866~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F1179%2F16%2F405897623%2F1738366727.mp4~hmac=70e4a8b093df43a8a9aab5b38d89df11d7da95733b4196118278317b1f43c4fe/vimeo-prod-skyfire-std-us/01/1179/16/405897623/1738366727.mp4?filename=file.mp4')

                    break;

                case 'product':
                    setBackgroundOptionRendering('https://vod-progressive.akamaized.net/exp=1691555828~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F3195%2F19%2F490977482%2F2205528811.mp4~hmac=c8ff728ab01732c9a71ecedbba30ba75b2f6dd2f2810ae3578656d361b404575/vimeo-prod-skyfire-std-us/01/3195/19/490977482/2205528811.mp4?filename=file.mp4')

                    break;

                case 'motion':
                    setBackgroundOptionRendering('https://vod-progressive.akamaized.net/exp=1691555847~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F1757%2F7%2F183786490%2F604916426.mp4~hmac=719e91c95c2f193852e21ccbf1a772d5f6c0cbf92cbd1165cbcc34c87206fa92/vimeo-prod-skyfire-std-us/01/1757/7/183786490/604916426.mp4?filename=file.mp4')

                    break;
                default:

                    setBackgroundOptionRendering('https://vod-progressive.akamaized.net/exp=1691555706~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F3178%2F14%2F365891117%2F1509404902.mp4~hmac=36da6ceb84732862c1bd2bd2f84b54055183cd62232ff673be2831ba5fac42bd/vimeo-prod-skyfire-std-us/01/3178/14/365891117/1509404902.mp4?filename=file.mp4')

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

