import { useEffect, useState } from "react";
import $ from 'jquery';

const Theme = () => {
    const [dark, setDark] = useState(false)

    useEffect(() => {
        const save = localStorage.getItem('dark-theme');
        if (save === 'true') {
            $('body').addClass('dark-theme');
            setDark(true);
        }
    }, []);

    const Clicktheme = () => {
        if (dark) {
            $('body').removeClass('dark-theme');
            localStorage.setItem('dark-theme', 'false');
        } else {
            $('body').addClass('dark-theme');
            localStorage.setItem('dark-theme', 'true');
        }
        setDark(!dark);
    }
    return (
        <>
            <div>
                <button onClick={Clicktheme}>
                    {dark ? 'Light theme' : 'Dark theme'}
                </button>
            </div>
        </>
    )
}
export default Theme;