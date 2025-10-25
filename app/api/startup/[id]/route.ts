import { auth } from "@/auth"
import { writeClient } from "@/sanity/lib/write-client"

export async function DELETE(
  req: Request,
  { params }: { params: { id: string } }
) {
  const session = await auth()

  if (!process.env.SANITY_WRITE_TOKEN) {
    return new Response(
      JSON.stringify({ message: "Missing SANITY_WRITE_TOKEN" }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    )
  }

  if (!session) {
    return new Response(JSON.stringify({ message: "Unauthorized" }), {
      status: 401,
      headers: { "Content-Type": "application/json" },
    })
  }

  try {
    const startup = await writeClient.getDocument(params.id)

    if (!startup) {
      return new Response(JSON.stringify({ message: "Startup not found" }), {
        status: 404,
        headers: { "Content-Type": "application/json" },
      })
    }

    if (startup.author._ref !== session.id) {
      return new Response(JSON.stringify({ message: "Forbidden" }), {
        status: 403,
        headers: { "Content-Type": "application/json" },
      })
    }

    await writeClient.delete(params.id)

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
