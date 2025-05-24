export const validateForm = (formData: {
  name: string;
  email: string;
  details: string;
  company?: string;
}) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const newErrors: any = {};
  if (!formData.name.trim()) {
    newErrors.name = "Name is required";
  } else if (formData.name.length > 50) {
    newErrors.name = "Name must be 50 characters or less";
  }
  if (!formData.email.trim()) {
    newErrors.email = "Email is required";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
    newErrors.email = "Invalid email format";
  }
  if (!formData.details.trim()) {
    newErrors.details = "Details are required";
  } else if (formData.details.length > 500) {
    newErrors.details = "Details must be 500 characters or less";
  }
  if (formData.company && formData.company.length > 50) {
    newErrors.company = "Company must be 50 characters or less";
  }
  return newErrors;
};
