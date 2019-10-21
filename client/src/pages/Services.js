import React, {Component} from 'react';
import {
  MDBIcon,
  MDBBtn,
  MDBView,
  MDBMask,
  MDBContainer,
  MDBAnimation,
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBRow,
  MDBCol,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
} from 'mdbreact';
import image from '../assets/img/massage-3795691_1920.jpg';
// Image by <a href="https://pixabay.com/users/anna3416-2499762/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=3795691">Anna Mikkelgaard</a> from <a href="https://pixabay.com/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=3795691">Pixabay</a>

import imageTwo from '../assets/img/essential-oils-1433692_1920.jpg';
// Image by <a href="https://pixabay.com/users/monicore-1499084/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=1851027">monicore</a> from <a href="https://pixabay.com/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=1851027">Pixabay</a>

import imageThree from '../assets/img/massage-2722936_1920.jpg';
// Image by <a href="https://pixabay.com/users/whitesession-4645995/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=2722936">Angelo Esslinger</a> from <a href="https://pixabay.com/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=2722936">Pixabay</a>

import '../assets/css/service.css';
class ServicesPage extends Component {
  state = {
    collapsed: false,
  };

  handleTogglerClick = () => {
    this.setState ({
      collapsed: !this.state.collapsed,
    });
  };

  render () {
    return (
      <div>
        <MDBView
          src={`https://mdbootstrap.com/img/Photos/Others/images/76.jpg`}
          fixed
        >
          <MDBMask className="rgba-white-light d-flex justify-content-center align-items-center">
            <MDBContainer>
              <MDBRow className="header-service">
                <MDBCol md="12" className="sm-4 indigo-text text-center">
                  <h1 className="display-3 mb-0 pt-md-5 pt-5 indigo-text font-weight-bold">
                    SERVICES
                  </h1>
                  <hr className="hr-light my-2" />
                  <h5 className="pt-sm-3 pb-md-5 white-text font-weight-bold">
                    I take pride in knowing what will work best for you, if you ever need any feed
                    back on what service will work for you, please feel free to contact me.
                  </h5>
                </MDBCol>
              </MDBRow>
              <MDBRow className="service-cards">
                <MDBCol md="4">
                  <MDBAnimation reveal type="fadeInLeft">
                    <MDBCard>
                      <MDBCardImage
                        className="massage-img img-fluid"
                        src={image}
                        waves
                      />
                      <MDBCardBody>
                        <MDBCardTitle>Deep Tissue</MDBCardTitle>
                        <MDBCardText>
                          Deep tissue massage is a type of massage therapy that
                          focuses on relaxing deeper layers of muscles and connective tissue.
                          It is especially helpful for chronic aches and pains and
                          contracted areas such as stiff neck and upper back, low back pain,
                          leg muscle tightness, and sore shoulders.
                        </MDBCardText>
                        <MDBDropdown dropup>
                          <MDBDropdownToggle caret color="primary">
                            <MDBIcon far icon="clock" />
                          </MDBDropdownToggle>
                          <MDBDropdownMenu basic>
                            <MDBDropdownItem header>
                              Session Durations
                            </MDBDropdownItem>
                            <MDBDropdownItem>60 min</MDBDropdownItem>
                            <MDBDropdownItem>90 min</MDBDropdownItem>
                            <MDBDropdownItem>120 min</MDBDropdownItem>
                          </MDBDropdownMenu>
                        </MDBDropdown>
                      </MDBCardBody>
                    </MDBCard>
                  </MDBAnimation>
                </MDBCol>
                <MDBCol md="4">
                  <MDBAnimation reveal type="fadeInDown">
                    <MDBCard>
                      <MDBCardImage
                        className="massage-img img-fluid"
                        src={imageTwo}
                        waves
                      />
                      <MDBCardBody>
                        <MDBCardTitle>Shiatsu</MDBCardTitle>
                        <MDBCardText>
                          Shiatsu massage is best for people who want to feel relaxed
                          and relieve stress, pain, and tension. It's a Japanese type
                          of massage that: promotes emotional and physical calm and relaxation.
                        </MDBCardText>
                        <MDBDropdown dropup>
                          <MDBDropdownToggle caret color="primary">
                            <MDBIcon far icon="clock" />
                          </MDBDropdownToggle>
                          <MDBDropdownMenu basic>
                            <MDBDropdownItem header>
                              Session Durations
                            </MDBDropdownItem>
                            <MDBDropdownItem>90 min</MDBDropdownItem>
                            <MDBDropdownItem>120 min</MDBDropdownItem>
                          </MDBDropdownMenu>
                        </MDBDropdown>
                      </MDBCardBody>
                    </MDBCard>
                  </MDBAnimation>
                </MDBCol>
                <MDBCol md="4">
                  <MDBAnimation reveal type="fadeInRight">
                    <MDBCard>
                      <MDBCardImage
                        className="massage-img img-fluid"
                        src={imageThree}
                        waves
                      />
                      <MDBCardBody>
                        <MDBCardTitle>Trigger Point</MDBCardTitle>
                        <MDBCardText>
                          A trigger point is a tight area within muscle tissue that
                          causes pain in other parts of the body. ... The pain may be
                          sharp and intense or a dull ache. Trigger point massage
                          therapy is specifically designed to alleviate the source of
                          the pain through cycles of isolated pressure and release.
                        </MDBCardText>
                        <MDBDropdown dropup>
                          <MDBDropdownToggle caret color="primary">
                            <MDBIcon far icon="clock" />
                          </MDBDropdownToggle>
                          <MDBDropdownMenu basic>
                            <MDBDropdownItem header>
                              Session Durations
                            </MDBDropdownItem>
                            <MDBDropdownItem>60 min</MDBDropdownItem>
                            <MDBDropdownItem>90 min</MDBDropdownItem>
                          </MDBDropdownMenu>
                        </MDBDropdown>
                      </MDBCardBody>
                    </MDBCard>
                  </MDBAnimation>
                </MDBCol>
              </MDBRow>
              <MDBRow className="schedule-row">
                <MDBCol md="12" className="text-center">
                  <MDBBtn>
                    Schedule Now!
                  </MDBBtn>
                </MDBCol>
              </MDBRow>
            </MDBContainer>
          </MDBMask>
        </MDBView>
      </div>
    );
  }
}

export default ServicesPage;
