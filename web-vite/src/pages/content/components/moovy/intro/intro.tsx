import { CSSProperties, useEffect, useState } from "react";
import {
  CountdownCircle,
  CountdownText,
  StepsWrapper,
  StyledIntro,
  StyledIntroBox,
  StyledIntroButton,
  StyledNestGif,
  StyledParagraph,
} from "./intro.styles";
import {
  useTransition,
  animated,
  useSpringRef,
  AnimatedProps,
  useSpring,
} from "@react-spring/web";
import EmptyPage from "../empty-page/emptyPage";
import {
  FULL_LOGO_TRANSPARENT,
  GLOBAL_TO_NEST_GIF,
  MOOVY_NEST_GIF,
} from "../../../../../helpers/constants";

const Intro = () => {
  const [step, setStep] = useState(0);
  const [countdown, setCountdown] = useState(null);
  const [prevStep, setPrevStep] = useState(null);

  const totalDuration = 3; // Total duration of countdown in seconds
  const circumference = 2 * Math.PI * 16; // The circle circumference (2 * pi * r)
  const [hasShownIntro, setHasShownIntro] = useState(
    localStorage.getItem("hasShownIntro") === "true"
  );

  const nextStep = () => {
    setStep((prevStep) => prevStep + 1);
  };

  const previousStep = () => {
    setStep((prevStep) => prevStep - 1);
  };

  const finishSteps = () => {
    setStep(2);
    setCountdown(3);
  };

  useEffect(() => {
    let timer;
    if (countdown > 0) {
      timer = setTimeout(() => {
        setCountdown(countdown - 1);
      }, 1000); // Decrease the countdown every second
    }
    return () => clearTimeout(timer);
  }, [countdown]);

  const steps = [
    {
      title: "MoovyChat",
      description:
        "MOOVY CHAT is your ultimate companion for OTT platforms. Interact, share, and experience shows like never before with our community and personalized video filters.",
    },
    {
      title: "MoovyNest",
      description:
        "With MOOVY NEST, create or join Nests to watch shows in sync with others. Share your reactions and enjoy content with your network, no matter the distance.",
    },
  ];
  const transRef = useSpringRef();
  const transitions = useTransition(step, {
    ref: transRef,
    keys: null,
    from: { opacity: 0, transform: "translate3d(100%,0,0)" },
    enter: { opacity: 1, transform: "translate3d(0%,0,0)" },
    leave: { opacity: 0, transform: "translate3d(-50%,0,0)" },
    exitBeforeEnter: true,
    config: {
      duration: 500,
    },
  });

  useEffect(() => {
    transRef.start();
  }, [step]);

  const introBoxProps = useSpring({
    from: {
      transform: "scale(0.1)",
    },
    to: async (next, cancel) => {
      await next({ transform: "scale(1)" });
      await next({ transform: "scale(0.95)" });
      await next({ transform: "scale(1)" });
      if (step === 2) {
        await next({ transform: "scale(0)" });
        setHasShownIntro(() => true);
        localStorage.setItem("hasShownIntro", "true");
      }
    },
    config: {
      tension: 200,
      friction: 0,
      duration: 600,
    },
  });

  if (countdown === 0 && hasShownIntro) {
    return null; // Render nothing if the intro has already been shown
  }

  return (
    <StyledIntro>
      <StyledIntroBox style={introBoxProps}>
        <StepsWrapper className={`flex fill`}>
          {transitions((style, item) =>
            item < steps.length ? (
              <animated.div style={style} className="step">
                {item !== 2 && (
                  <EmptyPage
                    msg=""
                    src={item === 0 ? FULL_LOGO_TRANSPARENT : MOOVY_NEST_GIF}
                  />
                )}
                {item === 1 && <EmptyPage msg="" src={GLOBAL_TO_NEST_GIF} />}
                <StyledParagraph>{steps[item].description}</StyledParagraph>
                {item === 0 || prevStep === 0 ? (
                  <div style={{ float: "right" }}>
                    <StyledIntroButton onClick={nextStep}>
                      Next
                    </StyledIntroButton>
                    <StyledIntroButton onClick={finishSteps}>
                      Skip
                    </StyledIntroButton>
                  </div>
                ) : (
                  <div style={{ float: "right" }}>
                    <StyledIntroButton onClick={previousStep}>
                      Back
                    </StyledIntroButton>
                    <StyledIntroButton onClick={finishSteps}>
                      Finish
                    </StyledIntroButton>
                  </div>
                )}
              </animated.div>
            ) : (
              <animated.div style={style} className="step final">
                <StyledParagraph>
                  Welcome to MoovyChat! Enjoy your viewing experience.
                </StyledParagraph>
                <CountdownCircle>
                  <circle
                    stroke="black"
                    strokeWidth="2"
                    fill="transparent"
                    r="16"
                    cx="18"
                    cy="18"
                    strokeDasharray={circumference}
                    strokeDashoffset={
                      ((totalDuration - countdown) / totalDuration) *
                      circumference
                    }
                  />
                  <CountdownText
                    x="18"
                    y="21"
                    textAnchor="middle"
                    dominantBaseline="middle"
                  >
                    {countdown}
                  </CountdownText>
                </CountdownCircle>
              </animated.div>
            )
          )}
        </StepsWrapper>
      </StyledIntroBox>
    </StyledIntro>
  );
};

export default Intro;
