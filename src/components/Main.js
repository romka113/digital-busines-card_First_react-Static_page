import React from "react"
import mail from "../image/email.png"
import linkedin from "../image/linkedin.png"
function Main(){
    return(
        <main className="main">
            <section className="main--section1">
                <h1>Laura Smith</h1>
                <h3>Frontend Developer</h3>
                <p>laurasmith.website</p>
                <div className="buton--container">
                    <button className="button1"><i class="fa-solid fa-envelope"></i> Email</button>
                    <button className="button2"><i class="fa-brands fa-linkedin"></i> Linkedin</button>
                </div>
            </section>
            <section className="main--section2">
                <h1>About

                </h1>
                <p>
                    I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.
                </p>
                <h1>
                    Interests
                </h1>
                <p>
                    Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.
                </p>

            </section>
        </main>
    )
}
export default Main