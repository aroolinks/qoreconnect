import React, { useEffect, useState } from 'react';
import axios from 'axios';

import {
  TextField,
  Box,
  Typography,
  FormControl,
  Input,
  InputLabel,
  FormHelperText,
  Button,
  MenuItem,
} from '@mui/material/';
const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};
const databases = [
  { value: 'mysql', label: 'My SQL' },
  { value: 'REDSHIFT', label: 'REDSHIFT' },
  { value: 'ORACLE', label: 'ORACLE' },
];
const sourceTypeNames = [
  { value: 'CSV', label: 'CSV' },
  { value: 'JSON', label: 'JSON' },
  { value: 'XML', label: 'XML' },
  { value: 'SQL', label: 'SQL' },
  { value: 'EXCEL', label: 'EXCEL' },
  { value: 'DATABASE', label: 'DATABASE' },
];

function Home() {
  const [connectionData, setConnectionData] = useState({
    source_type: '',
    source_name: '',
    ip_address: '',
    db_port: '',
    db_user: '',
    db_password: '',
    db_schema: '',
    db_name: '',
  });
  const [connectionName, setConnectionName] = useState('');
  const [successMessage, setSuccessMessage] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [dbCollection, setDbCollection] = useState(['mysql', 'redshift']);
  const [database, setDatabase] = React.useState('');
  const [sourceNameList, setSourceNameList] = React.useState([]);
  const [sourceType, setSourceType] = React.useState('');

  const handleReset = () => {
    setConnectionData({
      source_type: '',
      source_name: '',
      ip_address: '',
      db_port: '',
      db_user: '',
      db_password: '',
      db_schema: '',
      db_name: '',
    });
    setConnectionName('');
  };

  useEffect(() => {
    setSourceNameList(databases);
  }, []);

  const handleChange = event => {
    setDatabase(event.target.value);
  };

  const handleConnectionSubmit = e => {
    e.preventDefault();
    const body = connectionData;
    console.log(body);
    try {
      axios
        .post(`/v1/db_connection/${connectionName}`, body, {
          headers: {
            'X-User-ID': 1,
            'X-Access-Token': '9GdJaJxa7O0B-mk0fxzYNw',
          },
        })
        .then(response => {
          console.log(response.data);

          checkConnection();
        })
        .catch(error => {
          console.log(error);
        });
    } catch (e) {
      console.log(e);
    }
  };

  const checkConnection = () => {
    try {
      axios
        .get('/v1/db_connection_check', {
          params: {
            connection_name: connectionName,
            inserted_db_password: connectionData.db_password,
          },
          headers: {
            'X-User-ID': 1,
            'X-Access-Token': '9GdJaJxa7O0B-mk0fxzYNw',
          },
        })
        .then(response => {
          if (response.data.status === 'successful') {
            console.log('sdas');
            setSuccessMessage(true);
            setIsModalOpen(true);
          } else {
            setSuccessMessage(false);
            setIsModalOpen(true);
          }

          console.log(response.data);
        })
        .catch(error => {
          console.log(error);
          setSuccessMessage(false);
          setIsModalOpen(true);
        });
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <Box
      width='80%'
      component='form'
      margin={5}
      alignItems='center'
      mx='auto'
      sx={{
        width: { xl: 950, lg: 880, md: 650, sm: 550, xs: 420 },
        m: 2,
        boxShadow: 5,
        p: 3,
        borderRadius: 3,
      }}
      noValidate
      autoComplete='off'
    >
      <Box>
        <Typography variant='h4' m={2}>
          {' '}
          DataBase Connection
        </Typography>
      </Box>
      <Box>
        <TextField
          sx={{ width: { xl: 830, lg: 730, md: 530, sm: 430, xs: 300 }, m: 2 }}
          required
          id='Connection Name'
          label='Connection Name'
          value={connectionName}
          onChange={e => setConnectionName(e.target.value)}
          autoComplete='false'
        />
      </Box>
      <Box>
        <TextField
          sx={{ width: { xl: 400, lg: 350, md: 250, sm: 200, xs: 135 }, m: 2 }}
          required
          id='DB User'
          label='DB User'
          value={connectionData.db_user}
          onChange={e =>
            setConnectionData({ ...connectionData, db_user: e.target.value })
          }
          autoComplete='false'
        />
        <TextField
          sx={{ width: { xl: 400, lg: 350, md: 250, sm: 200, xs: 135 }, m: 2 }}
          required
          id='DB Password'
          label='DB Password'
          value={connectionData.db_password}
          onChange={e =>
            setConnectionData({
              ...connectionData,
              db_password: e.target.value,
            })
          }
          autoComplete='false'
        />
      </Box>
      <Box>
        <TextField
          sx={{ width: { xl: 830, lg: 730, md: 530, sm: 430, xs: 300 }, m: 2 }}
          required
          id='Source Type'
          label='Source Type'
          autoComplete='false'
          select
          value={connectionData.source_type}
          onChange={e =>
            setConnectionData({
              ...connectionData,
              source_type: e.target.value,
            })
          }
          helperText='Please select Source Type'
        >
          {sourceTypeNames.map((sourceTypeName, Index) => (
            <MenuItem key={Index} value={sourceTypeName.value}>
              {sourceTypeName.label}
            </MenuItem>
          ))}
        </TextField>
      </Box>

      <Box>
        <TextField
          sx={{ width: { xl: 400, lg: 350, md: 250, sm: 200, xs: 135 }, m: 2 }}
          required
          select
          id='Source Name'
          label='Source Name'
          value={connectionData.source_name}
          onChange={e =>
            setConnectionData({
              ...connectionData,
              source_name: e.target.value,
            })
          }
          helperText='Please select Database Type'
        >
          {sourceNameList.map((option, index) => {
            return (
              <MenuItem key={index} value={option.value}>
                {option.label}
              </MenuItem>
            );
          })}
        </TextField>

        <TextField
          sx={{ width: { xl: 400, lg: 350, md: 250, sm: 200, xs: 135 }, m: 2 }}
          required
          disabled={connectionData.source_name !== 'mysql' ? false : true}
          id='DB Name'
          label='DB Name'
          value={connectionData.db_name}
          onChange={e => {
            setConnectionData(
              connectionData.source_name !== 'mysql'
                ? { ...connectionData, db_name: e.target.value }
                : null
            );
          }}
          autoComplete='false'
        />
      </Box>
      <Box>
        <TextField
          sx={{ width: { xl: 400, lg: 350, md: 250, sm: 200, xs: 135 }, m: 2 }}
          required
          id='IP Address'
          label='IP Address'
          value={connectionData.ip_address}
          onChange={e =>
            setConnectionData({ ...connectionData, ip_address: e.target.value })
          }
          autoComplete='false'
        />
        <TextField
          sx={{ width: { xl: 400, lg: 350, md: 250, sm: 200, xs: 135 }, m: 2 }}
          required
          id='DB Port'
          label='DB Port'
          value={connectionData.db_port}
          onChange={e =>
            setConnectionData({ ...connectionData, db_port: e.target.value })
          }
          autoComplete='false'
          type={'number'}
        />
      </Box>
      <Box>
        <TextField
          sx={{ width: { xl: 830, lg: 730, md: 530, sm: 430, xs: 300 }, m: 2 }}
          required
          id='DB Schema'
          label='DB Schema'
          value={connectionData.db_schema}
          onChange={e =>
            setConnectionData({ ...connectionData, db_schema: e.target.value })
          }
          autoComplete='false'
        />
      </Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'flex-end',
        }}
      >
        <Button
          size='large'
          variant='contained'
          onClick={handleReset}
          sx={{ m: 1 }}
        >
          Reset
        </Button>
        <Button
          size='large'
          type='submit'
          variant='contained'
          sx={{ m: 1 }}
          onClick={handleConnectionSubmit}
        >
          Submit
        </Button>
      </Box>
    </Box>
  );
}

export default Home;
