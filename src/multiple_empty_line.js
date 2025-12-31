const isConsectiveEmptyLines = (currentLine,previousLine) => 
  currentLine.trim() === '' && previousLine.trim() === '';

const pushError = (index,lintIssuesList) => {
  const issue = index + "  : Multiple empty lines";
  lintIssuesList.push(issue);
}

export const checkEmptyLines = (codeLines) => {
  const lintIssuesList= [];
  for (let index = 1; index < codeLines.length; index++) {
    if(isConsectiveEmptyLines(codeLines[index],codeLines[index -1])) {
      pushError(index,lintIssuesList)
    }
  }
  return lintIssuesList;
};