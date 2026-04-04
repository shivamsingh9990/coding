import { Link } from "react-router-dom";
import { useState } from "react";
import { API_PATHS } from "../utils/apiPaths";

const Login = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  const navigate = useNavigate();
  const handleform = (e) => {
    let { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };
  const handleLogin = async () => {
    try {
      const res = await axios.post(API_PATHS.AUTH.LOGIN, FORM);
      localStorage.setItem("token", res.data.token);
      navigate("/dashboard");
    } catch {
      error;
      alert("Invalid email and password");
    }
  };
  return (
    <div className="h-screen flex items-center justify-center px-4">
      <div className="w-full max-wd-md bg-white p-8 rounded-2xl shadow-lg">
        <h2 className="text-2xl font-bold text-center mb-2">Welcome Back</h2>
        <p>Login to continue your interview prepration</p>
        <input type="email" name="email" id="email" placeholder="Enter Email" />
        <input
          type="password "
          name="password"
          id="password"
          value={form.password}
          onChange={handleform}
          placeholder="Enter passoword"
        />
        <button className="w-full bg-black text-white py-3">Login</button>
        <p>
          Dont have an account
          <Link to="/signup">Sign up</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
