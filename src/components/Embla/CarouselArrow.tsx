import classnames from 'classnames'
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi'

type Props = {
  enabled: boolean
  direction: 'left' | 'right'
  onClick(): void
}

const CarouselArrow = ({ enabled, direction, onClick }: Props) => {
  const Icon = direction === 'left' ? FiChevronLeft : FiChevronRight

  return (
    <button
      className={classnames(
        'absolute inset-y-0 items-center justify-center hidden h-full z-[1] p-0 text-lg disabled:opacity-30 hover:bg-ui-900/50 disabled:cursor-default transition-colors bg-transparent border-none cursor-pointer w-[20px] md:flex',
        {
          'left-0': direction === 'left',
          'right-0': direction === 'right',
        }
      )}
      onClick={onClick}
      disabled={!enabled}
    >
      <Icon className="w-full h-full" />
    </button>
  )
}

export default CarouselArrow
