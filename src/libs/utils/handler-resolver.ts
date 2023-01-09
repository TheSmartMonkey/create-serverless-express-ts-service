export function getCurrentFolderPath(context: string): string {
  return `${context.split(process.cwd())[1].substring(1).replace(/\\/g, '/')}`;
}

export function getCurrentFolderName(folderPath: string): string {
  return folderPath.split('/').pop() ?? 'unknown';
}
