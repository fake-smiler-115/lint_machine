const getVariableName = (codeLine) => codeLine.split(" ")[1];

const checkReassigningTheValue = (codeLines, i, lintIssuesList) => {
  const variableName = getVariableName(codeLines[i]);
  const regex = RegExp(variableName + " =");
  const regexWithEqualTo = RegExp(variableName + "=");

  for (let index = i + 1; index < codeLines.length; index++) {
    if (
      codeLines[index].match(regex) !== null ||
      codeLines[index].match(regexWithEqualTo) !== null
    ) {
      return;
    }
  }

  pushLintIssue(variableName, lintIssuesList);
};

const pushLintIssue = (variableName, lintIssuesList) => {
  const issue = variableName + "  : is never reassigned";
  lintIssuesList.push(issue);
};

export const checkLetVariable = (codeLines) => {
  const lintIssuesList = [];
  for (let index = 0; index < codeLines.length; index++) {
    if (codeLines[index].trim().match(/^let /) !== null) {
      checkReassigningTheValue(codeLines, index, lintIssuesList);
    }
  }
  return lintIssuesList;
};
