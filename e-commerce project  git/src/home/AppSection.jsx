import { Link } from 'react-router-dom';
const btnText = "sign up for Free";
const title = 'shop anytime ,anywhere';
const desc = ' ';
function AppSection() {
    return (
        <>
            <div className='app-section padding-tb'>
                <div className='container'>
                    <div className='section-header text-center'>
                        <Link to='/sign-up' className='lab-btn mb-4'>{btnText}</Link>
                        <h2 className='title'>{title}</h2>
                        <p>{desc}</p>
                    </div>
                    <div className='section-wrapper'>
                        <ul className='lab-ul'>
                            <li><a href='a'><img src='/src/assets/images/app/01.jpg'></img></a></li>
                            <li><a href='a'><img src='/src/assets/images/app/02.jpg'></img></a></li>
                            {/* <li><a href='a'><img src='/src/assets/images/app/03.jpg'></img></a></li> */}

                        </ul>

                    </div>

                </div>

            </div>
        </>

    )
}

export default AppSection