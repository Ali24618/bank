import { useEffect, useState } from "react";
import Theme from "../dark/theme";

const First = () =>{
    if (localStorage.getItem('box') == null){
        window.location.href = '/third';
    }
    const [language, setLanguage] = useState('en')
    const translations = {
        en: {
            one: 'OTHER SERVICES',
            two: 'Complete',
            thr: 'Select language'
        },
        ru: {
            one: 'ПРОЧИЕ УСЛУГИ',
            two: 'Завершить',
            thr: 'Выбрать язык'
        },
    };
    useEffect(() => {
        const savelang = localStorage.getItem('language')
        if (savelang) {
            setLanguage(savelang);
        }
    }, []);
    const Translate = () => {
        const newLang = language === 'en' ? 'ru' : 'en';
        setLanguage(newLang);
        localStorage.setItem('language', newLang);
    };
    return(
        <>
        <Theme/>
        <div className="bank">
            <button onClick={Translate} className="btn btn-success rounded-0">{translations[language].thr}</button>
            <button className="btn btn-warning rounded-0 block1">{translations[language].two}</button>
            <a href="/second"><h1><b className="text1">{translations[language].one}</b></h1></a>
        </div>
        </>
    )
}
export default First;