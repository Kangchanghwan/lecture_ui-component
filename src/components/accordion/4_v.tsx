import data from "@/components/accordion/data";
import cx from "@/components/accordion/cx";
import VanillaWrapper from "@/components/vanillaWrapper";


let currentId:string|null = data[0].id

const initiator = (wrapper: HTMLDivElement) => {


    const $ul = document.createElement("ul")
    $ul.classList.add(cx('container'))

    const handleClickTab = (e: Event) => {
        const $el = e.target as HTMLElement
        if(!$el.className.includes(cx('tab'))) return

        const targetId = $el.parentElement!.dataset.id
        if(!targetId) return

        currentId = currentId === targetId ? null : targetId
        $items.forEach($item => {
            $item.classList.toggle(cx('current'), currentId === $item.dataset.id)
        })
    }
    $ul.addEventListener('click', handleClickTab);

    const $items = data.map(itemBuilder);
    ($items[0] as HTMLElement).classList.add(cx('current'))
    $ul.append(...$items)

    wrapper.append($ul)
}

const itemBuilder = ({id, title, description}: {
    id: string;
    title: string;
    description: string;
}) => {
    const $il = document.createElement("li")
    $il.classList.add(cx('item'), cx('item3'))
    $il.setAttribute("data-id", id)

    const $tab = document.createElement("div")
    $tab.classList.add(cx('tab'))
    $tab.textContent = title

    const $description = document.createElement("div")
    $description.classList.add(cx('description'))
    $description.textContent = description

    $il.append($tab,$description)
    return $il
}

const Accordion4V = () => (<VanillaWrapper title="#4" initiator={initiator}/>)
export default Accordion4V
