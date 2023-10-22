export function PaginationPanel({page, setPage, pages}){
    console.log(pages)
    return(
        pages.map((x, key) => 
            <PageButton index={x} active={page == x} key={key} setPage={setPage}/>
        )
    )
}

export function GeneratePages(page, count){
    let start = 1
    let pages = []
    let maxPage = count/10
    
    if(page>3){
        start = page - 2
    }
    if(maxPage - page < 3){
        start = maxPage - 4
    }
    
    let end = maxPage <= 5 ? 5 : start + 5

    if(maxPage <= 5){
        end = maxPage + 1
        start = 1
    }else{
       end = start + 5 
    }

    let i = start

    while(i < end){
        pages.push(i)
        i++
    }

    return pages
}

function PageButton({index, active, setPage}){
    return(
        <div className={`${active ? "bg-sky-600" : "bg-slate-300/40"} p-4 h-10 w-10 aspect-square 
            flex justify-center items-center rounded-md cursor-pointer select-none
            opacity-80 hover:opacity-100 active:opacity-60`}
            onClick={() => setPage(index)}> 
            {index} 
        </div>
    )
}