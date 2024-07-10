import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Theme from "../dark/theme";

const Sixth = () => {
    if (localStorage.getItem('box') == null) {
        window.location.href = '/third';
    }
    const [num1, SetNum1] = useState()
    const [result, setResult] = useState()
    const [balance, setBalance] = useState(localStorage.getItem('money'))
    const params = useParams();
    function plus() {
        if (num1 > 0) {
            setResult(parseInt(balance) + parseInt(num1));
            localStorage.setItem('money', parseInt(balance) + parseInt(num1))
            window.location.href = '/seventh/plus/' + num1;
        }
        else {
            alert('Введите сумму')
        }
    }
    function minus() {
        if (num1 > 0) {
            setResult(parseInt(balance) - parseInt(num1));
        localStorage.setItem('money', parseInt(balance) - parseInt(num1))
        window.location.href = '/seventh/minus/' + num1;
        }
        else {
            alert('Введите сумму')
        }
    }
    const [language, setLanguage] = useState('en')
    const translations = {
        en: {
            one: 'Current balance amount',
            two: 'Back',
            bal: 'Contribute',
            som: 'Withdraw',
        },
        ru: {
            one: 'Сумма текущего баланса',
            two: 'Назад',
            bal: 'Внести',
            som: 'Вывести',
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
                <div className="col-12 text-center">
                    <h1 className="mt-5"><b>{translations[language].one}</b></h1>
                    <h3><b>{balance}</b></h3>
                    <input className="form-control inp1" type="text" value={num1} onChange={(e) => SetNum1(e.target.value)} />
                    {params.type == 'plus' ?
                        <button className="btn btn-success rounded-0" onClick={plus}>
                            {translations[language].bal}
                        </button>
                        :
                        <button className="btn btn-success rounded-0" onClick={minus}>
                            {translations[language].som}
                        </button>
                    }
                    <a href="/fourth">
                        <button className="btn btn-danger rounded-0">
                            {translations[language].two}
                        </button>
                    </a>
                </div>
            </div>
        </>
    )
}
export default Sixth;