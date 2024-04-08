"use client";
import ImageError from "../common/ImageError";
import NewsCard from "../common/NewsCard";
import { Error } from "@/api/types/all/type";
import { NewsCardSkeleton } from "../skeleton/NewsCardSkeleton";
import { useFetchGetNews } from "@/api/hooks/news/queries";
import { useSearchParams } from "next/navigation";

export interface NewsListProps {
	massageError: Error;
	massageNotFound: Error;
}

export default function NewsList({
	massageError,
	massageNotFound,
}: NewsListProps) {
	const searchParams = useSearchParams();
	const tagsUrl = searchParams.get("tags");
	const titleUrl = searchParams.get("title");

	const tags = tagsUrl ? `tags=${tagsUrl}` : "";
	const title = titleUrl ? `title=${titleUrl}` : "";

	const { isLoading, isError, data } = useFetchGetNews(tags, title);

	const newsCards = () => {
		return data?.content.length !== 0 && data ? (
			<div className="flex flex-col w-full">
				{tagsUrl || titleUrl ? (
					<h1 className="w-full mb-6 text-bddarkgray text-2xl font-semibold flex justify-start">
						Filter: {tagsUrl + " " + titleUrl}
					</h1>
				) : (
					<></>
				)}
				<div className="relative grid mb-6 grid-cols-2 sm:grid-cols-3 gap-5 2xl:gap-7">
					{data.content.map((news) => (
						<NewsCard key={news.id} data={news} />
					))}
				</div>
			</div>
		) : (
			<div className="flex w-full items-center justify-center">
				<ImageError data={massageNotFound} />
			</div>
		);
	};

	if (isLoading) {
		return (
			<div className="relative grid grid-cols-2 sm:grid-cols-3 gap-5 2xl:gap-7">
				<NewsCardSkeleton />
				<NewsCardSkeleton />
				<NewsCardSkeleton />
			</div>
		);
	}

	if (isError) {
		return (
			<div className="flex w-full items-center justify-center">
				<ImageError data={massageError} />
			</div>
		);
	}

	if (data) {
		return newsCards();
	}

	return null;
}
