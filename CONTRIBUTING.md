# Contributing to Cash App Clone

Thank you for your interest in contributing to the Cash App Clone project! This document provides guidelines and instructions for contributing.

## Getting Started

### Prerequisites
- Node.js v16 or higher
- Yarn or npm
- Git
- Expo CLI
- Android Studio or Xcode (for mobile testing)
- A Solana wallet (for testing blockchain features)

### Setting Up Development Environment

1. Fork the repository
2. Clone your fork:
   ```bash
   git clone https://github.com/YOUR_USERNAME/cash-app-clone.git
   cd cash-app-clone/cash-app
   ```

3. Install dependencies:
   ```bash
   yarn install
   ```

4. Start the development server:
   ```bash
   yarn start
   ```

## Development Workflow

### Branch Strategy
- `main` - Production-ready code
- Feature branches - `feature/your-feature-name`
- Bug fixes - `fix/bug-description`
- Documentation - `docs/what-you-updated`

### Making Changes

1. Create a new branch:
   ```bash
   git checkout -b feature/your-feature-name
   ```

2. Make your changes following our coding standards (see below)

3. Test your changes thoroughly

4. Commit your changes:
   ```bash
   git add .
   git commit -m "Description of your changes"
   ```

5. Push to your fork:
   ```bash
   git push origin feature/your-feature-name
   ```

6. Create a Pull Request

## Coding Standards

### TypeScript
- Use TypeScript for all new code
- Enable strict mode
- Define proper types and interfaces
- Avoid using `any` type

### React Native / React
- Use functional components with hooks
- Follow React best practices
- Use meaningful component and variable names
- Keep components focused and single-purpose

### Styling
- Use StyleSheet from React Native
- Follow the existing dark theme color scheme:
  - Background: `#141414`
  - Accent: `#7F5AF0` (purple/violet)
  - Button: `#444`
  - Text: `#FFF` (white)
- Ensure proper contrast for accessibility

### File Organization
```
src/
├── components/          # Reusable UI components
│   ├── [feature]/
│   │   ├── [feature]-ui.tsx          # UI components
│   │   ├── [feature]-feature.tsx     # Feature logic
│   │   └── [feature]-data-access.tsx # Data fetching
├── screens/            # Screen components
├── navigators/         # Navigation configuration
├── utils/             # Utility functions and hooks
└── cash-app-program/  # Solana program types
```

### Naming Conventions
- Components: PascalCase (`MyComponent.tsx`)
- Files: kebab-case for non-components (`my-util.ts`)
- Variables: camelCase (`myVariable`)
- Constants: UPPER_SNAKE_CASE (`MY_CONSTANT`)

## Testing

### Running Tests
```bash
yarn test
```

### Writing Tests
- Write tests for new features
- Ensure tests pass before submitting PR
- Aim for good test coverage
- Test both success and error cases

## Pull Request Process

### Before Submitting
- [ ] Code follows the style guidelines
- [ ] Self-review of code completed
- [ ] Comments added for complex code
- [ ] Documentation updated if needed
- [ ] No new warnings or errors
- [ ] Tests added/updated and passing

### PR Description
Include in your PR description:
- What changes were made
- Why the changes were necessary
- How to test the changes
- Screenshots (for UI changes)
- Related issues (if any)

### Review Process
1. Maintainers will review your PR
2. Address any feedback or requested changes
3. Once approved, your PR will be merged

## Blockchain Development

### Smart Contract Changes
If you're modifying the Anchor program:

1. Navigate to the anchor directory:
   ```bash
   cd anchor
   ```

2. Build the program:
   ```bash
   anchor build
   ```

3. Deploy to devnet:
   ```bash
   anchor deploy
   ```

4. Update the program ID in the app if changed
5. Regenerate TypeScript types if the IDL changed

### Testing Smart Contracts
```bash
anchor test
```

## Documentation

### Code Comments
- Add comments for complex logic
- Use JSDoc for functions and components
- Explain "why" not just "what"

### README Updates
- Update README.md if setup process changes
- Keep feature list current
- Add new dependencies to documentation

## Reporting Issues

### Bug Reports
Include:
- Description of the bug
- Steps to reproduce
- Expected behavior
- Actual behavior
- Screenshots if applicable
- Device/OS information
- App version

### Feature Requests
Include:
- Clear description of the feature
- Use case / why it's needed
- Potential implementation approach
- Any relevant examples

## Code of Conduct

### Our Standards
- Be respectful and inclusive
- Welcome newcomers
- Accept constructive criticism
- Focus on what's best for the community

### Unacceptable Behavior
- Harassment or discrimination
- Trolling or insulting comments
- Publishing others' private information
- Other unprofessional conduct

## Questions?

If you have questions:
- Check existing issues and discussions
- Open a new issue with the "question" label
- Be specific and provide context

## License

By contributing, you agree that your contributions will be licensed under the same license as the project.

## Recognition

Contributors will be recognized in the project README and release notes.

Thank you for contributing to Cash App Clone! 🚀
