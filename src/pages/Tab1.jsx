import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonContent,
  IonHeader,
  IonIcon,
  IonPage,
  IonSlide,
  IonSlides,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import ExploreContainer from "../components/ExploreContainer";
import { arrowForwardOutline, navigate } from "ionicons/icons";
import image9 from "../assets/images/tab-1 image/image 9.png";
import image10 from "../assets/images/tab-1 image/image 10.png";
import image11 from "../assets/images/tab-1 image/image 11.png";
import { IonRange } from "@ionic/react";
import roundImg from "../assets/images/tab-1 image/round-img.png";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./Tab1.css";
import { Link, useHistory } from "react-router-dom";
import { useEffect, useState } from "react";
import Axios from "axios";

const Tab1 = () => {
  const slideOpts = {
    initialSlide: 1,
    speed: 400,
  };
  const [category, setcategory] = useState("");
  const [title, settitle] = useState("");
  const [desc, setdesc] = useState("");
  const [image, setimage] = useState("");
  const [currentDate, setCurrentDate] = useState('');


  const blogdata = async (e) => {
    const res = await Axios.get(
      `https://pregnancy-tracker.vercel.app/v1/user/blog/findData`
    );
    console.log(res);
  };
  console.log("data6666");
  //  await  Axios.get("https://c982-2405-201-2029-a83c-49d4-e833-29b1-98bd.in.ngrok.io/v1/user/blog/findData").then(
  //      (response) => {
  //        console.log(response)
  //      }
  //    );
  //    console.log('dataaaaaaaa',category,title,desc,image)}
  useEffect(() => {
    blogdata();
  }, []);


  useEffect(() => {
    const date = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = date.toLocaleDateString('en-US', options);
    setCurrentDate(formattedDate);
  }, []);
  const history = useHistory();
  const handleClick = () => {
    history.push("/user");
  };
  return (
    <IonContent>
      <IonHeader>
   
         <div className="header py-3 px-3 bg-white">
          <p className="m-0 fs-5 fw-light fs-6">{currentDate}</p>
          <p className="m-0 fs-5 fw-semibold fs-6">Today</p>
        </div> 
      </IonHeader>

      <>
        <IonContent>
          <div>
            <Swiper
              slidesPerView={1}
              spaceBetween={30}
              centeredSlides={true}
              loop={true}
              autoplay={{
                delay: 1500,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
              }}
              modules={[Autoplay, Pagination]}
              className="mySwiper"
            >
              <SwiperSlide>
                <div className="slide1 slide">
                  <div className="text-start slide1_contain">
                    <h3 className="m-0 text-white">
                      Good Morning <br /> Baby
                    </h3>
                    <button className="slide1_btn mt-1" onClick={handleClick}>
                      Your Profile
                    </button>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="slide2 slide">
                  <div className="text-start slide1_contain">
                    <h3 className="m-0 text-white">
                      Good Morning <br /> Baby
                    </h3>
                    <button className="slide1_btn mt-1" onClick={handleClick}>
                      Your Profile
                    </button>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="slide3 slide">
                  <div className="text-start slide1_contain">
                    <h3 className="m-0 text-white">
                      Good Morning <br /> Baby
                    </h3>
                    <button className="slide1_btn mt-1" onClick={handleClick}>
                      Your Profile
                    </button>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="slide4 slide">
                  <div className="text-start slide1_contain">
                    <h3 className="m-0 text-white">
                      Good Morning <br /> Baby
                    </h3>
                    <button className="slide1_btn mt-1" onClick={handleClick}>
                      Your Profile
                    </button>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="slide5 slide">
                  <div className="text-start slide1_contain">
                    <h3 className="m-0 text-white">
                      Good Morning <br /> Baby
                    </h3>
                    <button className="slide1_btn mt-1" onClick={handleClick}>
                      Your Profile
                    </button>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </IonContent>
      </>
    </IonContent>
  );
};

export default Tab1;
