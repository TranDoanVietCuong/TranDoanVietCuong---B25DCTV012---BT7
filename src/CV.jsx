import './CV.css'; 

function Section(props) {
  return (
    <section className="section-container">
      <h2 className="section-heading">
        {props.title}
      </h2>
      <div className="section-content">
        {props.children}
      </div>
    </section>
  );
}

function SkillList(props) {
  return (
    <div className="skill-list">
      {props.skills.map(function(skill, index) {
        return (
          <span key={index} className="skill-tag">
            {skill}
          </span>
        );
      })}
    </div>
  );
}

function ProjectItem(props) {
  return (
    <div className="project-item">
      <h3 className="project-name">{props.name}</h3>
      <p className="project-desc">{props.description}</p>
      <p className="project-tech"><strong>Công nghệ:</strong> {props.techStack}</p>
    </div>
  );
}

function ContactInfo(props) {
  return (
    <ul className="contact-list">
      <li className="contact-item"><strong>Email:</strong> {props.email}</li>
      <li className="contact-item"><strong>Số điện thoại:</strong> {props.phone}</li>
    </ul>
  );
}

export default function CV() {
  const mySkills = [
    "C/C++", "Python", "JavaScript", "Cấu trúc dữ liệu & Giải thuật", 
    "Machine Learning", "HTML", "CSS"
  ];

  const myProjects = [
    { 
      name: "Nông nghiệp thông minh", 
      desc: "Hệ thống nông nghiệp thông minh tích hợp AI và IoT cho cây cà chua.", 
      techStack: "YOLOv11, PPO Reinforcement Learning, ESP32, MQTT" 
    },
    { 
      name: "Web trợ lý ảo", 
      desc: "Hệ thống web trợ lý ảo AI qua giọng nói.", 
      techStack: "FastAPI, PostgreSQL, Gemini API, Python" 
    }
  ];

  return (
    <div className="cv-container">
      
      <div className="cv-header">
        <h1 className="cv-name">Trần Đoàn Việt Cường</h1>
        <p className="cv-title">Sinh viên chuyên ngành AIoT - PTIT</p>
      </div>

      <Section title="Kỹ Năng Nổi Bật">
        <SkillList skills={mySkills} /> 
      </Section>

      <Section title="Dự Án Tiêu Biểu">
        {myProjects.map(function(proj, idx) {
          return (
            <ProjectItem 
              key={idx} 
              name={proj.name} 
              description={proj.desc} 
              techStack={proj.techStack}
            />
          );
        })}
      </Section>

      <Section title="Liên Hệ">
        <ContactInfo 
          email="CuongTDV.B25TV012@stu.ptit.edu.vn" 
          phone="0366338105" 
        />
      </Section>
      
    </div>
  );
}