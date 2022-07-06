import {FC} from 'react'
import cs from './Loading.module.css'

const Loading:FC = () => {
  return (
    <svg width='100%' height='100%' className={cs.LoadingScreen}>
        <circle 
            className={cs.LoadingCircle}
            cx='50vw'
            cy='50vh'
            r='100px'
        ></circle>
    </svg>
  )
}

export default Loading