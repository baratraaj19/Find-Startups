import { notFound } from "next/navigation"
import { client } from "@/sanity/lib/client"
import { STARTUP_BY_ID_QUERY } from "@/sanity/lib/queries"
import { Startup } from "@/sanity/types"
import View from "@/components/View"
import Image from "next/image"
import Link from "next/link"
import Markdown from "markdown-it"

const md = new Markdown()

const StartupPage = async ({ params }: { params: { id: string } }) => {
  const startup: Startup = await client.fetch(STARTUP_BY_ID_QUERY, {
    id: params.id,
  })

  if (!startup) {
    notFound()
  }

  return (
    <section className='px-5'>
      <View id={startup._id} />
      <div className='flex items-center gap-5'>
        <Image
          src={startup.author.image}
          alt={startup.author.name}
          width={100}
          height={100}
          className='rounded-full'
        />
        <div>
          <h1 className='text-3xl font-bold'>{startup.title}</h1>
          <Link href={`/user/${startup.author._id}`}>
            <p className='text-lg text-gray-500'>@{startup.author.username}</p>
          </Link>
        </div>
      </div>
      <img
        src={startup.image}
        alt={startup.title}
        className='w-full h-96 object-cover mt-5 rounded-lg'
      />
      <div
        className='mt-5 prose'
        dangerouslySetInnerHTML={{ __html: md.render(startup.pitch) }}
      />
    </section>
  )
}

export default StartupPage
