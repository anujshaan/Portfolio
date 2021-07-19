import "./footer.css"
import { Icon } from '@iconify/react';
import codeSandboxCircleFilled from '@iconify-icons/ant-design/code-sandbox-circle-filled';
import githubFill from '@iconify-icons/akar-icons/github-fill';
import linkedinFill from '@iconify-icons/akar-icons/linkedin-fill';
import instagramFilled from '@iconify-icons/ant-design/instagram-filled';
import twitterCircleFilled from '@iconify-icons/ant-design/twitter-circle-filled';
import facebookFill from '@iconify-icons/akar-icons/facebook-fill';
import copyrightCircleOutlined from '@iconify-icons/ant-design/copyright-circle-outlined';


export default function Footer(){
    return(
        <>
        <div className="footerWrapper">
            <h1>Find me here !!</h1>
            <div className="socialLogo">
                <Icon className="icons" icon={codeSandboxCircleFilled} />
                <Icon className="icons" icon={githubFill} />
                <Icon className="icons" icon={linkedinFill} />
            </div>
            <div className="socialLogo">
                    <Icon className="icons" icon={instagramFilled} />
                    <Icon className="icons" icon={twitterCircleFilled} />
                    <Icon className="icons" icon={facebookFill} />
            </div>
            
        </div>
        <div className="copyright">
                <Icon style={{color:"#CCD6F6", height:"30px", width:"30px"}}icon={copyrightCircleOutlined} />
                <span>copyright 2021</span>
            </div>
        </>
    )
}