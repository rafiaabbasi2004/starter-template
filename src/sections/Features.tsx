import Tag from "@/components/tag";
import FeatureCard from "../components/featureCard";
import avatar1 from "../assets/images/avatar-ashwin-santiago.jpg"
import avatar2 from "../assets/images/avatar-florence-shaw.jpg"
import avatar3 from "../assets/images/avatar-owen-garcia.jpg"
import Image from "next/image";
import Avatar from "../components/avatar";
import Key from "../components/key";
import avatar4 from "../assets/images/avatar-lula-meyers.jpg"

const features = [

    "Asset Library",
    "Code Preview",
    "Flow Mode",
    "Smart Sync",
    "Auto Layout",
    "Fast Search",
    "Smart Guides",
];

export default function Features() {
    return (
    <section className="py-24">
        <div className="container">
            <div className="flex justify-center">
            <Tag>Features</Tag></div>
            <h2 className="text-6xl font-medium text-center mt-6">Where power meets <span className="text-lime-400">simplicity</span></h2>
            <div className="mt-12 grid grid-cols-1 md:grid-cols-4 lg:grid-cols-3 gap-8">
                <FeatureCard
                 title="Interactive prototyping" 
                 description="Create and test interactive prototypes with ease, bringing your ideas to life quickly."
                 className="col-span-2 lg:col-span-1 group"
                >
                    <div className="aspect-video flex items-center justify-center">
                        <Avatar className="z-40">
                            <Image src={avatar1} 
                            className="rounded-full"
                            alt="Ashwin Santiago" />
                        </Avatar>
                        <Avatar className="-ml-6 z-30 border-indigo-500">
                            <Image src={avatar2} className="rounded-full" alt="Maria Gonzales" />
                        </Avatar>
                        <Avatar className="-ml-6 z-20 border-amber-500">
                            <Image src={avatar3} className="rounded-full"  alt="John Doe" />
                        </Avatar>
                        <Avatar className="-ml-6 border-transparent group-hover:border-green-500 transition">
                            <div className="size-full bg-neutral-700 rounded-full inline-flex gap-1 items-center justify-center relative">
                                <Image src={avatar4} alt="avatar 4" className="absolute size-full rounded-full opacity-0 group-hover:opacity-100 transition "/>
                                {Array.from({ length: 3}).map((_, i) => (
                                    <span key={i} className="size-1.5 rounded-full bg-white inline-flex"></span>
                                ))}
                             
                            </div>
                        </Avatar>
                    </div>
                </FeatureCard>
                
                <FeatureCard 
                title="Quick Actions" 
                description="Work together seamlessly with real-time collaboration, ensuring everyone stays on the same page."
                className="col-span-2 lg:col-span-1 group"
                >
                    <div className="aspect-video flex items-center justify-center">
                        <p className="text-4xl font-extrabold text-white/20 text-center group-hover:text-white/10 transition duration-500">achieved {" "}
                        <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent relative">
                            <span>
                                Incredible
                            </span>
                            <video src="/assets/gif-incredible.mp4" autoPlay muted loop  playsInline className="absolute bottom-full left-1/2 -translate-x-1/2 rounded-2xl shadow-xl opacity-0 pointer-events-none group-hover:opacity-100 transition duration-500"/>
                        </span>{" "} growth this year</p>
                    </div>
                </FeatureCard>
                
                <FeatureCard className="col-span-2  lg:col-span-1 group" title="Design Systems" description="Maintain consistency across your projects with robust design system support, making updates a breeze.">
                    <div className="aspect-video flex items-center justify-center gap-4">
                        <Key className="w-28 outline-2  outline-offset-4 outline-transparent group-hover:outline  outline-lime-400 transition-all group-hover:translate-y-1 duration-700">Shift</Key>
                        <Key className=" outline-2  outline-offset-4 outline-transparent group-hover:outline outline-lime-400 transition-all group-hover:translate-y-1 duration-700 delay-150">Alt</Key>
                        <Key className=" outline-2   outline-offset-4 outline-transparent group-hover:outline outline-lime-400 transition-all group-hover:translate-y-1 duration-700 delay-300">C</Key>
                    </div>
                    
                </FeatureCard>
            </div>
             <div className="mt-8 flex flex-wrap gap-3 justify-center group ">
                        {features.map((feature => (
                            <div key={feature} className="bg-neutral-900 border border-white/10 inline-flex px-3 md:px-5 md:py-2 py-1.5 rounded-2xl gap-3 items-center hover:scale-105 transition duration-500">
                                <span className="bg-lime-400 size-5 rounded-full items-center inline-flex justify-center text-xl group-hover:rotate-45 transition duration-500">✔</span>
                                <span className="font-medium md:text-lg">{feature}</span>
                            </div>
                        )))}
            </div>
           

        </div>
    </section>
    );
}
