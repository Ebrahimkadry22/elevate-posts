import Container from '@/components/common/Container'
import Loading from '@/components/common/Loading'
import { Button } from '@/components/ui/button'
import { PostsContext } from '@/context/PostsContext'
import { Calendar, User } from 'lucide-react'
import React, { useContext } from 'react'
import { NavLink, useParams } from 'react-router-dom'

const Postdetails = () => {
  const {id} = useParams()
  const {posts , loading} = useContext(PostsContext)

  const post = posts.find(
    (p)=> p.id === Number(id)
  );

console.log(post);

  
  
  
  
  
  return (
    <div className='mt-4'>
      {
        post ?
      <Container>
        
      {/* Top post details */}
<div className='overflow-hidden rounded-md '>
      <div className='h-[320px] relative p-2 '>
        <div className='absolute inset-0 bg-blue-900/70'>
        <div className='relative z-10 flex flex-col justify-end h-full p-6 text-white'> 
          <NavLink to={'/'}>
          <Button variant='secondary' className='m-4 rounded-full w-fit'>
            Back to Posts
          </Button>
          </NavLink>
          <h1>
            {post.title}
          </h1>
          
          <div className='flex items-center gap-4 mt-4'>
            
          <div >
            <span className='flex items-center gap-2'>
              <User size={16} />
              {post.userId ?? 'ibrahim kadry'}
            </span>
            </div> 

            <div className=''>
              <span className='flex items-center gap-2'>
                <Calendar size={16} />
                20th Aug, 2023
              </span>
            </div>
             
          </div>
          
        </div>
        </div>
      </div>
      <div className='bg-white/70 backdrop-blur-md h-[320px] p-4 '>
      <p className='text-sm leading-relaxed'>
        {post.body}
        </p>        
      </div>
  
</div>




      </Container>
        :
        <Loading />
      }
    </div>
  )
}

export default Postdetails