
import CollabrativeRoom from '@/components/collabrative-room'
import { getDocument } from '@/lib/actions/room.action';
import { currentUser } from '@clerk/nextjs/server'
import { redirect } from 'next/navigation';
import React from 'react'

const page = async ({ params: { id } }: SearchParamProps) => {

  const clerkUser = await currentUser();
  if(!clerkUser) redirect('/sign-in');

  const room = await getDocument({
    roomId: id,
    userId: clerkUser.emailAddresses[0].emailAddress
  })

  if(!room) redirect('/');

  return (
    <main className='flex w-full flex-col items-center'>
      <CollabrativeRoom roomId={id} roomMetadata={room.metadata} />
    </main>
  )
}

export default page
