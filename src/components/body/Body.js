import React from 'react'
import sun from '../../resources/sun.png'
import topLeft from '../../resources/top-left.png'
import topRight from '../../resources/top-right.png'
import bottomLeft from '../../resources/bottom-left.png'
import bottomRight from '../../resources/bottom-right.png'
import downArrow from '../../resources/down-arrow.png'
import revitalize from '../../resources/rev.png'
import maze from '../../resources/game.PNG'
import revLogo from '../../resources/Favicon.png'
import mazeLogo from '../../resources/maze-logo.ico'


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

            <div className='projects'>
                <div className='revitalize project'>
                    <div className='header-div'>
                        <img src={revLogo} alt='revitalize logo' className='logo' />
                        <p>Revitalize</p>
                    </div>
                    
                    <img src={revitalize} alt='revitalize' />
                    <div>
                        <p>Crowdfunding platform that creates apprenticeship opportunities. 3 month intense multilateral team project using agile development methodologies. Build with CRA, graphQL/prisma/apollo, mapbox, stripe, passport.js and much more. The team leveraged my experience in building projects at scale to deliver an incredible amount of features in the time scoped for the project. </p>
                    </div>
                    
                </div>

                <div className='maze project'>
                    <div className='header-div'>
                        <img src={mazeLogo} alt='maze logo' className='logo' />
                        <p>Maze</p>
                    </div>
                    
                    <img src={maze} alt='maze' />
                    <div>
                        <p>Automatically generated maze game, with over 500 rooms including random exits, and dead ends. The maze has an exit, but the player must find it by traversing through the whole map. The project consisted of 3 team members working together for a one week period of time. The stack includes Python, JavaScript, React, Django.</p>
                        <p>My role heavily revolved around Back End. Using Python/Django, my role was to implement user authentication/authorization, as well as write an algorithm to generate 512 rooms for a maze, which had dead ends, and an exit. Django was a framework I have not worked with prior. Part of the chellenge was to learn Django within a day, so that the team could proceed with the project.</p>
                    </div>
                    
                </div>

            </div>
        </div>
    )
}


export default Body