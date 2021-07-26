import React, { useState } from "react";
import { CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import CalenderIcon from "../components/icons/calender-icon";
import CognitionIcon from "../components/icons/cognition-icon";
import ArrowIcon from "../components/icons/arrow-icon";
import DotMenuIcon from "../components/icons/dot-menu-icon";
import EnergyIcon from "../components/icons/energy-icon";
import FittnessIcon from "../components/icons/fittness-icon";
import HomeWellnessIcon from "../components/icons/home-wellness-icon";
import ImmunityIcon from "../components/icons/immunity-icon";
import InfoIcon from "../components/icons/info-icon";
import MetabolismIcon from "../components/icons/metabolism-icon";
import MoodIcon from "../components/icons/mood-icon";
import ProfileIcon from "../components/icons/profile";
import SleepIcon from "../components/icons/sleep-icon";
import MainNav from "../components/navigation/main-nav";
import FilterIcon from "../components/icons/filter-icon";

export default function Home() {
  const [data, setData] = useState([
    {
      date: '12/08/20',
      energy: 22,
      sleep: 60,
    },
    {
      date: '12/08/20',
      energy: 30,
      sleep: 35,
    },
    {
      date: '17/01/21',
      energy: 60,
      sleep: 27,
    },
    {
      date: '04/07/21',
      energy: 95,
      sleep: 75,
    },
  ])

  
  const CustomTooltip = (props: any): any => {
    if (props.active) {
      console.log(props.payload)
      return (
        <div className="custom-tooltip">
          {props.label && <p className="custom-tooltip__label">Date: {props.label}</p>}
          {props.label && <div className="custom-tooltip__title">
            <EnergyIcon className="custom-tooltip__icon custom-tooltip__icon--green"/>
            <p className="custom-tooltip__text">Energy</p>
          </div>}
          {props.label && <p className="custom-tooltip__score">Score: {props.payload[0]?.value}%</p>}
          {props.label && <div className="custom-tooltip__title">
            <SleepIcon className="custom-tooltip__icon custom-tooltip__icon--blue"/>
            <p className="custom-tooltip__text">Sleep</p>
          </div>}
          {props.label && <p className="custom-tooltip__score">Score: {props.payload[1]?.value}%</p>}
        </div>
      );
    }

    return "";
  };

  return (
    <React.Fragment>
      <MainNav title="Dashboard"/>
      <div className="home">

        <div className="home__section home__section--1">

          <div className="home__container home-profile">
            <div className="home-profile__image">
              <img className="home-profile__image--image" src="/images/profile-image.png" alt="profile-image"/>
              <div className="home-profile__image--status">
                <div className="home-profile__image--status--circle"></div>
              </div>
            </div>
            <div className="home-profile__info">
              <h2 className="home-profile__name one-line">Jane Cooper</h2>
              <div className="home-profile__info-item">
                <CalenderIcon className="home-profile__info-item--icon"/>
                <span className="home-profile__info-item--text">07/09/1969</span>
              </div>
              <div className="home-profile__info-item">
                <ProfileIcon className="home-profile__info-item--icon"/>
                <span className="home-profile__info-item--text">Female</span>
              </div>
            </div>
            <button className="home-profile__button">
              <span className="home-profile__button--text">Profile Details</span></button>
          </div>

          <div className="home__container home-wellness">
            <HomeWellnessIcon className="home-wellness__icon"/>
            <div className="home-wellness__info">

              <div className="home-wellness__title">
                <span className="home-wellness__title--text">Wellness score</span>
                <InfoIcon className="home-wellness__title--icon"/>
              </div>
              <div className="home-wellness__percent">81%</div>
              <div className="home-wellness__change">
                <span className="home-wellness__change--icon"></span>
                <span className="home-wellness__change--text">7%</span>
              </div>

            </div>
            <button className="home-wellness__button">
              <span className="home-wellness__button--text">View Insights</span>
            </button>
          </div>

        </div>

        <div className="home__section home__section--2">
          <div className="home__container home-performance">
            <h2 className="home-performance__title">
              <span className="home-performance__title--text">Performance scores</span>
              <InfoIcon className="home-performance__title--icon"/>
            </h2>

            <ul className="home-performance__list">

              <li className="home-performance__item">
                <CognitionIcon className="home-performance__icon"/>
                <span className="home-performance__text">Cognition</span>
                <div className="home-performance__line">
                  <div className={`home-performance__line--percentage home-performance__line--green`} style={{width: "90%"}}></div>
                </div>
                <span className="home-performance__percentage">90%</span>
                <button className="home-performance__button">
                  <DotMenuIcon className="home-performance__button--icon"/>
                </button>
              </li>

              <li className="home-performance__item">
                <EnergyIcon className="home-performance__icon"/>
                <span className="home-performance__text">Energy</span>
                <div className="home-performance__line">
                  <div className={`home-performance__line--percentage home-performance__line--green`} style={{width: "80%"}}></div>
                </div>
                <span className="home-performance__percentage">80%</span>
                <button className="home-performance__button">
                  <DotMenuIcon className="home-performance__button--icon"/>
                </button>
              </li>

              <li className="home-performance__item">
                <ImmunityIcon className="home-performance__icon"/>
                <span className="home-performance__text">Immunity</span>
                <div className="home-performance__line">
                  <div className={`home-performance__line--percentage home-performance__line--blue`} style={{width: "57%"}}></div>
                </div>
                <span className="home-performance__percentage">57%</span>
                <button className="home-performance__button">
                  <DotMenuIcon className="home-performance__button--icon"/>
                </button>
              </li>

              <li className="home-performance__item">
                <FittnessIcon className="home-performance__icon"/>
                <span className="home-performance__text">Fitness</span>
                <div className="home-performance__line">
                  <div className={`home-performance__line--percentage home-performance__line--yellow`} style={{width: "37%"}}></div>
                </div>
                <span className="home-performance__percentage">37%</span>
                <button className="home-performance__button">
                  <DotMenuIcon className="home-performance__button--icon"/>
                </button>
              </li>

              <li className="home-performance__item">
                <SleepIcon className="home-performance__icon home-performance__icon--fill"/>
                <span className="home-performance__text">Sleep</span>
                <div className="home-performance__line">
                  <div className={`home-performance__line--percentage home-performance__line--orange`} style={{width: "17%"}}></div>
                </div>
                <span className="home-performance__percentage">17%</span>
                <button className="home-performance__button">
                  <DotMenuIcon className="home-performance__button--icon"/>
                </button>
              </li>

              <li className="home-performance__item">
                <MetabolismIcon className="home-performance__icon"/>
                <span className="home-performance__text">Metabolism</span>
                <div className="home-performance__line">
                  <div className={`home-performance__line--percentage home-performance__line--red`} style={{width: "15%"}}></div>
                </div>
                <span className="home-performance__percentage">15%</span>
                <button className="home-performance__button">
                  <DotMenuIcon className="home-performance__button--icon"/>
                </button>
              </li>

              <li className="home-performance__item">
                <MoodIcon className="home-performance__icon"/>
                <span className="home-performance__text">Mood</span>
                <div className="home-performance__line">
                  <div className={`home-performance__line--percentage home-performance__line--red`} style={{width: "7%"}}></div>
                </div>
                <span className="home-performance__percentage">7%</span>
                <button className="home-performance__button">
                  <DotMenuIcon className="home-performance__button--icon"/>
                </button>
              </li>

            </ul>

            <div className="home-performance__rate">
              <span className="home-performance__rate--text">Need improving</span>
              <span className="home-performance__rate--text">Good Score</span>
              <span className="home-performance__rate--text">Excellent Score</span>
            </div>

          </div>
        </div>

        <div className="home__section home__section--3">

          <div className="home__container home-performance-trends">
            <div className="home-performance-trends__top">
              <div className="home-performance-trends__top--1">
                <h2 className="home-performance-trends__title">
                  <span className="home-performance-trends__title--text">Performance trends</span>
                  <InfoIcon className="home-performance-trends__title--icon"/>
                </h2>

                <div className="home-performance-trends__colors">
                  <div className="home-performance-trends__colors--item">
                    <span className="home-performance-trends__colors--line home-performance-trends__colors--green"></span>
                    <span className="home-performance-trends__colors--text">Energy</span>
                  </div>
                  <div className="home-performance-trends__colors--item">
                    <span className="home-performance-trends__colors--line home-performance-trends__colors--blue"></span>
                    <span className="home-performance-trends__colors--text">Sleep</span>
                  </div>
                </div>
              </div>

              <div className="home-performance-trends__buttons">
                <button className="home-performance-trends__button-date">
                  <span className="home-performance-trends__button-date--text">Last 30 Days</span>
                  <ArrowIcon className="home-performance-trends__button-date--icon"/>
                </button>
                <button className="home-performance-trends__button-filter">
                  <FilterIcon className="home-performance-trends__button-filter--icon"/>
                </button>
              </div>
            </div>

            <div className="home-performance-trends__chart">
              <ResponsiveContainer width="100%" height={200}>
                <LineChart width={500} height={300} data={data} margin={{top: 5, right: 30, left: 20, bottom: 5}}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="date" />
                  <YAxis/>
                  <Tooltip content={<CustomTooltip/>}/>
                  <Legend />
                  <Line type="monotone" dataKey="energy" stroke="#5BEBA3" activeDot={{ r: 8 }}/>
                  <Line type="monotone" dataKey="sleep" stroke="#41B0F6"  activeDot={{ r: 8 }}/>
                </LineChart>
              </ResponsiveContainer>
            </div>

            <div className="home-performance-trends__rate">
              <span className="home-performance-trends__rate--text">Excellent Score</span>
              <span className="home-performance-trends__rate--text">Good Score</span>
              <span className="home-performance-trends__rate--text">Need improving</span>
            </div>
          </div>

        </div>
      </div>
    </React.Fragment>
  )
}

export async function getServerSideProps(context: any) {
  return {
    props: {},
  }
}