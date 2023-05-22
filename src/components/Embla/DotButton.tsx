import classNames from 'classnames'

type Props = {
  selected: boolean
  onClick: () => void
}
const DotButton = ({ selected, onClick }: Props) => {
  return (
    <div
      className={classNames({
        'h-2 w-2 rounded-full transition-all duration-300 bg-indigo-400 cursor-pointer':
          true,
        // tune down the opacity if slide is not selected
        'opacity-50': !selected,
      })}
      onClick={onClick}
    />
  )
}
export default DotButton
