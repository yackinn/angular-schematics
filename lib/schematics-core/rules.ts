import { applyContentTemplate, applyPathTemplate, composeFileOperators, FileEntry, forEach, PathTemplateData, Rule, when } from "@angular-devkit/schematics";

export function applyEjs<T>(options: T): Rule {
	return forEach(
		when(
			path => path.endsWith('.ejs'),
			composeFileOperators([
				applyContentTemplate(options),
				// See above for this weird cast.
				applyPathTemplate(options as {} as PathTemplateData),
				entry => {
					return {
						content: entry.content,
						path: entry.path.replace(".ejs", ''),
					} as FileEntry;
				},
			]),
		),
	);
}
