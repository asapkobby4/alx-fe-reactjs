import RegistrationForm from "./components/RegistrationForm";
import FormikForm from "./components/formikForm. js";

function App() {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <h1 className="text-3xl font-bold text-center mb-8">React Form Handling</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {/* Controlled Components Form */}
        <div className="bg-white shadow-md p-6 rounded-lg">
          <RegistrationForm />
        </div>

        {/* Formik + Yup Form */}
        <div className="bg-white shadow-md p-6 rounded-lg">
          <FormikForm />
        </div>
      </div>
    </div>
  );
}

export default App;
