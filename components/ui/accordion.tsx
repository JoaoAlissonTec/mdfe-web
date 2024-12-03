"use client"

import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

type AccordionType = {
	title: string;
	children?: JSX.Element | JSX.Element[] | undefined;
};

const Accordion = ({ title, children }: AccordionType) => {

    const [isOpen, setIsOpen] = useState(false)

	return (
		<div className="w-full" onClick={() => setIsOpen(value => !value)}>
			<div className="bg-stone-200 py-3 px-6 flex items-center justify-between cursor-pointer hover:bg-stone-300">
				<h1>{title}</h1>
                {isOpen ? (
					<FaChevronDown className="text-xs transition rotate-180" />
				) : (
					<FaChevronDown className="text-xs transition rotate-[360deg]" />
				)}
			</div>
			{isOpen && <div className="py-3 px-6">
                {children}
            </div>}
		</div>
	);
};

export default Accordion
