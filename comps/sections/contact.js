import {useState} from "react"
export default function ContactForm() {
  const [form, setForm] = useState({name: '', email: '', message: '', sent: false, buttonText: "Send", err:''})
  function handleChange(e) {
    const { name, value } = e.target
    setForm({
      ...form,
      [name]: value
    });
  }
  function sendForm(e) {
    e.preventDefault()
    var fe = document.getElementsByClassName("fe")
    for (var i = 0; i < fe.length; i++) {
      fe[i].classList.add("fechange")
    }
    setForm({
      ...form,
      buttonText: "Sent",
    })
    fetch("/api/contact", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: form.name,
        email: form.email,
        message: form.message,
      }),
    }).then((res) => {
      console.log('Fetch: ', res)
    })
  }
  return (
    <form>
      <input
        id="name"
        name="name"
        type="text"
        className="fe"
        placeholder="Name"
        value={form.name}
        onChange={handleChange}
        required
      />
      <input
        id="email"
        name="email"
        type="email"
        className="fe"
        placeholder="E-Mail"
        value={form.email}
        onChange={handleChange}
        required
      />
      <textarea
        id="message"
        name="message"
        className="fe"
        placeholder="Message"
        value={form.message}
        onChange={handleChange}
        required
      />
      <div style={{margin: '0 auto', width: '150'}}>
        <button type="submit" onClick={sendForm}>{form.buttonText}</button>
      </div>


      <style jsx>{`
        form {
            display: flex;
            flex-direction: column;
        }
        form input, form textarea {
            border-radius: var(--radius);
            width: 80vw;
            height: 50px;
            text-align: center;
            border: none;
            box-shadow: var(--shadow);
            margin: .5rem 0;
        }
        form textarea {
            height: 150px;
            resize: none;
        }
        form input, form textarea, form button {
            font-family: inherit;
            font-weight: 400;
            color: var(--black);
            letter-spacing: inherit;
        }
        form ::placeholder {
            color: var(--black);
            opacity: .65;
        }
        form button {
            min-width: 180px;
            margin-top: 2rem;
            background: var(--primary); border: 0;
        }
        form button:hover {
            background: var(--grey);
        }
        @media(min-width: 760px) {
            form input, form textarea {
                width: 450px;
            }
        }
        .fechange {
            background: var(--primary);
            font-size: 0;
        }
      `}</style>
    </form>
)}