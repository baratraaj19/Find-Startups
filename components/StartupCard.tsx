import { formateDate } from "@/lib/utils"
import { EyeIcon } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "./ui/button"

const StartupCard = ({ post }: { post: StartupCardType }) => {
  const {
    _createdAt,
    views,
    author: { _id: authorId, name },
    description,
    image,
    _id,
    category,
    title,
  } = post

  // console.log(views)
  return (
    <div>
      <li className='startup-card group'>
        <div className='flex-between'>
          <p className='startup_card_date'>{formateDate(_createdAt)}</p>
          <div className='flex gap-1.5'>
            <EyeIcon className='size-5 text-primary' />
            <span className='text-16-medium'>{views}</span>
          </div>
        </div>
        <div className='flex-between mt-5 gap-5'>
          <div className='flex-1'>
            <Link href={`/user/${authorId}`}>
              <p className='text-16-medium line-clamp-1 hover:underline'>
                {name}
              </p>
            </Link>
            <Link href={`/startup/${_id}`}>
              <h3 className='text-26-semibold line-clamp-1 hover:underline'>
                {title}
              </h3>
            </Link>
          </div>
          <Link href={`/startup/${authorId}`}>
            <Image
              src='https://placehold.co/52x52'
              alt='profile image'
              width={52}
              height={52}
              className='rounded-full'
            />
          </Link>
        </div>
        <Link href={`/startup/${_id}`}>
          <p className='startup-card-desc '>{description}</p>
          <img
            src={image}
            alt={title}
            className='startup-card-img rounded-2xl mt-3 h-44 w-full object-cover'
          />
        </Link>
        <div className='flex-between gap-3 mt-5'>
          <Link href={`/?query=${category.toLowerCase()}`}>
            <p className='text-16-medium'>{category}</p>
          </Link>
          <Button className='startup-card_btn' asChild>
            <Link href={`/startup/${_id}`}>Details</Link>
          </Button>
        </div>
      </li>
    </div>
  )
}

export default StartupCard
