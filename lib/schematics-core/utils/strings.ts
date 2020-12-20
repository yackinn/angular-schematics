export function clearBasePath(path: string | undefined): string | undefined {
	if ( !path ) return path;
	return path.replace("src/app/", "");
}

export function isPath(path: string | undefined): boolean {
	if ( !path ) return false
	return path.includes("/")
}
