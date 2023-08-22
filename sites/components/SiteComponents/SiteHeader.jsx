import {useEffect, useState} from "react";


const SiteHeader = () => {

    const userName = localStorage.getItem('name');
        const [currentTime, setCurrentTime] = useState(new Date());

        useEffect(() => {
            const interval = setInterval(() => {
                setCurrentTime(new Date());
            }, 1000);

            return () => {
                clearInterval(interval);
            };
        }, []);
    const formatTime = (value) => {
        return value < 10 ? `0${value}` : value;
    };


        return (
            <div className="Site_MainBox">
                <div className="Hello_Box">
                    <a href="/" className="main"><div className="logo">
                        <div className="logoup"></div>
                        <div className="logodown"><p className="text">Smart Saver</p></div>
                    </div>
                    </a>
                    <p className="Hello">Welcome {userName} </p>
                </div>
                <div className="Clock">
                    <p className="Time">Local Time :</p>
                   <div className="TimeA">{formatTime(currentTime.getHours())}:{formatTime(currentTime.getMinutes())}:{formatTime(currentTime.getSeconds())}
                   </div>
                </div>

            </div>
        );

}
export default SiteHeader;
