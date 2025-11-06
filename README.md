# ♠️♥️♦️♣️ Short Deck Texas Hold'em Odds Calculator

**A React/TypeScript poker odds calculator that deterministically computes all possible outcomes without simulation**

> 🎮 **[Live Demo](https://short-handed-poker-odds-calculator.vercel.app/)** | ⚡ **Deterministic Calculation** | 🔧 **Web Workers** | 📊 **Real-time Results**

<div align="center">

<img width="1446" height="1038" alt="short-handed-poker-odds-calculator" src="https://github.com/user-attachments/assets/8acd36aa-3a6c-4632-8536-b2fbc32dd3d6" />

_Interactive card placement and real-time odds calculation_

</div>

## Key Features

| Feature                        | Description                                                          |
| ------------------------------ | -------------------------------------------------------------------- |
| 🎲 **Exact Probabilities**     | Computes all possible board combinations (no Monte Carlo simulation) |
| 👆 **Drag-and-Drop UI**        | Intuitive card placement for up to 6 players                         |
| 🔢 **Short-Deck (6+) Support** | Specialized calculations for 36-card variant                         |
| 📊 **Hand Strength Analysis**  | Probability distribution for hero's possible hands                   |

## Getting Started

```bash
# Clone the repository
git clone https://github.com/mkourogiorgas/poker-odds-calculator.git

# Navigate to project directory
cd poker-odds-calculator

# Install dependencies
npm install

# Start development server
npm run dev
```

**Requirements:**

- Node.js 18+
- npm 9+

## Technical Stack

| Technology        | Purpose             | Version |
| ----------------- | ------------------- | ------- |
| **React**         | UI Framework        | 18.2.0  |
| **TypeScript**    | Type Safety         | 5.7.2   |
| **Vite**          | Build Tool          | 6.4.0   |
| **Redux Toolkit** | State Management    | 1.9.7   |
| **Tailwind CSS**  | Styling             | 4.0.8   |
| **Vitest**        | Testing             | 3.2.4   |
| **Web Workers**   | Parallel Processing | Native  |

## How It Works

### Deterministic Calculation (Not Monte Carlo)

Unlike traditional poker calculators that use Monte Carlo simulation with thousands of random iterations, this calculator computes **exact probabilities** by evaluating every possible board outcome:

1. **Generate All Combinations**: Uses recursive algorithm to create all possible remaining board combinations
2. **Parallel Processing**: Splits combinations into 4 chunks, processed by Web Workers simultaneously
3. **Hand Evaluation**: Each combination evaluates all players' hands with kicker scoring
4. **Aggregate Results**: Merges results and calculates exact win/tie probabilities

**Why This Matters:**

- ✅ 100% Accurate (no simulation variance)
- ✅ Deterministic (same input = same output every time)
- ✅ Fast (Web Workers prevent UI blocking)

### Algorithm Architecture

```
Player Input
    ↓
Community Combinations Generator (Recursive)
    ↓
Split into 4 Chunks
    ↓
Web Worker Pool (Parallel Processing)
    ├→ Worker 1: Hand Evaluator
    ├→ Worker 2: Hand Evaluator
    ├→ Worker 3: Hand Evaluator
    └→ Worker 4: Hand Evaluator
    ↓
Merge Results
    ↓
Calculate Equity & Rankings
```

### Project Structure

```
src/
├── components/          # React components
│   ├── lib/            # Business logic (evaluator, worker)
│   ├── hooks/          # Custom hooks (usePokerState, useAsyncAction)
│   ├── card/           # Card UI component
│   ├── ranking/        # Results display
│   └── table/          # Poker table layout
├── store/              # Redux state management
│   ├── tableSlice      # Player/community cards state
│   ├── deckSlice       # Remaining deck state
│   └── resultsSlice    # Calculation results state
├── domain/             # Type definitions
└── test/               # Test setup
```

## Development

```bash
# Run tests
npm run test

# Run tests with UI
npm run test:ui

# Check coverage
npm run test:coverage

# Lint and fix
npm run lint

# Build for production
npm run build

# Preview production build
npm run preview
```

## Features in Detail

### Supported Game Variant

- **Short Deck (6+)**: Texas Hold'em played with 36 cards (2s-5s removed)

### Equity Calculations

- Win percentage for each player
- Tie probability
- Hand strength distribution

### Hand Ranking

- Accurate evaluation of all poker hand types
- Proper kicker scoring for hand comparison

## Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 15+
