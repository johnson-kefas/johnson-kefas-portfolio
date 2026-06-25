# Johnson Kefas Monchere Portfolio

A clean, minimalist portfolio website for Johnson Kefas Monchere. It is designed as a static HTML and CSS website, so it is easy to edit and deploy on Vercel without installing any framework.

## Files

- `index.html`: Main website content.
- `styles.css`: Website design, spacing, layout, light mode, and dark mode.
- `script.js`: Theme toggle and automatic year.
- `assets/Johnson_Kefas_Monchere_CV.pdf`: Downloadable CV.
- `assets/favicon.svg`: Minimal initials icon.
- `vercel.json`: Simple Vercel configuration.

## How to preview on your computer

1. Extract the zip folder.
2. Open the folder.
3. Double-click `index.html`.
4. The website will open in your browser.

## How to edit

Open `index.html` in Visual Studio Code, Notepad, or any text editor. Search for the text you want to change and replace it.

Common edits:

- Replace portfolio project descriptions under `Selected Work` once you have live GitHub projects.
- Replace the CV file in `assets` when you update your CV.
- Add your custom domain later if you buy one.

## Easiest deployment option: Vercel Drop

1. Create a free Vercel account.
2. Go to Vercel Drop.
3. Drag the full portfolio folder into the page.
4. Choose a project name such as `johnson-kefas-portfolio`.
5. Click Deploy.
6. Vercel will give you a live website link.

## Better long-term deployment option: GitHub plus Vercel

1. Create a GitHub account or sign in.
2. Create a new public repository named `johnson-kefas-portfolio`. Do not add a README during creation because this folder already has one.
3. Extract this zip file on your computer.
4. Open the extracted folder and upload all files and folders to the GitHub repository. Make sure `index.html`, `styles.css`, `script.js`, `vercel.json`, `README.md`, and the `assets` folder are at the top level of the repository.
5. Click Commit changes in GitHub.
6. Go to Vercel and sign in with GitHub.
7. Click Add New, then Project.
8. Select the `johnson-kefas-portfolio` repository and click Import.
9. Keep the framework preset as Other.
10. Leave the build command empty.
11. Leave the output directory empty or as the project root.
12. Click Deploy.

After this, every future update you commit to GitHub can automatically update the website on Vercel.
