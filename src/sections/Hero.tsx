'use client';
import Button from "../components/button";
import designExample1 from "../assets/images/design-example-1.png";
import designExample2 from "../assets/images/design-example-2.png";
import Image from "next/image";
import Pointer from "@/components/pointer";
import { motion, useAnimate } from "framer-motion";
import { use, useEffect } from "react";
import cursorYou from "../assets/images/cursor-you.svg";


export default function Hero() {
    const [leftdesignscope, leftdesignanimate]  =  useAnimate();
    const [leftpointerscope, leftpointeranimate]  =  useAnimate();
    const [rightdesignscope, rightdesignanimate]  =  useAnimate();
    const [rightpointerscope, rightpointeranimate]  =  useAnimate();
    
    useEffect(()=>{
        leftdesignanimate([
            [leftdesignscope.current, { opacity: 1}, { duration: 0.5}],
            [leftdesignscope.current, { y: 0, x: 0}, {duration: 0.5}]
        ]);

        leftpointeranimate([
            [leftpointerscope.current, { opacity: 1}, { duration: 0.5}],
            [leftpointerscope.current, { y: 0, x: -100}, {duration: 0.5}],
            [leftpointerscope.current, { x: 0, y: [0,16,0]}, {duration: 0.5, ease: "easeInOut"}]
        ]);

        rightdesignanimate([
            [rightdesignscope.current, { opacity: 1}, { duration: 0.5, delay: 1.5}],
            [rightdesignscope.current, { y: 0, x: 0}, {duration: 0.5}]
        ]);

        rightpointeranimate([
            [rightpointerscope.current, { opacity: 1}, { duration: 0.5, delay: 1.5}],
            [rightpointerscope.current, { y: 0, x: 175}, {duration: 0.5}],
            [rightpointerscope.current, { x: 0, y: [0, 20 ,0]}, {duration: 0.5, ease: "easeInOut"}]
        ]);
    },[])

    return <section className="py-24 overflow-x-clip" style={{cursor: `url(${cursorYou.src}), auto`}}>
        <div className="container relative">
            <motion.div 
            ref={leftdesignscope} 
            initial = {{opacity : 0, y: 100, x: -100}}
            drag
            className="absolute -left-32 top-16 hidden lg:block">
                <Image 
                draggable="false"
                src={designExample1} 
                alt="Design Example 1"
                />
            </motion.div>
            <motion.div ref={leftpointerscope} 
            initial = {{opacity : 0, y: 100, x: -200}}
            className="absolute left-56 top-96 hidden lg:block">
                <Pointer name="Rafia" />
            </motion.div>


            <motion.div 
            drag
            ref={rightdesignscope}
            initial = {{opacity : 0, y: 100, x: 100}}
            className="absolute -right-64 -top-16 hidden lg:block">
                <Image 
                draggable="false"
                src={designExample2} 
                alt="Design Example 2"
                />
            </motion.div>
            <motion.div 
            ref={rightpointerscope}
            initial = {{opacity : 0, y: 100, x: 275}}
            className="absolute right-80 -top-4 hidden lg:block">
                <Pointer name="Brayn" color="red" />
            </motion.div>
            
           
            <div className="flex justify-center">
                <div className="inline-flex py-1 px-3 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full text-neutral-950 font-semibold">
                    $7.5M seed round raised
                </div>
            </div>
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-medium text-center items-center mt-6">Impactful design, created effortlessly</h1>
            <p  className="text-center text-xl text-white/50 mt-8 max-w-2xl mx-auto">
                Design tools shouldn't slow you down. Layers powerful feature with an intuaitive interface that jeeps in your craetuve flow
            </p>
            <form className="flex border border-white/15 rounded-full p-2 mt-8 max-w-lg mx-auto ">
                <input type="email" placeholder="Enter your email" name="email" id="email" className="bg-transparent px-4 py-2 md:flex-1 md:w-full" />
                <Button type='submit' variant="primary" size="sm" className="whitespace-nowrap">Sign Up</Button>
            </form>

       
        </div>
    </section>;
}
