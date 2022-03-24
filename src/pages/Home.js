import { Avatar } from '@material-ui/core'
import { Apps } from '@material-ui/icons'
import React from 'react'
import './Home.css'
import Search from './Search'
function Home() {
  return (
    <div className='home'>
        
        <div className='home_header'>

            <div className='home_headerLeft'>
                <p>About</p>
                <p>Store</p>
            </div>
            <div className='home_headerRight'>
                <p>Gmail</p>
                <p>Images</p>
                <Apps/> {/*/material icon */}
                <Avatar/>{/**material core */}
                
            </div>
        </div>

        <div className='home-body'>

        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1920px-Google_2015_logo.svg.png" alt ='logo' />
        <div className='home-inputContainer'>
<Search/>
        </div>
            
        </div>
    </div>
  )
}

export default Home