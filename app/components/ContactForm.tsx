"use client";
import { ChangeEvent, FormEvent, useState } from "react";
import { IFormData, IFormErrors } from "../types/interfaceForm";

export default function ContactForm() {
  const [formData, setFormData] = useState<IFormData>({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submitSuccess, setSubmitSuccess] = useState<boolean | null>(null);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [errors, setErrors] = useState<IFormErrors>({});

    const validateForm = (): boolean => {
        const newErrors: IFormErrors = {};
        if (!formData.name.trim()) {
            newErrors.name = 'Name is required';
        }
        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
        }
        if (!formData.message.trim()) {
            newErrors.message = 'Message is required';
        }
        setErrors(newErrors);
        setIsSubmitting(false);
        return Object.keys(newErrors).length === 0;
        
    };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(null);
      setSubmitSuccess(null);
      if (!validateForm()) return;
    try {
      const resp = await fetch("");
      if (!resp.ok) {
        throw new Error("Failed to submit the form");
      }
      setFormData({ name: "", email: "", message: "" });
      setSubmitSuccess(true);
    } catch (err) {
      setSubmitError(
        err instanceof Error ? err.message : "An unknown error occurred"
      );
      setSubmitSuccess(false);
    }
    setIsSubmitting(false);
  };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    if (errors[name as keyof IFormErrors]) {
      setErrors((prev) => ({
        ...prev,
        [name]: undefined,
      }));
    }
  };

  return (
    <div className='w-full max-w-xl '>
      {/* <h2 className='text-2xl font-bold mb-6 text-dorado-900'>Contact</h2> */}
      {submitSuccess && (
        <div className='mb-6 p-4 bg-green-100 text-green-700 rounded-md'>
          Thank you for your message! I will get back to you soon.
        </div>
      )}
      {submitError && (
        <div className='mb-6 bg-red-100 text-red-700 rounded-md'>
          {submitError}
        </div>
      )}
      <form onSubmit={handleSubmit} className='space-y-6'>
        <div>
          <label
            htmlFor='name'
            className='block text-md font-light text-dorado-900 mb-1'
          >
            Name
          </label>
          <input
            type='text'
            id='name'
            name='name'
            value={formData.name}
            onChange={handleChange}
            className={`w-full py-2 border-b border-dorado-900 focus:outline-none bg-transparent${
              errors.name ? "border-red-500" : "border-dorado-900"
            }`}
            style={{ backgroundColor: "var(--background)" }}
          />
          {errors.name && (
            <p className='mt-1 text-sm text-red-600'>{errors.name}</p>
          )}
        </div>

        <div>
          <label
            htmlFor='email'
            className='block text-md font-light text-dorado-900 mb-1'
          >
            Email
          </label>
          <input
            type='email'
            value={formData.email}
            onChange={handleChange}
            name='email'
            id='email'
            className={`w-full py-2 border-b border-dorado-900 focus:outline-none bg-transparent${
              errors.name ? "border-red-500" : "border-dorado-900"
            }`}
            style={{ backgroundColor: "var(--background)" }}
          />
          {errors.email && (
            <p className='mt-1 text-sm text-red-600'>{errors.email}</p>
          )}
        </div>
        <div>
          <label
            htmlFor='message'
            className='block text-md font-light text-dorado-900 mb-1'
          >
            Message
          </label>
          <textarea
            id='message'
            name='message'
            rows={2}
            value={formData.message}
            onChange={handleChange}
            className={`w-full py-2 border-b border-dorado-900 focus:outline-none bg-transparent${
              errors.name ? "border-red-500" : "border-dorado-900"
            }`}
            style={{ backgroundColor: "var(--background)" }}
          />
          {errors.message && (
            <p className='mt-1 text-sm text-red-600'>{errors.message}</p>
          )}
        </div>
        <button
          type='submit'
          disabled={isSubmitting}
          className={` py-3 px-4 bg-bluemine-700 hover:bg-dorado-600
          text-white 
          rounded-full ${
            isSubmitting ? "opacity-70 cursor-not-allowed" : ""
          }`}
        >
          {isSubmitting ? "Sending..." : "Contact Me"}
        </button>
      </form>
    </div>
  );
}
