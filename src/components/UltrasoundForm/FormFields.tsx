import { ControllerProps } from "types";
import FormikController from "@components/Formik/FormikController";
import { Grid, Title, SelectItem } from "@mantine/core";
import { useFormikContext } from "formik";
import {
  consonantMandarinOptions,
  consonantSquliqOptions,
  vowelMandarinOptions,
  vowelSquliqOptions,
  languageOptions,
  typeOptions,
} from "./Option";

import { UltrasoundFormValues as Values } from "types";

function handleOptions(language: string, type: string): SelectItem[] {
  switch (language) {
    case "mandarin-taiwan":
      if (type === "consonant") {
        return consonantMandarinOptions;
      }
      return vowelMandarinOptions;
    case "mandarin-mainland":
      if (type === "consonant") {
        return consonantMandarinOptions;
      }
      return vowelMandarinOptions;
    case "squliq-atayal":
      if (type === "consonant") {
        return consonantSquliqOptions;
      }
      return vowelSquliqOptions;
    default:
      return [];
  }
}

export default function Fields() {
  const formik = useFormikContext<Values>();

  const fields: ControllerProps[] = [
    {
      control: "select",
      name: "language",
      label: "Language",
      options: languageOptions,
      placeholder: "Select a language",
      size: "lg",
      required: true,
      onChange: (value) => {
        formik.setFieldValue("vowel", "");
        formik.setFieldValue("consonant", "");
        formik.setFieldValue("language", value);
      },
    },
    {
      control: "radio-group",
      name: "type",
      label: "Type",
      wrapperProps: { size: "lg" },
      options: typeOptions,
      required: true,
      orientation: "vertical",
      size: "md",
      __hide: formik.values.language === "" || formik.values.language == null,
    },
    {
      control: "select",
      name: "consonant",
      label: "Consonant",
      options: handleOptions(formik.values.language, formik.values.type),
      size: "lg",
      placeholder: "Select a symbol",
      required: true,
      __hide:
        formik.values.type !== "consonant" ||
        formik.values.language === "" ||
        formik.values.language == null,
    },
    {
      control: "select",
      name: "vowel",
      label: "Vowel",
      size: "lg",
      placeholder: "Select a symbol",
      required: true,
      options: handleOptions(formik.values.language, formik.values.type),
      __hide:
        formik.values.type !== "vowel" ||
        formik.values.language === "" ||
        formik.values.language == null,
    },
  ];

  return (
    <Grid justify="center" gutter="xl" mt={15}>
      <Grid.Col xs={10} sm={10} md={10} lg={10}>
        <Title order={1} align="center">
          NTU Ultrasound Repository
        </Title>
      </Grid.Col>
      {fields.map((field, index) => {
        if (!field.__hide) {
          delete field.__hide;
          return (
            <Grid.Col
              xs={12}
              sm={12}
              md={12}
              lg={12}
              key={`${field.name}_${index}`}
            >
              <FormikController {...field} />
            </Grid.Col>
          );
        }
      })}
    </Grid>
  );
}
