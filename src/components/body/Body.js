import React, { useState } from 'react'
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
import fullDiscovery from '../../resources/full-dicovery.png'
import skills from '../../resources/skills.png'
import algo from '../../resources/algo-logo.png'
import algoLaptop from '../../resources/algo-laptop.png'


const Body = () => {
    const [clicked, setClicked] = useState(false)

    const copyToClip = () => {
        const tempInput = document.createElement('input')
        tempInput.value = 'eriznis@gmail.com'
        document.body.appendChild(tempInput)
        tempInput.select()
        document.execCommand('copy')
        document.body.removeChild(tempInput)
    }

    const toggleClicked = () => {
        setClicked(true)

        setTimeout(() => {
            setClicked(false)
        }, 5000)
    }

    return (
        <div className='body-container'>
            <div className='discovery'>
                <a href='#projects'>
                    <img src={fullDiscovery} alt='sun' className='sun' />
                </a>
                {/* <a href='#projects'>
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
                </a> */}
            </div>

            <div className='projects' id='projects'>
            <div className='algo project'>
                    <div className='header-div'>
                        <img src={algo} alt='algo logo' className='logo' />
                        <p>Algorithm Visualizer</p>
                    </div>
                    
                    <img src={algoLaptop} alt='Algorithm Visualizer' />
                    <div className='description-container'>
                        <p className='first-p'>Tool for visualizing some of the most common Search Algorithms (Ex: Dijkstra, BFS, DFS, etc.). This tool is implemented in React.js. It's purpose is to help beginner programmers visualize common search algorithms for better and easier understanding.</p>
                        <p>This project is far from finished. Future implementations will involve generations of random mazes using famous maze generating algorithms, as well as, visualization of some of the most common Sorting Algorithms.</p>
                        <a href='https://zealll.github.io/Algo-Visualizer/' target='_blank' rel='noopener noreferrer'><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="1.5em" width="1.5em" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg> Link to deployed site</a>
                        <a href='https://github.com/Zealll/Algo-Visualizer' target='_blank' rel='noopener noreferrer'><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="1.5em" width="1.5em" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path></svg> Link to repository</a>
                    </div>
                    
                </div>
                <div className='revitalize project'>
                    <div className='header-div'>
                        <img src={revLogo} alt='revitalize logo' className='logo' />
                        <p>Revitalize</p>
                    </div>
                    
                    <img src={revitalize} alt='revitalize' />
                    <div className='description-container'>
                        <p className='first-p'>Crowdfunding platform that creates apprenticeship opportunities. 3 month intense multilateral team project using agile development methodologies. Build with CRA, graphQL/prisma/apollo, mapbox, stripe, passport.js and much more. The team leveraged my experience in building projects at scale to deliver an incredible amount of features in the time scoped for the project. </p>
                        <p>As well as a developer with daily Trello cards to complete, I played a key role in high level architecture decisions and planning. My evaluations of potential technologies/frameworks we would adopt were instrumental in keeping the teams momentum and the project on schedule. Developed the dashboard logic, dashboard sub components, conditional rendering logic, implementation settings, view all projects logic and caching strategy, created many reusable styling components, wrote the graphQL query and mutation logic, apollo integration, and styling revisions with UX.</p>
                        <a href='https://revitalize.community/' target='_blank' rel='noopener noreferrer'><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="1.5em" width="1.5em" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg> Link to deployed site</a>
                        <a href='https://github.com/Revitalized-Playground' target='_blank' rel='noopener noreferrer'><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="1.5em" width="1.5em" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path></svg> Link to repository</a>
                    </div>
                    
                </div>

                <div className='maze project'>
                    <div className='header-div'>
                        <img src={mazeLogo} alt='maze logo' className='logo' />
                        <p>Maze</p>
                    </div>
                    
                    <img src={maze} alt='maze' />
                    <div className='description-container'>
                        <p className='first-p'>Automatically generated maze game, with over 500 rooms including random exits, and dead ends. The maze has an exit, but the player must find it by traversing through the whole map. The project consisted of 3 team members working together for a one week period of time. The stack includes Python, JavaScript, React, Django.</p>
                        <p>My role heavily revolved around Back End. Using Python/Django, my role was to implement user authentication/authorization, as well as write an algorithm to generate 512 rooms for a maze, which had dead ends, and an exit. Django was a framework I have not worked with prior. Part of the chellenge was to learn Django within a day, so that the team could proceed with the project.</p>
                        <a href='https://lambda-mud-512.netlify.com/registration' target='_blank' rel='noopener noreferrer'><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="1.5em" width="1.5em" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg> Link to deployed site</a>
                        <a href='https://github.com/Zealll/maze' target='_blank' rel='noopener noreferrer'><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="1.5em" width="1.5em" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path></svg>Link to repository</a>
                    </div>
                </div>
            </div>
            
            <div className='skills' id='skills'>
                <img src={skills} alt='Skill list'/>
            </div>

            <div className='contact' id='contact'>
                <div className='text'>
                    <h4>Want to Find Out More?</h4>
                    <h2>Let’s connect!</h2>
                    <p>Hit me up to hire, collaborate, or talk about code. I’m always willing to</p>
                    <p className='top'>meet new people and network.</p>
                </div>
                <div className='links'>
                    <a href='https://www.linkedin.com/in/elan-riznis/' target='_blank' rel='noopener noreferrer'><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" height="2.5em" width="2.5em" xmlns="http://www.w3.org/2000/svg"><path d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zM349.3 793.7H230.6V411.9h118.7v381.8zm-59.3-434a68.8 68.8 0 1 1 68.8-68.8c-.1 38-30.9 68.8-68.8 68.8zm503.7 434H675.1V608c0-44.3-.8-101.2-61.7-101.2-61.7 0-71.2 48.2-71.2 98v188.9H423.7V411.9h113.8v52.2h1.6c15.8-30 54.5-61.7 112.3-61.7 120.2 0 142.3 79.1 142.3 181.9v209.4z"></path></svg></a>
                    <a href='https://github.com/Zealll' target='_blank' rel='noopener noreferrer'><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="2em" width="2em" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path></svg></a>
                    <div>
                        <p className={!clicked ? 'none' : 'copied'}>Copied!</p>
                        <svg onClick={() => {copyToClip(); toggleClicked()}} name='eriznis@gmail.com' className={!clicked ? 'email' : 'email clicked'} stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" height="2.5em" width="2.5em" xmlns="http://www.w3.org/2000/svg"><path d="M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zm-40 110.8V792H136V270.8l-27.6-21.5 39.3-50.5 42.8 33.3h643.1l42.8-33.3 39.3 50.5-27.7 21.5zM833.6 232L512 482 190.4 232l-42.8-33.3-39.3 50.5 27.6 21.5 341.6 265.6a55.99 55.99 0 0 0 68.7 0L888 270.8l27.6-21.5-39.3-50.5-42.7 33.2z"></path></svg>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Body