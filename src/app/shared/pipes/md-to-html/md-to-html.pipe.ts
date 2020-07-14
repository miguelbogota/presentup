import { Pipe, PipeTransform } from '@angular/core';
import { parse } from 'marked';

@Pipe({
  name: 'mdToHtml'
})
export class MdToHtmlPipe implements PipeTransform {

  transform(value: string): string {
    /**
     * Firestore sanitize the input send and converts to a string.
     * In order to have a new line in the fronend the new lines '\\n'
     * will be converted to '_\\n' to change it with pipe and have them
     * again without having any conflict with '\\n' in the future.
     */
    const newValue = this.replaceAll(value, '_\\n', '\n');
    // With lib marked transform to md
    return parse(newValue);
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
