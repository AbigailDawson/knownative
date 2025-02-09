# KnowNative

Welcome to **KnowNative**! This is an open-source project aimed at building a language learning app focused on reading comprehension. With KnowNative, learners engage with real-world articles written by native speakers through a personalized study experience with automatically generated flashcards, inline annotations and context-driven translations.

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
- [Getting started](#getting-started)
- [How to contribute](#how-to-contribute)
- [Core contributors](#core-contributors)
- [Resources](#resources)
- [Community and support](#community-and-support)
- [License](#license)
- [Contact](#contact)

---

## Getting started

To contribute to KnowNative, you'll first need to run the project locally in order to make changes and submit your work. To run KnowNative locally, follow these steps:

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

## How to contribute

KnowNative can only improve with fresh perspectives and creative insights from contributors! We welcome any suggestions, fixes and improvements that can make KnowNative an even better resource for learners.

### Contribution Workflow
1. **Find issue** – Check out the issues tab for something to work on. If you’re new, look for issues labeled “good first issue.” Comment on the issue to let us know if you’d like to work on it so we can assign it to you.

2. **Fork and clone the repository** – Click the Fork button at the top right of this page to create a copy under your GitHub account. Then, clone the project and set the upstream remote. This allows you to pull in the latest changes from the main project.

```bash
git clone https://github.com/<your-username>/knownative.git
cd knownative
git remote add upstream https://github.com/AbigailDawson/knownative.git
```

3. **Switch to the develop branch** – All new contributions should be based on `develop`, not `main`.

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

> **Note:** If changes have been made in develop while you were working, update your branch before submitting a PR:

```bash
git checkout develop
git pull upstream develop
git checkout fix-button-bug
git merge develop  # Merge the latest changes into your branch
git push origin fix-button-bug
```

7. Create a Pull Request (PR) against `develop`:

* Go to your forked repository on GitHub.
* Click "Contribute" → "Open pull request."
* Ensure you’re merging your branch into the original project’s `develop` branch (not `main`).
* Add a clear title and description for your changes.
* Click "Create pull request." 🎉

We will review your PR and may suggest improvements.

## Core Contributors

As the creator of KnowNative, I am eager to collaborate with others who are excited about this project and are looking to contribute to on a more regular and consistent (volunteer) basis. We currently have a small team of Core Contributors who are innovating behind the scenes to bring high quality features and exceptional user experience to KnowNative. Read more here: <a href="https://knownative.io/contribute" target="_blank">Core Contributors</a>.

Becoming a Core Contributor is an excellent way to gain real-world experience working with a team and add to your own portfolio or resume, all while being a part of a project you're passionate about! I'm currently open to Core Contributors with skills in:

- UX/UI research and design
- Software development
- Branding, social media and marketing
- Those with a special interest in linguistics and language learning - if you'd like to contribute, I'd love to hear from you!

Core Contributors benefit from the following:

- Special recognition on our website, with your image, bio and professional/social links
- Experience working solo or in small groups
- Contributing to the long-term vision of the KnowNative project

To be considered a Core Contributor of the KnowNative project, developers must commit to submitting one meaningful PR per month and attend at least one team meeting or 1:1 check-in per month. Participation is voluntary, and these requirements are in place to ensure harmonious collaboration among team members who are serious about the project. There is no minimum commitment for hours/week or number of months, and all experience levels are welcome.

To chat about becoming a Core Contributor, please reach out to me on [**LinkedIn**](https://www.linkedin.com/in/abigaildawsondev/). Please include something in your message about how your interests align with the project's mission.

## Resources

There are several resources available to you to reference as you work on the KnowNative project:

* [KnowNative Project Roadmap](https://huly.app/guest/knownative?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJsaW5rSWQiOiI2NzlmZTI2NTdiYTM4NjQzNjlkNWU4MTkiLCJndWVzdCI6InRydWUiLCJlbWFpbCI6IiNndWVzdEBoYy5lbmdpbmVlcmluZyIsIndvcmtzcGFjZSI6InctYWJpZ2FpbGRhd3NvLWtub3duYXRpdmUtNjYzMjgxYjEtODdiZTE2ZDY5OS0yYTZiY2QifQ.R2e7LjugpIXVF2wTT50v5FjatUSsrkoXOB3UzK0z4qI) - Learn about where the project is headed next.
* [Entity Relationship Diagram (WIP)](https://www.figma.com/board/Z2vctFif3yeoOPypYDiE5U/KnowNative?node-id=0-1&p=f&t=32wHrtl03Wfyn8or-0) - map of data entities in KnowNative and how they are related; provides a birds eye view of how the project features fit together.
* [Figma files](https://www.figma.com/design/EqPH1otHNLl7NI3AML3VbU/KnowNative-v2) - All designs for KnowNative, including reusable components and the beginnings of a design system.
* [Source Code Guide](https://huly.app/guest/knownative?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJsaW5rSWQiOiI2NzlmZTIzYzdiYTM4NjQzNjlkNWU3ZTMiLCJndWVzdCI6InRydWUiLCJlbWFpbCI6IiNndWVzdEBoYy5lbmdpbmVlcmluZyIsIndvcmtzcGFjZSI6InctYWJpZ2FpbGRhd3NvLWtub3duYXRpdmUtNjYzMjgxYjEtODdiZTE2ZDY5OS0yYTZiY2QifQ.jA738ZXI0uiicsxCBkRUv-d8VQyPaHg82qc0rcCduZo) - This guide is for developers working on the KnowNative project, designed to orient you to the source code so you can understand how to navigate the file structure, find what you’re looking for, and put all the necessary pieces together when working on features and fixes.
* [SAAS Fundamentals](https://huly.app/guest/knownative?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJsaW5rSWQiOiI2NzMzZmQ1MTZkMzkzMDY5ODVhM2YzNTYiLCJndWVzdCI6InRydWUiLCJlbWFpbCI6IiNndWVzdEBoYy5lbmdpbmVlcmluZyIsIndvcmtzcGFjZSI6InctYWJpZ2FpbGRhd3NvLWtub3duYXRpdmUtNjYzMjgxYjEtODdiZTE2ZDY5OS0yYTZiY2QifQ.aoe4oyOFSKqztSugYb-fd9B1eY5IMYX3K1ynDe5dfi8) - Get up to speed on Sass and SCSS syntax. It assumes no prior knowledge with Sass, and covers many of the core features that we'll be using and building upon in Know Native.
* [CSS Style Guide (WIP)](https://huly.app/guest/knownative?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJsaW5rSWQiOiI2NzlmZTFlNjdiYTM4NjQzNjlkNWU3YTciLCJndWVzdCI6InRydWUiLCJlbWFpbCI6IiNndWVzdEBoYy5lbmdpbmVlcmluZyIsIndvcmtzcGFjZSI6InctYWJpZ2FpbGRhd3NvLWtub3duYXRpdmUtNjYzMjgxYjEtODdiZTE2ZDY5OS0yYTZiY2QifQ.bApnd0tAJQNl_Nv3Tr7onBxg0xrJ4wAd1cCa8W2AL-c) - Overview of our CSS rules & best practices. Note: KnowNative is in the process of migrating from CSS to SASS & BEM. This guide is for reference only, and not fully implemented.

## Community and support

Have questions or need help? Join our community!

- 💬 **Discord:** Join the conversation [here](https://discord.gg/Rsc7TAyw3T)! Meet other contributors, get help with your own contributions, and share feedback and feature requests.

## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

## Contact

Abigail Dawson · [**LinkedIn**](https://www.linkedin.com/in/abigaildawsondev/) · abigaildawson.dev@gmail.com

<p align="right">(<a href="#readme-top">back to top</a>)</p>
