import { useEffect, useState } from "react"
import Theme from "../dark/theme";

const Rub = () => {
    if (localStorage.getItem('box') == null) {
        window.location.href = '/third';
    }
    const [balance, setBalance] = useState(localStorage.getItem('money'))
    const [rubli, setRubli] = useState(localStorage.getItem('rubli'))
    const [som, setSom] = useState('')
    const [rub, setRub] = useState('')
    const [som1, setSom1] = useState('')
    const [rub1, setRub1] = useState('')
    const [result, setResult] = useState('')

    const Convert = () => {
        if (parseFloat(balance) >= parseFloat(som1)) {
            const rubValue = som1 * 1.0043;
            setRub(rubValue.toFixed(2));

            setResult(parseFloat(rubValue) + parseFloat(rub));
            localStorage.setItem('rubli', parseFloat(rubValue) + parseFloat(rubli))

            setResult(parseFloat(balance) - parseFloat(som));
            localStorage.setItem('money', parseFloat(balance) - parseFloat(som1))
        } else {
            alert('Недостаточно средств')
        }
    };
    const Click = () => {
        if (parseFloat(rubli) >= parseFloat(rub1)) {
            const somValue = rub1 * 0.9957;
            setSom(somValue.toFixed(2));

            setResult(parseFloat(somValue) + parseFloat(som));
            localStorage.setItem('money', parseFloat(somValue) + parseFloat(balance))

            setResult(parseFloat(rubli) - parseFloat(rub1));
            localStorage.setItem('rubli', parseFloat(rubli) - parseFloat(rub1))
        } else {
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
            fiv: 'Rubles',
            six: 'Convert',
            sev: 'Click',
            tor: 'Translate to Russian'
        },
        ru: {
            one: 'Перевод валют',
            two: 'Назад',
            thr: 'Ваш баланс',
            tof: 'Сом',
            fiv: 'Рубли',
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
                    <h3 className="mt-5"><b>{translations[language].thr}: {balance} {translations[language].tof}, {rubli} {translations[language].fiv}</b></h3>
                    <input type="text" value={som1} placeholder={translations[language].tof} className="btn border border-danger"
                        onChange={(e) => setSom1(e.target.value)} />
                    <button onClick={Convert}>{translations[language].six}</button>
                    {rub}
                    <p><input type="text" value={rub1} placeholder={translations[language].fiv} className="btn border border-danger"
                        onChange={(e) => setRub1(e.target.value)} />
                        <button onClick={Click}>{translations[language].sev}</button></p>
                    {som}
                </div>
            </div>
        </>
    )
}
export default Rub;