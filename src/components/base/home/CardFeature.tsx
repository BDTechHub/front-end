import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { Feature } from "@/api/types/introduction/types";

interface featuresProps {
	data: Feature;
}

const viewVariants = cva("flex w-full h-60 xl:h-72", {
	variants: {
		orientation: {
			default: "bg-bdgray flex-row",
			left: "bg-white flex-row-reverse",
		},
	},
	defaultVariants: {
		orientation: "default",
	},
});

interface allFeaturesProps
	extends featuresProps,
	VariantProps<typeof viewVariants> { }

export default function CardFeature({ data, orientation }: allFeaturesProps) {
	return (
		<div className={cn(viewVariants({ orientation }))}>
			<div className="h-full bg-bdpurple w-[30%]"></div>
			<div className="flex w-[70%] items-center justify-center flex-col">
				<div className="w-[65%]">
					<h1 className="flex text-left items-center w-full font-bold text-xl 2xl:text-2xl">
						{data?.title}
						<span className="text-bdpurple ml-4">{data?.icon}</span>
					</h1>
					<p className="text-left w-full text-lg 2xl:text-xl">
						{data?.content}
					</p>
				</div>
			</div>
		</div>
	);
}

export { viewVariants };