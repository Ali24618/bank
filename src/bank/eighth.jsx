import { useParams } from "react-router-dom";
import Theme from "../dark/theme";
import { useEffect, useState } from "react";

const Eighth = () =>{
    if (localStorage.getItem('box') == null){
        window.location.href = '/third';
    }
    const params = useParams();
    const [language, setLanguage] = useState('en')
    const translations = {
        en: {
            one: 'Transaction completed successfully',
            two: 'Som',
            thr: 'Receipt printed',
            tor: 'Next',
        },
        ru: {
            one: 'Транзакция успешно проведена',
            two: 'Сом',
            thr: 'Чек напечатан',
            tor: 'Далее',
        },
    };
    useEffect(() => {
        const savelang = localStorage.getItem('language')
        if (savelang) {
            setLanguage(savelang);
        }
    }, []);
    return(
        <>
        <Theme/>
        <div className="bank">
            <div className="col-12 text-center">
                <img className="mt-4" src="https://mbank.kg/media/logo/Frame_4_qkrlduu.png" width={300}/>
                <h2 className="text-success"><b>{translations[language].one}</b> <i class="fa-solid fa-circle-check"></i></h2>
                <h2 className="mt-4"><b>- {params.box},00 {translations[language].two}</b></h2>
                <h2 className="mt-4"><b>{translations[language].thr}</b></h2>
                <a href="/fourth"><button className="btn btn-success mt-3">{translations[language].tor}</button></a>
            </div>
        </div>
        </>
    )
}
export default Eighth;