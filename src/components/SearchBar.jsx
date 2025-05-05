import s from './SearchBar.module.css'

const SearchBar = ({onSubmit}) => {
    return (

            <form onSubmit={onSubmit}>
                <input
                    className={s.bar}
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