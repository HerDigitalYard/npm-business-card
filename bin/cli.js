#!/usr/bin/env node

const chalk = require("chalk");
const boxen = require("boxen");
const figlet = require("figlet");

const fs = require("fs");
const path = require("path");

try {
  // Read JSON data files
  const result = fs.readFileSync(path.resolve(__dirname, "../info.json"));
  const userDate = JSON.parse(result);
  const { job_title, goal, aim, github_link, linkedin_link } = userDate;

  const styledData = {
    labelWork: chalk.cyan("💻 Work:"),
    work: chalk.white(job_title),

    labelGitHub: chalk.cyan("✨ GitHub:"),
    gitHub: chalk.white(github_link),

    labelGoal: chalk.cyan("🎯 2023 Goal:"),
    goal: chalk.white(goal),

    labelAim: chalk.cyan("🌱 Aim:"),
    aim: chalk.white(aim),

    labelLinkedIn: chalk.cyan("🌐 LinkedIn:"),
    linkedIn: chalk.white(linkedin_link),

    labelCard: chalk.cyan("🔗 Card:"),
    npxCard: chalk.white.underline("npx biolinks"),
  };

  const newline = "\n\n";
  const output =
    chalk.magenta(
      figlet.textSync("Esha Shah!", {
        font: "Stop",
        horizontalLayout: "default",
        verticalLayout: "default",
        width: 80,
        whitespaceBreak: true,
      })
    ) +
    newline +
    newline +
    `${styledData.labelWork}  ${styledData.work}` +
    newline +
    `${styledData.labelGoal}  ${styledData.goal}` +
    newline +
    `${styledData.labelAim}  ${styledData.aim}` +
    newline +
    `${styledData.labelGitHub}  ${styledData.gitHub}` +
    newline +
    `${styledData.labelLinkedIn}  ${styledData.linkedIn}` +
    newline +
    `${styledData.labelCard}  ${styledData.npxCard} `;

  // The Boxen options
  const options = {
    title: "Business Card",
    titleAlignment: "center",
    padding: 2,
    borderStyle: "round",
    textAlignment: "left",
    backgroundColor: "black",
  };

  console.log(chalk.green(boxen(output, options)));
} catch (err) {
  console.log(chalk.bgRed.bold(`Cannot read file!`));
  console.log(chalk.italic(err.message));
}
