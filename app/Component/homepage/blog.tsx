import React from 'react'
import BlogCard from './blogCard'

function BlogSection() {
    const blog = [
        {
            id:1,
            image:"/images/blog1.svg",
            title:`Loudest à la Madison #1 (L'integral)`,
            description:`We focus on ergonomics and meeting you where you work. It's only a keystroke away.`,
            date:"22 April 2021",comment:10
        },
        {
            id:2,
            image:"/images/blog2.svg",
            title:`Loudest à la Madison #1 (L'integral)`,
            description:`We focus on ergonomics and meeting you where you work. It's only a keystroke away.`,
            date:"22 April 2021",comment:10
        },
        {
            id:3,
            image:"/images/blog3.svg",
            title:`Loudest à la Madison #1 (L'integral)`,
            description:`We focus on ergonomics and meeting you where you work. It's only a keystroke away.`,
            date:"22 April 2021",comment:10
        },
    ]
  return (
    <div className='mx-auto w-full py-9'>
        <div className='flex flex-col  items-center justify-center'>
        <div className='mb-8 flex flex-col space-y-4 w-full text-center max-w-[463px]'>
            <p>Practice Advice</p>
            <h1 className='font-bold text-Text2 text-3xl'>Featured Posts</h1>
            <p>Problems trying to resolve the conflict between 
            the two major realms of Classical physics: Newtonian mechanics </p>
        </div>
         <div className="grid grid-cols md:grid-cols-3 gap-3">
      {blog.map((blog,index)=>(
        <BlogCard key={index} {...blog}/>
      ))}
    </div>
    </div>
    </div>
  )
}

export default BlogSection