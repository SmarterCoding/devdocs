# Contributors

Thank you to everyone who contributes to **DevDocs**. Contributions help improve the quality, accuracy, and usefulness of the documentation.

## Contributors

|                                        Avatar                                       | Name                   | Role                   | Contributions                            |
| :---------------------------------------------------------------------------------: | :--------------------- | :--------------------- | :--------------------------------------- |
| <img src="https://github.com/chamnan-dev.png" width="48" height="48" alt="Chamnan"> | **Chamnan**            | Maintainer · Developer | Architecture, Development, Documentation |
|                                        👨‍💻                                        | **Development Team**   | Developer              | Code Examples, Technical Documentation   |
|                                          🧪                                         | **QA Team**            | QA / Tester            | Testing, Validation, Bug Reports         |
|                                          📚                                         | **Documentation Team** | Technical Writer       | Guides, References, Documentation        |

> This list can be updated as new contributors join the project.

---

## Contribution Types

There are many ways to contribute to DevDocs.

### 💻 Code

Improve existing code examples, add new examples, or fix incorrect implementations.

```text
Frontend
Backend
API
Database
JavaScript
TypeScript
PHP
CI/CD
```

### 📖 Documentation

Help improve:

* Tutorials
* Guides
* API references
* Code examples
* Installation instructions
* Configuration documentation
* Troubleshooting guides

### 🐛 Bug Reports

Found an issue in the documentation or an example?

Please report:

* What you expected
* What actually happened
* Steps to reproduce the issue
* Relevant code or screenshots
* Environment information

### 💡 Improvements

Suggestions are welcome for:

* New documentation pages
* Better examples
* Improved navigation
* Developer experience
* Performance
* Accessibility
* UI/UX

---

## Development Workflow

We use a standard Git workflow for documentation and development changes.

### 1. Create a Branch

Create a branch based on the type of change:

```bash
git checkout -b docs/improve-api-guide
```

Recommended branch names:

```text
docs/*
feature/*
fix/*
refactor/*
test/*
chore/*
```

### 2. Make Your Changes

Update the documentation or source code.

For documentation changes, keep examples:

* Simple
* Accurate
* Consistent
* Easy to copy and test
* Compatible with the documented version

### 3. Test Your Changes

Before submitting your changes, verify that:

```bash
npm install
npm run build
```

If the project has a documentation development server:

```bash
npm run dev
```

Check the affected pages in the browser and make sure there are no broken links, formatting issues, or incorrect examples.

### 4. Commit Your Changes

Use a clear commit message:

```bash
git add .
git commit -m "docs: improve API authentication guide"
```

Recommended commit prefixes:

| Prefix      | Description           |
| :---------- | :-------------------- |
| `docs:`     | Documentation changes |
| `feat:`     | New feature           |
| `fix:`      | Bug fix               |
| `refactor:` | Code refactoring      |
| `test:`     | Test changes          |
| `chore:`    | Maintenance           |
| `ci:`       | CI/CD changes         |

### 5. Push Your Branch

```bash
git push origin docs/improve-api-guide
```

### 6. Create a Merge Request

Create a Merge Request with:

* Clear title
* Description of the changes
* Related issue, if applicable
* Screenshots for UI changes
* Testing details
* Breaking changes, if any

---

## Documentation Standards

When contributing documentation, follow these guidelines.

### Use Clear Headings

Use a logical heading structure:

```markdown
# Page Title

## Introduction

## Installation

## Usage

### Configuration

### Examples

## API Reference

## Troubleshooting
```

### Use Code Examples

Code examples should be complete and easy to understand.

```typescript
const user = await getUser();

console.log(user);
```

Include the appropriate language identifier:

````markdown
```typescript
const user = await getUser();
```
````

### Keep Examples Up to Date

Documentation should match the current version of the project.

Avoid documenting:

* Removed APIs
* Deprecated methods without warnings
* Incorrect configuration
* Outdated dependencies

---

## Code Review

Every significant contribution should be reviewed before merging.

Reviewers should check:

* ✅ Accuracy
* ✅ Code quality
* ✅ Documentation quality
* ✅ Examples
* ✅ Links
* ✅ Accessibility
* ✅ Browser compatibility
* ✅ Build status
* ✅ Formatting
* ✅ Spelling and grammar

---

## Contributor Recognition

We recognize contributors who help improve DevDocs through:

* 💻 Development
* 📖 Documentation
* 🐛 Bug fixes
* 🧪 Testing
* 💡 Technical suggestions
* 🎨 UI/UX improvements
* 🚀 CI/CD improvements
* 🔐 Security improvements

Every contribution matters.

---

## Become a Contributor

Want to contribute?

1. Find an issue or improvement.
2. Create a branch.
3. Make your changes.
4. Test your changes.
5. Commit your changes.
6. Push your branch.
7. Open a Merge Request.
8. Respond to code-review feedback.

We appreciate your contribution to **DevDocs**! ❤️
