import React from 'react';
import TextToArticle from '../components/tools/TextToArticle';
import BlogTitleGenerator from '../components/tools/BlogTitleGenerator';
import SummaryGenerator from '../components/tools/SummaryGenerator';
import EssayGenerator from '../components/tools/EssayGenerator';
import MetaDescriptionGenerator from '../components/tools/MetaDescriptionGenerator';

function WritingTools() {
  return (
    <div className="space-y-10">
      <h1 className="text-3xl font-bold text-center mb-6">Writing & Content Tools</h1>

      <TextToArticle />
      <BlogTitleGenerator />
      <SummaryGenerator />
      <EssayGenerator />
      <MetaDescriptionGenerator />
    </div>
  );
}

export default WritingTools;
