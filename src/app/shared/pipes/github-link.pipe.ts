import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'githubLink'
})
export class GithubLinkPipe implements PipeTransform {

  transform(data): string {
    const split = data.split('/');
    const projectName = split[split.length - 1];
    return `https://github.com/iamsainikhil/${projectName}`;
  }

}
