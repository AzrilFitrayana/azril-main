import React from 'react'

const ProjectsFilter = () => {
    return (
        <>
            <div className="w-full py-4 px-4 bg-blue-100 my-4"></div>
            <div className="w-full flex flex-col gap-2 py-4 pr-4 uppercase tracking-wide text-[13px] font-bold text-slate-400">
                <div className="w-full flex items-center gap-4 py-2">
                    <h2>Status</h2>
                    <button className='py-1 px-4 shadow-sm rounded-sm border-2 border-black bg-[#AD2C00] text-white hover:-translate-y-0.5 transition-all ease-in-out'>All</button>
                    <button className='py-1 px-4 shadow-sm rounded-sm border border-[#ECE4D5] hover:-translate-y-0.5 transition-all ease-in-out'>Active</button>
                    <button className='py-1 px-4 shadow-sm rounded-sm border border-[#ECE4D5] hover:-translate-y-0.5 transition-all ease-in-out'>Stable</button>
                    <button className='py-1 px-4 shadow-sm rounded-sm border border-[#ECE4D5] hover:-translate-y-0.5 transition-all ease-in-out'>Archive</button>
                </div>
                <div className="w-full py-2 bg-orange-100">
                    <h2>Filter</h2>
                </div>
            </div>
        </>
    )
}

export default ProjectsFilter
