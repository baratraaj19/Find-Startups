import { auth } from "@/auth"
import StartupForm from "@/components/StartupForm"
import { redirect } from "next/navigation"

const page = async () => {
  const session = await auth()

  if (!session || !session?.user) redirect("/")

  return (
    <>
      <section className='pink_container !min-h-[230px]'>
        <h1 className='heading'>Submit your Startup ideas</h1>
      </section>
      <StartupForm />
    </>
  )
}

export default page
