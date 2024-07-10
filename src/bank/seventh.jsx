import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Theme from "../dark/theme";

const Seventh = () => {
    if (localStorage.getItem('box') == null){
        window.location.href = '/third';
    }
    const [balance, setBalance] = useState(localStorage.getItem('money'))
    const params = useParams();
    const param = useParams();
    function Check() {
        window.location.href = '/eighth/' + params.input;
    }
    const [language, setLanguage] = useState('en')
    const translations = {
        en: {
            one: 'Balance amount',
            two: 'Amount to be Deposited',
            thr: 'Amount to Withdraw',
            tor: 'Commission',
            fiv: 'Not charged',
            six: 'Print receipt',
            sev: 'Yes',
            tof: 'No',
        },
        ru: {
            one: 'Сумма баланса',
            two: 'Сумма к Внеcению',
            thr: 'Сумма к Снятию',
            tor: 'Коммисия',
            fiv: 'Не взимается',
            six: 'Напечатать чек',
            sev: 'Да',
            tof: 'Нет',
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
        <Theme/>
            <div className="bank">
                <div className="text-center mt-5">
                    <h2><b>{translations[language].one}</b></h2>
                    <h3><b>{balance}</b></h3>
                    <h3 className="mt-5">
                        {param.kind == 'plus' ?
                                <b>{translations[language].two}: </b>
                            :
                                <b>{translations[language].thr}: </b>
                        }
                        <b>{params.input}</b></h3>
                    <h2 className="mt-5"><b>{translations[language].fiv}: 0 % ({translations[language].fiv}!)</b></h2>
                    <h4 className="mt-4">{translations[language].six}</h4>
                    <button onClick={Check}>{translations[language].sev}</button> <a href="/fourth"><button>{translations[language].tof}</button></a>
                </div>
            </div>
        </>
    )
}
export default Seventh;