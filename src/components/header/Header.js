import React from 'react'
import logoBackground from '../../resources/Subtract.png'
import nameInitials from '../../resources/ER.png'
import plus from '../../resources/plus.png'
import x from '../../resources/x.png'
import fullCircle from '../../resources/full-circle.png'
import fullLogo from '../../resources/full-logo.png'



const Header = () => {

    return (
        <div className='header-container'>
            <div className='nav-div'>
                <div className='name-init'>
                    <img src={fullLogo} alt='Initials Background' className='bckg' />
                </div>
                <nav>
                    <a href='https://www.linkedin.com/in/elan-riznis/' target='_blank' rel='noopener noreferrer'>LinkedIn</a>
                    <a href='https://github.com/Zealll' target='_blank' rel='noopener noreferrer'>GitHub</a>
                    <a href='#projects'>Projects</a>
                    <a href='#contact'>Contact</a>
                    <a href='#skills'>Skills</a>
                </nav>
            </div>

            <div className='profile max-width'>
                <div className='basic-bio'>
                    <p>My name</p>
                    <p>is Elan & I'm</p>
                    <p>a Full Stack</p>
                    <p>Developer</p>
                </div>
                {/* <div className='circle'> */}
                <img src={fullCircle} alt='Profile Headshot' className='profile-pic' />
                {/* </div> */}
            </div> 
            <div className='top-img'>
                <img src={plus} alt='plus'/>
                <img src={x} alt='x' className='x'/>
            </div>
            <div className='parent-rectangle'>
                <div className='text max-width'>
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