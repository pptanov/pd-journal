import './App.css';

import DemoBook from './DemoBook';

////////////////////////////////////////////////////////////////////  


export default function App() {
  return (
    <>
      
      {/* <header className="header">
        <button className="appBar__logoButton">
          <img src="../src/assets/logo.png" className='appBar__logo'/>
        </button>

        <section className='appBar__toolbox'>
          <button className='appBar__mainButton'>
            <a href="#reader">Читалка</a>
          </button>
        </section>
      </header> */}

      <header className="navbar">
        <div className="logo">
          <img src="../src/assets/logo.png" height={85} alt="Logo"/>
        </div>
        <nav className="nav-links">
          <button className="signup-btn">
            <a href="#reader">Читалка</a>
            </button>
        </nav>
      </header>

      <main className='main'>
        <section className="hero">
          <div className="hero-content">
            <div className="hero-text">
              <h1>Обучение может быть простым и веселым</h1>
              <p><i>Погружайте детей во взрослый мир финансов увлекательно и интерактивно, используя наш журнал
                <br/>
              </i></p>
              {/* <div className="hero-buttons">
                <button className="store-btn">Download from Google Play</button>
                <button className="store-btn">Download from Apple Store</button>
              </div> */}
            </div>
            <div className="hero-image">
              <img src="../src/assets/question.png" height={400} alt="App UI"/>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="section-text">
            <h2>Что это?
            </h2>
            <p>
            Детский экономический журнал EconoKids — это уникальный проект, разработанный 
            в рамках проектной деятельности в Московском Политехническом университете
            </p>
            {/* <button className="learn-more">Learn More</button> */}
          </div>
          <div className="section-image">
            <img src="../src/assets/vera1.png" width={400} alt="Numbers UI"/>
          </div>
        </section>

        <section className="section reverse">
          <div className="section-image">
            <img src="../src/assets/vera2.png" width={600} alt="Letters UI"/>
          </div>
          <div className="section-text">
            <h2>Для кого?</h2>
            <p>
            Журнал создан специально для юных читателей, чтобы в увлекательной и доступной форме знакомить их с основами экономики, финансовой грамотности и предпринимательства. 
            Через красочные иллюстрации, интересные задания и понятные объяснения EconoKids помогает детям понять, как устроен мир денег, почему важно планировать бюджет и как работают базовые экономические принципы. 
            Проект сочетает в себе образовательную и развлекательную составляющие, делая обучение увлекательным и полезным для будущих поколений.
            </p>
          </div>
        </section>
      </main>

      <p className='visually-hidden' id="reader"></p>
      <DemoBook/>

      <footer className="footer">
        <div className="footer-content">
            <div className="footer-left">
                <img src="../src/assets/logo.png" height={150} alt="EconoKids Logo" className="footer-logo"/>
                <p className="contact">econokids@gmail.com</p>
            </div>

            <div className="footer-middle">
                <h3 className="footer-heading"><b>Home</b></h3>
                <ul>
                    <li><a href="#">Accessibility</a></li>
                    <li><a href="#">Certification</a></li>
                    <li><a href="#">Knowledge Base</a></li>
                    <li><a href="#">Documentation</a></li>
                    <li><a href="#">User Group</a></li>
                </ul>
            </div>

            <div className="footer-right">
                <h3 className="footer-heading"><b>Pages</b></h3>
                <ul>
                    <li><a href="#">Blogs</a></li>
                    <li><a href="#">Careers</a></li>
                    <li><a href="#">Communities</a></li>
                    <li><a href="#">Webinars</a></li>
                    <li><a href="#">Videos</a></li>
                </ul>

            </div>
        </div>

        <div className="footer-bottom">
            <p>2025 EconoKids. All Rights Reserved.</p>
            <div className="footer-links">
                <a href="#">Home</a>
                <a href="#">Team</a>
                <a href="#">Privacy Policy</a>
            </div>
        </div>
    </footer>
    </>
  )
}
