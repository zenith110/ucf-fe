import style from '../styles/nav.module.scss'

export default function Nav() {
  const play = (
    <svg id={style.play} xmlns='http://www.w3.org/2000/svg' fill='currentColor' viewBox='0 0 16 16'>
      <path d='m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z'/>
    </svg>
  )
  const stop = (
    <svg id={style.stop} xmlns='http://www.w3.org/2000/svg' fill='currentColor' viewBox='0 0 16 16'>
      <path d='M5 3.5h6A1.5 1.5 0 0 1 12.5 5v6a1.5 1.5 0 0 1-1.5 1.5H5A1.5 1.5 0 0 1 3.5 11V5A1.5 1.5 0 0 1 5 3.5z'/>
    </svg>
  )
  const theme = (
    <svg id={style.theme}  xmlns='http://www.w3.org/2000/svg' fill='currentColor' viewBox='0 0 16 16'>
      <path d='M8 15A7 7 0 1 0 8 1v14zm0 1A8 8 0 1 1 8 0a8 8 0 0 1 0 16z'/>
    </svg>
  )

  return (
    <nav className={style.nav}>
      <h1 className={style.title}>UCF FE Practice</h1>
      <div className={style.controls}>
        {play}
        {/* {stop}
        {theme} */}
        <p>00:00</p>
      </div>
    </nav>
  )
}
