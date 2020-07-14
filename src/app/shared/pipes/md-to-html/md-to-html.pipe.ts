import { Pipe, PipeTransform } from '@angular/core';
import * as marked from 'marked';

@Pipe({
  name: 'mdToHtml'
})
export class MdToHtmlPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    // Firestore sanitize the input
    const newValue = this.replaceAll(value, '\\n', '\n');
    // With lib marked transform to md
    return marked(newValue);
  }

  /**
   * Function converts a string into a js string with ReGex.
   * @param value Value to convert.
   * @param search String to look in the value.
   * @param replace String value to replace the search with.
   */
  private replaceAll(value: string, search: string, replace: string): string {
    return value.split(search).join(replace);
  }

}
