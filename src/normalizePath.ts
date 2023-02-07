import { posix, win32 } from 'node:path'

export default function normalizePath(filename: string) {
  return filename.split(win32.sep).join(posix.sep)
}
