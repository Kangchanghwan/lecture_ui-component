import cx from "@/components/accordion/cx";
import Accordion1 from "@/components/accordion/1_r";
import Accordion2 from "@/components/accordion/2_r";
import Accordion3 from "@/components/accordion/3_r";
import React from "react";
import Accordion4V from "@/components/accordion/4_v";
import Accordion5 from "@/components/accordion/5_r";
import Accordion6 from "@/components/accordion/6_r";


const Accordions = () => {
    return <div className={cx('Accordions')}>
        <h2>아코디언</h2>
        <Accordion1/>
        <Accordion2/>
        <Accordion3/>
        <Accordion4V/>
        <Accordion5/>
        <Accordion6/>
    </div>
}

export default Accordions
