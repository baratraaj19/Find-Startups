import { redirect } from "next/navigation"
import { auth } from "@/auth"
import { client } from "@/sanity/lib/client"
import { STARTUP_BY_ID_QUERY } from "@/sanity/lib/queries"
import { Startup } from "@/sanity/types"
import StartupForm from "@/components/StartupForm"

const EditPage = async ({ params }: { params: { id: string } }) => {
  const session = await auth()
  const startup: Startup = await client.fetch(STARTUP_BY_ID_QUERY, {
    id: params.id,
  })

  if (session?.user?.id !== startup.author._id) {
    redirect("/")
  }

  return <StartupForm startup={startup} />
}

export default EditPage
