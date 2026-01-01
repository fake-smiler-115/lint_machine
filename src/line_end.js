const isSemiColonPresent = (codeLine) => {
  const trimedLine = codeLine.trim();
  const lineLength = trimedLine.length;
  return lineLength > 0 && !";{}".includes(trimedLine[lineLength -1 ]);
};

const pushLintIssue = (index, lintIssuesList) => {
  const issue = index + "  : Missing of semicolon";
  lintIssuesList.push(issue);
};

export const checkLinesEnd = (codeLines) => {
  const lintIssuesList = [];
  for (let index = 0; index < codeLines.length; index++) {
    if (isSemiColonPresent(codeLines[index])) {
      pushLintIssue(index, lintIssuesList);
    }
  }
  return lintIssuesList;
};
