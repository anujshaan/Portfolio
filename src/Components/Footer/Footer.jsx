import "./footer.css"
import { Icon } from '@iconify/react';
import githubFill from '@iconify-icons/akar-icons/github-fill';
import linkedinFill from '@iconify-icons/akar-icons/linkedin-fill';
import instagramFilled from '@iconify-icons/ant-design/instagram-filled';
import twitterCircleFilled from '@iconify-icons/ant-design/twitter-circle-filled';
import facebookFill from '@iconify-icons/akar-icons/facebook-fill';
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
            <span>&copy;copyright 2022</span>
            <span>All coding done by Anuj Shaan</span>
        </div>
        </>
    )
}