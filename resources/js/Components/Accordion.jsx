import React, { useState } from 'react';
import { ChevronDownIcon , ChevronUpIcon  } from "@heroicons/react/24/solid";

const Accordion = ({ title, answer }) => {
    const [accordionOpen, setAccordionOpen] = useState(false);
    return (
        <>
            <div className={`px-4 rounded-xl items-center ${accordionOpen ? 'bg-white-blue py-5' : 'bg-white shadow-lg py-5'}`}>
                <button className="flex justify-between w-full "
                    onClick={() => setAccordionOpen(!accordionOpen)}
                >
                    <div className="text-lg font-semibold">
                        {title}
                    </div>

                    {accordionOpen ?
                        <ChevronUpIcon className='w-5 h-5' />
                        :
                        <ChevronDownIcon className='w-5 h-5' />}

                </button>

                <div className={`grid overflow-hidden transition-all duration-300 ease-in-out text-slate-800 text-base capitalize ${accordionOpen ? 'grid-rows-[1fr] opacity-100 mt-4' : 'grid-rows-[0] opacity-0'}`}>
                    <p className='overflow-hidden'>{answer}</p>
                </div>
            </div>
        </>
    );
}

export default Accordion;