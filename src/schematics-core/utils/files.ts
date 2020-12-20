import { Tree } from "@angular-devkit/schematics";
import * as ts from "typescript";

export function getAsSourceFile(host: Tree, path: string): ts.SourceFile | undefined {
	const file = host.read(path);
	if ( !file ) return;
	
	const sourceFile = ts.createSourceFile(
		path,
		file.toString(),
		ts.ScriptTarget.Latest,
		true,
		3
	);
	
	return sourceFile;
}
