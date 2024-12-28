const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");

class LimitLinesPlugin {
  constructor(options) {
    this.limit = options.limit || 600;
    this.fileTypes = options.fileTypes || [".vue", ".js", ".ts"];
    this.excludeFiles = options.excludeFiles || [];
  }

  apply(compiler) {
    // 在每次编译开始之前检查文件（包括热更新）
    compiler.hooks.watchRun.tapAsync("LimitLinesPlugin", (compiler, callback) => {
      const changedFiles = this.getChangedFiles(compiler);
      const errors = [];

      changedFiles.forEach((filePath) => {
        const fileName = path.basename(filePath);

        if (this.excludeFiles.includes(fileName)) {
          return;
        }

        try {
          const fileContent = fs.readFileSync(filePath, "utf-8");
          const lines = fileContent.split("\n").length;

          if (lines > this.limit) {
            errors.push(
              `🚨 File "${filePath}" exceeds the line limit of ${this.limit} lines.\n` +
                `  - Found lines: ${lines}\n` +
                `  - Limit: ${this.limit} lines.\n` +
                `Please refactor or split the file.`
            );
          }
        } catch (error) {
          console.error(`Error reading file "${filePath}":`, error.message);
        }
      });

      if (errors.length > 0) {
        // 确保 compilation.errors 被初始化
        if (!compiler.errors) {
          compiler.errors = [];
        }
        errors.forEach((err) => {
          compiler.errors.push(new Error(err));
        });
      }

      callback();
    });

    // 在文件生成之后添加错误（适用于正常编译）
    compiler.hooks.emit.tapAsync("LimitLinesPlugin", (compilation, callback) => {
      const changedFiles = this.getChangedFiles(compiler);
      const errors = [];

      changedFiles.forEach((filePath) => {
        const fileName = path.basename(filePath);

        if (this.excludeFiles.includes(fileName)) {
          return;
        }

        try {
          const fileContent = fs.readFileSync(filePath, "utf-8");
          const lines = fileContent.split("\n").length;

          if (lines > this.limit) {
            errors.push(
              `🚨 File "${filePath}" exceeds the line limit of ${this.limit} lines.\n` +
                `  - Found lines: ${lines}\n` +
                `  - Limit: ${this.limit} lines.\n` +
                `Please refactor or split the file.`
            );
          }
        } catch (error) {
          console.error(`Error reading file "${filePath}":`, error.message);
        }
      });

      if (errors.length > 0) {
        // 确保 compilation.errors 被初始化
        if (!compilation.errors) {
          compilation.errors = [];
        }
        errors.forEach((err) => {
          compilation.errors.push(new Error(err));
        });
      }

      callback();
    });
  }

  getChangedFiles(compiler) {
    const context = compiler.options.context;
    const gitStatusCommand = "git status --porcelain=v1";  // 获取新增文件和修改文件的状态
    const gitDiffCommand = "git diff --name-only --diff-filter=ACMR HEAD"; // 获取修改过的文件
    let changedFiles = [];
  
    try {
      // 先获取通过 git status 获取的新增或修改的文件
      const gitStatusOutput = execSync(gitStatusCommand, { encoding: "utf-8" });
  
      // 获取新增文件
      const newFiles = gitStatusOutput
        .split("\n")
        .filter(line => line.startsWith("??")) // 仅选择新文件
        .map(line => path.resolve(context, line.slice(3).trim())) // 提取文件路径
        .filter(file => this.fileTypes.includes(path.extname(file))); // 过滤文件类型
  
      changedFiles = [...changedFiles, ...newFiles];
  
      // 使用 git diff 获取修改过的文件
      const gitDiffOutput = execSync(gitDiffCommand, { encoding: "utf-8" });
  
      // 获取修改过的文件
      const modifiedFiles = gitDiffOutput
        .split("\n")
        .filter(line => this.fileTypes.includes(path.extname(line))) // 过滤文件类型
        .map(line => path.resolve(context, line.trim())); // 提取文件路径
  
      changedFiles = [...new Set([...changedFiles, ...modifiedFiles])]; // 合并新增和修改文件
    } catch (error) {
      console.warn("Unable to retrieve files via Git:", error.message);
    }
  
    // 获取 Webpack 编译过程中变动的文件
    if (compiler.modifiedFiles) {
      const webpackChangedFiles = Array.from(compiler.modifiedFiles)
        .filter(file => this.fileTypes.includes(path.extname(file)))
        .map(file => path.resolve(context, file));
  
      changedFiles = [...new Set([...changedFiles, ...webpackChangedFiles])]; // 合并 Git 跟踪和 Webpack 变动的文件
    }
    return changedFiles;
  }
}

module.exports = LimitLinesPlugin;
