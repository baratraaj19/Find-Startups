import { notFound } from "next/navigation"
import Image from "next/image"
import { client } from "@/sanity/lib/client"
import { AUTHOR_BY_ID_QUERY } from "@/sanity/lib/queries"
import { Author } from "@/sanity/types"
import UserStartups from "@/components/UserStartups"

const UserPage = async ({ params }: { params: { id: string } }) => {
  const author: Author = await client.fetch(AUTHOR_BY_ID_QUERY, {
    id: params.id,
  })

  if (!author) {
    notFound()
  }

  return (
    <section className='px-5'>
      <div className='flex items-center gap-5'>
        <Image
          src={author.image}
          alt={author.name}
          width={100}
          height={100}
          className='rounded-full'
        />
        <div>
          <h1 className='text-3xl font-bold'>{author.name}</h1>
          <p className='text-lg text-gray-500'>@{author.username}</p>
        </div>
      </div>
      <p className='mt-5 text-lg'>{author.bio}</p>
      <hr className='my-5' />
      <h2 className='text-2xl font-bold'>My Startups</h2>
      <ul className='grid grid-cols-1 gap-5 mt-5 sm:grid-cols-2 lg:grid-cols-3'>
        <UserStartups id={author._id} />
      </ul>
    </section>
  )
}

export default UserPage
