import { Button } from '@/components/ui/button'
import React from 'react'

function ContactCard({icon}:{icon:any}) {
  return (
    <div className='h-[403px] flex flex-col p-6 space-y-3 justify-center items-center '>
        <h1 className='text-Button text-[60px]'>{icon}</h1>
        <p className='font-semibold text-sm'>georgia.young@example.com</p>
        <p className='font-semibold text-sm'>georgia.young@ple.com</p>
        <p className='font-semibold text-md'>Get Support</p>
        <Button variant={"outline"} className='rounded-full border-Button py-5 text-Button '>Submit Request</Button>
    </div>
  )
}

export default ContactCard