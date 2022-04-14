import UltrasoundForm from "@components/UltrasoundForm";
import { Divider } from "@mantine/core";
const Repository = () => {
  return (
    <>
      <UltrasoundForm />
      <Divider
        sx={{
          marginTop: "2rem",
          marginBottom: "1rem",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      />
    </>
  ); 
};

export default Repository;
