# CLI Tools

CLI tools build in NodeJS for common needs.

### Requirements

[git v2.16.0+](https://git-scm.com/downloads)

[Node v12.13.0+](https://nodejs.org/en/download/)

### Installation

Clone and install dependencies to /usr/local/bin/cli-tools (or wherever you want).

```shell
git clone https://github.com/Enijar/cli-tools /usr/local/bin/cli-tools
npm install --prefix /usr/local/bin/cli-tools
```

Add the commands you want by creating symbolic links, e.g. this would provide a command called "batch-download".

```shell
ln -sF /usr/local/bin/cli-tools/src/cmd/batch-download /usr/local/bin/batch-download
```

Now you can use that command like this.

```shell
batch-download urls.json ~/Downloads > results.json
```

### Updating

```bash
git --git-dir /usr/local/bin/cli-tools pull
```

### Commands

List of available commands.

> Note: make sure the command you want to run is installed (follow installation steps) before attempting to run it

#### batch-download

Download URLs in parallel (batches of n) to a directory.

**Arguments**

- URLs file (required): JSON file containing an array of URLs to download
- Downloads directory (required): path to directory that files will be downloaded into
- chunkSize (optional): how many files to download in parallel

**Example**

```shell
batch-download urls.json ~/Downloads > results.json
```
