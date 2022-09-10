export interface ArmPosition {
  elbowXPercent: number;
  elbowYUp: boolean;
  wristXPercent: number;
  wristYUp: boolean;
  fingertipXPercent: number;
  fingertipYUp: boolean;
}

export interface LegPosition {
  kneeXPercent: number;
  kneeYUp: boolean;
  ankleXPercent: number;
  ankleYUp: boolean;
}

export interface LimbPositions {
  leftArmPosition: ArmPosition;
  rightArmPosition: ArmPosition;
  leftLegPosition: LegPosition;
  rightLegPosition: LegPosition;
}

export const availableLimbPositions: Record<string, LimbPositions> = {
  leftArmComment: {
    leftArmPosition: {
      elbowXPercent: -0.3,
      elbowYUp: false,
      wristXPercent: -0.2,
      wristYUp: false,
      fingertipXPercent: 0.4,
      fingertipYUp: true,
    },
    rightArmPosition: {
      elbowXPercent: 0.5,
      elbowYUp: false,
      wristXPercent: 0.2,
      wristYUp: false,
      fingertipXPercent: 0.4,
      fingertipYUp: false,
    },
    leftLegPosition: {
      kneeXPercent: -0.3,
      kneeYUp: false,
      ankleXPercent: -0.2,
      ankleYUp: false,
    },
    rightLegPosition: {
      kneeXPercent: 0.2,
      kneeYUp: false,
      ankleXPercent: 0.2,
      ankleYUp: false,
    },
  },

  excited: {
    leftArmPosition: {
      elbowXPercent: -0.87,
      elbowYUp: true,
      wristXPercent: -0.2,
      wristYUp: true,
      fingertipXPercent: -0.05,
      fingertipYUp: true,
    },
    rightArmPosition: {
      elbowXPercent: 0.93,
      elbowYUp: true,
      wristXPercent: 0.1,
      wristYUp: true,
      fingertipXPercent: 0.02,
      fingertipYUp: true,
    },
    leftLegPosition: {
      kneeXPercent: -0.3,
      kneeYUp: false,
      ankleXPercent: -0.2,
      ankleYUp: false,
    },
    rightLegPosition: {
      kneeXPercent: 0.2,
      kneeYUp: false,
      ankleXPercent: 0.2,
      ankleYUp: false,
    },
  },

  leftHandWave: {
    leftArmPosition: {
      elbowXPercent: -0.9,
      elbowYUp: true,
      wristXPercent: -0.3,
      wristYUp: true,
      fingertipXPercent: -0.05,
      fingertipYUp: true,
    },
    rightArmPosition: {
      elbowXPercent: 0.45,
      elbowYUp: false,
      wristXPercent: 0.25,
      wristYUp: false,
      fingertipXPercent: 0.2,
      fingertipYUp: false,
    },
    leftLegPosition: {
      kneeXPercent: -0.3,
      kneeYUp: false,
      ankleXPercent: -0.2,
      ankleYUp: false,
    },
    rightLegPosition: {
      kneeXPercent: 0.3,
      kneeYUp: false,
      ankleXPercent: 0.2,
      ankleYUp: false,
    },
  },

  rightHandWave: {
    leftArmPosition: {
      elbowXPercent: -0.45,
      elbowYUp: false,
      wristXPercent: -0.25,
      wristYUp: false,
      fingertipXPercent: -0.2,
      fingertipYUp: false,
    },
    rightArmPosition: {
      elbowXPercent: 0.9,
      elbowYUp: true,
      wristXPercent: 0.25,
      wristYUp: true,
      fingertipXPercent: 0.1,
      fingertipYUp: true,
    },
    leftLegPosition: {
      kneeXPercent: -0.3,
      kneeYUp: false,
      ankleXPercent: -0.2,
      ankleYUp: false,
    },
    rightLegPosition: {
      kneeXPercent: 0.3,
      kneeYUp: false,
      ankleXPercent: 0.2,
      ankleYUp: false,
    },
  },

  rightHandPointUp: {
    leftArmPosition: {
      elbowXPercent: -0.4,
      elbowYUp: false,
      wristXPercent: -0.3,
      wristYUp: false,
      fingertipXPercent: -0.2,
      fingertipYUp: false,
    },
    rightArmPosition: {
      elbowXPercent: 0.65,
      elbowYUp: false,
      wristXPercent: 0.35,
      wristYUp: true,
      fingertipXPercent: 0.1,
      fingertipYUp: true,
    },
    leftLegPosition: {
      kneeXPercent: -0.3,
      kneeYUp: false,
      ankleXPercent: -0.2,
      ankleYUp: false,
    },
    rightLegPosition: {
      kneeXPercent: 0.3,
      kneeYUp: false,
      ankleXPercent: 0.2,
      ankleYUp: false,
    },
  },

  handsDown: {
    leftArmPosition: {
      elbowXPercent: -0.45,
      elbowYUp: false,
      wristXPercent: -0.3,
      wristYUp: false,
      fingertipXPercent: -0.2,
      fingertipYUp: false,
    },
    rightArmPosition: {
      elbowXPercent: 0.45,
      elbowYUp: false,
      wristXPercent: 0.3,
      wristYUp: false,
      fingertipXPercent: 0.2,
      fingertipYUp: false,
    },
    leftLegPosition: {
      kneeXPercent: -0.3,
      kneeYUp: false,
      ankleXPercent: -0.2,
      ankleYUp: false,
    },
    rightLegPosition: {
      kneeXPercent: 0.3,
      kneeYUp: false,
      ankleXPercent: 0.2,
      ankleYUp: false,
    },
  },

  shrug: {
    leftArmPosition: {
      elbowXPercent: -0.5,
      elbowYUp: false,
      wristXPercent: -0.45,
      wristYUp: true,
      fingertipXPercent: -0.9,
      fingertipYUp: true,
    },
    rightArmPosition: {
      elbowXPercent: 0.5,
      elbowYUp: false,
      wristXPercent: 0.45,
      wristYUp: true,
      fingertipXPercent: 0.9,
      fingertipYUp: true,
    },
    leftLegPosition: {
      kneeXPercent: -0.3,
      kneeYUp: false,
      ankleXPercent: -0.2,
      ankleYUp: false,
    },
    rightLegPosition: {
      kneeXPercent: 0.3,
      kneeYUp: false,
      ankleXPercent: 0.2,
      ankleYUp: false,
    },
  },

  handsFolded: {
    leftArmPosition: {
      elbowXPercent: -0.6,
      elbowYUp: false,
      wristXPercent: 0.98,
      wristYUp: true,
      fingertipXPercent: 0.98,
      fingertipYUp: false,
    },
    rightArmPosition: {
      elbowXPercent: 0.6,
      elbowYUp: false,
      wristXPercent: -0.98,
      wristYUp: true,
      fingertipXPercent: -0.98,
      fingertipYUp: false,
    },
    leftLegPosition: {
      kneeXPercent: -0.3,
      kneeYUp: false,
      ankleXPercent: -0.2,
      ankleYUp: false,
    },
    rightLegPosition: {
      kneeXPercent: 0.3,
      kneeYUp: false,
      ankleXPercent: 0.2,
      ankleYUp: false,
    },
  },

  rightHandHoldingMid: {
    leftArmPosition: {
      elbowXPercent: -0.35,
      elbowYUp: false,
      wristXPercent: -0.3,
      wristYUp: false,
      fingertipXPercent: -0.2,
      fingertipYUp: false,
    },
    rightArmPosition: {
      elbowXPercent: 0.35,
      elbowYUp: false,
      wristXPercent: 0.9,
      wristYUp: false,
      fingertipXPercent: -0.8,
      fingertipYUp: true,
    },
    leftLegPosition: {
      kneeXPercent: -0.3,
      kneeYUp: false,
      ankleXPercent: -0.2,
      ankleYUp: false,
    },
    rightLegPosition: {
      kneeXPercent: 0.3,
      kneeYUp: false,
      ankleXPercent: 0.2,
      ankleYUp: false,
    },
  },

  rightHandHoldingDown: {
    leftArmPosition: {
      elbowXPercent: -0.45,
      elbowYUp: false,
      wristXPercent: -0.3,
      wristYUp: false,
      fingertipXPercent: -0.2,
      fingertipYUp: false,
    },
    rightArmPosition: {
      elbowXPercent: 0.4,
      elbowYUp: false,
      wristXPercent: 0.55,
      wristYUp: false,
      fingertipXPercent: 0.2,
      fingertipYUp: true,
    },
    leftLegPosition: {
      kneeXPercent: -0.3,
      kneeYUp: false,
      ankleXPercent: -0.2,
      ankleYUp: false,
    },
    rightLegPosition: {
      kneeXPercent: 0.3,
      kneeYUp: false,
      ankleXPercent: 0.2,
      ankleYUp: false,
    },
  },
  rightHandPointingSouthEast: {
    leftArmPosition: {
      elbowXPercent: -0.45,
      elbowYUp: false,
      wristXPercent: -0.3,
      wristYUp: false,
      fingertipXPercent: -0.2,
      fingertipYUp: false,
    },
    rightArmPosition: {
      elbowXPercent: 0.4,
      elbowYUp: false,
      wristXPercent: 0.8,
      wristYUp: false,
      fingertipXPercent: 0.96,
      fingertipYUp: false,
    },
    leftLegPosition: {
      kneeXPercent: -0.3,
      kneeYUp: false,
      ankleXPercent: -0.2,
      ankleYUp: false,
    },
    rightLegPosition: {
      kneeXPercent: 0.3,
      kneeYUp: false,
      ankleXPercent: 0.2,
      ankleYUp: false,
    },
  },
};
