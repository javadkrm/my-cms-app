import React, { useState } from 'react';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './NewUsers.css'

export default function UsersForm() {

  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const clearInputs = () => {
    setFirstName('')
    setLastName('')
    setEmail('')
    setError('')
  }

  const submitHandler = async (e) => {
    e.preventDefault();

    if (!firstName.trim() || !lastName.trim() || !email.trim()) {
      setError("Please fill all fields");
      return;
    }

    const newUserData = { firstName, lastName, email };

    try {
      setLoading(true);
      setError("");

      const res = await fetch(`https://cms-persian-default-rtdb.firebaseio.com/users.json?auth=${process.env.REACT_APP_FIREBASE_API_KEY}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newUserData),
      });

      if (!res.ok) throw new Error(`HTTP Error ${res.status}`);

      const data = await res.json();
      console.log("User saved:", data);
      clearInputs();
    } catch (err) {
      console.error(err);
      setError("خطا در ذخیره اطلاعات.");
    } finally {
      setLoading(false);
    }
  };



  return (
    <Form className='form' onSubmit={submitHandler}>
      <Form.Group className="mb-3" controlId="formFirstName">
        <Form.Label>First Name</Form.Label>
        <Form.Control type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} placeholder="نام " />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Last Name</Form.Label>
        <Form.Control type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} placeholder="نام خانوادگی " />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="ایمیل" />
      </Form.Group>
      {error && (
        <div className="alert alert-danger" role="alert" style={{ marginBottom: '1rem' }}>
          {error}
        </div>
      )}
      <Button
        variant="primary"
        type="submit"
        disabled={loading}
      >
        {loading ? 'در حال ارسال...' : 'ثبت'}
      </Button>
    </Form>
  );
}
