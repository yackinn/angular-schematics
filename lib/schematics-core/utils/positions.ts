import * as ts from "typescript";

export function findLastImportEndPos(file: ts.SourceFile): number {
	let pos = 0;
	
	file.forEachChild(child => {
		if ( child.kind === ts.SyntaxKind.ImportDeclaration ) {
			pos = child.end;
		}
	});
	
	return pos;
}

export function findLastInterfacePropEndPos(file: ts.SourceFile): number {
	let pos = 0;
	
	file.forEachChild(child => {
		if ( child.kind === ts.SyntaxKind.InterfaceDeclaration ) {
			child.forEachChild(prop => {
				pos = prop.end;
			});
		}
	});
	
	return pos;
}

export function findLastCombineReducerPropEndPos(file: ts.SourceFile): number {
	let pos = 0;
	const combineReducersProps = findCombineReducers(file);
	
	combineReducersProps.forEachChild(props => {
		pos = props.end + 1; // account for missing trailing comma
	});
	
	return pos;
}

export function findLastArrayIndexEndPos(file: ts.SourceFile): number {
	let pos = 0;
	
	file.forEachChild(child => {
		child.forEachChild(node => {
			node.forEachChild(arrayOuter => {
				if ( arrayOuter.kind === 242 ) {
					arrayOuter.forEachChild(array => {
						if ( array.kind === 192 ) {
							array.forEachChild(index => {
								pos = index.end + 1; // account for missing trailing comma
							});
						}
					});
				}
			});
		});
	});
	
	return pos;
}


function findCombineReducers(currentNode: ts.SourceFile | any) {
	let i,
		currentChild,
		result,
		expression = "combineReducers";
	
	if ( currentNode.kind === 193 ) {
		return currentNode;
	} else {
		
		const children = currentNode.getChildren();
		for ( i = 0; i < children.length; i += 1 ) {
			currentChild = children[i];
			result = findCombineReducers(currentChild);
			
			if ( result !== false ) {
				return result;
			}
		}
		
		return false;
	}
}
