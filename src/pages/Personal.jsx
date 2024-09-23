import Cart from "../components/Cart";
import Navigation from "../components/Navigation";
import { useData } from "../contexts/useData";

export default function Personal() {
    const { searchResult } = useData();
    return (
        <div  >
            <Navigation />
            <div className="flex grow px-8 flex-wrap mb-4">
                {searchResult.map((item, i) => item.type === 'personal' ? <Cart key={i} completed={item.completed} description={item.description} title={item.title} type={item.type} /> : '')}
            </div>
        </div>
    )
}
