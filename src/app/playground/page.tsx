'use client';

import React, { useState } from 'react';
import { Container } from '../../components/layout/Container';
import { Card } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';

export default function Playground() {
  const [counter, setCounter] = useState(0);
  const [colorIndex, setColorIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const colors = ['pastel-pink', 'pastel-blue', 'pastel-green'];

  const toggleVisibility = () => setIsVisible(!isVisible);
  const incrementCounter = () => setCounter(counter + 1);
  const resetCounter = () => setCounter(0);
  const changeColor = () => setColorIndex((colorIndex + 1) % colors.length);

  return (
    <main className="min-h-screen pt-16">
      <Container className="py-20">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-6">
              Playground
            </h1>
            <p className="text-xl text-gray-600">
              A space for experiments, demos, and interactive fun
            </p>
          </div>

          {/* Interactive Elements */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {/* Counter Demo */}
            <Card className="p-8 text-center">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Counter</h3>
              <div className="text-6xl font-bold text-pastel-pink mb-6">
                {counter}
              </div>
              <div className="flex gap-3 justify-center">
                <Button onClick={incrementCounter} variant="primary">
                  +
                </Button>
                <Button onClick={resetCounter} variant="outline">
                  Reset
                </Button>
              </div>
            </Card>

            {/* Color Changer */}
            <Card className="p-8 text-center">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Color Magic</h3>
              <div
                className={`w-20 h-20 rounded-full mx-auto mb-6 bg-${colors[colorIndex]} transition-colors duration-300`}
              />
              <Button onClick={changeColor} variant="secondary">
                Change Color
              </Button>
            </Card>

            {/* Visibility Toggle */}
            <Card className="p-8 text-center">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Show/Hide</h3>
              <div className="h-20 flex items-center justify-center mb-6">
                {isVisible && (
                  <div className="text-4xl animate-bounce">🎉</div>
                )}
              </div>
              <Button onClick={toggleVisibility} variant="outline">
                {isVisible ? 'Hide' : 'Show'}
              </Button>
            </Card>

            {/* Random Quote Generator */}
            <Card className="p-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Random Quote</h3>
              <QuoteGenerator />
            </Card>

            {/* Simple Calculator */}
            <Card className="p-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Mini Calculator</h3>
              <MiniCalculator />
            </Card>

            {/* Animated Shapes */}
            <Card className="p-8 text-center">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Animated Shapes</h3>
              <div className="flex justify-center space-x-4">
                <div className="w-8 h-8 bg-pastel-pink rounded-full animate-bounce"></div>
                <div className="w-8 h-8 bg-pastel-blue rounded-full animate-bounce animation-delay-2000"></div>
                <div className="w-8 h-8 bg-pastel-green rounded-full animate-bounce animation-delay-4000"></div>
              </div>
            </Card>
          </div>

          {/* Fun Facts Section */}
          <Card className="p-8 bg-gray-50">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
              Fun Facts About This Portfolio
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="text-center">
                <div className="text-4xl mb-3">🎨</div>
                <h3 className="font-semibold text-gray-800 mb-2">Custom Colors</h3>
                <p className="text-gray-600">
                  All colors are carefully chosen pastel shades that create a soft, modern aesthetic.
                </p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-3">⚡</div>
                <h3 className="font-semibold text-gray-800 mb-2">Fast & Responsive</h3>
                <p className="text-gray-600">
                  Built with Next.js and optimized for both desktop and mobile experiences.
                </p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-3">🔧</div>
                <h3 className="font-semibold text-gray-800 mb-2">Modern Tech Stack</h3>
                <p className="text-gray-600">
                  Using TypeScript, Tailwind CSS, and best practices for maintainable code.
                </p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-3">🚀</div>
                <h3 className="font-semibold text-gray-800 mb-2">Deploy Ready</h3>
                <p className="text-gray-600">
                  Optimized for Vercel deployment with excellent performance scores.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </Container>
    </main>
  );
}

// Quote Generator Component
const QuoteGenerator = () => {
  const [quote, setQuote] = useState("Click the button to get inspired!");

  const quotes = [
    "The only way to do great work is to love what you do. – Steve Jobs",
    "Innovation distinguishes between a leader and a follower. – Steve Jobs",
    "The best error message is the one that never shows up. – Thomas Fuchs",
    "First, solve the problem. Then, write the code. – John Johnson",
    "Code is poetry written in logic. – Unknown",
    "The best way to predict the future is to create it. – Peter Drucker",
  ];

  const generateQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setQuote(quotes[randomIndex]);
  };

  return (
    <div className="text-center">
      <p className="text-gray-600 mb-4 min-h-[3rem] flex items-center justify-center">
        "{quote}"
      </p>
      <Button onClick={generateQuote} variant="primary" size="sm">
        New Quote
      </Button>
    </div>
  );
};

// Mini Calculator Component
const MiniCalculator = () => {
  const [display, setDisplay] = useState('0');
  const [previousValue, setPreviousValue] = useState<number | null>(null);
  const [operation, setOperation] = useState<string | null>(null);

  const handleNumber = (num: string) => {
    setDisplay(display === '0' ? num : display + num);
  };

  const handleOperation = (op: string) => {
    const inputValue = parseFloat(display);
    if (previousValue === null) {
      setPreviousValue(inputValue);
    } else if (operation) {
      const currentValue = previousValue || 0;
      let result = 0;
      switch (operation) {
        case '+':
          result = currentValue + inputValue;
          break;
        case '-':
          result = currentValue - inputValue;
          break;
        case '*':
          result = currentValue * inputValue;
          break;
        case '/':
          result = currentValue / inputValue;
          break;
      }
      setDisplay(String(result));
      setPreviousValue(result);
    }
    setOperation(op);
    setDisplay('0');
  };

  const calculate = () => {
    const inputValue = parseFloat(display);
    if (operation && previousValue !== null) {
      let result = 0;
      switch (operation) {
        case '+':
          result = previousValue + inputValue;
          break;
        case '-':
          result = previousValue - inputValue;
          break;
        case '*':
          result = previousValue * inputValue;
          break;
        case '/':
          result = previousValue / inputValue;
          break;
      }
      setDisplay(String(result));
      setPreviousValue(null);
      setOperation(null);
    }
  };

  const clear = () => {
    setDisplay('0');
    setPreviousValue(null);
    setOperation(null);
  };

  return (
    <div className="text-center">
      <div className="bg-gray-100 p-3 rounded-lg mb-3 font-mono text-lg">
        {display}
      </div>
      <div className="grid grid-cols-4 gap-2">
        {[7, 8, 9, '+', 4, 5, 6, '-', 1, 2, 3, '*', 0, 'C', '=', '/'].map((btn) => (
          <Button
            key={btn}
            onClick={() => {
              if (typeof btn === 'number') handleNumber(String(btn));
              else if (btn === 'C') clear();
              else if (btn === '=') calculate();
              else handleOperation(btn);
            }}
            variant="outline"
            size="sm"
            className="text-xs"
          >
            {btn}
          </Button>
        ))}
      </div>
    </div>
  );
};