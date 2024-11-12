import SearchForm from "@/components/SearchForm"
import StartupCard from "@/components/StartupCard"

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>
}) {
  const query = (await searchParams).query

  const posts = [
    {
      _createdAt: new Date(),
      Views: 55,
      author: { _id: 1, name: "John Doe" },
      _id: 1,
      description: "This is a descriptions",
      image:
        "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      category: "Robots",
      title: "This is a title",
    },
  ]

  return (
    <div>
      <section className='pink_container'>
        <h1 className='heading'>Pitch Your Startup Idea, Vote on Pitch</h1>
        <p className='sub-heading !max-w-3xl'>
          Submit Ideas, Vote on Pitchs, and Get Noticed in Virtual Competitions.
        </p>
        <SearchForm query={query} />
      </section>

      <section className='section_container'>
        <p className='text-30-semibold'>
          {query ? `search results for ${query}` : "All Startups"}
        </p>
        <ul className='mt-7 card_grid'>
          {posts?.length > 0 ? (
            posts.map((post: StartupCardType) => (
              <StartupCard key={post?._id} post={post} />
            ))
          ) : (
            <p className='no-results'>No results found"</p>
          )}
        </ul>
      </section>
    </div>
  )
}
