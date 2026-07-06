import React from "react";
function Skills() {

  const skills = [
    { name: "HTML", value: 95 },
    { name: "CSS", value: 92 },
    { name: "Bootstrap", value: 90 },
    { name: "JavaScript", value: 88 },
    { name: "React JS", value: 85 },
    { name: "Git & GitHub", value: 80 }
  ];
  return (

    <section id="skills" className="skills section-padding">
      <div className="container">
        <div className="section-title text-center mb-5" data-aos="fade-up">
          <h2>My Skills</h2>
          <p>Technologies I work with</p>
        </div>
        <div className="row">
          <div className="col-lg-8 mx-auto">
            {skills.map((skill, index) => (

              <div
                className="skill-box"
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 100} >
                <div className="d-flex justify-content-between">
                  <span>{skill.name}</span>
                  <span>{skill.value}%</span>
                </div>

                <div className="progress">
                  <div
                    className="progress-bar skill-progress"
                    style={{ width: `${skill.value}%` }} >
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;