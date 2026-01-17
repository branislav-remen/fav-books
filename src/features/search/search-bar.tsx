import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import SearchIcon from '@mui/icons-material/Search';
import InputAdornment from '@mui/material/InputAdornment';
import {useSelector} from "react-redux";
import {getAllTitles} from "../../store/selectors.ts";

/** search section with the input field to filter books by title */
export const SearchBar = () => {

    const titles = useSelector(getAllTitles);

    return (
        <div>
            <Autocomplete
                freeSolo
                options={titles}
                renderInput={
                (params) => (
                    <>
                        <TextField
                            {...params}
                            label="Začnite písať názov knihy"
                            InputProps={{
                                ...params.InputProps,
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <SearchIcon />
                                    </InputAdornment>
                                ),
                            }}
                        />
                    </>
                )}
            />
        </div>
    );
}