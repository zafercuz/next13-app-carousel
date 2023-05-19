import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className='flex flex-row space-x-4 text-2xl'>
        <Link href="/swiper">Swiper</Link>
        <Link href="/splide">Splide</Link>
        <Link href="/embla">Embla</Link>
      </div>
    </main>
  )
}
