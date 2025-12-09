import React, { useState } from 'react';
import { Copy, RefreshCw } from 'lucide-react';

export default function BilingualRTLConverter() {
  const [inputText, setInputText] = useState('');
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(inputText);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy text:', err);
    }
  };

  const handleClear = () => {
    setInputText('');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-6">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-6">
          <h1 className="text-3xl font-bold text-gray-800 mb-2 text-center">
            Bilingual RTL Converter
          </h1>
          <p className="text-gray-600 text-center mb-8">
            Convert bilingual English-Arabic text to RTL format for easier reading
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Input Section - LTR */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <label className="text-sm font-semibold text-gray-700 uppercase tracking-wide">
                  Input (LTR)
                </label>
                <button
                  onClick={handleClear}
                  className="flex items-center gap-2 px-3 py-1.5 text-sm text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  <RefreshCw size={14} />
                  Clear
                </button>
              </div>
              <textarea
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                placeholder="Paste your bilingual text here..."
                className="w-full h-96 p-4 border-2 border-gray-300 rounded-xl focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all resize-none font-sans text-base leading-relaxed"
                style={{ 
                  direction: 'ltr',
                  whiteSpace: 'pre-wrap',
                  wordBreak: 'break-word'
                }}
              />
              <p className="text-xs text-gray-500">
                Left-to-Right format (Default)
              </p>
            </div>

            {/* Output Section - RTL */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <label className="text-sm font-semibold text-gray-700 uppercase tracking-wide">
                  Output (RTL)
                </label>
                <button
                  onClick={handleCopy}
                  disabled={!inputText}
                  className={`flex items-center gap-2 px-3 py-1.5 text-sm rounded-lg transition-colors ${
                    inputText
                      ? 'text-indigo-600 hover:text-indigo-700 hover:bg-indigo-50'
                      : 'text-gray-400 cursor-not-allowed'
                  }`}
                >
                  <Copy size={14} />
                  {copied ? 'Copied!' : 'Copy'}
                </button>
              </div>
              <div
                className="w-full h-96 p-4 border-2 border-indigo-300 bg-indigo-50/50 rounded-xl font-sans text-base leading-relaxed overflow-auto"
                style={{ 
                  direction: 'rtl', 
                  textAlign: 'right',
                  whiteSpace: 'pre-wrap',
                  wordBreak: 'break-word'
                }}
              >
                {inputText || (
                  <span className="text-gray-400 italic">
                    RTL formatted text will appear here...
                  </span>
                )}
              </div>
              <p className="text-xs text-gray-500">
                Right-to-Left format (Arabic reading direction)
              </p>
            </div>
          </div>
        </div>

        {/* Info Card */}
        <div className="bg-white rounded-xl shadow-md p-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-3">
            How it works
          </h2>
          <ul className="space-y-2 text-sm text-gray-600">
            <li className="flex items-start gap-2">
              <span className="text-indigo-600 font-bold">•</span>
              <span>
                Paste your bilingual text in the left input area
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-indigo-600 font-bold">•</span>
              <span>
                The right side shows the same text in RTL (right-to-left) format
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-indigo-600 font-bold">•</span>
              <span>
                No changes to content - only the reading direction is adjusted
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-indigo-600 font-bold">•</span>
              <span>
                Technical terms in both languages remain unchanged
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-indigo-600 font-bold">•</span>
              <span>
                Click "Copy" to copy the RTL formatted text to your clipboard
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
