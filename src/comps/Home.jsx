import React from 'react';
import { motion } from 'framer-motion';
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai'; // Correct import for individual icons
import { buttonVariants } from '../variants/buttonVariants';
import { childVariants, containerVariants, headerVariants, paragraphVariant, iconVariants } from '../variants/homeVariants';
import cv from '../assets/CV .pdf'; // Ensure the path is correct
import photo from '../assets/let.jpg';

const HomePage = () => {
    return (
        <motion.div
            variants={containerVariants}
            initial='initial'
            transition='transition'
            animate='animate'
            className='home-div'>
            <motion.h1
                variants={headerVariants}
                animate='animate'
                transition='transition'
                className='title'>IBRAHIM GAD</motion.h1>
            <motion.p className='border'
                variants={childVariants}
                transition='transition'
                initial='initial'
                animate='animate'
            ></motion.p>
            <motion.p
                variants={paragraphVariant}
                initial='initial'
                animate='animate'
                transition='transition'
            >I create beautiful things for the web</motion.p>
            <div className='icon-div'>
                <motion.a
                    variants={iconVariants}
                    initial='initial'
                    animate='animate'
                    transition='transition'
                    whileHover='whileHover'
                    href='https://www.linkedin.com/in/ibrahim-gad-1b614a264/'
                ><AiFillLinkedin className='home-icon'></AiFillLinkedin></motion.a>
                <motion.a
                    variants={iconVariants}
                    initial='initial'
                    animate='animate'
                    transition='transition'
                    whileHover='whileHover'
                    href='https://github.com/Ebrahimgad123'
                ><AiFillGithub className='home-icon'></AiFillGithub></motion.a>
            </div>
            <div>
                <img src={photo} style={{width:'250px',marginLeft:'-50px',borderRadius:'50%',marginTop:'20px',border:'10px solid green'}} alt='Profile' />
            </div>
            <div style={{marginTop:'30px'}}>
                <motion.a
                    style={{ padding: '5px 50px', display: 'inline-block', textDecoration: 'none', color: 'white', backgroundColor: '#007BFF', borderRadius: '5px' }}
                    variants={buttonVariants}
                    whileHover='hover'
                    className='project-button'
                    href={cv} // Use href for anchor tags
                    download
                >
                    Download CV
                </motion.a>
            </div>
        </motion.div>
    );
}

export default HomePage;
