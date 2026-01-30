import { twMerge } from "tailwind-merge";
import {type IntegrationsType} from "@/sections/Integrations"
import Image from "next/image";

export default function IntegrationCol (props: {integrations: IntegrationsType, className?: string}) {
const {integrations, className} = props;
    return(
    <div className={twMerge('flex flex-col gap-4 pb-4',className)}>
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
    
                </div>
);

}