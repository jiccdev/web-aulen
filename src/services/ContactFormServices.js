import api from '../api';

const ContactFormServices = {
  addContactForm: async (formData) => {
    const response = await api.post(`/contact`, formData);
    return response.data;
  },
};

export default ContactFormServices;
