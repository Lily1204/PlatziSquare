import { Pipe, PipeTransform } from '@angular/core';
// import linkifyStr from 'linkifyjs/string';
import * as linkifyStr from 'linkifyjs/string';
// tslint:disable-next-line:use-pipe-transform-interface
@Pipe({name: 'linkifystr'})
export class LinkifystrPipe implements PipeTransform {
    transform(str: string): string {
        return str ? linkifyStr (str, {target: '_system'}) : str;
    }
}
