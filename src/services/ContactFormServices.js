import api from '../api';

const ContactFormServices = {
  addContactForm: async (formData) => {
    const response = await api.post(`/contact`, formData);
    console.log('x',response);
    return response.data;
  },
};

export default ContactFormServices;
