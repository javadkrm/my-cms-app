import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './MainUser.css';

export default function MainUser() {
  const [usersData, setUsersData] = useState([]);
  const [loading, setLoading] = useState(true);
  const params = useParams();

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
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  if (loading) return <div>Loading...</div>;

  const MainUserData = usersData.find(user => user.id === params.id);

  if (!MainUserData) return <div>User not found.</div>;

  return (
    <div className="main-user-container">
      <h2>{MainUserData.firstName} {MainUserData.lastName}</h2>
      <p><strong>Email:</strong> {MainUserData.email}</p>
      <p><strong>ID:</strong> {MainUserData.id}</p>
    </div>
  );
}

