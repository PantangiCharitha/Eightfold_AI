# 🚀 Eightfold AI Candidate Intelligence Platform

A full-stack Candidate Intelligence Platform that transforms candidate information from multiple sources into a unified, explainable, and confidence-driven canonical profile.

Built as part of the **Eightfold AI Technical Assessment**.

---

# 📖 Overview

Recruiters receive candidate information from various sources such as resumes, LinkedIn profiles, GitHub repositories, and recruiter notes. These sources often contain duplicate, incomplete, or conflicting information.

This platform ingests candidate data from multiple sources, normalizes it into a canonical schema, intelligently merges the information using confidence-based rules, validates the final profile, and presents the transformed candidate through an interactive dashboard.

---

# ✨ Features

## 📥 Multi-Source Candidate Ingestion

Supports multiple candidate sources:

- 📄 Resume JSON
- 💼 LinkedIn JSON
- 🐙 GitHub JSON
- 🔗 Live GitHub Profile URL Fetching
- 📝 Recruiter Notes
- ⚡ Quick Candidate Entry
- 🎯 Demo Candidate Mode

---

## 🔄 Canonical Candidate Transformation

All candidate information is transformed into a single standardized schema.

The canonical profile contains:

- Candidate Name
- Email
- Phone
- Skills
- Education
- Experience
- Social Links
- Metadata
- Provenance
- Overall Confidence

---

## 🧠 Intelligent Merge Engine

The platform intelligently resolves conflicting information using confidence-based rules.

### Merge Strategy

| Field | Strategy |
|--------|----------|
| Candidate Name | Highest Confidence |
| Emails | Union + Deduplication |
| Phones | Union + Deduplication |
| Skills | Union + Deduplication |
| Experience | Append |
| Education | Append |

---

## 📊 Confidence Engine

Each source contributes a confidence score.

| Source | Confidence |
|---------|------------|
| LinkedIn | 0.95 |
| Resume | 0.90 |
| GitHub | 0.80 |
| Recruiter Notes | 0.60 |

Overall profile confidence is calculated using:

- **70% Source Confidence**
- **30% Profile Completeness**

---

## 🔍 Explainability Engine

Every transformed field is explainable.

Example:

- Selected Source
- Confidence Score
- Merge Strategy
- Reason for Selection

This makes the transformation process transparent and easy to understand.

---

## 🐙 Live GitHub URL Integration

Instead of uploading GitHub JSON, recruiters can simply enter:

https://github.com/username

The application:

- Fetches the public GitHub profile
- Retrieves repository information
- Extracts programming languages
- Converts the data into the canonical format
- Merges it with other candidate sources

---

## 📈 Candidate Dashboard

Displays:

- Candidate Summary
- Contact Information
- Skills
- Experience
- Overall Confidence
- Social Links

---

## 📊 Candidate Statistics

Shows:

- Total Sources
- Skills Count
- Email Count
- Phone Count
- Experience Entries
- Education Entries

---

## 📂 Source Explorer

Displays which source contributed information to the final candidate profile.

Example:

Resume

- Name
- Email
- Education

LinkedIn

- Headline
- Experience

GitHub

- Skills

Recruiter

- Notes

---

## ⚙️ Transformation Pipeline

Visual representation of the backend processing pipeline.

```
Resume Parser
        │
LinkedIn Parser
        │
GitHub Parser
        │
Recruiter Parser
        │
Normalization
        │
Merge Engine
        │
Validation
        │
Projection
        │
Candidate Dashboard
```

---

## 📄 Canonical JSON Viewer

Features:

- Copy JSON
- Download JSON
- View Final Canonical Profile

---

# 🏗️ System Architecture

```
                 Resume JSON
                      │
              LinkedIn JSON
                      │
         GitHub JSON / GitHub URL
                      │
             Recruiter Notes
                      │
                      ▼
             Candidate Parsers
                      │
                      ▼
          Canonical Candidate Schema
                      │
                      ▼
          Confidence-Based Merge Engine
                      │
                      ▼
             Validation Engine
                      │
                      ▼
          Configurable Projection Layer
                      │
                      ▼
        Candidate Intelligence Dashboard
```

---

# 📂 Project Structure

```
eightfold-transformer
│
├── config
├── frontend
│   ├── src
│   │   ├── components
│   │   ├── pages
│   │   ├── hooks
│   │   └── services
│
├── sample-input
├── sample-output
│
├── src
│   ├── api
│   ├── merger
│   ├── normalizers
│   ├── parsers
│   ├── pipeline
│   ├── projection
│   ├── schema
│   ├── services
│   └── utils
│
├── tests
├── package.json
└── README.md
```

---

# 💻 Technology Stack

## Backend

- Node.js
- Express.js
- Axios

## Frontend

- React
- Vite
- Tailwind CSS
- Lucide React

---

# 🚀 API Endpoints

## Transform Candidate

```
POST /api/transform
```

Transforms candidate information into the canonical schema.

---

## GitHub Profile Fetch

```
POST /api/github-profile
```

Fetches live GitHub profile information from a GitHub URL.

---

# ▶️ Getting Started

## Backend

```bash
npm install
node src/api/server.js
```

Backend runs at:

```
http://localhost:5000
```

---

## Frontend

```bash
cd frontend
npm install
npm run dev
```

Frontend runs at:

```
http://localhost:5173
```

---

# 📸 Application Modules

- Landing Page
- Feature Overview
- Upload Candidate Sources
- Quick Candidate Entry
- Demo Candidate
- Candidate Dashboard
- Analytics Dashboard
- Candidate Statistics
- Explainability Engine
- Source Explorer
- Transformation Pipeline
- Canonical JSON Viewer

---

# 🔮 Future Enhancements

- LinkedIn Enterprise API Integration
- Resume PDF Parsing
- AI-based Skill Extraction
- Duplicate Candidate Detection
- Candidate Similarity Search
- Authentication & Role-Based Access
- Database Integration
- ATS Integration
- Export Candidate Report (PDF)


---

# 👨‍💻 Developed By

**Pantangi Charitha**

Frontend Developer | Java | React | UI/UX

Built for the **Eightfold AI Technical Assessment**.

---

## ⭐ Acknowledgement

This project demonstrates the design and implementation of a configurable candidate transformation pipeline capable of ingesting multiple candidate sources, resolving conflicting information using confidence-based rules, and producing an explainable canonical candidate profile.