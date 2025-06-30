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
              <p 
                className="mb-4"
                dangerouslySetInnerHTML={{ __html: content.overview }}
              />
              {title.includes("Missio OS") && (
                <div className="mt-6 pt-4 border-t">
                  <h4 className="font-semibold mb-2">Download</h4>
                  <a
                    href="/Bachelor_thesis_Alejandro_Taboada.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline flex items-center gap-2"
                  >
                    📄 Download full thesis (PDF)
                  </a>
                </div>
              )}
              {title.includes("Anomaly Detection") && (
                <div className="mt-6 pt-4 border-t">
                  <h4 className="font-semibold mb-2">Download</h4>
                  <a
                    href="/HNJ_Project.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline flex items-center gap-2"
                  >
                    📄 Download project report (PDF)
                  </a>
                </div>
              )}
              {title.includes("Samplex") && (
                <div className="mt-6 pt-4 border-t">
                  <h4 className="font-semibold mb-2">Link to GitHub Repo</h4>
                  <a
                    href="https://github.com/PablosTsel/samplex"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline flex items-center gap-2"
                  >
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                    View project on GitHub
                  </a>
                </div>
              )}
              {title.includes("Fantasy") && (
                <div className="mt-6 pt-4 border-t">
                  <h4 className="font-semibold mb-2">Link to GitHub Repo</h4>
                  <a
                    href="https://github.com/AlejandroTaboadaEsteban/fantasy_forecast"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline flex items-center gap-2"
                  >
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                    View project on GitHub
                  </a>
                </div>
              )}
              {title.includes("Football Player Performance") && (
                <div className="mt-6 pt-4 border-t">
                  <h4 className="font-semibold mb-2">Link to GitHub Repo</h4>
                  <a
                    href="https://github.com/AlejandroTaboadaEsteban/fantasy_forecast"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline flex items-center gap-2"
                  >
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                    View project on GitHub
                  </a>
                </div>
              )}
              {title.includes("Deep Learning Model to Promote Recycling") && (
                <div className="mt-6 pt-4 border-t">
                  <h4 className="font-semibold mb-2">Link to GitHub Repo</h4>
                  <a
                    href="https://github.com/AlejandroTaboadaEsteban/Deep-Learning-model-for-Recycling"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline flex items-center gap-2"
                  >
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                    View project on GitHub
                  </a>
                </div>
              )}
              {title.includes("PacMan") && (
                <div className="mt-6 pt-4 border-t">
                  <h4 className="font-semibold mb-2">Link to GitHub Repo</h4>
                  <a
                    href="https://github.com/AlejandroTaboadaEsteban/PacManML"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline flex items-center gap-2"
                  >
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                    View project on GitHub
                  </a>
                </div>
              )}
              {title.includes("Super Mario") && (
                <div className="mt-6 pt-4 border-t">
                  <h4 className="font-semibold mb-2">Link to GitHub Repo</h4>
                  <a
                    href="https://github.com/AlejandroTaboadaEsteban/Super-Mario-Game"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline flex items-center gap-2"
                  >
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                    View project on GitHub
                  </a>
                </div>
              )}
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