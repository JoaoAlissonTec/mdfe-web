"use client";

import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

type IItemMenuWContent = {
	title: string | null | undefined;
	children?: JSX.Element | JSX.Element[] | undefined;
};

const ItemMenuWContent = ({ title, children }: IItemMenuWContent) => {
	const [isTriggered, setIsTriggered] = useState(false);

	return (
		<li
			className="py-1 px-3 rounded-sm hover:bg-stone-100"
			onMouseEnter={() => setIsTriggered(true)}
			onMouseLeave={() => setIsTriggered(false)}
		>
			<span className="flex items-center gap-2 select-none">
				{title}
				{isTriggered ? (
					<FaChevronDown className="text-xs transition rotate-180" />
				) : (
					<FaChevronDown className="text-xs transition rotate-[360deg]" />
				)}
			</span>
			{isTriggered && (
				<ul className="absolute bg-red-100 shadow-md">{children}</ul>
			)}
		</li>
	);
};

export default ItemMenuWContent;
