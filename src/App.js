
import './App.css';

function App() {
  return (
    <div className="main">
      <div className="main2">
      <div className="profile-img" ><img src="profile-img.jpg"/></div>
      <br/> <br/>
      <header>
        <h1>Ali Ahmad</h1>
        <p>Web Developer</p>
      </header>
        
      <section className="contact">
        <h2 className="contact1">Contact Information</h2>
        <address>
          <p>Email: alikanhi912@gmail.com</p>
          <p>Phone: (+92) 306-4382254</p>
          <p>Address: Luddan, Panjab, Pakistan</p>
        </address>
      </section>

      <section className="education">
        <h2>B'S Information Technologies</h2>
        <ul>
          <li>
            <h3>Bachelor of Science in Computer Science</h3>
            <p>University of education, 2020 to 2024</p>
          </li>
        </ul>
      </section>

      <section className="experience">
        <h2>Work Experience</h2>
        <ul>
          <li>
            <h3>Web Developer</h3>
            <h3>Wordpress</h3>
            <p>LinkedIn, 2022</p>
            <p>Guru.com, 2021</p>
            <ul>
              <li>Developed and maintained web applications</li>
              <li>Collaborated with cross-functional teams</li>
            </ul>
          </li>
        </ul>
      </section>

      <section className="skills">
        <h2>Skills</h2>
        <ul>
          <li>HTML, CSS, JavaScript</li>
          <li>Front-end Frameworks (e.g., React, Vue)</li>
          <li>Back-end Technologies (e.g., Node.js, PHP)</li>
          <li>Database Management (e.g., SQL, MongoDB)</li>
          <li>Wordpress </li>
        </ul>
      </section>

      <section className="languages">
        <h2>Languages</h2>
        <ul>
          <li>English (Fluent)</li>
          <li>Urdu</li>
        </ul>
      </section>

      <footer>
        <p>&copy; 2023 Ali Ahmad</p>
      </footer>
    </div>
    </div>
  );
}

export default App;
