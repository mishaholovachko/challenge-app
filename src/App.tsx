import React, { ChangeEvent, useEffect, useState } from "react";
import { Chip, CssBaseline, Grid, Stack, ThemeProvider } from "@mui/material";

import DataTable from "./components/DataTable/DataTable";
import Search from "./components/Search/Search";

import { FILTER_ITEMS } from "./config/mockData";
import { getData } from "./services";

import { theme } from "./muiTheme";

function App() {

  const [selectedFilter, setSelectedFilter] = useState('agents')
  const [tableData, setTableData] = useState<[]>([])

  const handleSearchData = (event: ChangeEvent<HTMLInputElement>) => {
    const searchValue = event.target.value

    getData(selectedFilter, searchValue).then((responce) => {
      setTableData(responce.data)
    })
  }

  const handleFilter = (value: string) => {
    setSelectedFilter(value)
  }

  useEffect(() => {
    getData(selectedFilter).then((responce) => {
      setTableData(responce.data)
    })
  }, [selectedFilter]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Grid container alignItems="center">
        <Search handleSearch={handleSearchData}/>

        <Stack direction="row" spacing={1}>
          {
            FILTER_ITEMS.map((item) => (
              <Chip label={item.title} variant="outlined" onClick={() => handleFilter(item.value)} key={item.value} color={selectedFilter === item.value ? 'secondary' : 'primary'}/>
            ))
          }
        </Stack>
        </Grid>
        {tableData && <DataTable data={tableData} activeFilter={'agents'} />}
    </ThemeProvider>
  );
}

export default App;