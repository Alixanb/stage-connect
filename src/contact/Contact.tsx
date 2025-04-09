import React, { useState } from "react";  
import Mail from "../assets/mail.svg";  
import Footer from "../Footer";

const RESEND_API_KEY = 're_dqyoTC9n_89vjK43uuYkfiaJx5Xi4XnWX';

const Contact: React.FC = () => {  
  const [email, setEmail] = useState("");  
  const [messageType, setMessageType] = useState("support");  
  const [subject, setSubject] = useState("");  
  const [message, setMessage] = useState("");  
  const [isSubmitting, setIsSubmitting] = useState(false);  
  const [errorMessage, setErrorMessage] = useState<string | null>(null);  
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {  
    e.preventDefault();  
    setIsSubmitting(true);  
    setSuccess(false);

    try {  
      const response = await fetch("https://api.resend.com/emails", {  
        method: "POST",  
        headers: {  
          "Content-Type": "application/json",  
          "Authorization": `Bearer ${RESEND_API_KEY}`,
        },  
        body: JSON.stringify({  
          from: "Connect Stages <onboarding@resend.dev>",
          to: ["emailQuiRecoit"],
          subject: subject,  
          html: `<p>Message de: ${email}</p><p>Type: ${messageType}</p><p>${message}</p>`,  
        }),  
      });   

      const data = await response.json();
      
      if (!response.ok) {  
        throw new Error(data.message || "Échec de l'envoi de l'e-mail");  
      }  

      setEmail("");  
      setMessageType("support");  
      setSubject("");  
      setMessage("");  
      setErrorMessage(null);
      setSuccess(true);
    } catch (err: any) {  
      setErrorMessage(err.message);  
    } finally {  
      setIsSubmitting(false);  
    }  
  };  

  return (  
    <>
    <div className="min-h-screen bg-black p-16 grid grid-cols-2 gap-10">  
      <div className="flex flex-col justify-center items-start">  
        <div className="flex items-center text-[80px] uppercase font-medium text-left p-5 border-b border-gray-500 pb-2">  
          <img src={Mail} alt="mail" className="mr-4" width="120" height="120" />  
          <span>Contactez-nous</span>  
        </div>  
      </div>  
      <div className="flex flex-col justify-between justify-center">  
        <section>  
          <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">  
            <form onSubmit={handleSubmit} className="space-y-8">  
              <div>  
                <label htmlFor="email" className="block mb-2 text-sm font-medium">  
                  Votre e-mail  
                </label>  
                <input  
                  type="email"  
                  id="email"  
                  value={email}  
                  onChange={(e) => setEmail(e.target.value)}  
                  className="shadow-sm bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 text-gray-900"  
                  placeholder="votre@email.fr"  
                  required  
                  />  
              </div>  
              <div>  
                <label htmlFor="type" className="block mb-2 text-sm font-medium">  
                  Type de message  
                </label>  
                <select  
                  id="type"  
                  value={messageType}  
                  onChange={(e) => setMessageType(e.target.value)}  
                  className="shadow-sm bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 text-gray-900"  
                  required  
                  >  
                  <option value="support">Support technique</option>  
                  <option value="experience">Proposer une nouvelle expérience</option>  
                </select>  
              </div>  
              <div>  
                <label htmlFor="subject" className="block mb-2 text-sm font-medium">  
                  Sujet  
                </label>  
                <input  
                  type="text"  
                  id="subject"  
                  value={subject}  
                  onChange={(e) => setSubject(e.target.value)}  
                  className="block p-3 w-full text-sm bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 text-gray-900"  
                  placeholder="Votre sujet ici"  
                  required  
                  />  
              </div>  
              <div className="sm:col-span-2">  
                <label htmlFor="message" className="block mb-2 text-sm font-medium">  
                  Votre message  
                </label>  
                <textarea  
                  id="message"  
                  value={message}  
                  onChange={(e) => setMessage(e.target.value)}  
                  rows={6}  
                  className="block p-2.5 w-full text-sm bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 text-gray-900"  
                  placeholder="Laissez votre message..."  
                  required
                  ></textarea>  
              </div>  
              <button  
                type="submit"  
                className="text-black bg-white text-xl py-4 px-24 rounded-full cursor-pointer hover:bg-gray-100 transition-colors disabled:opacity-70"  
                disabled={isSubmitting}  
                >  
                {isSubmitting ? "Envoi en cours..." : "Envoyer"}  
              </button>  
              {errorMessage && (  
                <div className="text-red-500 font-bold">  
                  Une erreur est survenue : {errorMessage}  
                </div>  
              )}
              {success && (
                <div className="text-green-500 font-bold">
                  Message envoyé avec succès !
                </div>
              )}
            </form>  
          </div>  
        </section>  
      </div>  
    </div> 
    <Footer />
</>
  );  
};  

export default Contact;