import React from 'react';
import { CodeBracketIcon, EyeIcon, DocumentIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import Image from 'next/image';

const ProjectCard = ({ imgUrl, title, description, paperUrl, codeUrl, previewUrl }) => {
  return (
    <div>
        <div
            className='h-52 md:h-72 relative group' 
        >
            <div className='h-full w-full relative'>
                <Image
                    alt='project image'
                    src={imgUrl}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className='rounded-t-xl'
                />
            </div>
            
            <div className='overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex bg-opacity-80 transition-all duration-500'>
                {paperUrl && 
                <Link 
                    href={paperUrl} 
                    target='_blank'
                    className='h-14 w-14 mr-2 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link'
                >
                    <DocumentIcon className='h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-white' />
                </Link>}

                {previewUrl &&
                <Link 
                    href={previewUrl}
                    target='_blank'
                    className='h-14 w-14 mr-2 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link'
                >
                    <EyeIcon className='h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-white' />
                </Link>}

                {codeUrl && 
                <Link 
                    href={codeUrl} 
                    target='_blank'
                    className='h-14 w-14 mr-2 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link'
                >
                    <CodeBracketIcon className='h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-white' />
                </Link>}
            </div>
        </div>

        <div className='text-white rounded-b-xl mt-3 bg-[#111f28] py-6 px-4 hover:text-primary'>
            <h5 className='text-xl font-semibold mb-2'>{title}</h5>
            <p className='text-[#ADB7BE]'>{description}</p>
        </div>
    </div>
  )
}

export default ProjectCard