import React, { useState, useEffect } from "react";
import { Button, ListGroup } from "react-bootstrap";
import { getUsers } from './../../api/api';


const UserList: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);

  const fetchUsers = async () => {
    try {
      const response = await getUsers()
      setUsers(response.data);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };
  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div>
      <h2>Users</h2>

      {users && <ListGroup data-testid="usersList">
        {users.map((user) => (

          <ListGroup.Item key={user.id} action className="usersList" data-testid="userItem" >
            <div className="userInfo">{user.name}
              <a href={`/user/${user.id.toString()}`}>
                <Button>Details</Button>
              </a>
            </div>
          </ListGroup.Item>

        ))}
      </ListGroup>}
    </div >
  );
};

type User = {
  id: number;
  name: string;
}

export default UserList;
