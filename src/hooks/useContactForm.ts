"use client";

import { useState } from "react";

interface FormData {
  name: string;
  email: string;
  type: string;
  message: string;
}

interface FormState {
  isSubmitting: boolean;
  isSuccess: boolean;
  error: string | null;
}

export const useContactForm = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
    type: ""
  });

  const [formState, setFormState] = useState<FormState>({
    isSubmitting: false,
    isSuccess: false,
    error: null,
  });

  const updateField = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (formState.error) {
      setFormState((prev) => ({ ...prev, error: null }));
    }
  };

  const resetForm = () => {
    setFormData({
      name: "",
      email: "",
      type: "",
      message: "",
    });
    setFormState({
      isSubmitting: false,
      isSuccess: false,
      error: null,
    });
  };

  const submitForm = async (e: React.FormEvent) => {
    e.preventDefault();

    setFormState((prev) => ({ ...prev, isSubmitting: true, error: null }));

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      let result;
      try {
        result = await response.json();
      } catch {
        result = { error: "Invalid response format" };
      }

      if (!response.ok) {
        throw new Error(
          result.error || `Request failed with status ${response.status}`
        );
      }

      setFormState({
        isSubmitting: false,
        isSuccess: true,
        error: null,
      });

      // Reset form after successful submission
      setTimeout(() => {
        resetForm();
      }, 3000);
    } catch (error) {
      let errorMessage = "Something went wrong";

      if (error instanceof Error) {
        errorMessage = error.message;
      } else if (error instanceof TypeError) {
        errorMessage = "Network error. Please check your connection.";
      }

      setFormState({
        isSubmitting: false,
        isSuccess: false,
        error: errorMessage,
      });
    }
  };

  return {
    formData,
    formState,
    updateField,
    submitForm,
    resetForm,
  };
};
