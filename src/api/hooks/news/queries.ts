import api from "../../../services/api"
import { QueryFunctionContext, useQuery } from "@tanstack/react-query"
import { ContentNews, News } from "@/api/types/news/type"


async function getNews() {
  const { data } = await api.get<ContentNews>("news/preview")
  return data
}

async function getNewsFilter(ctx: QueryFunctionContext) {
  const [, tags] = ctx.queryKey
  const { data } = await api.get<ContentNews>(`news?tags=${tags}`)
  return data
}

async function getNewsOutherNews() {
  const { data } = await api.get<ContentNews>("news/preview?size=3")
  return data.content
}

export function useFetchGetNewsOutherNews(){
  return useQuery<News[], Error>({ queryKey: ['news'], queryFn: getNewsOutherNews })
}

export function useFetchGetNews(tags?: string) {
  return useQuery<ContentNews, Error>({ queryKey: ['news', tags], queryFn: tags ? getNewsFilter : getNews })
}



async function getIdNews(ctx: QueryFunctionContext) {
  const [, id] = ctx.queryKey
  const { data } = await api.get<News>(`news/${id}`)
  return data
}

export function useFetchGetNewsId(id: string){
  return useQuery<News, Error>({queryKey: ['newsRead', id], queryFn: getIdNews})

}


