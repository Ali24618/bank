import { useEffect, useState } from "react";
import Theme from "../dark/theme";

const Eur = () => {
    if (localStorage.getItem('box') == null) {
        window.location.href = '/third';
    }
    const [balance, setBalance] = useState(localStorage.getItem('money'))
    const [euro, setEuro] = useState(localStorage.getItem('euro'))
    const [som, setSom] = useState('')
    const [eur, setEur] = useState('')
    const [som1, setSom1] = useState('')
    const [eur1, setEur1] = useState('')
    const [result, setResult] = useState('')

    const Convert = () => {
        if (parseFloat(balance) >= parseFloat(som1)) {
            const eurValue = som1 * 0.0108;
            setEur(eurValue.toFixed(2));

            setResult(parseFloat(eurValue) + parseFloat(eur));
            localStorage.setItem('euro', parseFloat(eurValue) + parseFloat(euro))

            setResult(parseFloat(balance) - parseFloat(som1));
            localStorage.setItem('money', parseFloat(balance) - parseFloat(som1))
        } else {
            alert('Недостаточно средств')
        }
    };
    const Click = () => {
        if (parseFloat(euro) >= parseFloat(eur1)) {
            const somValue = eur1 * 92;
            setSom(somValue.toFixed(2));

            setResult(parseFloat(somValue) + parseFloat(som));
            localStorage.setItem('money', parseFloat(somValue) + parseFloat(balance))

            setResult(parseFloat(euro) - parseFloat(eur1));
            localStorage.setItem('euro', parseFloat(euro) - parseFloat(eur1))
        } else {
            alert('Недостаточно средств')
        }
    };
    const [language, setLanguage] = useState('en')
    const translations = {
        en: {
            one: 'Currency transfer',
            two: 'Back',
            bal: 'Your balance',
            som: 'Som',
            eur: 'Euro',
            six: 'Convert',
            sev: 'Click',
            tor: 'Translate to Russian'
        },
        ru: {
            one: 'Перевод валют',
            two: 'Назад',
            bal: 'Ваш баланс',
            som: 'Сом',
            eur: 'Евро',
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
                    <h3 className="mt-5"><b>{translations[language].bal}: {balance} {translations[language].som}, {euro} {translations[language].eur}</b></h3>
                    <input type="text" value={som1} placeholder={translations[language].som} className="btn border border-danger"
                        onChange={(e) => setSom1(e.target.value)} />
                    <button onClick={Convert}>{translations[language].six}</button>
                    {eur}
                    <p>
                        <input type="text" value={eur1} placeholder={translations[language].eur} className="btn border border-danger"
                            onChange={(e) => setEur1(e.target.value)} />
                        <button onClick={Click}>{translations[language].sev}</button>
                    </p>
                    {som}
                </div>
            </div>
        </>
    )
}
export default Eur;