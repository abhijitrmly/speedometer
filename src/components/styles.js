import styled from 'styled-components';

export const SpeedometerWrapper = styled.div`
    margin-top: 200px;
    width: 24em;
    height: 24em;
    top: 50%;
    left: 50%;
    margin: -150px 0 0 -100px;
    background: black;
    overflow: hidden;
    border-radius: 50%;
    border: 0.5em solid black;
    position: absolute;
`;

export const InternalCircle = styled.div`
   width: 75%;
   height: 75%;
   margin: auto auto;
   margin-top: 50px;
   border-radius: 50%;
`;

const PastSpeedLinearGradient = 'linear-gradient(90deg, rgba(2, 0, 36, 0) 0%, rgba(0, 0, 0, 0) 8%, rgba(212,175,55, 1) 8%, rgba(212,175,55, 1) 12%, rgba(0, 0, 0, 0) 12%)';
const UpcomingSpeedLinearGradient = 'linear-gradient(90deg, rgba(2, 0, 36, 0) 0%, rgba(0, 0, 0, 0) 8%, rgba(255, 255, 255, 0.1) 8%, rgba(255, 255, 255, 0.1) 12%, rgba(0, 0, 0, 0) 12%)';

export const CurrentSpeedTicks = styled.div`
    background: black;
    position: relative;
    left: 0%;
    top: 50%;
    width: 100%;
    height: 1%;
    margin-bottom: -1%;
    background: ${(props) => (props.isPastSpeed ? PastSpeedLinearGradient : UpcomingSpeedLinearGradient)};
    transform: ${(props) => `rotate(${props.angle})`};
`;

const MajorTickLinearGradient = 'linear-gradient(90deg, rgba(2, 0, 36, 0) 0%, rgba(0, 0, 0, 0) 4%, white 4%, white 12%, rgba(0, 0, 0, 0) 12%)';
const MinorTickLinearGradient = 'linear-gradient(90deg, rgba(2, 0, 36, 0) 0%, rgba(0, 0, 0, 0) 8%, rgba(212,175,55, 0.7) 8%, rgba(212,175,55, 0.7) 12%, rgba(0, 0, 0, 0) 12%)';

export const Ticks = styled.div`
    background: black;
    position: relative;
    left: 0%;
    top: 50%;
    width: 100%;
    height: 1%;
    margin-bottom: -1%;
    background: ${(props) => (props.isMajorTick ? MajorTickLinearGradient : MinorTickLinearGradient)};
    transform: ${(props) => `rotate(${props.angle})`};
`;

export const SpeedDisplayWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
`;

export const SpeedNumber = styled.h1`
  text-align: center;
  padding-top: 100px;
  color: white;
`;

export const SpeedUnits = styled.h6`
  color: rgba(212,175,55, 1);
  margin-left: 4px;
`;
