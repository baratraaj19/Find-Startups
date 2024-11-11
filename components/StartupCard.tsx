import { formateDate } from "@/lib/utils"
import { EyeIcon } from "lucide-react"
import Link from "next/link"

const StartupCard = ({ post }: { post: StartupCardType }) => {
  return (
    <div>
      <li className='startup-card group'>
        <div className='flex-between'>
          <p className='startup_card_date'>{formateDate(post._createdAt)}</p>
          <div className='flex gap-1.5'>
            <EyeIcon className='size-5 text-primary' />
            <span className='text-16-medium'>{post.Views}</span>
          </div>
        </div>
        <div className='flex-between mt-5 gap-5'>
          <div className='flex-1'>
            <Link href={`/user/${post}`} />

            {/* from here  */}
          </div>
        </div>
      </li>
    </div>
  )
}

export default StartupCard
