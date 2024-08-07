const Footer = () => {
    return (
        <div className=" bg-custom-dark  text-white py-4 px-6 fixed bottom-0 w-full">
            <div className="flex justify-around items-center">
                <div className="flex flex-col items-center">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g opacity="0.5" clipPath="url(#clip0_2521_154)">
                            <path fillRule="evenodd" clipRule="evenodd" d="M22.7309 18.3763L22.6339 18.8668C21.7155 18.6851 20.8617 18.3238 20.1107 17.821L20.3889 17.4055L20.667 16.99C20.0123 16.5517 19.4483 15.9877 19.01 15.333L18.5945 15.6111L18.179 15.8893C17.6762 15.1383 17.3149 14.2845 17.1332 13.3661L17.6237 13.2691L18.1142 13.1721C18.0394 12.7938 18 12.402 18 12C18 11.598 18.0394 11.2062 18.1142 10.8279L17.6237 10.7309L17.1332 10.6339C17.3149 9.7155 17.6762 8.86173 18.179 8.11069L18.5945 8.38885L19.01 8.66701C19.4483 8.01227 20.0123 7.44835 20.667 7.01001L20.3889 6.59453L20.1107 6.17905C20.8617 5.67623 21.7155 5.31492 22.6339 5.13324L22.7309 5.62373L22.8279 6.11423C23.2062 6.03939 23.598 6 24 6C24.402 6 24.7938 6.03939 25.1721 6.11423L25.2691 5.62373L25.3661 5.13324C26.2845 5.31492 27.1383 5.67623 27.8893 6.17904L27.6111 6.59453L27.333 7.01001C27.9877 7.44835 28.5517 8.01227 28.99 8.66701L29.4055 8.38885L29.821 8.11069C30.3397 8.88551 30.7078 9.76966 30.8835 10.7213C30.8781 10.6921 30.8725 10.6629 30.8668 10.6339L30.3763 10.7309L29.8858 10.8279C29.9606 11.2062 30 11.598 30 12C30 12.402 29.9606 12.7938 29.8858 13.1721L30.3763 13.2691L30.8668 13.3661C30.6851 14.2845 30.3238 15.1383 29.821 15.8893L29.4055 15.6111L28.99 15.333C28.5517 15.9877 27.9877 16.5517 27.333 16.99L27.6111 17.4055L27.8893 17.821C27.1383 18.3238 26.2845 18.6851 25.3661 18.8668L25.2691 18.3763L25.1721 17.8858C24.7938 17.9606 24.402 18 24 18C23.598 18 23.2062 17.9606 22.8279 17.8858L22.7309 18.3763ZM24 20C28.4183 20 32 16.4183 32 12C32 7.58172 28.4183 4 24 4C19.5817 4 16 7.58172 16 12C16 16.4183 19.5817 20 24 20ZM26.0831 8.87139C26.1262 8.68496 25.9129 8.56185 25.773 8.69236C25.1189 9.30243 23.8897 10.5044 23.217 11.5154C23.0946 11.6993 22.9597 11.9234 22.8339 12.1411C22.5596 12.6158 22.7348 13.2164 23.2095 13.4905C23.6843 13.7646 24.292 13.616 24.566 13.1411C24.6916 12.9233 24.8182 12.6944 24.9163 12.4965C25.4555 11.4084 25.8818 9.74288 26.0831 8.87139Z" fill="white"/>
                        </g>
                        <defs>
                            <clipPath id="clip0_2521_154">
                                <rect width="48" height="36" fill="white"/>
                            </clipPath>
                        </defs>
                    </svg>
                    <span className="text-xs mt-1">Discover</span>
                </div>
                <div className="flex flex-col items-center">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g opacity="0.5" clipPath="url(#clip0_2521_91)">
                            <path fillRule="evenodd" clipRule="evenodd" d="M16 8.14522V6H26V6.38889C26 6.66503 26.2239 6.88889 26.5 6.88889C26.7761 6.88889 27 6.66503 27 6.38889V6H32V8.14522C30.5543 8.57574 29.5 9.91377 29.5 11.5C29.5 13.0862 30.5543 14.4243 32 14.8548V17H27V16.6111C27 16.335 26.7761 16.1111 26.5 16.1111C26.2239 16.1111 26 16.335 26 16.6111V17H16V14.8548C17.4457 14.4243 18.5 13.0862 18.5 11.5C18.5 9.91377 17.4457 8.57574 16 8.14522ZM26.5 18H15.5C15.2239 18 15 17.7761 15 17.5V14.5C15 14.2239 15.2261 14.0052 15.4968 13.9506C16.6395 13.7202 17.5 12.7106 17.5 11.5C17.5 10.2894 16.6395 9.27976 15.4968 9.04936C15.2261 8.99478 15 8.77614 15 8.5V5.5C15 5.22386 15.2239 5 15.5 5H26.5H32.5C32.7761 5 33 5.22386 33 5.5V8.5C33 8.77614 32.7739 8.99478 32.5032 9.04936C31.3605 9.27976 30.5 10.2894 30.5 11.5C30.5 12.7106 31.3605 13.7202 32.5032 13.9506C32.7739 14.0052 33 14.2239 33 14.5V17.5C33 17.7761 32.7761 18 32.5 18H26.5Z" fill="white"/>
                        </g>
                        <defs>
                            <clipPath id="clip0_2521_91">
                                <rect width="48" height="36" fill="white"/>
                            </clipPath>
                        </defs>
                    </svg>
                    <span className="text-xs mt-1">Tickets</span>
                </div>
                <div className="flex flex-col items-center">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g opacity="0.5" clipPath="url(#clip0_2521_153)">
                            <path fillRule="evenodd" clipRule="evenodd" d="M24 4C18.4775 4 14 8.4775 14 14C14 19.5225 18.4775 24 24 24C29.5225 24 34 19.5225 34 14C34 8.4775 29.5225 4 24 4ZM24 20C19.0294 20 15 15.9706 15 11C15 6.02944 19.0294 2 24 2C28.9706 2 33 6.02944 33 11C33 15.9706 28.9706 20 24 20Z" fill="white"/>
                        </g>
                        <defs>
                            <clipPath id="clip0_2521_153">
                                <rect width="48" height="36" fill="white"/>
                            </clipPath>
                        </defs>
                    </svg>
                    <span className="text-xs mt-1">Theaters</span>
                </div>
                <div className="flex flex-col items-center">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20ZM12 7C10.34 7 9 8.34 9 10C9 11.66 10.34 13 12 13C13.66 13 15 11.66 15 10C15 8.34 13.66 7 12 7ZM12 11C11.45 11 11 10.55 11 10C11 9.45 11.45 9 12 9C12.55 9 13 9.45 13 10C13 10.55 12.55 11 12 11ZM12 15C9.33 15 7 16.34 7 18C7 18.55 7.45 19 8 19H16C16.55 19 17 18.55 17 18C17 16.34 14.67 15 12 15ZM12 17C13.66 17 15 17.67 15 18H9C9 17.67 10.34 17 12 17Z" fill="white"/>
                    </svg>
                    <span className="text-xs mt-1">Account</span>
                </div>
            </div>
        </div>
    );
};

export default Footer;
