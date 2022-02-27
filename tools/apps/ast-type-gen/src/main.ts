import { ExecutorContext } from '@nrwl/devkit';
import * as fs from 'fs';

export interface AstTypeGeneratorOptions {
  descriptorFilePath: string;
}

export default async function astTypeGenerator(
  options: AstTypeGeneratorOptions,
  context: ExecutorContext
) {
  // Validate context
  if (!context.projectName) {
    console.error('Project must be included!');
    return { success: false };
  }

  const descriptorFilePath = `${context.root}/${options.descriptorFilePath}`;

  const projectPath = `${context.root}/${
    context.workspace.projects[context.projectName].root
  }`;

  const astDescriptor = JSON.parse(fs.readFileSync(descriptorFilePath).toString());

  console.log(astDescriptor)

  return { success: true };
}
