import ExploreContainer from "../components/ExploreContainer";
import Vector from "../assets/images/tab-4 image/Vector.svg";
import Group from "../assets/images/tab-4 image/Group.svg";
import { closeOutline } from "ionicons/icons";
import { IonContent, IonIcon } from '@ionic/react'
import "./read.css"
import React from 'react'

export const Read = () => {
    return (
        <IonContent>
            <div className="main_bg_img shadow-lg">
                <span className="cancel_icon">
                    <IonIcon icon={closeOutline} />
                </span>
            </div>
            <div className="tab-4_main">
                <div className="d-flex align-items-center">
                    <img src={Vector} alt="" className="me-2 hedding_img" />
                    <h4 className="m-0 ms-1 fw-semibold">Your weight and your fertility</h4>
                </div>

                <div className="mt-3 mb-4">

                    <input type="checkbox" class="read-more-state" id="post-1" />
                    <p class="read-more-wrap m-0">
                        Lorem Ipsum is simply dummy text of the printing and and
                        typesetting industry. Lorem Ipsum has been the industry's
                        standard dummy text ever since the 1500s, when an of the unknown
                        printer took a galley of type and scrambled it to a make a type
                        specimen book It has survived not only five centuries, but also
                        the leap into electronic typesetting remaining It has survived
                        not only five centuries, but also the leap into electronic
                        typesetting, remaining essentially unchanged. It was popularized
                        in the 1960s with the release{" "}
                        <span class="read-more-target">
                            Libero fuga facilis vel consectetur quos sapiente deleniti
                            eveniet dolores tempore eos deserunt officia quis ab?
                            Excepturi vero tempore minus beatae voluptatem!
                        </span>
                    </p>
                    <label for="post-1" class="read-more-trigger p-0"></label>

                </div>

                <hr className="bg-black" />
                <div className="mt-4">
                    <div className="d-flex align-items-center">
                        <img src={Group} alt="" className="me-2 hedding_img" />
                        <h4 className="m-0 ms-1 fw-semibold">BMI and fertility</h4>
                    </div>

                    <div className="d-flex align-items-top">
                        <ul class="numbered-list p-0 mt-3">
                            <li className="mb-2">
                                <p className="m-0 fs-6">
                                    It is a long established fact that a reader will be when an
                                    unknown distracted by the readable.
                                </p>
                            </li>
                            <li className="mb-2">
                                <p className="m-0 fs-6">
                                    The point of using Lorem Ipsum is that it has a more less
                                    normal distribution of letters, as opposed to using 'Content
                                    here, content here', making it look like readable English.
                                </p>
                            </li>
                            <li className="mb-2">
                                <p className="m-0 fs-6">
                                    Contrary to popular belief, Lorem Ipsum is not simply random
                                    text. It has roots in a piece of classical Latin literature
                                    from 45 BC, making it over 2000 years old Richard
                                    McClintock, a Latin professor at Hampden remaining
                                    essentially unchanged. It was popularized in the 1960s with
                                    the release.
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </IonContent>
    )
}
