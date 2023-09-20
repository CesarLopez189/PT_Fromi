"use client"; // Marca este archivo como un componente de cliente

import React, { useState, useEffect } from "react";
import UserCard from "@/components/UserCard";

async function fetchUsers() {
  const res = await fetch(
    "https://gyl716q9ce.execute-api.us-east-1.amazonaws.com/dev/prueba"
  );
  const data = await res.json();
  return data;
}

function Homepage() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const fetchedUsers = await fetchUsers();
      setUsers(fetchedUsers);
    }

    fetchData();
  }, []);

  // Asegúrate de que las URLs de las imágenes utilicen HTTPS
const usersWithSecureImageUrls = users.map((user) => {
  if (user && user.imageUrl) {
    const secureImageUrl = user.imageUrl.replace("http://", "https://");
    return {
      ...user,
      imageUrl: secureImageUrl,
    };
  } else {
    return user; // Devolver el usuario sin cambios si no tiene imageUrl
  }
});


  return <UserCard users={usersWithSecureImageUrls} />;
}

export default Homepage;
