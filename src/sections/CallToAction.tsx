'use client';
import { AnimationPlaybackControls, motion, useAnimate } from "framer-motion";
import { use, useEffect, useRef, useState } from "react";

export default function CallToAction() {
    const [isHovered, setIsHovered] = useState(false);
    const animation = useRef<AnimationPlaybackControls>();
    const [scope, animate] = useAnimate();
    // useEffect(() =>{
    //     animation.current = animate(
    //         scope.current, 
    //         { x: "-50%"}, 
    //         { duration: 30 , ease: "linear", repeat: Infinity})
    // },[]);

    // useEffect(()=>{
    //     if(isHovered){
    //         animation.current?.stop();
    //     } else {
    //         animation.current = animate(
    //             scope.current, 
    //             { x: "-50%"}, 
    //             { duration: 50 , ease: "linear", repeat: Infinity});
    //     }
    // }, [isHovered]);
    return (
    <section className="py-24">
    <div className="overflow-x-clip p-4 flex ">
        <motion.div
        animate={{ x: "-50%" }}
        transition=
        {{ duration: 50, 
            repeat: Infinity, 
            ease: "linear"
         }}
         onMouseEnter={()=>{
            setIsHovered(true);
         }}
            onMouseLeave={()=>{
                setIsHovered(false);
            }}
        className="flex flex-none gap-16 pr-16 md:text-8xl text-7xl font-medium">
            {Array.from({length:10}).map((_,i) => (
                <div className="flex items-center gap-16" key={i}>
                    <span className="text-lime-400 text-7xl">&#10038;</span>
                    <span>Try it for free</span>
                </div>
            ))}
        </motion.div>
    </div>
    </section>
    );
}
