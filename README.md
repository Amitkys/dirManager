# Sabnam CLI

## Description

Sabnam CLI is a simple command-line interface tool for managing directories and files. It allows users to list directory contents, create new directories, and create empty files.

## Installation

Ensure you have Node.js installed on your system. Then, install the dependencies and link the CLI tool globally:

```sh
npm install
npm link
```

## Usage

Run the CLI tool with the following commands:

### List Directory Contents

```sh
sabnam -l [directory_path]
```

If no directory path is provided, it lists the contents of the current directory.

### Create a Directory

```sh
sabnam -m <directory_name>
```

Creates a new directory with the specified name.

### Create a File

```sh
sabnam -t <file_name>
```

Creates a new empty file with the specified name.

## Examples

### Listing Directory Contents

```sh
sabnam -l /home/user/documents
```

### Creating a Directory

```sh
sabnam -m my_new_directory
```

### Creating a File

```sh
sabnam -t myfile.txt
```

## Error Handling

- If the specified directory does not exist when listing contents, an error message is displayed.
- If a directory already exists when attempting to create it, nothing happens.
- If a file already exists when attempting to create it, it remains unchanged.

## License

This project is licensed under the MIT License.
