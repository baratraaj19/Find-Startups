import { auth } from "@/auth"
import { client } from "@/sanity/lib/client"

export async function DELETE(
  req: Request,
  { params }: { params: { id: string } }
) {
  const session = await auth()

  if (!session) {
    return new Response(JSON.stringify({ message: "Unauthorized" }), {
      status: 401,
      headers: { "Content-Type": "application/json" },
    })
  }

  try {
    const startup = await client.getDocument(params.id)

    if (!startup) {
      return new Response(JSON.stringify({ message: "Startup not found" }), {
        status: 404,
        headers: { "Content-Type": "application/json" },
      })
    }

    if (startup.author._ref !== session.user.id) {
      return new Response(JSON.stringify({ message: "Forbidden" }), {
        status: 403,
        headers: { "Content-Type": "application/json" },
      })
    }

    await client.delete(params.id)

    return new Response(
      JSON.stringify({ message: "Startup deleted successfully" }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    )
  } catch (error) {
    console.error(error)
    return new Response(JSON.stringify({ message: "Internal Server Error" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    })
  }
}
