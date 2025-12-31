const checkLineLength = (codeLine, index, lintIssuesList) => {
  if (codeLine.length > 79) {
    const issue = index + "  : Line length is greater than 80";
    lintIssuesList.push(issue);
  }
};

export const checkLineLengths = (codeLines) => {
  const lintIssuesList= [];
  for (let index = 0; index < codeLines.length; index++) {
    checkLineLength(codeLines[index],index,lintIssuesList)
  }
  return lintIssuesList;
};