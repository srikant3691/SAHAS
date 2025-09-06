import React, { useState } from "react";

export default function Main() {

  const handleSubmit = (e) => {
    e.preventDefault();
    // For now just log values, later you can connect to backend
    console.log("Email:", email);
    console.log("Password:", password);
    alert(`Logged in as ${email}`);
  };

  return (
    <div className="bg-gray-100 p-4">
        hello India
    </div>
  );
}

