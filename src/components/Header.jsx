
import { Filters } from "./Filters.jsx"


export function Header ({setFilters}) {



    return (
        <header>
            <h1>React Shop 🛒</h1>
            <Filters setFilters={setFilters} />
        </header>
    )


}