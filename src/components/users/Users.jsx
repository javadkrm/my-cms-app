import React, { useState, useEffect } from 'react'
import { Table, Modal, Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

import './Users.css'

export default function Users() {

  const [users, setUsers] = useState([]);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const handleClose = () => setShowEditModal(false);
  const [userToDelete, setUserToDelete] = useState(null);
  const [userId, setUSerId] = useState(null)
  const [deleting, setDeleting] = useState(false);
  const [error, setError] = useState('');
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await fetch('https://cms-persian-default-rtdb.firebaseio.com/users.json');
        const data = await res.json();

        if (data) {
          setUsers(Object.entries(data));
        } else {
          setUsers([]);
        }
      } catch (err) {
        console.error("Error fetching users:", err);
      }
    };

    fetchUsers();
  }, []);

  // open the confirmation modal for a specific user
  const openDeleteModal = (userId) => {
    setUserToDelete(userId);
    setError('');
    setShowDeleteModal(true);
  };

  // called when user confirms deletion in modal
  const confirmDelete = async () => {
    if (!userToDelete) return;
    setDeleting(true);
    setError('');
    try {
      const res = await fetch(`https://cms-persian-default-rtdb.firebaseio.com/users/${userToDelete}.json`, {
        method: 'DELETE'
      });

      if (!res.ok) {
        throw new Error(`Delete failed with status ${res.status}`);
      }

      // remove locally
      setUsers(prev => prev.filter(user => user[0] !== userToDelete));
      // close modal and clear selection
      setShowDeleteModal(false);
      setUserToDelete(null);
    } catch (err) {
      console.error('Error deleting user:', err);
      setError('خطا در حذف کاربر. لطفا دوباره تلاش کنید.');
    } finally {
      setDeleting(false);
    }
  };

  const editUser = () => {
    console.log('edited');
  }

  const userEditHandler = async () => {
    try {
      let userNewInfo = {
        firstName,
        lastName,
        email
      }

      const response = await fetch(`https://cms-persian-default-rtdb.firebaseio.com/users/${userId}.json`, {
        method: "PUT",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userNewInfo),
      });

      if (!response.ok) {
        throw new Error(`Edit failed with status ${response.status}`);
      }

      const updatedData = await response.json();

      setUsers(prev => prev.map(user =>
        user[0] === userId ? [userId, userNewInfo] : user
      ));

      setShowEditModal(false);
    } catch (err) {
      console.error('Error updating user:', err);
      setError('خطا در بروزرسانی اطلاعات. لطفا دوباره تلاش کنید.');
    }
  }

  return (
    <div className='usersContainer'>
      <Table striped hover>
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
              <tr key={user[0]}>
                <td>{index + 1}</td>
                <td>{user[1].firstName}</td>
                <td>{user[1].lastName}</td>
                <td>{user[1].email}</td>
                <td className='actions'>
                  <button onClick={() => openDeleteModal(user[0])} className='deleteBtn actionBtn'>
                    <DeleteIcon />
                  </button>
                  <button onClick={() => {
                    setShowEditModal(true)
                    setUSerId(user[0])
                  }} className='editBtn actionBtn'>
                    <EditIcon />
                  </button>
                </td>
              </tr>
          ))}
        </tbody>
      </Table>
      {/* Delete modal */}
      <Modal
        show={showDeleteModal}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Remove User
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Remove User</h4>
          <p>
            آیا از حذف کاربر اطمینان دارید ؟
          </p>
          {error && (
            <div className="text-danger" style={{ marginTop: 8 }}>{error}</div>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={() => { setShowDeleteModal(false); setUserToDelete(null); setError(''); }} disabled={deleting}>Close</Button>
          <Button variant="danger" onClick={confirmDelete} disabled={deleting}>
            {deleting ? 'در حال حذف...' : 'Yes'}
          </Button>
        </Modal.Footer>
        {/* Edit modal */}
      </Modal>
      <Modal show={showEditModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit User Information</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter New First Name"
                autoFocus
                onChange={(event) => setFirstName(event.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter New Last Name"
                autoFocus
                onChange={(event) => setLastName(event.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="name@example.com"
                autoFocus
                onChange={(event) => setEmail(event.target.value)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={() => userEditHandler()}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
