import s from './SearchBar.module.css'
import {FC, FormEvent} from "react";

interface SearchProps {
    onSubmit: (e:FormEvent<HTMLFormElement>)=> void
}
const SearchBar: FC<SearchProps> = ({onSubmit}) => {
    return (

        <form onSubmit={onSubmit}>
            <input
                className={s.bar}
                name='query'
                type="text"
                autoComplete="off"
                autoFocus
                placeholder="Search images and photos"
            />
            <button type="submit">Search</button>
        </form>
    );
};

export default SearchBar;