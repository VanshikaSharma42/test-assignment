import Button from "./ui/Button";
import InputField from "./ui/InputField";
import Textarea from "./ui/Textarea";
import { useContactForm } from "../hooks/useContactForm";

const contactFields = [
  {
    name: "name",
    label: "Full Name",
    type: "text",
    placeholder: "Enter your name",
    rules: {
      required: "Name is required",
      minLength: {
        value: 3,
        message: "Name must be at least 3 characters",
      },
    },
  },
  {
    name: "email",
    label: "Email Address",
    type: "email",
    placeholder: "Enter your email",
    rules: {
      required: "Email is required",
      pattern: {
        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        message: "Enter a valid email address",
      },
    },
  },
  {
    name: "subject",
    label: "Subject",
    type: "text",
    placeholder: "Enter subject",
    rules: {
      required: "Subject is required",
      minLength: {
        value: 5,
        message: "Subject must be at least 5 characters",
      },
    },
  },
];

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    onSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useContactForm();

  return (
    <section className="min-h-screen bg-[#050505] px-4 py-20 text-white">
      <div className="mx-auto max-w-5xl">
        <div className="mb-10 text-center">
          <p className="mb-3 text-sm uppercase tracking-[0.3em] text-cyan-400">
            Contact
          </p>

          <h2 className="text-4xl font-light md:text-6xl">Get in Touch</h2>

          <p className="mx-auto mt-4 max-w-xl text-white/50">
            Have a project, question, or opportunity? Send a message and I will
            get back to you.
          </p>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="mx-auto max-w-2xl space-y-6 rounded-3xl border border-white/10 bg-white/[0.03] p-6 shadow-2xl backdrop-blur md:p-8"
        >
          {contactFields.map((field) => (
            <InputField
              key={field.name}
              {...field}
              register={register}
              error={errors[field.name]}
            />
          ))}

          <Textarea
            label="Message"
            name="message"
            placeholder="Write your message..."
            register={register}
            rules={{
              required: "Message is required",
              minLength: {
                value: 10,
                message: "Message must be at least 10 characters",
              },
            }}
            error={errors.message}
          />

          {isSubmitSuccessful && (
            <p className="rounded-xl border border-green-400/30 bg-green-400/10 px-4 py-3 text-sm text-green-300">
              Message sent successfully.
            </p>
          )}

          <Button type="submit" loading={isSubmitting}>
            Send Message
          </Button>
        </form>
      </div>
    </section>
  );
}