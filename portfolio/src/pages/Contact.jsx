
import './css/Contact.css';
import { useTranslation } from 'react-i18next';

function Contact() {

  const { t, i18n } = useTranslation();
  const user = "337706";
  const domain = "student.mboutrecht.nl";
  const mail = `${user}@${domain}`;

  function handleSubmit(e) {
    e.preventDefault();

    const name = e.target.name.value;
    var subject = e.target.subject.value;
    const email = e.target.email.value;
    const message = e.target.message.value;

    subject = encodeURIComponent(subject);
    const body = encodeURIComponent(
      `Hello, my name is ${name}.\n\n` +
      `${message}\n\n` +
      `You can reply to me at: ${email}`
    );

    window.location.href = `mailto:${mail}?subject=${subject}&body=${body}`;
  }

  return (
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-1"></div>
          <div className="col-8 main justify-content-center">
            <div>
              <h1>{t('contact.title')}</h1>
              <p>{t('contact.description')}</p>

              <form onSubmit={handleSubmit}>
                <label htmlFor="name">{t('contact.name')}:</label><br />
                <input className='input' type="text" id="name" name="name" required minLength={1} maxLength={40} /><br />

                <label htmlFor="subject">Subject:</label><br />
                <input className='input' type="text" id="subject" name="subject" required minLength={1} maxLength={60} /><br />

                <label htmlFor="email">{t('contact.email')}:</label><br />
                <input className='input' type="email" id="email" name="email" required minLength={5} maxLength={60} /><br />

                <label htmlFor="message">{t('contact.message')}:</label><br />
                <textarea className='input textarea' id="message" name="message" required minLength={10} maxLength={500}></textarea><br />

                <button className='button' type="submit">{t('contact.send')}</button>
              </form>

              <p>
                {t('emailDirect')} {" "}
                <a href={`mailto:${mail}`}>{mail}</a>
              </p>
              <p><img src="https://img.icons8.com/?size=30&id=62856&format=png&color=000000" alt="Image" />  <a href='https://github.com/Ozer-source'>Github</a></p>
              <p><img src="https://img.icons8.com/?size=30&id=98960&format=png&color=000000" alt="Image" />  <a href='https://www.linkedin.com/in/%C3%B6zer-yavuz-b43666391/'>LinkedIn</a></p>
              <p><img src="https://img.icons8.com/?size=30&id=103879&format=png&color=000000" alt="Image" /> <a href='https://mboutrecht.nl/'>{t('school')}</a></p>
            </div>
          </div>
          <div className="col-1"></div>
        </div>
      </div>
  );
}

export default Contact;
