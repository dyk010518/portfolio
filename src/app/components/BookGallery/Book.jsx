import clsx from "clsx";
import React from 'react'
import Image from "next/image";

const animationStyle = "transition-all duration-500 ease will-change-auto"

const Book = ({ book, index, focusedIndex, setFocusedIndex }) => {
  const image_file = book.title.replace(/\s+/g, '_').toLowerCase();
  return (
    <>
			{/* old-looking paper effect */}
			<svg className="invisible absolute inset-0">
				<defs>
					<filter id="paper" x="0%" y="0%" width="100%" height="100%">
						<feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="8" result="noise" />
						<feDiffuseLighting in="noise" lightingColor="white" surfaceScale="1" result="diffLight">
						<feDistantLight azimuth="45" elevation="35" />
						</feDiffuseLighting>
					</filter>
				</defs>
			</svg>

			<button
				role="listitem"
				key={book.title}
				onClick={() => {
					if (index === focusedIndex) {
						setFocusedIndex(-1)
					} else {
						setFocusedIndex(index)
					}
				}}
				className={clsx(
					"flex shrink-0 flex-row items-center outline-none",
					focusedIndex !== index && "hover:-translate-y-4 focus-visible:-translate-y-4",
					focusedIndex === index ? "basis-36 md:basis-56" : "basis-6 md:basis-12",
					animationStyle
				)}
				style={{ perspective: "1000px", WebkitPerspective: "1000px" }}
			>
				<div
					className={clsx(
						"z-10 h-full w-[28px] md:w-[44px] shrink-0 origin-right py-3 md:py-4 brightness-[0.80] contrast-[2.00]",
						animationStyle
					)}
					style={{
						backgroundColor: book.backgroundColor,
						color: book.fontColor,
						transformStyle: "preserve-3d",
						transform: `translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(${
						focusedIndex === index ? "-60deg" : "0deg"
						}) rotateZ(0deg) skew(0deg, 0deg)`,
					}}
				>
					<span
						aria-hidden
						className="pointer-events-none fixed top-0 left-0 h-full w-full opacity-40 [filter:url(#paper)]"
					/>
					<h2 
						className={clsx(
						"m-auto",
						book.title.length > 30 ? "text-xxxs md:text-sm" : (book.title.length > 15 ? "text-xxs md:text-base" : "text-xs md:text-xl"),
						)}
						style={{ writingMode: "vertical-lr" }}
					>
						{book.title}
					</h2>
				</div>
				<div
					className={clsx(
						"relative h-48 md:h-76 shrink-0 origin-left overflow-hidden border-gray-900 brightness-[0.80] contrast-[2.00]",
						animationStyle
					)}
					style={{
						transformStyle: "preserve-3d",
						transform: `translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(${
						focusedIndex === index ? "35deg" : "90deg"
						}) rotateZ(0deg) skew(0deg, 0deg)`,
					}}
				>
					<span
						aria-hidden
						className="pointer-events-none fixed top-0 right-0 z-10 h-full w-full opacity-40 [filter:url(#paper)]"
					/>
					<span
						aria-hidden
						className="pointer-events-none absolute top-0 left-0 z-10 h-full w-full"
						style={{
						background: `linear-gradient(to right, rgba(255, 255, 255, 0) 2px, rgba(255, 255, 255, 0.5) 3px, rgba(255, 255, 255, 0.25) 4px, rgba(255, 255, 255, 0.25) 6px, transparent 7px, transparent 9px, rgba(255, 255, 255, 0.25) 9px, transparent 12px)`,
						}}
					/>
					<Image
						src={`/images/books/${image_file}.png`}
						alt={book.title}
						width={192} 
						height={288} 
						className={clsx("h-full w-32 md:w-48 bg-cover", animationStyle)}
					/>
				</div>
			</button>
    </>
  )
}

export default Book