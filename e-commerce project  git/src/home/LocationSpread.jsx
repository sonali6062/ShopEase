
import { Link } from 'react-router-dom';

const title = 'More than 50 Customers';

const desc = "Buy products on your any device with our app & enjoy your time what you want. Just download & install & start to shopping";

const clientsList = [
    
]
function LocationSpread() {
    return (
        <>
            <div className='clients-section style-2 padding-tb'>
                <div className='container'>
                    <div className='section-header text-center'>
                        <h2>{title}</h2>
                        <p>{desc}</p>
                    </div>
                    {/* main content */}

                    <div className='section-wrapper'>
                        <div className='clients'>
                            {
                                clientsList.map((val, i) => (
                                    <div key={i} className='client-list'>

                                        <Link to='/sign-up' className='client-content'>
                                            <span>{val.text}</span>
                                        </Link>
                                        <div className='client-thumb'>
                                            <img src={val.imgUrl} />
                                        </div>

                                        {/* <div className='client-thumb'>
                                            <img src='{val.imgUrl}' />

                                        </div> */}
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}

export default LocationSpread


// clientsList.map((val,i)=>{
//     <div key={i} className='cout-item'>
//         <div className='count-inner'>
//             <div className='count-icon'>
//             <i className='{}'></i>

//             </div>
//         </div>
//     </div>