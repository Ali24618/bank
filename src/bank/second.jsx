import { useEffect, useState } from "react";
import Theme from "../dark/theme";

const Second = () => {
    if (localStorage.getItem('box') == null) {
        window.location.href = '/third';
    }
    function Vhod() {
        localStorage.removeItem('box');
        window.location.href = '/third';
    }
    const [language, setLanguage] = useState('en')
    const translations = {
        en: {
            one: 'Insert card',
            two: 'Next',
            thr: 'Back'
        },
        ru: {
            one: 'Вставьте карту',
            two: 'Далее',
            thr: 'Назад'
        },
    };
    useEffect(() => {
        const savelang = localStorage.getItem('language')
        if (savelang) {
            setLanguage(savelang);
        }
    }, []);
    return (
        <>
            <Theme />
            <div className="bank text-center">
                <div className="block2 rounded-pill shadow">
                    <h1><b>{translations[language].one}</b></h1>
                </div>
                <div className="block3 rounded shadow">
                    <h3 onClick={Vhod}><b>{translations[language].two}</b></h3>
                </div>
                <div className="block3 rounded shadow">
                    <a href="/"><h3><b>{translations[language].thr}</b></h3></a>
                </div>
            </div>
        </>
    )
}
export default Second;