import { SchematicsException, Tree } from '@angular-devkit/schematics';
import { clearBasePath }             from './strings';
import { WorkspaceSchema }           from './types';

export interface WorkspaceOptions {
	project?: string,
	path?: string
}

export interface WorkspaceProject {
	root: string;
	projectType: string;
}


export function getWorkspace(host: Tree, options: WorkspaceOptions): WorkspaceSchema {
	const workspace = host.read("/angular.json");
	if ( !workspace ) throw new SchematicsException("angular.json file not found");

	return JSON.parse(workspace.toString());
}

export function getProject(host: Tree, options: WorkspaceOptions) {
	const workspace = getWorkspace(host, options);

	options.project = options.project ?
		options.project :
		workspace.defaultProject || Object.keys(workspace.projects)[0];

	return workspace.projects[options.project];
}

export function getProjectRootPath(host: Tree, options: WorkspaceOptions) {
	const project = getProject(host, options);

	return `${ project.root }/${ project.sourceRoot }/app`;
}

export function getSchematicPath(host: Tree, options: WorkspaceOptions) {
	const projectRootPath = getProjectRootPath(host, options);

	options.path = clearBasePath(options.path);
	if ( options.path ) {
		return `${ projectRootPath }/${ options.path }`;
	} else {
		return `${ projectRootPath }`;
	}

}
