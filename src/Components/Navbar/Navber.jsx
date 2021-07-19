import "./navbar.css"

export default function Navbar(){
    return(
        <div className="navbarContainer">
            <div className="logo">
                <svg width="92" height="155" viewBox="0 0 92 155" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21.56 130.48H5.04L38.22 56.56H53.34L86.66 130.48H70L45.92 75.88L21.56 130.48Z" fill="#64FFDA"/>
                <path d="M47.12 144.49C43.5267 144.49 40.3067 143.907 37.46 142.74C34.6133 141.573 32.3267 139.847 30.6 137.56C28.92 135.273 28.0333 132.52 27.94 129.3H40.68C40.8667 131.12 41.4967 132.52 42.57 133.5C43.6433 134.433 45.0433 134.9 46.77 134.9C48.5433 134.9 49.9433 134.503 50.97 133.71C51.9967 132.87 52.51 131.727 52.51 130.28C52.51 129.067 52.09 128.063 51.25 127.27C50.4567 126.477 49.4533 125.823 48.24 125.31C47.0733 124.797 45.3933 124.213 43.2 123.56C40.0267 122.58 37.4367 121.6 35.43 120.62C33.4233 119.64 31.6967 118.193 30.25 116.28C28.8033 114.367 28.08 111.87 28.08 108.79C28.08 104.217 29.7367 100.647 33.05 98.08C36.3633 95.4667 40.68 94.16 46 94.16C51.4133 94.16 55.7767 95.4667 59.09 98.08C62.4033 100.647 64.1767 104.24 64.41 108.86H51.46C51.3667 107.273 50.7833 106.037 49.71 105.15C48.6367 104.217 47.26 103.75 45.58 103.75C44.1333 103.75 42.9667 104.147 42.08 104.94C41.1933 105.687 40.75 106.783 40.75 108.23C40.75 109.817 41.4967 111.053 42.99 111.94C44.4833 112.827 46.8167 113.783 49.99 114.81C53.1633 115.883 55.73 116.91 57.69 117.89C59.6967 118.87 61.4233 120.293 62.87 122.16C64.3167 124.027 65.04 126.43 65.04 129.37C65.04 132.17 64.3167 134.713 62.87 137C61.47 139.287 59.4167 141.107 56.71 142.46C54.0033 143.813 50.8067 144.49 47.12 144.49Z" fill="#64FFDA"/>
                </svg>
            </div>
            <div className="navbar">
                <ul>
                    <li>About</li>
                    <li>Projects</li>
                    <li>Contacts</li>
                </ul>
                    <div className="blog-button">My Blog</div>
            </div>
        </div>
    )
}