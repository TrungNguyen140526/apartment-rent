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
                                    title: `Kết quả cho "${inputValue}"`,
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
                            <TextField {...params} label="Tìm kiếm địa điểm, khu vực..." />
                        )}
                    />
                    <div>
                        <FormControl sx={{ mt: 2, mr: 1, minWidth: 220 }} size="small">
                            <InputLabel>Quận/Huyện</InputLabel>
                            <Select
                                autoWidth
                                label="Quận/Huyện"
                            >
                                <MenuItem value={"All"}>Tất cả Quận/Huyện</MenuItem>
                                <MenuItem value={"Quan1"}>Quận 1</MenuItem>
                                <MenuItem value={"Quan2"}>Quận 2</MenuItem>
                                <MenuItem value={"Quan3"}>Quận 3</MenuItem>
                                <MenuItem value={"Quan4"}>Quận 4</MenuItem>
                                <MenuItem value={"Quan5"}>Quận 5</MenuItem>
                                <MenuItem value={"Quan6"}>Quận 6</MenuItem>
                                <MenuItem value={"Quan7"}>Quận 7</MenuItem>
                                <MenuItem value={"Quan8"}>Quận 8</MenuItem>
                                <MenuItem value={"Quan9"}>Quận 9</MenuItem>
                                <MenuItem value={"Quan10"}>Quận 10</MenuItem>
                                <MenuItem value={"Quan11"}>Quận 11</MenuItem>
                                <MenuItem value={"Quan12"}>Quận 12</MenuItem>
                                <MenuItem value={"BinhTan"}>Bình Tân</MenuItem>
                                <MenuItem value={"BinhThanh"}>Bình Thạnh</MenuItem>
                                <MenuItem value={"GoVap"}>Gò Vấp</MenuItem>
                                <MenuItem value={"PhuNhuan"}>Phú Nhuận</MenuItem>
                                <MenuItem value={"TanBinh"}>Tân Bình</MenuItem>
                                <MenuItem value={"TanPhu"}>Tân Phú</MenuItem>
                                <MenuItem value={"ThuDuc"}>Thủ Đức</MenuItem>
                                <MenuItem value={"BinhChanh"}>Bình Chánh</MenuItem>
                                <MenuItem value={"CanGio"}>Cần Giờ</MenuItem>
                                <MenuItem value={"CuChi"}>Củ Chi</MenuItem>
                                <MenuItem value={"HocMon"}>Hóc Môn</MenuItem>
                                <MenuItem value={"NhaBe"}>Nhà Bè</MenuItem>
                            </Select>
                        </FormControl>
                        <FormControl sx={{ mt: 2, mr: 1, minWidth: 220 }} size="small">
                            <InputLabel>Mức giá</InputLabel>
                            <Select
                                autoWidth
                                label="Mức giá"
                            >
                                <MenuItem value={"All"}>Tất cả mức giá</MenuItem>
                                <MenuItem value={"ThoaThuan"}>Thoả thuận</MenuItem>
                                <MenuItem value={1}> 1 triệu</MenuItem>
                                <MenuItem value={13}>1 - 3 triệu</MenuItem>
                                <MenuItem value={35}>3 triệu - 5 triệu</MenuItem>
                                <MenuItem value={510}>5 triệu - 10 triệu</MenuItem>
                                <MenuItem value={1040}>10 triệu - 40 triệu</MenuItem>
                                <MenuItem value={4070}>40 triệu - 70 triệu</MenuItem>
                                <MenuItem value={70100}>70 triệu - 100 triệu</MenuItem>
                                <MenuItem value={100}>≥ 100 triệu</MenuItem>
                            </Select>
                        </FormControl>
                        <FormControl sx={{ mt: 2, mr: 1, minWidth: 220 }} size="small">
                            <InputLabel>Diện tích</InputLabel>
                            <Select
                                autoWidth
                                label="Diện tích"
                            >
                                <MenuItem value={"All"}>Tất cả diện tích</MenuItem>
                                <MenuItem value={30}>≤ 30 m²</MenuItem>
                                <MenuItem value={3050}>30 - 50 m²</MenuItem>
                                <MenuItem value={3080}>50 - 80 m²</MenuItem>
                                <MenuItem value={80100}>80 - 100 m²</MenuItem>
                                <MenuItem value={100150}>100 - 150 m²</MenuItem>
                                <MenuItem value={150200}>150 - 200 m²</MenuItem>
                                <MenuItem value={200250}>200 - 250 m²</MenuItem>
                                <MenuItem value={250300}>250 - 300 m²</MenuItem>
                                <MenuItem value={300500}>300 - 500 m²</MenuItem>
                                <MenuItem value={500}>≥ 500 m²</MenuItem>
                            </Select>
                        </FormControl>
                        <FormControl sx={{ mt: 2, mr: 1, minWidth: 220 }} size="small">
                            <InputLabel>Số phòng ngủ</InputLabel>
                            <Select
                                autoWidth
                                label="Số phòng ngủ"
                            >
                                <MenuItem value={"All"}>Tất cả số phòng ngủ</MenuItem>
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
    { title: 'Quận 1, TPHCM' },
    { title: 'Quận 2, TPHCM' },
    { title: 'Quận 3, TPHCM' },
    { title: 'Quận 4, TPHCM' },
    { title: 'Quận 5, TPHCM' },
    { title: 'Quận 6, TPHCM' },
    { title: 'Quận 7, TPHCM' },
    { title: 'Quận 8, TPHCM' },
    { title: 'Quận 9, TPHCM' },
    { title: 'Quận 10, TPHCM' },
    { title: 'Quận 11, TPHCM' },
    { title: 'Quận 12, TPHCM' },
    { title: 'Bình Tân, TPHCM' },
    { title: 'Bình Thạnh, TPHCM' },
    { title: 'Gò Vấp, TPHCM' },
    { title: 'Phú Nhuận, TPHCM' },
    { title: 'Tân Bình, TPHCM' },
    { title: 'Tân Phú, TPHCM' },
    { title: 'Thủ Đức, TPHCM' },
    { title: 'Bình Chánh, TPHCM' },
    { title: 'Cần Giờ, TPHCM' },
    { title: 'Củ Chi, TPHCM' },
    { title: 'Hóc Môn, TPHCM' },
    { title: 'Nhà Bè, TPHCM' }
]