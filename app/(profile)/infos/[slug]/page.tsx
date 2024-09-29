import { requests } from '@/utils/employRequests'
import { redirect } from 'next/navigation'
import React from 'react'

function page({ params }: { params: { slug: string } }) {

  const slug = params.slug
  const category = requests.find(request => request.href == slug)
  
  if (!category) redirect("/")
  return (
    <div>
      {
        category?.title
      }
    </div>
  )
}

export default page