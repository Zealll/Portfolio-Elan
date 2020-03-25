import React from 'react'
import logoBackground from '../../resources/Subtract.png'
import nameInitials from '../../resources/ER.png'
import profilePic from '../../resources/profile-pic.png'
import plus from '../../resources/plus.png'
import x from '../../resources/x.png'


const Header = () => {

    return (
        <div className='header-container'>
            <div className='nav-div'>
                <div className='name-init'>
                    <img src={logoBackground} alt='Initials Background' className='bckg' />
                    <img src={nameInitials} alt='Name Initials' className='init' />
                </div>
                <nav>
                    <a href=''>Contact</a>
                    <a href='' target='_blank'>GitHub</a>
                </nav>
            </div>

            <div className='profile'>
                <div className='basic-bio'>
                    <p>My name</p>
                    <p>is Elan & I'm</p>
                    <p>a Full Stack</p>
                    <p>Developer</p>
                </div>
                <div className='circle'>
                    <img src={profilePic} alt='Profile Headshot' className='profile-pic' />
                </div>
            </div> 
            <div className='top-img'>
                <img src={plus} alt='plus'/>
                <img src={x} alt='x' className='x'/>
            </div>
            <div className='parent-rectangle'>
                <div className='text'>
                    <div className='xDiv'>
                        <img src={x} alt='x' />
                        <p className='title'>Defining My Brand</p>
                    </div>
                    
                    <p className='about'>After finishing two years of Med School, I discovered my true passion: programming and applying Software Development to fast-paced environments like the Stock Market. I leverage my experience and skillset in JS, React/Next, Postgres, Python, and more, to build and design software with soul.</p>
                    <p>Thank you for visiting my portfolio!</p>
                    <p>- Elan</p>
                </div>
                <div className='child-rectangle'>
                    <div className='rec1'></div>
                    <div className='rec2'></div>
                    <div className='rec3'></div>
                </div>
            </div>
            <div className='bottom-img'>
                <img src={x} alt='x'/>
                <img src={x} alt='x'/>
            </div>
        </div>
    )
}


export default Header