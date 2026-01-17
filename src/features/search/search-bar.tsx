import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import SearchIcon from '@mui/icons-material/Search';
import InputAdornment from '@mui/material/InputAdornment';
import {useSelector} from "react-redux";
import {getAllTitles} from "../../store/selectors.ts";
import type {FC} from "react";

type Props = {
    /** contains the current value of the search input */
    value: string;
    /** callback function to handle changes in the search input */
    onChange: (value: string) => void;
}

/** search section with the controlled input field  */
export const SearchBar: FC<Props> = ({ value, onChange }) => {

    const titles = useSelector(getAllTitles);

    return (
        <div>
            <Autocomplete
                freeSolo
                options={titles}
                value={value}
                onInputChange={(_, newInputValue) => onChange(newInputValue)}
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