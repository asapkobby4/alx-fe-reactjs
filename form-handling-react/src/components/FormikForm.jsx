import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object({
  username: Yup.string().required("Username is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string().min(6, "At least 6 characters").required("Password is required"),
});

function FormikForm() {
  return (
    <Formik
      initialValues={{ username: "", email: "", password: "" }}
      validationSchema={validationSchema}
      onSubmit={async (values, { resetForm }) => {
        try {
          const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
            method: "POST",
            body: JSON.stringify(values),
            headers: { "Content-type": "application/json; charset=UTF-8" },
          });

          const data = await res.json();
          console.log("User registered (Formik):", data);
          alert("Registration successful with Formik!");
          resetForm();
        } catch (err) {
          console.error("Error:", err);
        }
      }}
    >
      {() => (
        <Form className="flex flex-col gap-4 max-w-sm mx-auto">
          <h2 className="text-xl font-bold">Formik Registration Form</h2>

          <div>
            <Field name="username" placeholder="Username" className="border p-2 rounded w-full" />
            <ErrorMessage name="username" component="p" className="text-red-500" />
          </div>

          <div>
            <Field name="email" type="email" placeholder="Email" className="border p-2 rounded w-full" />
            <ErrorMessage name="email" component="p" className="text-red-500" />
          </div>

          <div>
            <Field name="password" type="password" placeholder="Password" className="border p-2 rounded w-full" />
            <ErrorMessage name="password" component="p" className="text-red-500" />
          </div>

          <button type="submit" className="bg-green-600 text-white p-2 rounded">
            Register
          </button>
        </Form>
      )}
    </Formik>
  );
}

export default FormikForm;
