import data from "@/components/accordion/data";
import cx from "@/components/accordion/cx";
import {useState} from "react";

const AccordionItem = ({id, title, description}: {
    id: string;
    title: string;
    description: string,
}) => {
    return (
        <li className={cx('item','item5')} key={id}>
            <input className={cx('input')} type='radio' name='accordion' id={id} />
            <label htmlFor={id} className={cx('tab')}>{title}</label>
            <div className={cx('description')}>{description}</div>
        </li>
    )
}

const Accordion5 = () => {

    const [currentId, setCurrentId] = useState<string | null>(data[0].id)

    const toggleItem = (id: string) =>() => {
        setCurrentId(prev => prev === id ? null : id)
    }

    return (
        <>
            <h3>#5. React<sub>radio button(without state)</sub></h3>
            <ul className={cx('container')}>
                {data.map(r => (
                    <AccordionItem {...r} key={r.id}/>
                ))}
            </ul>
        </>)
}

export default Accordion5
