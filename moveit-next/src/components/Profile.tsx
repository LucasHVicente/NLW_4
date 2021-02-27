import React from 'react'

import styles from '../styles/components/Profile.module.css'


function Profile() {
    return (
        <div className={styles.profileContainer}>
            <img src="https://github.com/LucasHVicente.png" alt="Vince"/>
            <div>
                <strong>Lucas Vicente</strong>
                <p>
                    <img src="icons/level.svg" alt="level"/>
                    Level 1</p>
            </div>
        </div>
    )
}

export default Profile
