import { useState } from "react"
import { useAuth } from "../../context/AuthContext"
import { useNavigate } from "react-router-dom"
import "./Login.css"

export const Login = () => {
  const { login } = useAuth()
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  })

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    await login(formData.email, formData.password);
    console.log("Login exitoso");
    setTimeout(() => {
      navigate("/admin", { replace: true });
    }, 500);
  } catch (error) {
    console.error(error);
    alert("Error al iniciar sesión");
  }
}

  return (
    <form onSubmit={handleSubmit} className="login-form">
      <h2>Iniciar sesión</h2>
      <div className="form-group">
        <label>Email</label>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label>Password</label>
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
        />
      </div>
      <button type="submit">Login</button>
    </form>
  );
}