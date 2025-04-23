# KnowNative

Welcome to **KnowNative**! KnowNative is an open-source language learning app designed for Traditional Chinese learners (with plans to expand to other languages). Unlike traditional language apps, KnowNative allows users to build their own learning experience by importing real-world content—articles and texts written by native speakers for native speakers. From these materials, users can generate flashcards and sentence-by-sentence translations, essentially creating a personalized textbook tailored to their interests and learning goals.

KnowNative was originally created by Abigail Dawson, who now oversees the continued development of the project by volunteer Core Contributors and the broader open-source community. Whether you're new to open-source or an experienced contributor, we’d love your help in making this project a success!

**Our tech stack**

> You do not need to be proficient in all of these technologies to contribute! We have front-end, back-end, beginner and no-code issues for contributors of all experience levels.

- Node
- Express
- React
- Vite
- MongoDB
- Sass

## Table of Contents

- [Contribute](#contribute)
- [Getting started](#getting-started)
- [How to submit your work](#how-to-submit-your-work)
- [Resources](#resources)
- [Community and support](#community-and-support)
- [License](#license)
- [Contact](#contact)

---

## Contribute

While anyone can contribute to the KnowNative open-source project on GitHub, I am also eager to collaborate more closely with others who are excited about this project and are looking to contribute to on a more regular and consistent (volunteer) basis.

We currently have a small team of Core Contributors who are innovating behind the scenes to bring high quality features and exceptional user experience to KnowNative, and we're always looking for more help!

> **NOTE:** As of February 2025, we are changing "Core Contributors" to "Core Contributions". Instead of featuring only the name and bio of contributors on the Contribute page of our <a href="https://knownative.io/contribute" target="_blank">website</a>, we'll highlight specific contributions and who was involved. Our website will be updated soon to reflect this change.

Contributing to KnowNative on a more regular basis is an excellent way to gain real-world experience working with a team while building your own portfolio or resume. I'm currently looking for contributions in:

- UX/UI research and design
- Software development
- Branding, social media and marketing
- Those with a special interest in linguistics and language learning - if you'd like to contribute, I'd love to hear from you!

By contributing to the project, you'll benefit from the following:

- Be featured on the Contribute page of our <a href="https://knownative.io/contribute" target="_blank">website</a>, with your image, bio and professional/social links, and details of your specific contributions
- Recognition on my <a href="https://www.linkedin.com/in/abigaildawsondev" target="_blank">LinkedIn</a> as a collaborator on the project
- Build teamwork and collaboration skills
- Add real-world project experience to your portfolio and resume
- Contribute to the long-term vision of the KnowNative project

The best way to get in touch about contributing to KnowNative is by joining our <a href="https://discord.gg/Rsc7TAyw3T" target="_blank">Discord community</a>! However, if you're not ready to make the leap just yet, I'm happy to answer any questions via <a href="https://www.linkedin.com/in/abigaildawsondev" target="_blank">LinkedIn</a> as well.

---

## Getting started

To contribute code to the open-source KnowNative project, you'll first need to run the app locally in order to make changes and submit your work. To run KnowNative locally, follow these steps:

### 1. Fork and clone the repository

First, fork this repository by clicking the **Fork** button in the top right of this page. This creates a copy under your GitHub account so you can make changes and submit pull requests.

Then, **clone your fork** to your local machine:

```bash
# Replace <your-username> with your GitHub username
git clone https://github.com/<your-username>/knownative.git
cd knownative
```

### 2. Install dependencies

```bash
cd client
npm i
cd server
npm i
```

### 3. Create a `.env` file in the `server` folder.

Create a new file named `.env` inside the server directory and add the following variables:

```
DATABASE_URL=<your-mongodb-connection-string>
GOOGLE_TRANSLATE_API_KEY=<your-google-translate-api-key>
```

- `MONGODB_URI` contains the connection string for MongoDB. [Learn how to connect](https://www.mongodb.com/resources/products/fundamentals/mongodb-connection-string).
- `GOOGLE_TRANSLATE_API_KEY` contains the API key for sentence translations. [Get a key](https://cloud.google.com/translate/docs/setup).

### 3b. Create a `.env` file in the `client` folder.

Create a new file named `.env` inside the server directory and add the following variables:

```
VITE_SERVER_BASE_URL=http://localhost:3001/
```

### 4. Build & run the client

```bash
cd client
npm run build
npm run start
```

### 5. Run the server

```bash
cd server
npm run dev
```

## How to submit your work

### Contribution Workflow

1. **Find an issue** – Check out the issues tab for something to work on. You can sort by labels like `front end`, `website`, `good first issue` and more, depending on your interest and skillset. Comment on the issue to let us know if you’d like to work on it so we can assign it to you.

2. **Fork and clone the repository** – Click the `Fork` button at the top right of this page to create a copy under your GitHub account. Then, clone the project and set the upstream remote. This allows you to pull in the latest changes from the main project.

```bash
git clone https://github.com/<your-username>/knownative.git
cd knownative
git remote add upstream https://github.com/AbigailDawson/knownative.git
```

3. **Switch to the right branch** – All new contributions to the APP should be based on `develop`. All new contributions to the WEBSITE should be based on `main`. The following steps will assume branching off `develop`.

```bash
git checkout develop
git pull upstream develop  # Ensure you have the latest changes
```

4. **Create a new branch** – Always work on a new branch from `develop`. Name your branch something related to the issue you're working on; for example, `fix-button-bug`.

```bash
git checkout -b fix-button-bug
```

5. **Make your changes** – Follow coding best practices and add helpful comments as needed. Put yourself in the shoes of someone who will come along later and build on your work.

6. Commit and push your changes to your forked repository:

```bash
git add .
git commit -m "Fix button alignment issue"
git push origin fix-button-bug
```

> **Note:** If changes have been made in `develop` while you were working, update your branch before submitting a PR:

```bash
git checkout develop
git pull upstream develop
git checkout fix-button-bug
git merge develop  # Merge the latest changes into your branch
git push origin fix-button-bug
```

7. Create a Pull Request (PR) against `develop`:

- Go to your forked repository on GitHub.
- Click "Contribute" → "Open pull request."
- Ensure you’re merging your branch into the original project’s `develop` branch (not `main`).
- Add a clear title and description for your changes.
- Click "Create pull request." 🎉

We will review your PR and may suggest improvements.

## Resources

There are several resources available to you to reference as you work on the KnowNative project:

- [KnowNative Product Strategy](https://abigaildawson.onlyoffice.com/s/kbhw7rs5CYP-Cct) - Learn about our mission for the project.
- [KnowNative Roadmap](https://abigaildawson.onlyoffice.com/s/4C7y92S3gZH_hPq) - Learn about where the project is headed next.
- [Entity Relationship Diagram (WIP)](https://www.figma.com/board/Z2vctFif3yeoOPypYDiE5U/KnowNative?node-id=0-1&p=f&t=32wHrtl03Wfyn8or-0) - map of data entities in KnowNative and how they are related; provides a birds eye view of how the project features fit together.
- [Figma files](https://www.figma.com/design/EqPH1otHNLl7NI3AML3VbU/KnowNative-v2) - All designs for KnowNative, including reusable components and the beginnings of a design system.
- [Source Code Guide](https://huly.app/guest/knownative?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJsaW5rSWQiOiI2NzlmZTIzYzdiYTM4NjQzNjlkNWU3ZTMiLCJndWVzdCI6InRydWUiLCJlbWFpbCI6IiNndWVzdEBoYy5lbmdpbmVlcmluZyIsIndvcmtzcGFjZSI6InctYWJpZ2FpbGRhd3NvLWtub3duYXRpdmUtNjYzMjgxYjEtODdiZTE2ZDY5OS0yYTZiY2QifQ.jA738ZXI0uiicsxCBkRUv-d8VQyPaHg82qc0rcCduZo) - This guide is for developers working on the KnowNative project, designed to orient you to the source code so you can understand how to navigate the file structure, find what you’re looking for, and put all the necessary pieces together when working on features and fixes.
- [SAAS Fundamentals](https://huly.app/guest/knownative?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJsaW5rSWQiOiI2NzMzZmQ1MTZkMzkzMDY5ODVhM2YzNTYiLCJndWVzdCI6InRydWUiLCJlbWFpbCI6IiNndWVzdEBoYy5lbmdpbmVlcmluZyIsIndvcmtzcGFjZSI6InctYWJpZ2FpbGRhd3NvLWtub3duYXRpdmUtNjYzMjgxYjEtODdiZTE2ZDY5OS0yYTZiY2QifQ.aoe4oyOFSKqztSugYb-fd9B1eY5IMYX3K1ynDe5dfi8) - Get up to speed on Sass and SCSS syntax. It assumes no prior knowledge with Sass, and covers many of the core features that we'll be using and building upon in Know Native.
- [CSS Style Guide (WIP)](https://huly.app/guest/knownative?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJsaW5rSWQiOiI2NzlmZTFlNjdiYTM4NjQzNjlkNWU3YTciLCJndWVzdCI6InRydWUiLCJlbWFpbCI6IiNndWVzdEBoYy5lbmdpbmVlcmluZyIsIndvcmtzcGFjZSI6InctYWJpZ2FpbGRhd3NvLWtub3duYXRpdmUtNjYzMjgxYjEtODdiZTE2ZDY5OS0yYTZiY2QifQ.bApnd0tAJQNl_Nv3Tr7onBxg0xrJ4wAd1cCa8W2AL-c) - Overview of our CSS rules & best practices. Note: KnowNative is in the process of migrating from CSS to SASS & BEM. This guide is for reference only, and not fully implemented.

## Community and support

Have questions or need help? Join our community!

- 💬 **Discord:** Join the conversation [here](https://discord.gg/Rsc7TAyw3T)! Meet other contributors, get help with your own contributions, and share feedback and feature requests.

## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

## Contact

Abigail Dawson · [**LinkedIn**](https://www.linkedin.com/in/abigaildawsondev/) · abigaildawson.dev@gmail.com

<p align="right">(<a href="#readme-top">back to top</a>)</p>
