import React, { ChangeEvent, useEffect, useState } from "react";
import { Chip, CssBaseline, Divider, Grid, Stack, ThemeProvider, Typography } from "@mui/material";
import axios from "axios";

import DataTable from "./components/DataTable/DataTable";
import Search from "./components/Search/Search";

import { FILTER_ITEMS } from "./config/mockData";
import { getData } from "./services";

import { theme } from "./muiTheme";

export type TableItemType = {
  createdAt: string
  address: string
  phone?: string
  shop?: string
  name: string
  id: string
}

function App() {

  const [selectedFilter, setSelectedFilter] = useState('all')
  const [tableData, setTableData] = useState<TableItemType[]>([])

  const handleSearchData = (event: ChangeEvent<HTMLInputElement>) => {
    const searchValue = event.target.value

    getData(selectedFilter, searchValue).then((response) => {
      setTableData(response)
    })
  }

  const handleFilter = (value: string) => {
    setSelectedFilter(value)
  }

  useEffect(() => {

    if(selectedFilter === 'all') {
      handleGetAllData()
    } else {
      getData(selectedFilter).then((response) => {
        setTableData(response)
      })  
    }
  
  }, [selectedFilter]);

  const handleGetAllData = async () => {
    await axios.all(FILTER_ITEMS.map((item) => getData(item.value))).then((res) => {

      const ALL_DATA: TableItemType[] = [].concat(...res);
      setTableData(ALL_DATA)

    })
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <Grid sx={{pt: 5}}>

      <Divider sx={{width: '100%'}} />

      <Grid container alignItems="center" justifyContent='space-between' sx={{p: 2}}>

        <Grid container flexDirection='column'>
          <Typography sx={{fontSize: 24}}> Welcome back</Typography>
          <Typography sx={{fontSize: 16, color: '#777777'}}> {tableData.length} Records</Typography>
        </Grid>

        <Search handleSearch={handleSearchData} />

        <Stack direction="row" spacing={1}>
          {
            FILTER_ITEMS.map((item) => (
              <Chip label={item.title} variant="outlined" onClick={() => handleFilter(item.value)} key={item.value} color={selectedFilter === item.value ? 'secondary' : 'primary'}/>
            ))
            
          }

          <Chip label={'All'} variant="outlined" onClick={() => handleFilter('all')} color={selectedFilter === 'all' ? 'secondary' : 'primary'}/>

        </Stack>

      </Grid>
      <Divider sx={{width: '100%'}} />

      <Grid sx={{p: 2}}>
        {tableData && <DataTable data={tableData} activeFilter={'all'} />}
      </Grid>
      </Grid>
    </ThemeProvider>
  );
}

export default App;