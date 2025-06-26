import React from 'react';
import AgeCalculator from '../components/tools/AgeCalculator';
import LoanCalculator from '../components/tools/LoanCalculator';
import ScreenRecorder from '../components/tools/ScreenRecorder';
import UnitConverter from '../components/tools/UnitConverter';
import Notepad from '../components/tools/Notepad';

function DailyTools() {
  return (
    <div className="space-y-10 px-4 py-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-center mb-10">🛠️ Daily Tools</h1>

      <AgeCalculator />
      <LoanCalculator />
      <ScreenRecorder />
      <UnitConverter />
      <Notepad />
    </div>
  );
}

export default DailyTools;
