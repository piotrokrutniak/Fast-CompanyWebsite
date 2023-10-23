"use client"
import BlogPost from "@/app/components/common/carouselPanel"
import ac1 from "../../media/img/air-conditioning-2.jpg"
import ac2 from "../../media/img/heat-pump-2.jpg"
import ac3 from "../../media/img/heating-2.jpg"
import noData from "../../media/img/undraw_no_data.svg"
import { GetPosts } from "@/app/graphql/getPosts"
import { useState } from "react"
import { useEffect } from "react"
import { BsArrowClockwise } from "react-icons/bs"
import { useScrollPosition } from "@/app/utilities/useScrollPosition"
import { GeneratePages, PaginationPanel } from "@/app/components/common/paginationPanel"
import Image from "next/image"

export default function Realizacje(){
    const [loading, setLoading] = useState(true)
    const [posts, setPosts] = useState([])
    const [pages, setPages] = useState([])
    const [page, setPage] = useState(1)

    useEffect(() => {
      scrollTo(1, 0)
      setLoading(true)
      GetPosts()
        .then((x) => {
          setPosts([...x.posts]);
          setPages([...GeneratePages(page, x.postsConnection.aggregate.count)])
        })
        .finally(() => setLoading(false))
    }, [page])

    function ChangePage(value){
      if(page != value){
          setPosts([])
          setPage(value)
      }
  }

    return(
        <main className="min-h-screen scroll-smooth">
            <section id="Realizacje" className="max-w-7xl m-auto flex flex-col gap-5">
                <div className="p-6 lg:p-16">
                    <h1 className="text-3xl sm:text-5xl font-semibold border-slate-600/30 pb-7">Realizacje</h1>
                    <p className="text-base sm:text-lg opacity-80 font-normal leading-relaxed">Poniżej znajdą państwo wybrane, udokumentowane realizacje i projekty wykonane przez nas.</p>
                </div>
                {loading ? <div className="p-8 font-semibold flex gap-2 mx-auto text-2xl opacity-80 animate-pulse">Ładowanie postów <BsArrowClockwise className="animate-spin h-8 w-8"/> </div> :
                posts?.length == 0 ?
                <div className="p-8 font-semibold mx-auto flex flex-col gap-10">
                  <span className="mx-auto text-2xl opacity-80">Nie znaleziono postów. </span>
                  <div className="w-44 md:w-64 h-64 relative mx-auto">
                    <Image src={noData} layout='fill' objectFit='contain'  className="w-full h-full"/>
                  </div>
                </div> :
                posts.map((x, key) => <BlogPost key={x.id} title={x.title} location={x.location} desc={x.description} photos={x.photos} alt={x.title}/>)}
                {posts.length > 0 && 
                <div className="w-full p-6 bg-slate-600/10 flex justify-center rounded-lg gap-2 shadow-md">
                  <PaginationPanel page={page} setPage={ChangePage} pages={pages}/>
                </div>}
                
            </section>
        </main>
    )
}
