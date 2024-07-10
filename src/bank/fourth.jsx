import { useEffect, useState } from "react";
import Theme from "../dark/theme";

const Fourth = () => {
    if (localStorage.getItem('box') == null) {
        window.location.href = '/third';
    }
    const [balance, setBalance] = useState(localStorage.getItem('money'))
    const [language, setLanguage] = useState('en')
    const translations = {
        en: {
            one: 'Mobile connection',
            two: 'Payment by QR CODE',
            thr: 'Operations history',
            tor: 'Translate to Russian',
            fiv: 'Withdraw',
            six: 'Contribute',
            sev: 'Currency transfer',
            tof: 'Back',
            lol: 'Current balance'
        },
        ru: {
            one: 'Мобильная связь',
            two: 'Оплата по QR-КОДУ',
            thr: 'История операций',
            tor: 'Перевести на Английский',
            fiv: 'Снять',
            six: 'Внести',
            sev: 'Перевод валют',
            tof: 'Назад',
            lol: 'Текущий баланс'
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
    return (
        <>
            <Theme />
            <div className="bank">
                <button className="btn btn-danger rounded-0" onClick={Translate}>
                    <b>{translations[language].tor}</b>
                </button>
                <a href="/">
                    <button className="btn btn-success rounded-0">
                        {translations[language].tof}
                    </button>
                </a>
                <div className="col-12 text-center">
                    <h3><b>{translations[language].lol}</b></h3>
                    <h2><b>{balance}</b></h2>
                </div>
                <div className="col-12 mt-5">
                    <div className="row">
                        <div className="col-4 text-center">
                            <i class="fa-solid fa-mobile-screen fa-3x"></i>
                            <h3><b>{translations[language].one}</b></h3>
                        </div>
                        <div className="col-4 text-center">
                            <i class="fa-solid fa-qrcode fa-3x"></i>
                            <h3><b>{translations[language].two}</b></h3>
                        </div>
                        <div className="col-4 text-center">
                            <i class="fa-solid fa-clock-rotate-left fa-3x"></i>
                            <h3><b>{translations[language].thr}</b></h3>
                        </div>
                    </div>
                </div>
                <div className="col-12">
                    <div className="row">
                        <div className="col-6 text-center hp">
                            <h1><b>{translations[language].sev}</b></h1>
                            <div className="row">
                                <div className="col-4 text-center bro">
                                    <a href="/eur"><h3><b>EUR</b></h3></a>
                                </div>
                                <div className="col-4 text-center bro">
                                    <a href="/rub"><h3><b>RUB</b></h3></a>
                                </div>
                                <div className="col-4 text-center bro">
                                    <a href="/usd"><h3><b>USD</b></h3> </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="row">
                                <div className="col-6 text-center box">
                                    <a href="/sixth/plus"><h2><b>{translations[language].six}</b></h2></a>
                                </div>
                                <div className="col-6 text-center lol">
                                    <a href="/sixth/minus"><h2><b>{translations[language].fiv}</b></h2></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Fourth;