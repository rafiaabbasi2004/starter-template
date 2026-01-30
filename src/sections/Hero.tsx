import Button from "../components/button";
import designExample1 from "../assets/images/design-example-1.png";
import designExample2 from "../assets/images/design-example-2.png";
import Image from "next/image";
import Pointer from "@/components/pointer";


export default function Hero() {
    return <section className="py-24 overflow-x-clip">
        <div className="container relative">
            <div className="absolute -left-32 top-16 hidden lg:block">
                <Image src={designExample1} alt="Design Example 1"/>
            </div>
            <div className="absolute -right-64 -top-16 hidden lg:block">
                <Image src={designExample2} alt="Design Example 2"/>
            </div>
            <div className="absolute left-56 top-96 hidden lg:block">
                <Pointer name="Rafia" />
            </div>
             <div className="absolute right-88 -top-4 hidden lg:block">
                <Pointer name="Brayn" color="red" />
            </div>
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
