import Navigation from "../components/Navigation";
import Cart from '../components/Cart'
import { useData } from "../contexts/useData";
export default function AllNotes() {
    const { searchResult } = useData()
    return (
        <div  >
            <Navigation />
            <div className="flex grow px-8 flex-wrap mb-4" >
                {searchResult.map((item, i) => <Cart key={i} description={item.description} completed={item.completed} title={item.title} type={item.type} />)}
            </div>
        </div>
    )
}
