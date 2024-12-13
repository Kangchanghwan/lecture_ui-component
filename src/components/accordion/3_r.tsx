import data from "@/components/accordion/data";
import cx from "@/components/accordion/cx";
import {useState} from "react";

const AccordionItem = ({id, title, description, current, toggleItem}: {
    id: string;
    title: string;
    description: string,
    current: boolean;
    toggleItem: () => void
}) => {
    return (
        <li className={cx('item','item3', {current})} key={id}>
            <div className={cx('tab')} onClick={toggleItem}>{title}</div>
            <div className={cx('description')}>{description}</div>
        </li>
    )
}

const Accordion3 = () => {

    const [currentId, setCurrentId] = useState<string | null>(data[0].id)

    const toggleItem = (id: string) =>() => {
        setCurrentId(prev => prev === id ? null : id)
    }

    return (
        <>
            <h3>#3. React<sub>css animation(transition)</sub></h3>
            <ul className={cx('container')}>
                {data.map(r => (
                    <AccordionItem {...r} key={r.id} current={currentId === r.id} toggleItem={toggleItem(r.id)} />
                ))}
            </ul>
        </>)
}

export default Accordion3
