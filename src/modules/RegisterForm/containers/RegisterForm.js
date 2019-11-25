import { Formik, withFormik } from "formik";
import RegisterForm from "../components/RegisterForm";
import validationForm from "../../../utils/validation";
export default withFormik({
  enableReinitialize: true,
  mapPropsToValues: () => ({ email: "", password: "", password2: "",name: "" }),
  validate: values => {
    let errors = {};
    validationForm({ isAuth: false, values, errors });

    return errors;
  },

  handleSubmit: (values, { setSubmitting }) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 1000);
  },

  displayName: "RegisterForm"
})(RegisterForm);
