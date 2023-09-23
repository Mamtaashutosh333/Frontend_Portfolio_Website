import React from 'react';
import "./SkillStyles.css";


const Skill = () => {
  return (
    <>
      <section >
       <h1 className='sub-title'>My <span>Skills</span></h1>

        <div className='container1' id='Skills'>
            <h1 className='heading1'>Technical Skills</h1>
            <div className="Technical-bars">

                <div className="bar"><i class='bx bxl-html5'></i>
                    <div className="info">
                        <span>HTML</span>
                        <div className='progress-line html'>
                            <span></span>
                        </div>
                    </div>
                </div>

                <div className="bar"><i class='bx bxl-css3' ></i>
                    <div className="info">
                        <span>CSS</span>
                        <div className='progress-line css'>
                            <span></span>
                        </div>
                    </div>
                </div>

                <div className="bar"><i class='bx bxl-javascript' ></i>
                    <div className="info">
                        <span>JavaScript</span>
                        <div className='progress-line js'>
                            <span></span>
                        </div>
                    </div>
                </div>

                <div className="bar"><i class='bx bxl-react' ></i>
                    <div className="info">
                        <span>React JS</span>
                        <div className='progress-line react'>
                            <span></span>
                        </div>
                    </div>
                </div>

                <div className="bar"><i class='bx bxl-bootstrap' ></i>
                    <div className="info">
                        <span>Bootstrap</span>
                        <div className='progress-line bootstrap'>
                            <span></span>
                        </div>
                    </div>
                </div>

                <div className="bar"><i class='bx bxl-git' ></i>
                    <div className="info">
                        <span>Git</span>
                        <div className='progress-line git '>
                            <span></span>
                        </div>
                    </div>
                </div>

                <div className="bar"><i class='bx bxl-github' ></i>
                    <div className="info">
                        <span>Github</span>
                        <div className='progress-line github '>
                            <span></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  
    



       
        <div className="container2">
            <h1 className='heading1'>Professional Skills</h1>
            <div className="radical-bars">

                <svg x="0px" y="0px" viewBox='0 0 200 200'>
                    <circle className='progress-bar' cx="100" cy="100" r="80"></circle>
                    <circle className='path path-1' cx="100" cy="100" r="80"></circle>
                </svg>
                <div className="percentage">90%</div>
                <div className="text">Creativity</div>
            </div>

            <div className="radical-bars">

                <svg x="0px" y="0px" viewBox='0 0 200 200'>
                    <circle className='progress-bar' cx="100" cy="100" r="80"></circle>
                    <circle className='path path-1' cx="100" cy="100" r="80"></circle>
                </svg>
                <div className="percentage">80%</div>
                <div className="text">Communication</div>
            </div>

            <div className="radical-bars">

                <svg x="0px" y="0px" viewBox='0 0 200 200'>
                    <circle className='progress-bar' cx="100" cy="100" r="80"></circle>
                    <circle className='path path-1' cx="100" cy="100" r="80"></circle>
                </svg>
                <div className="percentage">70%</div>
                <div className="text">Problem Solving</div>
            </div>

            <div className="radical-bars">

                <svg x="0px" y="0px" viewBox='0 0 200 200'>
                    <circle className='progress-bar' cx="100" cy="100" r="80"></circle>
                    <circle className='path path-1' cx="100" cy="100" r="80"></circle>
                </svg>
                <div className="percentage">75%</div>
                <div className="text">Teamwork</div>
            </div>
        </div>
        </section>


      
    </>
  )
}

export default Skill;
