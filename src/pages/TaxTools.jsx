import React from 'react';
import IncomeTaxCalculator from '../components/tools/IncomeTaxCalculator';
import GSTCalculator from '../components/tools/GSTCalculator';
import PropertyTaxCalculator from '../components/tools/PropertyTaxCalculator';
import AdvancedTaxCalculator from '../components/tools/AdvancedTaxCalculator';
import SalesTaxCalculator from '../components/tools/SalesTaxCalculator';

function TaxTools() {
  return (
    <div className="space-y-10">
      <h1 className="text-3xl font-bold text-center mb-6">Tax & Finance Tools</h1>

      <IncomeTaxCalculator />
      <GSTCalculator />
      <PropertyTaxCalculator />
      <AdvancedTaxCalculator />
      <SalesTaxCalculator />
    </div>
  );
}

export default TaxTools;
