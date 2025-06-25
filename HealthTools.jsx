import React from 'react';
import BMICalculator from '../components/tools/BMICalculator';
import BMRCalculator from '../components/tools/BMRCalculator';
import IdealWeightCalculator from '../components/tools/IdealWeightCalculator';
import WaterIntakeCalculator from '../components/tools/WaterIntakeCalculator';
import CalorieCalculator from '../components/tools/CalorieCalculator';

function HealthTools() {
  return (
    <div className="space-y-10">
      <h1 className="text-3xl font-bold text-center mb-6">Health & Wellness Tools</h1>

      <BMICalculator />
      <BMRCalculator />
      <IdealWeightCalculator />
      <WaterIntakeCalculator />
      <CalorieCalculator />
    </div>
  );
}

export default HealthTools;
