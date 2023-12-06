import './hoome.css'
import Homedata from './Homedata/homedata'
import mainimg from './images/main-img.png'
import line from './images/Line 15line.png'
import handloomes from './images/handlooomes.png'
import two from './images/Frame 28.png'
import three from './images/Frame 30.png'
import four from './images/Frame 29.png'

const Home = (()=>{
    return(
        <>
            <div className="home-con">
                    <div className='main-img'>
                        <img src={mainimg} alt='mainimg'/>
                    </div>
                    <div className='new-arrivals'>
                         <div className='headding'>
                              <h1>New Arrivals</h1>
                              <img src={line}/>
                         </div>
                         <div className='newarrivals-main-section'>
                               <div className='handloomes-section'>
                                   <img src={handloomes} alt='handloomes'/>
                               </div>
                               <div className='newarrivals-main-con'>
                                  
                                        {Homedata.map((item, index) => (
                                            <div key={index}>
                                            <div className='newarrival-box'>
                                                <img src={item.img} alt={item.name} className='newarrivals-image' />
                                                <p className='newarrivalname'>{item.name}</p>
                                                <p>{item.price}</p>
                                            </div>
                                            </div>
                                        ))}
                                
                                </div>
                         </div> 
                    </div>
            </div>
        </>
    )
})
export default Home