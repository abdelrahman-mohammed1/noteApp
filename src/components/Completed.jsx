import { useData } from "../contexts/useData";
import Cart from "./Cart";

import Navigation from "./Navigation";

export default function Completed() {
    const { searchResult, show } = useData()
    if (!show) return null

    return (
        <div>




            <div >
                <Navigation />
                <div className="flex grow px-8 flex-wrap mb-4">
                    {searchResult.map((item, i) => item.completed && < Cart completed={item.completed} key={i} description={item.description} title={item.title} type={item.type} />)}
                </div>
            </div>
        </div>
    )
}
