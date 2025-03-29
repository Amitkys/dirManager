#! /usr/bin/env node

import figlet from "figlet";
import { Command } from "commander";
import fs from "fs";
import path from "path";

const program = new Command();

console.log(figlet.textSync("Sabnam   is   Here"));

program
  .version("1.0.0")
  .description("An example CLI for managing a directory")
  .option("-l, --ls [value]", "List directory contents")
  .option("-m, --mkdir <value>", "Create a directory")
  .option("-t, --touch <value>", "Create a file")
  .parse(process.argv);

const options = program.opts();

async function listDirContents(filepath: string) {
  try {
    const files = await fs.promises.readdir(filepath);
    const detailedFilesPromises = files.map(async (file: string) => {
      let fileDetails = await fs.promises.lstat(path.resolve(filepath, file));
      const { size, birthtime } = fileDetails;
      return { filename: file, "size(KB)": size, created_at: birthtime };
    });

    const detailedFiles = await Promise.all(detailedFilesPromises);
    console.table(detailedFiles);
  } catch (error) {
    console.log("Error occurred while reading the directory", error);
  }
}

// create directory
function createDir(filepath: string) {
  if (!fs.existsSync(filepath)) {
    fs.mkdirSync(filepath);
    console.log("The Directory has been created successfully");
  }
}

// create file
function createFile(filepath: string) {
  fs.openSync(filepath, "w");
  console.log("An empty file has been created");
}

// if user choose command: -l or --ls

if (options.ls) {
  const filepath = typeof options.ls === "string" ? options.ls : __dirname;
  listDirContents(filepath);
}

if (options.mkdir) {
  createDir(path.resolve(__dirname, options.mkdir));
}

if (options.touch) {
  createFile(path.resolve(__dirname, options.touch));
}

// if no options selected show help command

if (!process.argv.slice(2).length) {
  program.outputHelp();
}
