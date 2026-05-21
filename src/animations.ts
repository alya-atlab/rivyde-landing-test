import { keyframes } from '@mui/system';

export const fadeUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(34px) scale(0.98);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
`;

export const floatSoft = keyframes`
  0%, 100% {
    transform: translate3d(0, 0, 0) scale(1);
  }
  50% {
    transform: translate3d(-10px, -18px, 0) scale(1.015);
  }
`;

export const glowPulse = keyframes`
  0%, 100% {
    filter: drop-shadow(0 0 0 rgba(85, 242, 245, 0));
  }
  50% {
    filter: drop-shadow(0 0 22px rgba(85, 242, 245, 0.7));
  }
`;

export const waveDrift = keyframes`
  0%, 100% {
    transform: translate3d(0, 0, 0) scale(1.08);
    opacity: 0.76;
  }
  50% {
    transform: translate3d(-32px, -10px, 0) scale(1.14);
    opacity: 1;
  }
`;

export const waveScan = keyframes`
  0%, 100% {
    opacity: 0.2;
    transform: translateX(-10%);
  }
  50% {
    opacity: 0.85;
    transform: translateX(10%);
  }
`;

export const contactRing = keyframes`
  0% {
    opacity: 0;
    transform: scale(0.72);
  }
  35% {
    opacity: 0.55;
  }
  100% {
    opacity: 0;
    transform: scale(1.28);
  }
`;

export const contactBeam = keyframes`
  0%, 100% {
    opacity: 0.18;
    transform: translateX(-16%) rotate(-8deg);
  }
  50% {
    opacity: 0.5;
    transform: translateX(16%) rotate(-8deg);
  }
`;

export const buttonPulse = keyframes`
  0%, 100% {
    box-shadow: 0 0 0 rgba(33, 166, 200, 0);
  }
  50% {
    box-shadow: 0 0 28px rgba(33, 166, 200, 0.36);
  }
`;

export const globeSpin = keyframes`
  from {
    background-position: 0 0, 0 0, center;
  }
  to {
    background-position: 120px 0, -90px 0, center;
  }
`;

export const orbitSweep = keyframes`
  0%, 100% {
    transform: rotate(-8deg) scaleX(1);
    opacity: 0.35;
  }
  50% {
    transform: rotate(12deg) scaleX(1.05);
    opacity: 0.75;
  }
`;

export const dotPulse = keyframes`
  0%, 100% {
    box-shadow: 0 0 0 rgba(85, 242, 245, 0);
    transform: scale(1);
  }
  50% {
    box-shadow: 0 0 18px rgba(85, 242, 245, 0.85);
    transform: scale(1.25);
  }
`;
