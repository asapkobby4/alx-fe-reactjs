import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

// ✅ Yup validation schema
const validationSchema = Yup.object({
  username: Yup.string().required("Username is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string().required("Password is required"),
});

function FormikForm() {
  const handleSubmit = async (values, { resetForm }) => {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        body: JSON.stringify(values),
        headers: { "Content-type": "application/json; charset=UTF-8" },
      });

      const data = await res.json();
      console.log("User registered (Formik):", data);
      alert("Registration successful!");

      resetForm();
    } catch (err) {
      console.error("Error:", err);
    }
  };

  return (
    <Formik
      initialValues={{ username: "", email: "", password: "" }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form className="flex flex-col gap-4 max-w-sm mx-auto">
        <h2 className="text-xl font-bold">Formik Registration Form</h2>

        <div>
          <Field
            type="text"
            name="username"
            placeholder="Username"
            className="border p-2 rounded w-full"
          />
          <ErrorMessage name="username" component="p" className="text-red-500" />
        </div>

        <div>
          <Field
            type="email"
            name="email"
            placeholder="Email"
            className="border p-2 rounded w-full"
          />
          <ErrorMessage name="email" component="p" className="text-red-500" />
        </div>

        <div>
          <Field
            type="password"
            name="password"
            placeholder="Password"
            className="border p-2 rounded w-full"
          />
          <ErrorMessage name="password" component="p" className="text-red-500" />
        </div>

        <button type="submit" className="bg-green-600 text-white p-2 rounded">
          Register
        </button>
      </Form>
    </Formik>
  );
}

export default FormikForm;
