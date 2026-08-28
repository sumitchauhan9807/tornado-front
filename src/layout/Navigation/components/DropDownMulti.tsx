import { appendBaseUrl } from "@/src/helpers/common"
import { useState } from "react"
function DropDownMulti({data}) {
  // console.log(data.dropdowns[0].name,"data.dropdowns[0].name")
  const [active,setActive] = useState(data.dropdowns[0].name)
  let navLinks = []
  let gridCol = 1
  const findLinks = data.dropdowns.find(p => p.name == active)
  if(findLinks?.subDropdowns) {
    navLinks = findLinks?.subDropdowns
  }
  if(navLinks.length > 4){
    gridCol = 2
  }
  
  return (
    <div className="group relative">
      <button type="button" className="flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium text-ink-muted transition-colors hover:text-ink-strong">{data.name}<svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-down h-3.5 w-3.5 transition-transform group-hover:rotate-180">
          <path d="m6 9 6 6 6-6" />
        </svg>
      </button>
      <div className="invisible absolute top-full z-50 left-0 pt-2 opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-100" style={{width: '840px', maxWidth: 'calc(-2rem + 100vw)'}}>
        <div className="rounded-2xl border border-border bg-paper p-2.5 shadow-[0_24px_60px_-24px_hsl(var(--ink)/0.35)]">
          <div className="flex gap-2">
            <div className="w-[272px] flex-none border-r border-border pr-2">

              {data.dropdowns.map((item,index)=>{
                return (
                  <button key={index} onMouseEnter={()=>{setActive(item.name)}} className={`flex w-full items-center gap-3 rounded-xl px-2.5 py-2.5 text-left transition-colors ${item.name == active ? "bg-surface-muted" : "hover:bg-surface-muted/60"} `} href="/business-phone-number">
                <span   dangerouslySetInnerHTML={{ __html: item.svg }} className={`inline-flex h-8 w-8 flex-none items-center justify-center rounded-lg transition-colors ${item.name == active ? "bg-accent-soft text-accent" : "bg-surface-muted text-ink-strong"} `}>
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block text-sm font-semibold leading-tight text-ink-strong">{item.name}</span>
                </span>
                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-right h-4 w-4 flex-none transition-colors text-accent">
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </button>
                )
              })}
            </div>
            <div className="min-w-0 flex-1">
              <div className={`grid gap-0.5 grid-cols-${gridCol}`}>
                {navLinks.map((link,index)=>{
                  return (
                    <a key={index} className="group/item flex items-start gap-3 rounded-xl px-3 py-2.5 transition-colors hover:bg-surface-muted" href="/toll-free-numbers">
                      <span dangerouslySetInnerHTML={{ __html: link.svg }} className="mt-0.5 inline-flex h-9 w-9 flex-none items-center justify-center rounded-lg bg-surface-muted text-ink-strong transition-colors group-hover/item:bg-accent-soft group-hover/item:text-accent">
                        {/* {link.icon} */}
                        {/* <img src={appendBaseUrl(link?.icon?.url)}/> */}
                      </span>
                      <span className="min-w-0">
                        <span className="block text-sm font-semibold text-ink-strong">{link.name}</span>
                        <span className="mt-0.5 block line-clamp-2 text-[12px] leading-snug text-ink-muted">{link.desc}</span>
                      </span>
                    </a>
                  )
                })}
              </div>
            </div>
          </div>
          <a className="mt-2 flex items-center justify-between rounded-xl bg-surface-muted px-4 py-3 text-sm font-semibold text-ink-strong transition-colors hover:bg-accent-soft hover:text-accent" href="/products">View all {data.name} <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-up-right h-4 w-4">
              <path d="M7 7h10v10" />
              <path d="M7 17 17 7" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  )
}

export default DropDownMulti