import React, {useContext} from "react";
import "./AchievementCode.scss";
import AchievementCardCode from "../../components/achievementCardCode/AchievementCardCode";
import {achievementSectionCoding} from "../../portfolio";
import {Fade} from "react-reveal";
import StyleContext from "../../contexts/StyleContext";

export default function Achievement() {
  const {isDark} = useContext(StyleContext);
  if (!achievementSectionCoding.display) {
    return null;
  }
  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main" id="achievements">
        <div className="achievement-main-div">
          <div className="achievement-header">
            <h1
              className={
                isDark
                  ? "dark-mode heading achievement-heading-code"
                  : "heading achievement-heading-code"
              }
            >
              {achievementSectionCoding.title}
            </h1>
            <p
              className={
                isDark
                  ? "dark-mode subTitle-code achievement-subtitle-code"
                  : "subTitle-code achievement-subtitle-code"
              }
            >
              {achievementSectionCoding.subtitle}
            </p>
          </div>
          <div className="achievement-cards-div">
            {achievementSectionCoding.achievementsCards.map((card, i) => {
              return (
                <AchievementCardCode
                  key={i}
                  isDark={isDark}
                  cardInfo={{
                    title: card.title,
                    description: card.subtitle,
                    image: card.image,
                    imageAlt: card.imageAlt,
                    footer: card.footerLink
                  }}
                />
              );
            })}
          </div>
        </div>
      </div>
    </Fade>
  );
}
