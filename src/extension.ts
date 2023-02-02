// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from "vscode";

let myStatusBarItem: vscode.StatusBarItem;
// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
  // 创建一个状态栏
  myStatusBarItem = vscode.window.createStatusBarItem(
    vscode.StatusBarAlignment.Right,
    200
  );
  // 创建一个底部状态栏
  createStatusBarItem();
}

function createStatusBarItem(): void {
  myStatusBarItem.text = `ts-物料`;
  myStatusBarItem.show();
}

// This method is called when your extension is deactivated
export function deactivate() {}
