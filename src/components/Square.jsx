export default function Square({ value, onSquareClick }) {
  return (
    <button
      style={{ width: '30%', minHeight: '3em' }}
      className='square'
      onClick={onSquareClick}
    >
      {value}
    </button>
  )
}
