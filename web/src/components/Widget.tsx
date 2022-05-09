import { ChatTeardropDots } from "phosphor-react";
import { Popover } from '@headlessui/react'
// import { useState } from "react";
import { WidgetForm } from './WidgetForm';


export function Widget() {
    // const [isWidgetOpen, setIsWidgetOpen] = useState(false)
    // function toggleWidgetVisibility() {
    //     setIsWidgetOpen(!isWidgetOpen)
    // }
    // {/* { isWidgetOpen ? <p> Hello World</p> : null} */}
    // {/* { isWidgetOpen && <p> Hello World</p>} */}
    // {/*  Popover -> div */}
    // {/*  Popover.Button -> button */}
    // {/*  Popover.Panel -> p */}
    // {/* <button onClick={toggleWidgetVisibility} */}

    return (
        <Popover className="absolute bottom-4 md:right-8 md:bottom-8 right-4 flex flex-col items-end">
            {/* // absolute bottom-5 right-5 flex flex-col items-end  responsividade para dispositivos maiores com md:valores*/}
            
            <Popover.Panel><WidgetForm /></Popover.Panel>
        <Popover.Button className="bg-brand-500 rounded-full px-3 h-12 text-white flex items-center group">
            <ChatTeardropDots className="w-6 h-6"/>
            <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-linear"> 
            <span className="pl-2">
            </span>
            Feedback 
            </span>
        </Popover.Button>
        </Popover>
    )
}