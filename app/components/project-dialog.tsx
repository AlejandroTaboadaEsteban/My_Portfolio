"use client"

import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import { DialogHeader, DialogTitle } from "@/components/ui/dialog"

interface ProjectDialogProps {
  title: string;
  content: {
    overview: string;
    methodology: string[];
    results: string[];
    technologies: string[];
  };
}

export function ProjectDialog({ title, content }: ProjectDialogProps) {
  const [localActiveTab, setLocalActiveTab] = useState('overview');

  return (
    <DialogHeader className="text-center">
      <DialogTitle className="text-2xl text-center mb-6">{title}</DialogTitle>
      <div className="mt-4">
        <div className="flex justify-between w-full border-b">
          <button 
            className={`px-4 py-2 focus:outline-none border-b-2 transition-colors ${
              localActiveTab === 'overview' ? 'border-blue-500 text-blue-600 dark:text-blue-400' : 'border-transparent hover:text-blue-600 dark:hover:text-blue-400'
            }`}
            onClick={() => setLocalActiveTab('overview')}
          >
            Overview
          </button>
          <button 
            className={`px-4 py-2 focus:outline-none border-b-2 transition-colors ${
              localActiveTab === 'methodology' ? 'border-blue-500 text-blue-600 dark:text-blue-400' : 'border-transparent hover:text-blue-600 dark:hover:text-blue-400'
            }`}
            onClick={() => setLocalActiveTab('methodology')}
          >
            Methodology
          </button>
          <button 
            className={`px-4 py-2 focus:outline-none border-b-2 transition-colors ${
              localActiveTab === 'results' ? 'border-blue-500 text-blue-600 dark:text-blue-400' : 'border-transparent hover:text-blue-600 dark:hover:text-blue-400'
            }`}
            onClick={() => setLocalActiveTab('results')}
          >
            Results
          </button>
          <button 
            className={`px-4 py-2 focus:outline-none border-b-2 transition-colors ${
              localActiveTab === 'technologies' ? 'border-blue-500 text-blue-600 dark:text-blue-400' : 'border-transparent hover:text-blue-600 dark:hover:text-blue-400'
            }`}
            onClick={() => setLocalActiveTab('technologies')}
          >
            Technologies
          </button>
        </div>
        
        <div className="mt-4 overflow-y-auto pr-2" style={{ maxHeight: 'calc(600px - 180px)' }}>
          {localActiveTab === 'overview' && (
            <div className="text-base leading-relaxed">
              <p className="mb-4">{content.overview}</p>
            </div>
          )}
          
          {localActiveTab === 'methodology' && (
            <div className="text-base leading-relaxed">
              <ul className="list-disc pl-6 space-y-2">
                {content.methodology.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          )}
          
          {localActiveTab === 'results' && (
            <div className="text-base leading-relaxed">
              <ul className="list-disc pl-6 space-y-2">
                {content.results.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          )}
          
          {localActiveTab === 'technologies' && (
            <div className="text-base leading-relaxed">
              <div className="flex flex-wrap gap-2">
                {content.technologies.map((tech, index) => (
                  <Badge key={index}>{tech}</Badge>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </DialogHeader>
  );
} 