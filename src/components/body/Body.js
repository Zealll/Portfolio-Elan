import React from 'react'
import sun from '../../resources/sun.png'
import topLeft from '../../resources/top-left.png'
import topRight from '../../resources/top-right.png'
import bottomLeft from '../../resources/bottom-left.png'
import bottomRight from '../../resources/bottom-right.png'
import downArrow from '../../resources/down-arrow.png'


const Body = () => {

    return (
        <div className='body-container'>
            <div className='discovery'>
                <img src={sun} alt='sun' className='sun' />
                <a href=''>
                    <div className='sun-contents'>
                        <div className='top-square'>
                            <img src={topLeft} alt='top-left-corner' className='top-left-img smaller' />
                            <img src={topRight} alt='top-right-corner' className='top-right-img smaller' />
                        </div>
                        <div className='mid-square'>
                            <p>Discover my Projects</p>
                            <p className='together'>Discover my Projects</p>
                            <p className='together'>Discover my Projects</p>
                            <p className='together'>Discover my Projects</p>
                        </div>
                        <div className='bottom-square'>
                            <img src={bottomLeft} alt='bottom-left-corner' className='bottom-left-img  smaller' />
                            <div className='arrows'>
                                <img src={downArrow} alt='downward arrows' className='arrow'/>
                                <img src={downArrow} alt='downward arrows' className='arrow'/>
                                <img src={downArrow} alt='downward arrows' className='arrow'/>
                            </div>
                            <img src={bottomRight} alt='bottom-right-corner' className='bottom-right-img smaller' />
                        </div>
                    </div>
                </a>
            </div>

            
        </div>
    )
}


export default Body