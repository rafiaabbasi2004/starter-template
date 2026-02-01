'use client';
import { twMerge } from "tailwind-merge";
import {type IntegrationsType} from "@/sections/Integrations"
import Image from "next/image";
import {motion } from "framer-motion";
import { Fragment } from "react";
import { reverse } from "dns";
export default function IntegrationCol (props:
     {integrations: IntegrationsType,
         className?: string, reversed?: boolean},
          ) {
const {integrations, className , reversed} = props;
    return(
    <motion.div 
    initial ={{
        y: reversed? "-50%" : 0
    }}
    animate={{ y: reversed? "0" : "-50%", }}
    transition={{
        duration: 20,
        repeat: Infinity,
        ease: "linear",

    }}
    className={twMerge('flex flex-col gap-4 pb-4',className)}>
        {Array.from({ length: 2}).map((_,i) => (
            <Fragment key={i}>
                {integrations.map((integration) => (
                        <div key={integration.name} className="bg-neutral-900 borfer border-white/10 rounded-3xl p-6">
                            <div className="flex justify-center">
                                <Image 
                                className="size-24 "
                                src={integration.icon} alt={integration.name} />
                            </div>
                            <h3 className="text-3xl text-center mt-6">{integration.name}</h3>
                            <p className="text-center mt-2 text-white/50">{integration.description}</p>
                            
                        </div>
                    ))}

            </Fragment>
    ))}
    
    </motion.div>
);

}