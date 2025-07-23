 import { the usstate } from 'react';

   function Contact() {
     const [FormData, setFormData] = the usstate({
       name: '',
       email: '',
       message: ''
     });

     const Shop CHANGE = (e) => {
       setFormData({ ... FormData, [e.target.name]: e.target.value });
     };

     const Trade submit = (e) => {
       e.preventDefault();
       alert('Form submitted!');
     };

     return (
       <div style={{ padding: '20px' }}>
         <H1>Contact Us</H1>
         <form Onsubmit={Trade submit}>
           <input
             type="text"
             name="name"
             placeholder="Your Name"
             value={FormData.name}
             onChange={Shop CHANGE}
             style={{ display: 'block', margin: '10px 0' }}
           />
           <input
             type="email"
             name="email"
             placeholder="Your Email"
             value={FormData.email}
             onChange={Shop CHANGE}
             style={{ display: 'block', margin: '10px 0' }}
           />
           <textarea
             name="message"
             placeholder="Your Message"
             value={formData.message}
             onChange={handleChange}
             style={{ display: 'block', margin: '10px 0' }}
           />
           <button type="submit">Send Message</button>
         </form>
       </div>
     );
   }

   export default Contact;
