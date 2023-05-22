'use client'

import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide'
import { AiFillCaretRight } from 'react-icons/ai'
import '@splidejs/react-splide/css'
import StarIcon from './StarIcon'

const SplideCarousel = () => {
  return (
    <>
      <Splide
        aria-label="My Favorite Images"
        hasTrack={false}
        options={{
          classes: {
            is_active: '!bg-orange-500',
          },
        }}
      >
        <div className="py-16 max-w-[940px] mx-auto flex flex-col justify-center">
          <div className="custom-wrapper">
            <SplideTrack>
              {[...Array(5)].map((image, index) => (
                <SplideSlide key={index}>
                  <div className="text-2xl leading-[28.8px] mb-8 text-center">
                    <p className="font-semibold">
                      Love the simplicity of the service and the prompt customer
                      support. We can’t imagine working without it.
                    </p>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="w-16 h-16 rounded-full bg-slate-600 mb-4"></div>
                    <div className="flex flex-col space-y-1 items-center">
                      <h5 className="font-semibold text-xl">Kelly Williams</h5>
                      <p className="text-base text-[#475467]">
                        Head of Design, Layers
                      </p>
                    </div>
                    <div className="flex flex-row gap-x-1 mt-4">
                      <StarIcon />
                      <StarIcon />
                      <StarIcon />
                      <StarIcon />
                      <StarIcon />
                    </div>
                  </div>
                </SplideSlide>
              ))}
            </SplideTrack>

            <div className="splide__arrows">
              <button className="splide__arrow splide__arrow--prev !bg-transparent">
                <AiFillCaretRight />
              </button>
              <button className="splide__arrow splide__arrow--next !bg-transparent">
                <AiFillCaretRight />
              </button>
            </div>

            <ul
              className="splide__pagination splide__pagination--ltr"
              role="tablist"
              aria-label="Select a slide to show"
            >
              <li role="presentation">
                <button
                  className="splide__pagination__page"
                  type="button"
                  role="tab"
                  aria-controls="splide01-slide01"
                  aria-label="Go to slide 1"
                  aria-selected="true"
                />
              </li>
              <li role="presentation">
                <button
                  className="splide__pagination__page !bg-green-500"
                  type="button"
                  role="tab"
                  aria-controls="splide01-slide02"
                  aria-label="Go to slide 2"
                  tabIndex={-1}
                />
              </li>
            </ul>
          </div>
        </div>
      </Splide>
    </>
  )
}

export default SplideCarousel
