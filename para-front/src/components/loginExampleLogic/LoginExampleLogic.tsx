// RegisterForm.tsx
import React, { useState, ChangeEvent, FormEvent } from 'react';

const LoginForm: React.FC = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch('/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // Procesar la respuesta exitosa
      } else {
        // Manejar errores de registro
      }
    } catch (error) {
      // Manejar errores de red u otros errores
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="username" value={formData.username} onChange={handleInputChange} />
      <input type="email" name="email" value={formData.email} onChange={handleInputChange} />
      <input type="password" name="password" value={formData.password} onChange={handleInputChange} />
      <button type="submit">Login</button>
    </form>
  );
};

export default LoginForm;