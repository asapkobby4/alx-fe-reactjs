import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

function FormikForm() {
  const initialValues = { username: "", email: "", password: "" };

  const validationSchema = Yup.object({
    username: Yup.string().required("Username is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
  });

  const handleSubmit = (values) => {
    console.log("Form submitted:", values);
    // mock API call
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify(values),
      headers: { "Content-type": "application/json; charset=UTF-8" },
    }).then((res) => res.json()).then((data) => console.log("API Response:", data));
  };

  return (
    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
      <Form className="flex flex-col gap-4">
        <div>
          <label>Username</label>
          <Field name="username" type="text" className="border p-2 w-full" />
          <ErrorMessage name="username" component="div" className="text-red-500 text-sm" />
        </div>

        <div>
          <label>Email</label>
          <Field name="email" type="email" className="border p-2 w-full" />
          <ErrorMessage name="email" component="div" className="text-red-500 text-sm" />
        </div>

        <div>
          <label>Password</label>
          <Field name="password" type="password" className="border p-2 w-full" />
          <ErrorMessage name="password" component="div" className="text-red-500 text-sm" />
        </div>

        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
          Register
        </button>
      </Form>
    </Formik>
  );
}

export default FormikForm;
