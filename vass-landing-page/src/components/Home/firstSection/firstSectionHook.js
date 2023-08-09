import { useState, useEffect } from "react";

export const FirstSectionHook = () => {

    const [currentOption, setCurrentOption] = useState(null)
    const [backgroundOptionRendering, setBackgroundOptionRendering] = useState('https://vod-progressive.akamaized.net/exp=1691620481~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F3178%2F14%2F365891117%2F1509404916.mp4~hmac=1ac107fda424b725ddbfeef66e6ca606e003048f6e3c02e64a1f9eee1bb8daf7/vimeo-prod-skyfire-std-us/01/3178/14/365891117/1509404916.mp4?filename=file.mp4')

    const [renderKey, setRenderKey] = useState('default')

    useEffect(() => {

        document.getElementById('renderElement').style.opacity = 0;

        setTimeout(() => {
            
            //Render change
            switch (currentOption) {

                case 'brand':

                    setBackgroundOptionRendering('https://vod-progressive.akamaized.net/exp=1691620528~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F1179%2F16%2F405897623%2F1738366727.mp4~hmac=8264b203b3b8046e85654a0f69d10e5d5fe01210f7fe66f18287745ecb20b1ab/vimeo-prod-skyfire-std-us/01/1179/16/405897623/1738366727.mp4?filename=file.mp4')

                    break;

                case 'product':
                    setBackgroundOptionRendering('https://vod-progressive.akamaized.net/exp=1691620565~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F3195%2F19%2F490977482%2F2205528811.mp4~hmac=7fb8f5bbbc6a10eb66cd86007c1f3dd5dc35b4f674d0182d99bdae3cadad80bc/vimeo-prod-skyfire-std-us/01/3195/19/490977482/2205528811.mp4?filename=file.mp4')

                    break;

                case 'motion':
                    setBackgroundOptionRendering('https://vod-progressive.akamaized.net/exp=1691620590~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F1757%2F7%2F183786490%2F604916426.mp4~hmac=e3901f0498f02014de891e719c2642c12b2d962e9dd3b0e11436429edbaf5ab4/vimeo-prod-skyfire-std-us/01/1757/7/183786490/604916426.mp4?filename=file.mp4')

                    break;
                default:

                    setBackgroundOptionRendering('https://vod-progressive.akamaized.net/exp=1691620481~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F3178%2F14%2F365891117%2F1509404916.mp4~hmac=1ac107fda424b725ddbfeef66e6ca606e003048f6e3c02e64a1f9eee1bb8daf7/vimeo-prod-skyfire-std-us/01/3178/14/365891117/1509404916.mp4?filename=file.mp4')

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

