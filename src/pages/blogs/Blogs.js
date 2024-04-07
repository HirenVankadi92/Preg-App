import { IonContent, IonHeader, IonPage } from "@ionic/react";
import React, { useEffect, useState } from "react";
import "./Blogs.css";
import axios from "axios";
const Blogs = () => {
  const [data, setData] = useState([]);
  const fetchBlogsData = async () => {
    const useToken = localStorage.getItem("token");

    try {
      const response = await axios.get(
        "https://pregnancy-tracker.vercel.app/v1/user/blog/findData",
        {
          headers: { Authorization: `Bearer ${useToken}` },
        }
      );
      if (response?.data?.data) {
        setData(response?.data?.data);
      }
    } catch (error) {
      console.log("error", error?.message || "Error");
    }
  };

  useEffect(() => {
    fetchBlogsData();
  }, []);
  return (
    <IonPage>
        
      <IonContent>
      <IonHeader>
          <div className="header py-3 px-3 text-center">
            {/* <IonIcon icon={chevronBackOutline} style={{ fontSize: "24px", color: "white" }} /> */}
            <p className="m-0 fw-bold fs-5 text-white">Blog</p>
            {/* <IonIcon icon={personCircleOutline} style={{ fontSize: "24px", color: "white" }} /> */}
          </div>
        </IonHeader>
        <div className="container">
            {data?.map((item,index)=>(
          <div className="card" key={index}>
            <div className="card__header">
              <img
                src={item?.image}
                alt="card__image"
                className="card__image"
                width="600"
              />
            </div>
            <div className="card__body">
              <span className="tag tag-blue">{item?.category}</span>
              <h4>{item?.title}</h4>
              <p>
               {item?.description}
              </p>
            </div>
          </div>
          ))}
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Blogs;
