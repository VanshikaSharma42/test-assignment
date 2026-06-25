import { useForm } from "react-hook-form";

export function useContactForm() {
  const form = useForm({
    mode: "onBlur",
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = async (data) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log(data);
    form.reset();
  };

  return {
    ...form,
    onSubmit,
  };
}