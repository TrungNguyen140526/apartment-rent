import * as React from 'react';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Autocomplete, { createFilterOptions } from '@mui/material/Autocomplete';

const filter = createFilterOptions();

export default function SearchBar() {

    const [value, setValue] = React.useState(null);

    return (
        <Box
            mb={15}
            className="d-flex align-items-center justify-content-center"
            style={{ minHeight: "20vh" }}>
            <Card>
                <CardContent>
                    <Autocomplete
                        value={value}
                        onChange={(event, newValue) => {
                            if (typeof newValue === 'string') {
                                setValue({
                                    title: newValue,
                                });
                            } else if (newValue && newValue.inputValue) {
                                // Create a new value from the user input
                                setValue({
                                    title: newValue.inputValue,
                                });
                            } else {
                                setValue(newValue);
                            }
                        }}
                        filterOptions={(options, params) => {
                            const filtered = filter(options, params);

                            const { inputValue } = params;
                            // Suggest the creation of a new value
                            const isExisting = options.some((option) => inputValue === option.title);
                            if (inputValue !== '' && !isExisting) {
                                filtered.push({
                                    inputValue,
                                    title: `K???t qu??? cho "${inputValue}"`,
                                });
                            }

                            return filtered;
                        }}
                        selectOnFocus
                        clearOnBlur
                        handleHomeEndKeys
                        options={nhaDat}
                        getOptionLabel={(option) => {
                            // Value selected with enter, right from the input
                            if (typeof option === 'string') {
                                return option;
                            }
                            // Add "xxx" option created dynamically
                            if (option.inputValue) {
                                return option.inputValue;
                            }
                            // Regular option
                            return option.title;
                        }}
                        renderOption={(props, option) => <li {...props}>{option.title}</li>}
                        sx={{ width: 1000 }}
                        freeSolo
                        renderInput={(params) => (
                            <TextField {...params} label="T??m ki???m ?????a ??i???m, khu v???c..." />
                        )}
                    />
                    <div>
                        <FormControl sx={{ mt: 2, mr: 1, minWidth: 220 }} size="small">
                            <InputLabel>Qu???n/Huy???n</InputLabel>
                            <Select
                                autoWidth
                                label="Qu???n/Huy???n"
                            >
                                <MenuItem value={"All"}>T???t c??? Qu???n/Huy???n</MenuItem>
                                <MenuItem value={"Quan1"}>Qu???n 1</MenuItem>
                                <MenuItem value={"Quan2"}>Qu???n 2</MenuItem>
                                <MenuItem value={"Quan3"}>Qu???n 3</MenuItem>
                                <MenuItem value={"Quan4"}>Qu???n 4</MenuItem>
                                <MenuItem value={"Quan5"}>Qu???n 5</MenuItem>
                                <MenuItem value={"Quan6"}>Qu???n 6</MenuItem>
                                <MenuItem value={"Quan7"}>Qu???n 7</MenuItem>
                                <MenuItem value={"Quan8"}>Qu???n 8</MenuItem>
                                <MenuItem value={"Quan9"}>Qu???n 9</MenuItem>
                                <MenuItem value={"Quan10"}>Qu???n 10</MenuItem>
                                <MenuItem value={"Quan11"}>Qu???n 11</MenuItem>
                                <MenuItem value={"Quan12"}>Qu???n 12</MenuItem>
                                <MenuItem value={"BinhTan"}>B??nh T??n</MenuItem>
                                <MenuItem value={"BinhThanh"}>B??nh Th???nh</MenuItem>
                                <MenuItem value={"GoVap"}>G?? V???p</MenuItem>
                                <MenuItem value={"PhuNhuan"}>Ph?? Nhu???n</MenuItem>
                                <MenuItem value={"TanBinh"}>T??n B??nh</MenuItem>
                                <MenuItem value={"TanPhu"}>T??n Ph??</MenuItem>
                                <MenuItem value={"ThuDuc"}>Th??? ?????c</MenuItem>
                                <MenuItem value={"BinhChanh"}>B??nh Ch??nh</MenuItem>
                                <MenuItem value={"CanGio"}>C???n Gi???</MenuItem>
                                <MenuItem value={"CuChi"}>C??? Chi</MenuItem>
                                <MenuItem value={"HocMon"}>H??c M??n</MenuItem>
                                <MenuItem value={"NhaBe"}>Nh?? B??</MenuItem>
                            </Select>
                        </FormControl>
                        <FormControl sx={{ mt: 2, mr: 1, minWidth: 220 }} size="small">
                            <InputLabel>M???c gi??</InputLabel>
                            <Select
                                autoWidth
                                label="M???c gi??"
                            >
                                <MenuItem value={"All"}>T???t c??? m???c gi??</MenuItem>
                                <MenuItem value={"ThoaThuan"}>Tho??? thu???n</MenuItem>
                                <MenuItem value={1}> 1 tri???u</MenuItem>
                                <MenuItem value={13}>1 - 3 tri???u</MenuItem>
                                <MenuItem value={35}>3 tri???u - 5 tri???u</MenuItem>
                                <MenuItem value={510}>5 tri???u - 10 tri???u</MenuItem>
                                <MenuItem value={1040}>10 tri???u - 40 tri???u</MenuItem>
                                <MenuItem value={4070}>40 tri???u - 70 tri???u</MenuItem>
                                <MenuItem value={70100}>70 tri???u - 100 tri???u</MenuItem>
                                <MenuItem value={100}>??? 100 tri???u</MenuItem>
                            </Select>
                        </FormControl>
                        <FormControl sx={{ mt: 2, mr: 1, minWidth: 220 }} size="small">
                            <InputLabel>Di???n t??ch</InputLabel>
                            <Select
                                autoWidth
                                label="Di???n t??ch"
                            >
                                <MenuItem value={"All"}>T???t c??? di???n t??ch</MenuItem>
                                <MenuItem value={30}>??? 30 m??</MenuItem>
                                <MenuItem value={3050}>30 - 50 m??</MenuItem>
                                <MenuItem value={3080}>50 - 80 m??</MenuItem>
                                <MenuItem value={80100}>80 - 100 m??</MenuItem>
                                <MenuItem value={100150}>100 - 150 m??</MenuItem>
                                <MenuItem value={150200}>150 - 200 m??</MenuItem>
                                <MenuItem value={200250}>200 - 250 m??</MenuItem>
                                <MenuItem value={250300}>250 - 300 m??</MenuItem>
                                <MenuItem value={300500}>300 - 500 m??</MenuItem>
                                <MenuItem value={500}>??? 500 m??</MenuItem>
                            </Select>
                        </FormControl>
                        <FormControl sx={{ mt: 2, mr: 1, minWidth: 220 }} size="small">
                            <InputLabel>S??? ph??ng ng???</InputLabel>
                            <Select
                                autoWidth
                                label="S??? ph??ng ng???"
                            >
                                <MenuItem value={"All"}>T???t c??? s??? ph??ng ng???</MenuItem>
                                <MenuItem value={1}>1+</MenuItem>
                                <MenuItem value={2}>2+</MenuItem>
                                <MenuItem value={3}>3+</MenuItem>
                                <MenuItem value={4}>4+</MenuItem>
                                <MenuItem value={5}>5+</MenuItem>
                            </Select>
                        </FormControl>
                    </div>
                </CardContent>
            </Card>
        </Box>
    );
}

const nhaDat = [
    { title: 'Qu???n 1, TPHCM' },
    { title: 'Qu???n 2, TPHCM' },
    { title: 'Qu???n 3, TPHCM' },
    { title: 'Qu???n 4, TPHCM' },
    { title: 'Qu???n 5, TPHCM' },
    { title: 'Qu???n 6, TPHCM' },
    { title: 'Qu???n 7, TPHCM' },
    { title: 'Qu???n 8, TPHCM' },
    { title: 'Qu???n 9, TPHCM' },
    { title: 'Qu???n 10, TPHCM' },
    { title: 'Qu???n 11, TPHCM' },
    { title: 'Qu???n 12, TPHCM' },
    { title: 'B??nh T??n, TPHCM' },
    { title: 'B??nh Th???nh, TPHCM' },
    { title: 'G?? V???p, TPHCM' },
    { title: 'Ph?? Nhu???n, TPHCM' },
    { title: 'T??n B??nh, TPHCM' },
    { title: 'T??n Ph??, TPHCM' },
    { title: 'Th??? ?????c, TPHCM' },
    { title: 'B??nh Ch??nh, TPHCM' },
    { title: 'C???n Gi???, TPHCM' },
    { title: 'C??? Chi, TPHCM' },
    { title: 'H??c M??n, TPHCM' },
    { title: 'Nh?? B??, TPHCM' }
]