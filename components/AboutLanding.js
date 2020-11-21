import "../styles/about-styles/about-landing.scss";

export default function AboutLanding() {
    return (
        <>
            <section className="landing">
                <div className="greeting-txt-container">
                    <img className="juan-smiling" src="/juan.png" alt="juan cheesing" />
                    <h1 className="greeting-txt greeting-txt--styles">
                        "Work hard in silence. Let success be your Noise"
                        <span className="quoter"> - Frank Ocean</span>
                    </h1>

                </div>
                <div className="contacts-container">
                    <a href="" className="contact contact--styles">
                        Instagram
                    </a>
                    <a href="" className="contact contact--styles">
                        jmunoz23925@gmail.com
                    </a>
                    <a href="" className="contact contact--styles">
                        Book a session
                    </a>
                </div>
                <div className="about-para-container">
                    <p className="about-para--styles">
                        Straight from the Bay Area, Juan has been capturing memories for as long he could remember before realizing his talent and really pursuing the art of photography. Specializing in  photographing cars, he is able to capture his subject and its environment effortlessly. He uses the beautiful scenes found naturally all across the Bay Area and it shows how well they are portrayed in his work.
                    </p>
                </div>
                <section className="coded-by-container">
                    <img className="coder-img" src="/ale.png" alt="Alejandro memoji"/>
                    <h1 className="coder-name coder-name--styles">
                        Code and Design by <a className="coder-link--styles" href="https://aleh.netlify.app/">Alejandro Hernandez</a>
                    </h1>
                </section>
            </section>
        </>
    )
}