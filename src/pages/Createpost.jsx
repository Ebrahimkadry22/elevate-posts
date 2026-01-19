import Container from '@/components/common/Container'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { postSchema } from '@/schemas/postSchema'
import { creatPost } from '@/services/api'
import { zodResolver } from "@hookform/resolvers/zod";
import {  NotebookPen } from 'lucide-react'

import React from 'react'
import { Controller, useForm } from 'react-hook-form'
import { NavLink } from 'react-router-dom'
import { toast } from 'sonner'


const Createpost = () => {

  const {register , handleSubmit , formState:{errors} , control , reset} =useForm(
    {
      resolver:zodResolver(postSchema),
      defaultValues: {
    title: "",
    body: "",
    author: "1", 
  },
    }
  )

  const onSubmit = async(data) => {
    try {
      const newPost = {
        title:data.title,
        body:data.body,
        userId:Number(data.author)
      }
      const res = await creatPost(newPost);
      toast.success('Post created successfully')
      reset({
        title:"",
        body:"",
        author:"1"
      })
      
    }catch(error) {
      toast.error('Failed to create post')
    }
    
  }
  return (
    <div className='mt-4'>
      <Container>
        <Card className='overflow-hidden h-[calc(100vh-120px)] bg-white/70 backdrop-blur-md flex  flex-col'>

          <CardHeader className='bg-white '>
            <CardTitle className='flex items-center gap-2 text-lg'>
              <NotebookPen size={16} />
              Create a new Post 
            </CardTitle>
          </CardHeader>
          
          <CardContent className='flex-1'>
            <Card className='w-10/12 h-full mt-4 space-y-4 py-04'>
              <CardContent  >
                <form onSubmit={handleSubmit(onSubmit)}>
                  
                {/* title */}
            <div className='mb-2 space-y-1'>
              <label className='text-sm font-semibold'>Title</label>
              <Input placeholder='Enter post title' className='bg-gray-200 rounded-md outline-none '
              {...register("title")}
              />
              {
                errors.title && (
                  <p className='text-sm text-red-500'>{errors.title.message}</p>
                )
              }
            </div>
                {/* body */}
            <div className='mb-2 space-y-1'>
              <label className='text-sm font-semibold'>Body</label>
              <textarea 
              {...register("body")}
              placeholder='Enter post body' className=' p-2 bg-gray-200 rounded-md outline-none min-h-[120px] w-full resize-none'/>
              {
                errors.body && (
                  <p className='text-sm text-red-500'>{errors.body.message}</p>
                  
                )
              }
            </div>
            {/* author */}
            <div className='space-y-1 '>
              <label className='text-sm font-semibold'>Author</label>
              <Controller
              control={control}
              name='author'
              render={({field})=> (
                
              <Select 
              
              value={field.value}
              onValueChange={field.onChange}
              >
                <SelectTrigger >
                  <SelectValue placeholder='Select author' />
                </SelectTrigger>
                
                <SelectContent>
                  <SelectItem value='1'>Author 1</SelectItem>
                  <SelectItem value='2'>Author 2</SelectItem>
                  <SelectItem value='3'>Author 3</SelectItem>
                </SelectContent>
                
              </Select>
  )}
              >
                
              {
                errors.author && 
                (    <p className='text-sm text-red-500'>{errors.author.message}</p>)
                
              }
              </Controller>
            </div>
            <div className='flex justify-between pt-4'>
              <NavLink to={'/'}>
              <Button className='px-10'>
                Back to Posts
              </Button>

              </NavLink>
              <Button className='px-10' type='submit'>
                Create Button
              </Button>
              
            </div>
                </form>
              </CardContent>
            </Card>
          </CardContent>

          
        </Card>
      </Container>
    </div>
  )
}

export default Createpost