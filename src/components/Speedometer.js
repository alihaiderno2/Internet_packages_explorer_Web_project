import React from "react";
import { motion } from "framer-motion";
import "../styles/Speedometer.css";

const Speedometer = ({ value }) => {
  const minValue = 0;
  const maxValue = 30;
  const minAngle = -90;
  const maxAngle = 90;
  const radius = 320;
  const tickOffset = 20;

  const clamped = Math.min(Math.max(value, minValue), maxValue);
  const angle =
    minAngle + ((clamped - minValue) / (maxValue - minValue)) * (maxAngle - minAngle);

  const ticks = Array.from({ length: 7 }, (_, i) => {
    const val = i * 5;
    const ang =
      minAngle + ((val - minValue) / (maxValue - minValue)) * (maxAngle - minAngle);
    return { val, ang };
  });

  const rawLabels = [0, 7, 15, 23, 30];
  const labels = rawLabels.map((val) => ({
    val,
    ang:
      minAngle + ((val - minValue) / (maxValue - minValue)) * (maxAngle - minAngle),
  }));

  return (
    <div className="speedometer">
      <div className="how-long">How Long will this package take you?</div>
      <div className="gauge">
    
        {ticks.map(({ val, ang }) => (
          <div
            key={val}
            className="tick"
            style={{ transform: `rotate(${ang}deg) translateY(-${radius - tickOffset}px)` }}
          />
        ))}

    
        {labels.map(({ val, ang }) => (
          <div
            key={val}
            className="tick-label"
            style={{ transform: `rotate(${ang}deg) translateY(-${radius + 10}px)` }}
          >
            <span style={{ transform: `rotate(${-ang}deg)` }}>{val}</span>
          </div>
        ))}

        <motion.div
          className="needle"
          initial={{ rotate: minAngle }}
          animate={{ rotate: angle }}
          transition={{ type: "spring", stiffness: 20, damping: 10 }}
        />
        <div className="center-dot" />
      </div>
    </div>
  );
};

export default Speedometer;
