"use client"
import BlogPost from "@/app/components/common/carouselPanel"
import ac1 from "../../media/img/air-conditioning-2.jpg"
import ac2 from "../../media/img/heat-pump-2.jpg"
import ac3 from "../../media/img/heating-2.jpg"
import { GetPosts } from "@/app/graphql/getPosts"
import { useState } from "react"
import { useEffect } from "react"
import { BsArrowClockwise } from "react-icons/bs"

export default function Realizacje(){
    const data = {
        "posts": [
            {
              "id": "clap8tyto3l1c0auq1qnvf0ig",
              "title": "Ogrzewanie centralne",
              "location": "Ciechocinek",
              "description": "Realizacja projektu ogrzewania centralnego w Ciechocinku.",
              "photos": [
                {
                  "id": "clc4no5ot2kat0bw6ujnezqly",
                  "url": "https://media.graphassets.com/X4UQNOFRr5YGLHNv6qbw"
                },
                {
                  "id": "clc4no5o32lbx0auuyzfvvren",
                  "url": "https://media.graphassets.com/RVmYDvJQPGIYokZuLn3J"
                },
                {
                  "id": "clc4no5ok2kal0bw6nkcun04b",
                  "url": "https://media.graphassets.com/rkcCWrzMTxO14HxNCKnW"
                },
                {
                  "id": "clc4no5op2ld20cw6p3sa9bb0",
                  "url": "https://media.graphassets.com/hieUsliJQLye2lxmUf8v"
                }
              ]
            },
            {
              "id": "clap8tyto3l1c0auq1qnvf0ig",
              "title": "Ogrzewanie centralne",
              "location": "Ciechocinek",
              "description": "Realizacja projektu ogrzewania centralnego w Ciechocinku.",
              "photos": [
                {
                  "id": "clc4no5ot2kat0bw6ujnezqly",
                  "url": "https://media.graphassets.com/X4UQNOFRr5YGLHNv6qbw"
                },
                {
                  "id": "clc4no5o32lbx0auuyzfvvren",
                  "url": "https://media.graphassets.com/RVmYDvJQPGIYokZuLn3J"
                },
                {
                  "id": "clc4no5ok2kal0bw6nkcun04b",
                  "url": "https://media.graphassets.com/rkcCWrzMTxO14HxNCKnW"
                },
                {
                  "id": "clc4no5op2ld20cw6p3sa9bb0",
                  "url": "https://media.graphassets.com/hieUsliJQLye2lxmUf8v"
                }
              ]
            },
            {
              "id": "clap8tyto3l1c0auq1qnvf0ig",
              "title": "Ogrzewanie centralne",
              "location": "Ciechocinek",
              "description": "Realizacja projektu ogrzewania centralnego w Ciechocinku.",
              "photos": [
                {
                  "id": "clc4no5ot2kat0bw6ujnezqly",
                  "url": "https://media.graphassets.com/X4UQNOFRr5YGLHNv6qbw"
                },
                {
                  "id": "clc4no5o32lbx0auuyzfvvren",
                  "url": "https://media.graphassets.com/RVmYDvJQPGIYokZuLn3J"
                },
                {
                  "id": "clc4no5ok2kal0bw6nkcun04b",
                  "url": "https://media.graphassets.com/rkcCWrzMTxO14HxNCKnW"
                },
                {
                  "id": "clc4no5op2ld20cw6p3sa9bb0",
                  "url": "https://media.graphassets.com/hieUsliJQLye2lxmUf8v"
                }
              ]
            },
            {
              "id": "clap8tyto3l1c0auq1qnvf0ig",
              "title": "Ogrzewanie centralne",
              "location": "Ciechocinek",
              "description": "Realizacja projektu ogrzewania centralnego w Ciechocinku.",
              "photos": [
                {
                  "id": "clc4no5ot2kat0bw6ujnezqly",
                  "url": "https://media.graphassets.com/X4UQNOFRr5YGLHNv6qbw"
                },
                {
                  "id": "clc4no5o32lbx0auuyzfvvren",
                  "url": "https://media.graphassets.com/RVmYDvJQPGIYokZuLn3J"
                },
                {
                  "id": "clc4no5ok2kal0bw6nkcun04b",
                  "url": "https://media.graphassets.com/rkcCWrzMTxO14HxNCKnW"
                },
                {
                  "id": "clc4no5op2ld20cw6p3sa9bb0",
                  "url": "https://media.graphassets.com/hieUsliJQLye2lxmUf8v"
                }
              ]
            },
            {
              "id": "clap8tyto3l1c0auq1qnvf0ig",
              "title": "Ogrzewanie centralne",
              "location": "Ciechocinek",
              "description": "Realizacja projektu ogrzewania centralnego w Ciechocinku.",
              "photos": [
                {
                  "id": "clc4no5ot2kat0bw6ujnezqly",
                  "url": "https://media.graphassets.com/X4UQNOFRr5YGLHNv6qbw"
                },
                {
                  "id": "clc4no5o32lbx0auuyzfvvren",
                  "url": "https://media.graphassets.com/RVmYDvJQPGIYokZuLn3J"
                },
                {
                  "id": "clc4no5ok2kal0bw6nkcun04b",
                  "url": "https://media.graphassets.com/rkcCWrzMTxO14HxNCKnW"
                },
                {
                  "id": "clc4no5op2ld20cw6p3sa9bb0",
                  "url": "https://media.graphassets.com/hieUsliJQLye2lxmUf8v"
                }
              ]
            },
            {
              "id": "clape66ua3pni0auqsrj0wxip",
              "title": "Ogrzewanie Centralne",
              "location": "Kraków, Klimeckiego",
              "description": "Montaż jednostki zewnętrznej oraz trzech jednostek wewnętrznych.",
              "photos": [
                {
                  "id": "clc4no5op2ld20cw6p3sa9bb0",
                  "url": "https://media.graphassets.com/hieUsliJQLye2lxmUf8v"
                },
                {
                  "id": "clc4no5ot2kat0bw6ujnezqly",
                  "url": "https://media.graphassets.com/X4UQNOFRr5YGLHNv6qbw"
                },
                {
                  "id": "clc4no5ok2kal0bw6nkcun04b",
                  "url": "https://media.graphassets.com/rkcCWrzMTxO14HxNCKnW"
                },
                {
                  "id": "clc4no5o32lbx0auuyzfvvren",
                  "url": "https://media.graphassets.com/RVmYDvJQPGIYokZuLn3J"
                }
              ]
            }
          ]
    }
    const [loading, setLoading] = useState(false)
    const [posts, setPosts] = useState([])
    
    useEffect(() => {
      setLoading(true)
      GetPosts()
        .then((x) => setPosts([...x.posts]))
        //.finally(() => setLoading(false))
    }, [])
    

      


    return(
        <main className="min-h-screen scroll-smooth">
            <section id="Realizacje" className="max-w-7xl m-auto flex flex-col gap-5">
                <div>
                    <h1 className="text-3xl sm:text-5xl font-semibold p-6 lg:p-16 border-slate-600/30">Realizacje</h1>
                </div>
                {loading ? <div className="p-8 font-semibold flex gap-2 mx-auto lg:text-2xl opacity-80">Ładowanie postów <BsArrowClockwise className="animate-spin h-6 w-6"/> </div> :
                posts?.length == 0 ?
                <div className="p-8 font-semibold">Nie znaleziono postów.</div> :
                posts.map((x, key) => <BlogPost key={x.id} title={x.title} location={x.location} desc={x.description} photos={x.photos}/>)}
            </section>
        </main>
    )
}
