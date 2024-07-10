import { useEffect, useState } from "react";
import { info } from "../data";
import Theme from "../dark/theme";

const Third = () => {
    if (localStorage.getItem('box') != null){
        window.location.href = '/fourth';
    }
    const [password, SetPassword] = useState();
    const [name, SetName] = useState();

    function Vhod() {
        const signIn = info.filter((i) => i.parol == password && i.nick == name);
        if (signIn.length > 0) {
            localStorage.setItem('box', signIn[0].id);
            window.location.href = '/fourth';   
        }
        else {
            alert('Непривильный пароль')
        }
    }
    const [language, setLanguage] = useState('en')
    const translations = {
        en: {
            one: 'Enter PIN-CODE',
            two: 'Continue',
            thr: 'Back',
            pas: 'Password: 1234',
            nam: 'Login: Bred'
        },
        ru: {
            one: 'Введите ПИН-КОД',
            two: 'Продолжить',
            thr: 'Назад',
            pas: 'Пароль: 1234',
            nam: 'Логин: Bred'
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
                <h1><b className="text1">{translations[language].one}</b></h1>
                <input placeholder={translations[language].pas} onChange={(e) => SetPassword(e.target.value)} type="password" className="form-control input"/>
                <input type="name" placeholder={translations[language].nam} onChange={(e) => SetName(e.target.value)} className="form-control inp2"/>
                <button onClick={Vhod} className="block4 rounded btn btn-info">
                    <b>{translations[language].two}</b>
                </button>
                <a href="/second"><button className="block4 rounded btn btn-success">
                    <b>{translations[language].thr}</b>
                </button></a>
            </div>
        </>
    )
}
export default Third;