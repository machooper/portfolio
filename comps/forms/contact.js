import {useState} from "react"
import Button from '../ui/comps/button'
export default function ContactForm() {
  const [form, setForm] = useState({name: '', email: '', reason: '', message: '', sent: false, buttonText: "Send!", err:''})
  function handleChange(e) {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  }
  function resetForm() {
    var fe = document.getElementsByClassName("fe");
    setForm({
      name: "",
      email: "",
      message: "",
      reason: "",
      sent: false,
      buttonText: "Send!",
      err: "",
    });
    document.getElementById("send").classList.remove("btnerror");
    for (var i = 0; i < fe.length; i++) {
      fe[i].classList.remove("fechange");
    }
  }
  function sendForm(e) {
    e.preventDefault();
    var fe = document.getElementsByClassName("fe");
    for (var i = 0; i < fe.length; i++) {
      fe[i].classList.add("fechange");
    }
    setForm({
      ...form,
      buttonText: "Sending...",
    });
    // Send Contact Form Logic Here
  }
  return (
  <>
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
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          required
        />
        <select
          id="reason"
          name="reason"
          className="fe"
          value={form.reason}
          onChange={handleChange}
          required
        >
          <option value="title">Reason for contacting?</option>
          <option value="work">Work with me</option>
          <option value="questions">Any questions?</option>
          <option value="other">Other</option>
        </select>
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
          <Button text="Send!" url="/example" variant="primary"/>
        </div>
      </form>

      <style jsx>{`
      form {
         display: flex;
        flex-direction: column;
      }
      form input, #form select, #form textarea {
        margin: .5rem 0;
        border: 1px solid var(--grey);
        border-radius: var(--radius);
      }
      form textarea {
        resize: none;
      }
      `}</style>
    </>
  )
}


