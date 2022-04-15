import { useEffect } from "react";
import { Form, Formik, FormikHelpers, useFormikContext } from "formik";
import * as Yup from "yup";
import { UltrasoundFormValues as Values } from "types";
import Fields from "./FormFields";

function Submit() {
  const formik = useFormikContext<Values>();
  const { isValid, submitForm, values, setFieldValue } = formik;
  useEffect(() => {
    if (values.type === "consonant") {
      setFieldValue("vowel", "");
    } else if (values.type === "vowel") {
      setFieldValue("consonant", "");
    }

    const can_submit =
      values.type !== "" && values[values.type] !== "" && isValid;

    if (can_submit) {
      submitForm();
    }
  }, [values]);
  return null;
}

function UltrasoundForm() {
  const initialValue: Values = {
    language: "",
    type: "",
    vowel: "",
    consonant: "",
  };

  const onSubmit = (values: Values, actions: FormikHelpers<Values>) => {
    console.log(values);
    setTimeout(() => actions.setSubmitting(false), 2000);
  };

  const validationSchema = Yup.object({
    language: Yup.string().required("必填").nullable(),
    type: Yup.string().required("必填"),
    vowel: Yup.string().nullable(),
    consonant: Yup.string().nullable(),
  });

  return (
    <Formik
      initialValues={initialValue}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
      enableReinitialize
    >
      <Form>
        <Fields />
        <Submit />
      </Form>
    </Formik>
  );
}

export default UltrasoundForm;
