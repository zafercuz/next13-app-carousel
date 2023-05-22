import Link from 'next/link'

export default function Home() {
  return (
      <div className='flex flex-row space-x-4 text-2xl underline'>
        <Link href="/swiper">Swiper</Link>
        <Link href="/splide">Splide</Link>
        <Link href="/embla">Embla</Link>
        <Link href="/react-slick">React Slick</Link>
      </div>
  )
}
