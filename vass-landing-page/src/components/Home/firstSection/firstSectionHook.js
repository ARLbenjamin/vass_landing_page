import { useState, useEffect } from "react";

export const FirstSectionHook = () => {

    const [currentOption, setCurrentOption] = useState(null)
    const [backgroundOptionRendering, setBackgroundOptionRendering] = useState('https://vod-progressive.akamaized.net/exp=1691449607~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F3178%2F14%2F365891144%2F1509405203.mp4~hmac=6f34409e26d11eb109d855d537374529da3990768e3f24dd2553226ec3f57eda/vimeo-prod-skyfire-std-us/01/3178/14/365891144/1509405203.mp4?filename=file.mp4')

    const [renderKey, setRenderKey] = useState('default')

    useEffect(() => {

        document.getElementById('renderElement').style.opacity = 0;

        setTimeout(() => {
            
            //Render change
            switch (currentOption) {

                case 'brand':

                    setBackgroundOptionRendering('https://vod-progressive.akamaized.net/exp=1691452653~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F1179%2F16%2F405897623%2F1738366734.mp4~hmac=af1fcc2bcc37d74084c9e3eb94b0f32c99da4bacafe545988e4bd038b7fb1002/vimeo-prod-skyfire-std-us/01/1179/16/405897623/1738366734.mp4?filename=file.mp4')

                    break;

                case 'product':
                    setBackgroundOptionRendering('https://vod-progressive.akamaized.net/exp=1691452533~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F3195%2F19%2F490977482%2F2205528819.mp4~hmac=a5808853987feaffb0a9204ff060617e85c090b7bc076f17a1c40ba6fb0f0e9c/vimeo-prod-skyfire-std-us/01/3195/19/490977482/2205528819.mp4?filename=file.mp4')

                    break;

                case 'motion':
                    setBackgroundOptionRendering('https://vod-progressive.akamaized.net/exp=1691452564~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F1757%2F7%2F183786490%2F604916421.mp4~hmac=4644ec59ba0289d0d5e86cffef121527ff072e5327ff8709b2af14b7bff10ed1/vimeo-prod-skyfire-std-us/01/1757/7/183786490/604916421.mp4?filename=file.mp4')

                    break;
                default:

                    setBackgroundOptionRendering('https://vod-progressive.akamaized.net/exp=1691449607~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F3178%2F14%2F365891144%2F1509405203.mp4~hmac=6f34409e26d11eb109d855d537374529da3990768e3f24dd2553226ec3f57eda/vimeo-prod-skyfire-std-us/01/3178/14/365891144/1509405203.mp4?filename=file.mp4')

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
