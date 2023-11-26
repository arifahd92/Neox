import React from "react";
import "../main/main.css";
import TechStack from "./techStack/TechStack";
import ContactForm from "./Form/ContectForm";
import TextRunner from "./textRunner/TextRunner";
import MailOutlineIcon from "@mui/icons-material/Mail";
import { CallOutlined, WhatshotOutlined } from "@mui/icons-material";

export default function Main() {
  return (
    <>
      <div
        className=" container-fluid mt-3"
        style={{
          backgroundColor: ")",
          backgroundImage:
            "url(https://www.solidbackgrounds.com/images/7680x4320/7680x4320-dark-pastel-blue-solid-color-background.jpg)",
        }}>
        <div className="container">
          <div className="  row d-flex  justify-content-between  align-items-center ">
            <div className="col-md-6 ">
              {" "}
              <div className="row   ">
                <div
                  className="col produce "
                  style={{
                    fontSize: "40px",
                    marginTop: "70px",
                    opacity: "0.9",
                  }}>
                  We Produce
                </div>
              </div>
              <div className="row produce" style={{ minWidth: "200px" }}>
                <div
                  className="col produce  "
                  style={{
                    fontSize: "5vw",
                    fontWeight: "bold",
                    background:
                      "linear-gradient(90deg, rgb(39, 227, 208), rgb(136, 216, 112))",
                    webkitBackgroundClip: "text",
                    backgroundClip: "text",
                    color: "transparent",
                  }}>
                  <TextRunner className="runner" />
                </div>
              </div>
              <div className="row mt-3 produce">
                <div
                  className="col produce "
                  style={{
                    fontSize: "23px",
                    fontWeight: "400",
                    color: "rgb(58, 59, 58)",
                    opacity: "0.7",
                  }}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
                  eos libero sequi, quaerat fugiat minima. Esse sunt nihil aut
                  repellendus saepe repudiandae! Nulla culpa reprehenderit
                  placeat! Incidunt accusamus magni suscipit sit esse provident
                </div>
              </div>
              <div className="row mt-5">
                <div className="col text-white produce  -danger">
                  <button
                    className="btn text-white bookbtn "
                    style={{
                      padding: "15px",
                      paddingLeft: "40px",
                      paddingRight: "40px",
                      backgroundColor: "#021613",
                      fontSize: "20px",
                    }}>
                    {" "}
                    Book Your Consultation
                  </button>
                </div>
              </div>
            </div>
            <div className="col-md-6  heroImageContainer text-center  pt-5 d-flex justify-content-center  align-items-center ">
              <img
                className="  heroImage  "
                src={
                  process.env.PUBLIC_URL +
                  "assets/f03100ff0c6afbbf061bbb4c63b5a15c.jpg"
                }
                alt="imag"
              />
            </div>
          </div>
        </div>
      </div>

      {/* """""""""""""""""""""""""""""""""""""""""""""""""*/}
      <div className="container " style={{ marginTop: "170px" }}>
        <div className="row">
          <div className="col-md-3 col-sm-6">
            <div
              className="count  text-center "
              style={{
                fontSize: "50px",
                fontWeight: "600",
                color: "#08cbf5",
              }}>
              150+
            </div>
            <div className="tag  text-center  -1  ">Projects</div>
          </div>
          <div className="col-md-3 col-sm-6">
            <div
              className="count-clients  text-center "
              style={{
                fontSize: "50px",
                fontWeight: "600",
                color: "#34d8d1",
              }}>
              70+
            </div>
            <div className="tag  text-center ">Clients</div>
          </div>
          <div className="col-md-3 col-sm-6">
            {" "}
            <div
              className="count-award text-center  "
              style={{
                fontSize: "50px",
                fontWeight: "600",
                color: "rgb(95, 228, 170)",
              }}>
              10+
            </div>
            <div className="tag  text-center">Awards</div>
          </div>
          <div className="col-md-3 col-sm-6">
            <div
              className="count-percent text-center  "
              style={{
                fontSize: "50px",
                fontWeight: "600",
                color: "rgb(127, 237, 143)",
              }}>
              100%
            </div>
            <div className="tag text-center ">Satisfied Customers</div>
          </div>
        </div>
      </div>

      {/********************************/}
      <div className="container d-flex " style={{ marginTop: "200px" }}>
        <div className="row  d-flex justify-content-between">
          <div className="col-md-6 " style={{ height: "fit-content" }}>
            <div
              className="text-md"
              style={{ fontSize: "40px", fontWeight: "700" }}>
              We Are{" "}
              <span
                className="text"
                style={{ color: "rgb(206, 170, 88)", opacity: "0.8" }}>
                Unique!
              </span>
            </div>
            <div
              className="mt-4 textsUnique"
              style={{ fontSize: "20px", fontWeight: "400" }}>
              Since 2014, Maharashtra LTD is a leading software provider with
              futuristic business analytics.
            </div>
            <div
              className="2 textsUnique mt-3"
              style={{ fontSize: "20px", fontWeight: "400" }}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam
              minus, minima suscipit esse quibusdam beatae?
            </div>
            <div
              className="2 textsUnique mt-3"
              style={{ fontSize: "20px", fontWeight: "400" }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
              autem repellat itaque libero illum magni?
            </div>
            <div
              className="2 textsUnique mt-3"
              style={{ fontSize: "20px", fontWeight: "400" }}>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla,
              cupiditate. Unde facilis maiores, distinctio quisquam ea quidem
              optio quae nostrum.
            </div>
            <div
              className="2 textsUnique mt-3"
              style={{ fontSize: "20px", fontWeight: "400" }}>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam
              suscipit possimus eos?
            </div>
            <div
              className="2 textsUnique mt-3"
              style={{ fontSize: "20px", fontWeight: "400" }}>
              Lorem, ipsum dolor sit amet consectetur adipisicing.
            </div>
          </div>
          <div
            className="col-md-6 d-flex align-items-center justify-content-center"
            style={{ height: "500px" }}>
            <img
              src="https://gwayerp.com/assets/images/uni.webp"
              alt=""
              srcSet=""
              width={"80%"}
              style={{ maxHeight: "100%" }}
            />
          </div>
        </div>
      </div>
      {/****************************************************************************************8*/}
      <div className="container" style={{ marginTop: "150px" }}>
        <div
          className="row text-center "
          style={{ fontSize: "40px", fontWeight: "bold" }}>
          <div style={{ color: "rgb(3, 43, 37)" }}>
            Experience The Most{" "}
            <span style={{ color: "rgb(27, 186, 164)" }}>Customized</span> ERP
          </div>
        </div>
        <div className="row ">
          <div className="col-3"></div>
          <div className="col-6 text-center" style={{ fontSize: "20px" }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
            obcaecati minima odio repellat, reprehenderit repudiandae earum quia
            ratione minus delectus?
          </div>
          <div className="col-3"></div>
        </div>
      </div>
      {/*******************card impementation*************************/}

      <div className="container shadow cards " style={{ marginTop: "100px" }}>
        <div className="row  pt-4 ">
          <div className="col-lg-4 mt-2">
            <div
              class="card "
              style={{
                backgroundColor: "rgb(250, 220, 248)",
                minHeight: "150px",
              }}>
              <div class="card-body">
                <div className=" d-flex justify-content-between">
                  <div className="-">
                    <i class="bi bi-bell"></i>
                  </div>
                  <div className="">
                    <h5 class="card-title" style={{ color: "#ba3991" }}>
                      User Friendly
                    </h5>
                    <p class="card-text ">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Eligendi, quos!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 mt-2">
            <div
              class="card "
              style={{
                backgroundColor: "rgb(219, 245, 250)",
                minHeight: "150px",
              }}>
              <div class="card-body">
                <div className=" d-flex justify-content-between">
                  <div className="-">
                    <i class="bi bi-bell"></i>
                  </div>
                  <div className="">
                    <h5
                      class="card-title"
                      style={{ color: "rgb(93, 93, 175)" }}>
                      Support
                    </h5>
                    <p class="card-text ">
                      We offer 24/7 support to rectify the issues you faced for
                      healthy business outcomes without any interruptions
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 mt-2">
            <div
              class="card "
              style={{
                backgroundColor: "rgb(178, 224, 201)",
                minHeight: "150px",
              }}>
              <div class="card-body">
                <div className=" d-flex justify-content-between">
                  <div className="-">icon</div>
                  <div className="">
                    <h5
                      class="card-title"
                      style={{ color: "rgb(82, 165, 87)" }}>
                      Cost Control
                    </h5>
                    <p class="card-text ">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Nihil impedit sequi earum quae aliquid, id iste odio
                      reiciendis voluptate veritatis.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row  pb-4">
          <div className="col-lg-4 mt-2">
            <div
              class="card "
              style={{ backgroundColor: "#e7ccde", minHeight: "150px" }}>
              <div class="card-body">
                <div className=" d-flex justify-content-between">
                  <div className="-">
                    <i class="bi bi-bell"></i>
                  </div>
                  <div className="">
                    <h5
                      class="card-title"
                      style={{ color: "rgb(60, 95, 155)" }}>
                      Powerful Dashboard
                    </h5>
                    <p class="card-text ">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Voluptatibus iusto aliquid odit nesciunt minus totam nisi
                      vitae ab beatae laudantium.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 mt-2">
            <div
              class="card "
              style={{
                backgroundColor: "rgb(211, 165, 96)",
                minHeight: "150px",
              }}>
              <div class="card-body">
                <div className=" d-flex justify-content-between">
                  <div className="-">
                    <i class="bi bi-bell"></i>
                  </div>
                  <div className="">
                    <h5
                      class="card-title"
                      style={{ color: "rgb(181, 135, 66)" }}>
                      Unique Feature
                    </h5>
                    <p class="card-text ">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Aliquid fugit architecto sunt quod reiciendis nisi, illo
                      rerum odit dignissimos velit?
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 mt-2">
            <div
              class="card "
              style={{ backgroundColor: "#e7ccde", minHeight: "150px" }}>
              <div class="card-body">
                <div className=" d-flex justify-content-between">
                  <div className="-">
                    <i class="bi bi-bell"></i>
                  </div>
                  <div className="">
                    <h5 class="card-title" style={{ color: "#ba3991" }}>
                      Smart Notification
                    </h5>
                    <p class="card-text ">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Sapiente debitis magni corporis nulla praesentium ipsam
                      possimus laudantium autem modi commodi!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container" style={{ marginTop: "150px" }}>
        <div
          className="row text-center "
          style={{ fontSize: "40px", fontWeight: "bold" }}>
          <div>
            Our <span style={{ color: "#1ab9a3" }}>Modules</span>
          </div>
        </div>
        <div className="row ">
          <div className="col-3"></div>
          <div
            className="col-6 d-flex justify-content-center text-center align-items-center "
            style={{ fontSize: "20px" }}>
            Maharashtra LTD is a custom software development organization that
            aims to provide customized functionality that meets a company's
            specific operational and strategic requirements.
          </div>
          <div className="col-3"></div>
        </div>
      </div>
      <div className="container" style={{ marginTop: "150px" }}>
        <div
          className="row text-center "
          style={{ fontSize: "40px", fontWeight: "bold" }}>
          <div>
            Unlock The Endless Possibilities With{" "}
            <span style={{ color: "#1ab9a3" }}>Maharashtra LTD</span>
          </div>
        </div>
        <div className="row ">
          <div className="col-3"></div>
          <div
            className="col-6 d-flex justify-content-center text-center align-items-center "
            style={{ fontSize: "20px" }}>
            Maharashtra LTD is a custom software development organization that
            aims to provide customized functionality that meets a company's
            specific operational and strategic requirements.
          </div>
          <div className="col-3"></div>
        </div>
      </div>

      {/*video***************************************************8*/}

      {/* background and image*/}

      <div
        className="container-fluid d-flex align-items-center"
        style={{
          backgroundImage:
            "url('https://media.istockphoto.com/id/175400834/photo/blue-wall-texture.jpg?s=612x612&w=0&k=20&c=xeHcJJxe4PCzVTYjdhY9WrRKEecldzfNqy33lZOKKQw=')",
          height: "600px",
          marginTop: "400px",
          fontSize: "50px",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          border: "3px solid red",
        }}>
        <div className="textContainer position-relative  ">
          <div className="row   " style={{ top: "350px", width: "100vw" }}>
            <div
              className="col  text-center text-white"
              style={{ fontSize: "30px", fontWeight: "bold" }}>
              A company that was founded with a
            </div>
            <div
              className="text-center text-white "
              style={{ fontSize: "75px", fontWeight: "bold" }}>
              Global Vision In Mind.
            </div>
          </div>
        </div>
      </div>

      {/****************************tech stack*********************** */}
      <div className="container" style={{ marginTop: "150px" }}>
        <div
          className="row text-center "
          style={{ fontSize: "40px", fontWeight: "bold" }}>
          <div>
            Our <span style={{ color: "#1ab9a3" }}>Tech Stack</span>
          </div>
        </div>
        <div className="row ">
          <div className="col-3"></div>
          <div className="col-6 text-center" style={{ fontSize: "20px" }}>
            We are skilled at developing cutting-edge technology in a commercial
            environment that is constantly evolving.
          </div>
          <div className="col-3"></div>
        </div>
      </div>
      <TechStack />
      {/*********************implement tech stac **************/}
      <div className="container" style={{ marginTop: "150px" }}>
        <div
          className="row text-center "
          style={{ fontSize: "40px", fontWeight: "bold" }}>
          <div>
            Our <span style={{ color: "#1ab9a3" }}> SDLC </span>Methodology
          </div>
        </div>
        <div className="row ">
          <div className="col-3"></div>
          <div
            className="col-6 d-flex justify-content-center text-center"
            style={{ fontSize: "20px" }}>
            We prioritize providing solutions with zero downtime and ensuring
            that business operations run smoothly.
          </div>
          <div className="col-3"></div>
        </div>
        <div className="row">
          <img src="https://Maharashtra LTD.com/assets/svg/sdlc.svg" alt="" />
        </div>
      </div>
      {/************************************************************8*/}

      {/********************** contact form********************88*/}
      <div className="container" id="form">
        <div className="row">
          <div className="col-md-6">
            <div style={{ fontSize: "20px" }}>Have a</div>
            <span
              className="row"
              style={{
                fontSize: "50px",
                color: `rgb(186, 57, 145)
                `,
                fontWeight: "bold",
              }}>
              Project in mind?
            </span>
            <div className="row text-xl mt-4">
              Our friendly team would love to hear from you!
            </div>
            <div className="row mt-4">
              <div className="col">
                <hr />
              </div>
            </div>
            <div className=" mt-2">
              {" "}
              <span className="material-symbols-outlined">
                <MailOutlineIcon />
              </span>
              arifahd92@gmail.com
            </div>
            <div className=" mt-2">
              {" "}
              <span className="material-symbols-outlined">
                <MailOutlineIcon />
              </span>
              Info@maharashtra.com
            </div>
            <div className=" mt-2">
              {" "}
              <span>
                <CallOutlined />
              </span>{" "}
              +91-7275890926
            </div>
          </div>
          <div className="col-md-6">
            <ContactForm />
          </div>
        </div>
      </div>
    </>
  );
}
