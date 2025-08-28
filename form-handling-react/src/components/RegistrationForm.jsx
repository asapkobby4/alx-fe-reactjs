import { useState } from "react";

function RegistrationForm() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();
    let validationErrors = {};


    setErrors(validationErrors);

    // stop if any errors
    if (Object.keys(validationErrors).length > 0) {
      return;
    }

    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        body: JSON.stringify({ username, email, password }),
        headers: { "Content-type": "application/json; charset=UTF-8" },
      });

      const data = await res.json();
      console.log("User registered (Controlled Form):", data);
      alert("Registration successful!");

      // reset fields
      setUsername("");
      setEmail("");
      setPassword("");
      setErrors({});
    } catch (err) {
      console.error("Error:", err);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 max-w-sm mx-auto">
      <h2 className="text-xl font-bold">Controlled Registration Form</h2>

      <div>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="border p-2 rounded w-full"
        />
        {errors.username && <p className="text-red-500">{errors.username}</p>}
      </div>

      <div>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border p-2 rounded w-full"
        />
        {errors.email && <p className="text-red-500">{errors.email}</p>}
      </div>

      <div>
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border p-2 rounded w-full"
        />
        {errors.password && <p className="text-red-500">{errors.password}</p>}
      </div>

      <button type="submit" className="bg-blue-600 text-white p-2 rounded">
        Register
      </button>
    </form>
  );
}

export default RegistrationForm;
