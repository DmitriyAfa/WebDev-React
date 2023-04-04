import { ResolveOptions } from "webpack";
import { BuildOptions } from "./types/config";

export function buildResolvers(options: BuildOptions): ResolveOptions {
  return {
    extensions: [".tsx", ".ts", ".js"],
    // *абсолютные пути
    // абсолютные пути в приоритете
    preferAbsolute: true,
    // в modules задаем путь до папки с абсолютным ипортом/экспортом - в нашем случае это src и node_modules
    modules: [options.paths.src, 'node_modules'],
    // укажим главный фаил для абсолютных импотров 
    mainFiles: ['index'],
    // дополнительные знаки перед асолютным импортом - мы указываем путь на прямую без всяких дополнительных знаков
    alias: {},
  }
}