const popIfClosingBracket = (line, functionStack) => {
  if (line.includes('}')) {
    functionStack.pop();
  }
}

const pushIfOpenBracket = (line, functionStack) => {
  if (line.includes('{')) {
    functionStack.push('{')
  }
}

const pushLintIssue = (index, lintIssuesList) => {
  const issue = index + "  : Function length is greater than 8";
  lintIssuesList.push(issue);
};

const isFunctionLengthIsGreaterThan8 = (codeLines, i, lintIssuesList) => {
  const functionStack = ['{'];
  let index = i + 1;
  while (functionStack.length !== 0) {
    pushIfOpenBracket(codeLines[index], functionStack);
    popIfClosingBracket(codeLines[index], functionStack);
    index++;
  }

  if ((index - 1) > 8) {
    return pushLintIssue(i, lintIssuesList);
  }
}

export const checkFunctionLengths = (codeLines) => {
  const lintIssuesList = [];
  for (let index = 0; index < codeLines.length; index++) {
    if (codeLines[index].trim().match(/ function |^function | function\(/)!== null) {
     isFunctionLengthIsGreaterThan8(codeLines, index, lintIssuesList);
    }
  }
  return lintIssuesList;
};