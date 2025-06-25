import React from 'react';
import MetaTagGenerator from '../components/tools/MetaTagGenerator';
import RobotsTxtGenerator from '../components/tools/RobotsTxtGenerator';
import KeywordDensityChecker from '../components/tools/KeywordDensityChecker';
import BacklinkChecker from '../components/tools/BacklinkChecker';
import SitemapGenerator from '../components/tools/SitemapGenerator';

function SEOTools() {
  return (
    <div className="space-y-10">
      <h1 className="text-3xl font-bold text-center mb-6">SEO Optimization Tools</h1>

      <MetaTagGenerator />
      <RobotsTxtGenerator />
      <KeywordDensityChecker />
      <BacklinkChecker />
      <SitemapGenerator />
    </div>
  );
}

export default SEOTools;
