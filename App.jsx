export default function App() {
  return (
    <div style={{fontFamily:'Arial',padding:'40px',background:'#f5f7fb'}}>
      <h1>TN Repair Service</h1>
      <p>
        Independent technician coordination support across Tamil Nadu for AC,
        Washing Machine, Refrigerator and TV service support.
      </p>

      <a href="tel:+919566873245">
        <button>Call Now</button>
      </a>

      <a href="https://wa.me/919566873245">
        <button style={{marginLeft:'10px'}}>WhatsApp</button>
      </a>

      <div style={{marginTop:'30px',padding:'20px',background:'#fff'}}>
        <h2>Request Service</h2>

        <form action="mailto:mujibibnabdullah@gmail.com" method="post">
          <input placeholder="Your Name" style={{display:'block',marginBottom:'10px'}} />
          <input placeholder="Phone Number" style={{display:'block',marginBottom:'10px'}} />
          <input placeholder="Address" style={{display:'block',marginBottom:'10px'}} />
          <textarea placeholder="Send a Message" style={{display:'block',marginBottom:'10px'}} />

          <button type="submit">Send Service Request</button>
        </form>
      </div>

      <div style={{marginTop:'40px',fontSize:'14px'}}>
        TN REPAIR SERVICE operates as an independent technician support platform.
      </div>
    </div>
  )
}
