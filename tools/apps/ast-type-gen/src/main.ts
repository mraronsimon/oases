import { ExecutorContext } from '@nrwl/devkit';

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

  return { success: true };
}
