'use client'

// import the hook and options type
import useEmblaCarousel, { EmblaOptionsType } from 'embla-carousel-react'
import React, { useCallback } from 'react'
import { PropsWithChildren, useEffect, useState } from 'react'
import DotButton from './DotButton'
import CarouselArrow from './CarouselArrow'

// Define the props
type Props = PropsWithChildren & EmblaOptionsType

const Carousel = ({ children, ...options }: Props) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(options)

  // need to selectedIndex to allow this component to re-render in react.
  // Since emblaRef is a ref, it won't re-render even if there are internal changes to its state.
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false)
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false)
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([])

  useEffect(() => {
    function selectHandler() {
      const index = emblaApi?.selectedScrollSnap()
      setSelectedIndex(index || 0)
    }

    emblaApi?.on('select', selectHandler)
    // cleanup
    return () => {
      emblaApi?.off('select', selectHandler)
    }
  }, [emblaApi])

  const scrollPrev = useCallback(
    () => emblaApi && emblaApi.scrollPrev(),
    [emblaApi]
  )
  const scrollNext = useCallback(
    () => emblaApi && emblaApi.scrollNext(),
    [emblaApi]
  )
  const scrollTo = useCallback(
    (index: number) => emblaApi && emblaApi.scrollTo(index),
    [emblaApi]
  )

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setSelectedIndex(emblaApi.selectedScrollSnap())
    setPrevBtnEnabled(emblaApi.canScrollPrev())
    setNextBtnEnabled(emblaApi.canScrollNext())
  }, [emblaApi, setSelectedIndex])

  useEffect(() => {
    if (!emblaApi) return
    onSelect()
    setScrollSnaps(emblaApi.scrollSnapList())
    emblaApi.on('select', onSelect)
    emblaApi.on('reInit', onSelect)
    console.log(emblaApi.scrollSnapList())
  }, [emblaApi, setScrollSnaps, onSelect])

  return (
    <>
      <div className="overflow-hidden relative" ref={emblaRef}>
        <div className="flex">{children}</div>
        {/* Arrow Icons */}
        <CarouselArrow
          onClick={scrollPrev}
          direction="left"
          enabled={prevBtnEnabled}
        />
        <CarouselArrow
          onClick={scrollNext}
          direction="right"
          enabled={nextBtnEnabled}
        />
      </div>

      {/* Dot Icons */}
      <div className="flex gap-1 my-2 justify-center -translate-y-5">
        {scrollSnaps.map((_, index) => (
          <DotButton
            key={index}
            selected={index === selectedIndex}
            onClick={() => scrollTo(index)}
          />
        ))}
      </div>
    </>
  )
}
export default Carousel
