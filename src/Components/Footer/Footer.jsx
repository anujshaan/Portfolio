import "./footer.css"
import { Icon } from '@iconify/react';
import githubFill from '@iconify-icons/akar-icons/github-fill';
import linkedinFill from '@iconify-icons/akar-icons/linkedin-fill';
import instagramFilled from '@iconify-icons/ant-design/instagram-filled';
import twitterCircleFilled from '@iconify-icons/ant-design/twitter-circle-filled';
import facebookFill from '@iconify-icons/akar-icons/facebook-fill';
import copyrightCircleOutlined from '@iconify-icons/ant-design/copyright-circle-outlined';
import skypeFilled from '@iconify-icons/ant-design/skype-filled';


export default function Footer(){
    return(
        <>
        <hr />
        <div className="footerWrapper">
            <h1>Find me here !!</h1>
            <div className="socialLogo">
                <a href="https://join.skype.com/invite/vCzhBSQXN1i9" target="_blank" rel="noreferrer"><Icon className="icons" icon={skypeFilled} /></a>
                <a href="https://github.com/anujshaan" target="_blank" rel="noreferrer"><Icon className="icons" icon={githubFill} /></a>
                <a href="http://www.linkedin.com/in/anujshaan" target="_blank" rel="noreferrer"><Icon className="icons" icon={linkedinFill} /></a>
            </div>
            <div className="socialLogo">
                    <a href="https://www.instagram.com/anujshaan/" target="_blank" rel="noreferrer"><Icon className="icons" icon={instagramFilled} /></a>
                    <a href="https://twitter.com/AnujShaan" target="_blank" rel="noreferrer"><Icon className="icons" icon={twitterCircleFilled} /></a>
                    <a href="https://www.facebook.com/AnujShaan" target="_blank" rel="noreferrer"><Icon className="icons" icon={facebookFill} /></a>
            </div>
            
        </div>
        <div className="copyright">
                <Icon style={{color:"#CCD6F6", height:"30px", width:"30px"}}icon={copyrightCircleOutlined} />
                <span>copyright 2021</span>
            </div>
        </>
    )
}