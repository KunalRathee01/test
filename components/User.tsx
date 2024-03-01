"use client"
import React, { useState, useEffect } from "react";
import Loader from "./Loading";

interface Person {
    id: number;
    firstName: string;
    lastName: string;
    maidenName?: string; // Optional property
    age: number;
    gender: string;
  }

const User = () => {
  const [users, setUsers] = useState<Person[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetch("/api/user");
        const user = await data.json();
        setUsers(user.users);
        setLoading(false);

      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
     
      {loading ? (
        <Loader />
      ) : (
        users.map((item) => (
          <h3 className="text-2xl text-600" key={item.id}>
            {item.firstName}  {item.lastName}
          </h3>
        ))
      )}
    </div>
  );
};

export default User;










