# Security

Security is an important part of DevDocs. We welcome responsible reports that help us identify and fix security issues.

## Security Principles

DevDocs follows these security principles:

* 🔐 Protect sensitive information and credentials
* 🛡️ Follow secure coding practices
* 🔑 Never commit passwords, API keys, tokens, or private keys
* 📦 Keep dependencies updated
* ✅ Validate and sanitize user input
* 🚫 Avoid exposing sensitive information in documentation
* 🔎 Review security-related changes before merging
* 🧪 Test security-sensitive functionality
* 📋 Document important security considerations

---

## Reporting a Security Issue

If you discover a potential security vulnerability, **do not create a public issue with sensitive details**.

Instead, report the issue privately through the project's designated security reporting process.

A security report should include:

* A clear description of the issue
* The affected component or page
* Steps to reproduce the issue
* Potential security impact
* Affected version or commit
* Suggested mitigation, if available

Please avoid including:

* Passwords
* API keys
* Access tokens
* Personal information
* Private credentials
* Production secrets

---

## Security for Contributors

Before creating a Merge Request, contributors should check their changes for accidentally exposed secrets.

### Never Commit Secrets

Do not commit files or values such as:

```text
.env
.env.local
.env.production
*.pem
*.key
credentials.json
service-account.json
```

Example:

```env
DATABASE_PASSWORD=your-password
API_KEY=your-api-key
JWT_SECRET=your-secret
```

These values should **never** be committed to the repository.

Use environment variables instead:

```env
DATABASE_PASSWORD=
API_KEY=
JWT_SECRET=
```

---

## Secure Documentation

Documentation examples should use safe placeholder values.

### ❌ Avoid

```javascript
const apiKey = "sk-real-secret-key";
```

### ✅ Recommended

```javascript
const apiKey = process.env.API_KEY;
```

Example configuration:

```env
API_KEY=your-api-key
```

---

## Dependency Security

Keep project dependencies updated and review security advisories regularly.

Before submitting dependency updates:

```bash
npm audit
```

For projects using other package managers, use the appropriate security audit command.

Contributors should avoid adding unnecessary dependencies and should verify that new packages are trustworthy and actively maintained.

---

## Authentication & Authorization

Security-sensitive documentation should clearly explain:

* Authentication requirements
* Authorization rules
* Required permissions
* Session management
* Token handling
* Access-control considerations

Never include real authentication credentials in documentation or examples.

---

## Input Validation

Applications should validate data received from users and external systems.

Examples include:

* Form input
* Query parameters
* Request bodies
* File uploads
* API requests
* Headers
* URL parameters

Validation should be performed on the server whenever security depends on the result.

---

## Common Security Risks

Contributors should be aware of common web security issues, including:

| Risk                       | Recommendation                       |
| :------------------------- | :----------------------------------- |
| 🔑 Exposed Secrets         | Use environment variables            |
| 💉 SQL Injection           | Use parameterized queries            |
| 🌐 XSS                     | Escape and sanitize untrusted output |
| 🔐 Broken Authentication   | Use secure authentication practices  |
| 🚫 Broken Authorization    | Verify permissions server-side       |
| 📁 Unsafe File Uploads     | Validate file type and content       |
| 🔗 CSRF                    | Use appropriate CSRF protection      |
| ⚠️ Insecure Dependencies   | Keep dependencies updated            |
| 📋 Sensitive Data Exposure | Avoid logging or displaying secrets  |

---

## Security Review Checklist

Before merging security-sensitive changes:

* [ ] No credentials or secrets are committed
* [ ] User input is validated
* [ ] Sensitive output is protected
* [ ] Authentication is handled securely
* [ ] Authorization is checked server-side
* [ ] Database queries are protected against injection
* [ ] Dependencies have been reviewed
* [ ] Error messages do not expose sensitive information
* [ ] Documentation contains no real credentials
* [ ] Security tests have been performed where appropriate

---

## Responsible Disclosure

Please give the project maintainers an opportunity to investigate and address security issues before publicly disclosing technical details.

We appreciate responsible security research and contributions that help make DevDocs safer for everyone.

## Security Contact

For security-related questions or vulnerability reports, use the project's private security reporting channel.

> **Important:** Do not publish sensitive vulnerability details, credentials, tokens, or private information in public issues, discussions, or Merge Requests.
