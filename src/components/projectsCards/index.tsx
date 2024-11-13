import { Link } from 'react-router-dom'


interface CardsProps{
    id:number;
    title:string
    cover:string;
    description:string;
    tools:string;
    urlDeploy:string;
    urlCode:string;
}

export function ProjectCard(project:CardsProps){
    return(
        <div className="flex flex-col border-2 gap-6 bg-slate-900 hover:bg-slate-700 duration-500 border-slate-200 drop-shadow p-6 mt-12">
            <h2 className="w-60 text-md md:text-2xl bg-gradient-to-r from-slate-100 to-slate-800 bg-clip-text text-transparent italic  font-extrabold mb-3">{project.title}</h2>
            <div  className=' flex items-center justify-center mx-auto'>
                <div className='w-full h-full object-cover flex items-center justify-center'>
                    <img src={project.cover} alt={project.title} />
                </div>
            </div>
            <p className='text-slate-100 font-medium'>{project.description}</p>
            <span className='text-slate-100 font-medium'>Tools: {project.tools}</span>


            <div className='w-full flex items-center justify-between gap-3'>
                <Link
                className='w-full flex items-center justify-center border-2 p-2 text-slate-100 cursor-pointer'
                to={project.urlDeploy} target='_blank'>Check it out</Link>
                <Link 
                 className='w-full flex items-center justify-center border-2 p-2 text-slate-100 cursor-pointer'
                to={project.urlCode} target='_blank'>Code</Link>
            </div>
        </div>
    )
}