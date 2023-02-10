// ** React Imports
import {
  useEffect,
  useRef,
  useState
} from 'react'

import axios from 'axios'
import Swal from 'sweetalert2'
import Select from 'react-select';

// ** MUI Imports
import Grid from '@mui/material/Grid'
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button'

import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableContainer from '@mui/material/TableContainer'

import $ from "jquery";
require("datatables.net");

const ApprovedFarmers = () => {
    $.DataTable = require('datatables.net')
    const tableRef = useRef()
    const [records, setRecords] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);
    const [isClearable, setIsClearable] = useState(true);
    const [isSearchable, setIsSearchable] = useState(true);
    const [isDisabled, setIsDisabled] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [isRtl, setIsRtl] = useState(false);

    const [counties, setCounties] = useState([]);
    const [wards, setWards] = useState([]);
    const [produces, setProduces] = useState([]);
    const [farmTypes, setFarmTypes] = useState([]);
    const [selectedCounty, setSelectedCounty] = useState("");
    const [selectedWard, setSelectedWard] = useState("");
    const [selectedProduce, setSelectedProduce] = useState("");
    const [selectedFarmType, setSelectedFarmType] = useState("");

    const loadFarmersData = () => {
      if(!isLoaded) {
        axios.get('http://localhost/api/farmers?filter=status&value=Approved').then(res => 
        {
          setRecords(res.data.data);
          loadTableData(res.data.data);
          loadFilterData()
        });
      }
    }

    const searchFarmers = (term) => {
      if(term != undefined) {
        setIsLoaded(false);
        axios.get('http://localhost/api/farmers?filter=status&value=Approved&search='+term).then(res => 
        {
          setRecords(res.data.data);
          loadTableData();
        });
      }
    }

    const orderFarmers = (column) => {
      if(column != undefined) {
        setIsLoaded(false);
        axios.get('http://localhost/api/farmers?filter=status&value=Approved&column='+column).then(res => 
        {
          setRecords(res.data.data);
          loadTableData();
        });
      }
    }

    const pageFarmers = (start, end) => {
      setIsLoaded(false);
      axios.get('http://localhost/api/farmers?filter=status&value=Approved&start='+start+'&end='+end).then(res => 
      {
        setRecords(res.data.data);
        loadTableData();
      });
    }

    const loadFilterData = () => {
        axios.get('http://localhost/api/counties').then(res => 
        {
            let value = [];
            res.data.data.forEach(record => {
                value.push({'value': record.id, 'label': record.county_name})
            })
            setCounties(value);
            if(value.length > 0) {
                refreshWards(value[0].value)
            }
        });
        axios.get('http://localhost/api/produces').then(res => 
        {
            let value = [];
            res.data.data.forEach(record => {
                value.push({'value': record.id, 'label': record.produce_name})
            })
            setProduces(value);
        });
        axios.get('http://localhost/api/farm-types').then(res => 
        {
            let value = [];
            res.data.data.forEach(record => {
                value.push({'value': record.id, 'label': record.farm_type_name})
            })
            setFarmTypes(value);
        });
    }

    const refreshWards = (selectedCounty) => {
        axios.get('http://localhost/api/wards?county_id='+ selectedCounty).then(res => 
        {
            let value = [];
            res.data.data.forEach(record => {
                value.push({'value': record.id, 'label': record.ward_name})
            })
            setWards(value);
        });
    }

  const loadTableData = (values = []) => {
    const table = $(tableRef.current)
    .on('order.dt', function (type) {
      orderFarmers(type.data);
    })
    .on('search.dt', function (type) {
      searchFarmers(type.data);
    })
    .on('page.dt', function (type) {
      console.log(type);
    }).DataTable({
        data: values,
        columns: [
            {sortable: false},
            { title: "ID", data: "id" },
            { title: "National ID", data: "national_id"},
            { title: "First Name", data: "first_name"},
            { title: "Last Name", data: "last_name" },
            { title: "Email", data: "email"},
            { title: "Gender", data: "gender" },
            { title: "DOB", data: "dob"},
            { title: "Phone", data: "phone" },
            { title: "County", data: "county" },
            { title: "Ward", data: "ward" },
            { title: "Village", data: "village" },
            { title: "Status", data: "status" },
            { title: "Farm Type", data: "farm_type" } 
        ],
        destroy: true,
        pagingType: "full_numbers",
        pageLength: 20,
        processing: true,
        dom: "Bfrtip",
        select: {
          style:    'os',
          selector: 'td:first-child'
        },
        "language": {
            // Add loading image <img src="loader.gif" /> tag, or simple text
            "processing": "Please wait for the response..."
        },
        buttons: [
          {
            text: 'Select all',
            action: function () {
                table.rows().select();
            }
          },
          {
              text: 'Select none',
              action: function () {
                  table.rows().deselect();
              }
          },
          {
            extend: "pageLength",
            className: "MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeLarge MuiButton-containedSizeLarge MuiButtonBase-root",
          },
          {
            extend: "copy",
            className: "btn btn-secondary bg-secondary",
          },
          {
            extend: "csv",
            className: "btn btn-secondary bg-secondary",
          },
          {
            extend: "print",
            customize: function (win) {
              $(win.document.body).css("font-size", "10pt");
              $(win.document.body)
                .find("table")
                .addClass("compact")
                .css("font-size", "inherit");
            },
            className: "btn btn-secondary bg-secondary",
          },
        ],

        fnRowCallback: function (
          nRow,
          aData,
          iDisplayIndex,
          iDisplayIndexFull
        ) {
          var index = iDisplayIndexFull + 1;
          $("td:first", nRow).html(index);
          return nRow;
        },

        lengthMenu: [
          [10, 20, 30, 50, -1],
          [10, 20, 30, 50, "All"],
        ],
        columnDefs: [{
          targets: 0,
          orderable: false,
          className: 'select-checkbox',
          render: function (data, type, row, meta) {
            return type === "export" ? meta.row + 1 : data;
          },
        },
        {
            defaultContent: " ",
            targets: "_all"
        }],
      });
      return function() {
        console.log("Table destroyed")
        // table.destroy()
        setIsLoaded(true);
    }

  }

  useEffect(() => {
      loadFarmersData();
    
  }, [])

  return ( <CardContent >
    <form>
        <Grid container spacing = { 7} >
            <Grid item xs={12} md={3} lg={3} >
                <Select
                    className="basic-single"
                    classNamePrefix="select"
                    defaultValue={selectedCounty}
                    isDisabled={isDisabled}
                    isLoading={isLoading}
                    isClearable={isClearable}
                    isRtl={isRtl}
                    isSearchable={isSearchable}
                    name="counties"
                    options={counties}
                    placeholder={<div>Select County</div>}
                />
            </Grid>
            <Grid item xs={12} md={3} lg={3} >
                <Select
                    className="basic-single"
                    classNamePrefix="select"
                    defaultValue={selectedWard}
                    isDisabled={isDisabled}
                    isLoading={isLoading}
                    isClearable={isClearable}
                    isRtl={isRtl}
                    isSearchable={isSearchable}
                    name="wards"
                    options={wards}
                    placeholder={<div>Select Ward</div>}
                />
            </Grid>
            <Grid item xs={12} md={3} lg={3} >
                <Select
                    className="basic-single"
                    classNamePrefix="select"
                    defaultValue={selectedProduce}
                    isDisabled={isDisabled}
                    isLoading={isLoading}
                    isClearable={isClearable}
                    isRtl={isRtl}
                    isSearchable={isSearchable}
                    name="produces"
                    options={produces}
                    placeholder={<div>Select Farm Produce</div>}
                />
            </Grid>
            <Grid item xs={12} md={3} lg={3} >
                <Select
                    className="basic-single"
                    classNamePrefix="select"
                    defaultValue={selectedFarmType}
                    isDisabled={isDisabled}
                    isLoading={isLoading}
                    isClearable={isClearable}
                    isRtl={isRtl}
                    isSearchable={isSearchable}
                    name="farmtypes"
                    options={farmTypes}
                    placeholder={<div>Select Farm Types</div>}
                />
            </Grid>
            <Grid item xs={12} md={2} lg={2} >
                <Button
                    fullWidth
                    size='large'
                    sx={{marginBottom: 7}}
                    variant="contained"
                    color='primary'
                >Search</Button>
            </Grid>
        </Grid>
        </form>
        <Grid container spacing = { 7} >
            <Grid item xs = { 12 } >
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} className="display" width="100%" ref={ tableRef }>
                    
                </Table>
                </TableContainer>
            </Grid> 
        </Grid>     
    </CardContent>
  )
}

export default ApprovedFarmers;
