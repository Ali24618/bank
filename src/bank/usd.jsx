import { useEffect, useState } from "react";
import Theme from "../dark/theme";

const Usd = () => {
    if (localStorage.getItem('box') == null) {
        window.location.href = '/third';
    }
    const [balance, setBalance] = useState(localStorage.getItem('money'))
    const [backs, setBacks] = useState(localStorage.getItem('dolar'))
    const [som, setSom] = useState('')
    const [som1, setSom1] = useState('')
    const [usd, setUsd] = useState('')
    const [usd1, setUsd1] = useState('')
    const [result, setResult] = useState('')

    const Convert = () => {
        if (parseFloat(balance) >= parseFloat(som1)) {
            const usdValue = som1 * 0.0116;
            setUsd(usdValue.toFixed(2));

            setResult(parseFloat(usdValue) + parseFloat(usd));
            localStorage.setItem('dolar', parseFloat(usdValue) + parseFloat(backs))

            setResult(parseFloat(balance) - parseFloat(som1));
            localStorage.setItem('money', parseFloat(balance) - parseFloat(som1))
        }
        else {
            alert('Недостаточно средств')
        }
    };
    const Click = () => {
        if (parseFloat(backs) >= parseFloat(usd1)) {
            const somValue = usd1 * 86;
            setSom(somValue.toFixed(2));

            setResult(parseFloat(somValue) + parseFloat(som));
            localStorage.setItem('money', parseFloat(somValue) + parseFloat(balance))

            setResult(parseFloat(backs) - parseFloat(usd1));
            localStorage.setItem('dolar', parseFloat(backs) - parseFloat(usd1))
        }
        else {
            alert('Недостаточно средств')
        }
    };
    const [language, setLanguage] = useState('en')
    const translations = {
        en: {
            one: 'Currency transfer',
            two: 'Back',
            thr: 'Your balance',
            tof: 'Som',
            fiv: 'Dollars',
            six: 'Convert',
            sev: 'Click',
            tor: 'Translate to Russian'
        },
        ru: {
            one: 'Перевод валют',
            two: 'Назад',
            thr: 'Ваш баланс',
            tof: 'Сом',
            fiv: 'Долларов',
            six: 'Перевести',
            sev: 'Нажать',
            tor: 'Перевести на Английский'
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
            <div className="bank">
                <a href="/fourth"><button>{translations[language].two}</button></a>
                <div className="col-12 text-center mt-5">
                    <h2><b>{translations[language].one}</b></h2>
                    <h3 className="mt-5"><b>{translations[language].thr}: {balance} {translations[language].tof}, {backs} {translations[language].fiv}</b></h3>
                    <input type="text" value={som1} placeholder={translations[language].tof} className="btn border border-danger"
                        onChange={(e) => setSom1(e.target.value)} />
                    <button onClick={Convert}>{translations[language].six}</button>
                    {usd}
                    <p>
                        <input type="text" value={usd1} placeholder={translations[language].fiv} className="btn border border-danger"
                            onChange={(e) => setUsd1(e.target.value)} /><button onClick={Click}>{translations[language].sev}
                        </button>
                    </p>
                    {som}
                </div>
            </div>
        </>
    )
}
export default Usd;