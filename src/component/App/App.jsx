import React from "react";
import reactLogo from "../../Image/favicon_io/Frame 9-2 1.svg";
import iconTelegram from "../../Image/Icons-teleg.svg";
import iconWhatsApp from "../../Image/IconsWhats.svg";
import servicesIcon from "../../Image/car_4003237 1.svg";

function App() {
  return (
    <>
      <header className="header">
        <a className="header__logo" href="https://example.com">
          <img className="header__logo" src={reactLogo} alt="React Logo" />
        </a>
        <nav className="header__nav">
          <ul className="header__list">
            <li className="header__item">
              <a className="header__link text1_mod_size" href="#services">
                Services
              </a>
            </li>
            <li className="header__item">
              <a className="header__link text1_mod_size" href="#works">
                Our works
              </a>
            </li>
            <li className="header__item">
              <a className="header__link text1_mod_size" href="#about">
                About Us
              </a>
            </li>
            <li className="header__item">
              <a className="header__link text1_mod_size" href="#contacts">
                Contacts
              </a>
            </li>
          </ul>
        </nav>
        <div className="header__contact text1_mod_size">+447889670579</div>
      </header>
      <main className="main">
        {" "}
        <section className="banner">
          <div className="banner__container">
            <h1 className="banner__title h1_mod_size">
              POPOV'S LEGACY PAINTWORK
            </h1>
            <h2 className="banner__subtitle h2_mod_size text_color_yelow">
              Body repair
              <br />
              Let's restore the shape of your car: professional body repair for
              a flawless appearance
            </h2>
            <button className="banner__button text3_mod_size">
              More details
            </button>
            <div className="banner__social-container">
              <p className="banner__paragraph text3_mod_size">
                Send us a photo of the damage and we will provide you with a
                preliminary assessment immediately!
              </p>
              <div className="banner__social-icon-container">
                <img
                  className="banner__social-icon"
                  src={iconTelegram}
                  alt="Social Media Icon 1"
                />
                <img
                  className="banner__social-icon"
                  src={iconWhatsApp}
                  alt="Social Media Icon 2"
                />
              </div>
            </div>
          </div>
        </section>
        <section className="services">
          <div className="services__container">
            {" "}
            <h2 className="services__title h2_mod_size">Services provided</h2>
            <ul className="services__list">
              {["Restoration of old cars", "Bodywork", "Painting works"].map(
                (service, index) => (
                  <li className="services__item " key={index}>
                    <img
                      className="services__icon"
                      src={servicesIcon}
                      alt={`${service.toLowerCase()} icon`}
                    />
                    <p className="services__text text1_mod_size">{service}</p>
                  </li>
                )
              )}
            </ul>
          </div>
          <div className="stage__container">
            <h2 className="stage___title h2_mod_size">Stages of work</h2>
            <ul className="stage___list text1_mod_size">
              <li className="stage___item ">
                1.{" "}
                <span className="text_color_yelow">
                  Quick assessment of the condition of the body.
                </span>
                Quick assessment of the condition of the body. We start with a
                careful inspection of your car, determine the nature of the
                damage.
              </li>
              <li className="stage___item text2_mod_size">
                2.{" "}
                <span className="text_color_yelow">
                  Coordination of repair methods.
                </span>{" "}
                Specialists determine the optimal recovery method and coordinate
                a work plan with you.
              </li>
              <li className="stage___item ">
                3.{" "}
                <span className="text_color_yelow">
                  Repair, inspection and preparation for painting.
                </span>{" "}
                We carry out effective repairs, carefully check the geometry and
                prepare the car for painting.
              </li>
              <li className="stage___item ">
                4.{" "}
                <span className="text_color_yelow">
                  Painting, assembly and polishing.
                </span>{" "}
                Our colorist selects the color, the painter starts coloring.
                After coloring, assembly and professional polishing follow. I
                wash the car and check all the work performed.
              </li>
            </ul>
          </div>
          <button className="banner__button banner__button_margin-40 text3_mod_size">Order a call</button>
        </section>
      </main>
    </>
  );
}

export default App;
