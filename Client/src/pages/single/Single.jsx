import Sidebar from '../../components/sidebar/sidebar'
import Singlepost from '../../components/singlepost/singlepost'
import  './single.css'

export default function Single() {
  return (
    <div className='single'>
        <Singlepost/>
        <Sidebar/>
    </div>
    
  )
}
