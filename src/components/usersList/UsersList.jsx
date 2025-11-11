import React, { useState, useEffect } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';
import './UsersList.css';
import { Link } from 'react-router-dom';

import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

export default function UsersList() {
  const [usersData, setUsersData] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await fetch('https://cms-persian-default-rtdb.firebaseio.com/users.json');
        const data = await res.json();

        if (data) {
          const formatted = Object.entries(data).map(([key, value]) => ({
            id: key,
            ...value
          }));

          setUsersData(formatted);
        } else {
          setUsersData([]);
        }
      } catch (err) {
        console.error('Error fetching users:', err);
      }
    };

    fetchUsers();
  }, []);

  const editHandler = () => {

  }

 const removeHandler = async (userId) => {
  try {
    const res = await fetch(`https://cms-persian-default-rtdb.firebaseio.com/users/${userId}.json`, {
      method: 'DELETE'
    });

    if (!res.ok) {
      throw new Error(`Delete failed with status ${res.status}`);
    }

    setUsersData(prev => {
      const updated = prev.filter(user => user.id !== userId);
      return [...updated]; 
    });

  } catch (err) {
    console.error('Error deleting user:', err);
  }
};


  const columns = [
    {
      field: 'firstName',
      headerName: 'First Name',
      width: 130,
      renderCell: (params) => {
        return (

          <div className='userName'>
            <Link to={`/users/${params.row.id}`}>
              {params.row.firstName}
            </Link>
          </div>
        )
      }
    },
    { field: 'lastName', headerName: 'Last Name', width: 130 },
    { field: 'email', headerName: 'Email Address', width: 130 },
    {
      field: 'fullName',
      headerName: 'Full Name',
      width: 160,
      sortable: false,
      renderCell: (params) => {
        return (`${params.row.firstName} ${params.row.lastName}`)
      },
    },
    {
      field: 'Action',
      renderCell: (params) => {
        return (
          <div className='actionWrapper'>
            <Link to={`/users/${params.row.id}`}>
              <button className='editBtn' onClick={editHandler}>
                <EditIcon />
              </button>
            </Link>
            <button
              className='deleteBtn'
              onClick={() => removeHandler(params.row.id)}>
              <DeleteIcon />
            </button>
          </div>
        )
      }
    }
  ];

  const paginationModel = { page: 0, pageSize: 5 };

  return (
    <div className="usersListContainer">
      <Paper sx={{ height: 400, width: '100%' }}>
        <DataGrid
          rows={usersData}
          columns={columns}
          initialState={{ pagination: { paginationModel } }}
          pageSizeOptions={[5, 10]}
          checkboxSelection
          sx={{ border: 0 }}
        />
      </Paper>
    </div>
  );
}
