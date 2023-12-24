type SpreadsheetExport = string[][];

/**
 * Loads a spreadsheet export file as a two-dimensional array.
 * @param filename The spreadsheet's filename
 * @returns The spreadsheet's data in a two-dimensional array
 */
async function loadSpreadsheetExport(
  filename: string,
): Promise<SpreadsheetExport> {
  const file = await Bun.file(filename).text();

  const data = file
    .split(/\r\n/)
    .slice(1)
    .map((line) => line.split(/\t/));

  return data;
}

export { loadSpreadsheetExport };
