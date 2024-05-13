import { Formik, Form, Field, ErrorMessage } from "formik";
import { Button } from "react-bootstrap";
import ReactSelect from "react-select";
import { Editor } from "@tinymce/tinymce-react";
import * as Yup from "yup";
import { submitJobApplication } from "../redux/actions";
import { useDispatch } from "react-redux";

const ApplyJobForm = () => {
  const dispatch = useDispatch();

  const skillsOptions = [
    { value: "javascript", label: "JavaScript" },
    { value: "react", label: "React" },
    { value: "python", label: "Python" },
    { value: "angular", label: "Angular" },
    { value: "vue", label: "Vue" },
    { value: "typescript", label: "typescript" },
  ];

  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    skills: [],
    aboutMe: "",
  };

  const validationSchema = Yup.object().shape({
    firstName: Yup.string().required("First Name is required"),
    lastName: Yup.string().required("Last Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    skills: Yup.array().min(1, "At least one skill is required"),
    aboutMe: Yup.string().required("About Me is required"),
  });

  const handleAboutMeChange = (content, setFieldValue) => {
    setFieldValue("aboutMe", content);
  };

  const handleSubmit = (values, {resetForm, setSubmitting, setFieldValue }) => {
    // Dispatch the submitJobApplication action with form values
    dispatch(submitJobApplication(values));
    console.log("Form values:", values); // Log form values to the console
    resetForm(); // Reset the form values to their initial state
    setFieldValue("aboutMe", "");
    setSubmitting(false);
  };

  return (
    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
      {({ isSubmitting, setFieldValue }) => (
        <Form>
          <div className="mb-3">
            <label htmlFor="firstName" className="form-label">First Name</label>
            <Field type="text" className="form-control" id="firstName" name="firstName" />
            <ErrorMessage name="firstName" component="div" className="text-danger" />
          </div>
          <div className="mb-3">
            <label htmlFor="lastName" className="form-label">Last Name</label>
            <Field type="text" className="form-control" id="lastName" name="lastName" />
            <ErrorMessage name="lastName" component="div" className="text-danger" />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email</label>
            <Field type="email" className="form-control" id="email" name="email" />
            <ErrorMessage name="email" component="div" className="text-danger" />
          </div>
          <div className="mb-3">
            <label htmlFor="skills" className="form-label">Skills</label>
            <ReactSelect
              id="skills"
              name="skills"
              isMulti
              options={skillsOptions}
              onChange={(selectedOptions) => setFieldValue("skills", selectedOptions)}
              placeholder="Select skills"
            />
            <ErrorMessage name="skills" component="div" className="text-danger" />
          </div>
          <div className="mb-3">
            <label htmlFor="aboutMe" className="form-label">About Me</label>
            <Editor
              apiKey="j08j7qvooxzyj0dbl14z49uua1wdtwuns641mpy9sh5u8i3s"
              initialValue=""
              init={{
                height: 200,
                menubar: false,
                plugins: [
                  "advlist autolink lists link image charmap print preview anchor",
                  "searchreplace visualblocks code fullscreen",
                  "insertdatetime media table paste code help wordcount",
                ],
                toolbar:
                  "undo redo | formatselect | bold italic backcolor | \
                  alignleft aligncenter alignright alignjustify | \
                  bullist numlist outdent indent | removeformat | help",
              }}
              onEditorChange={(content) => handleAboutMeChange(content, setFieldValue)}
            />
            <ErrorMessage name="aboutMe" component="div" className="text-danger" />
          </div>
          <Button type="submit" variant="primary" disabled={isSubmitting}>Submit</Button>
        </Form>
      )}
    </Formik>
  );
};

export default ApplyJobForm;
