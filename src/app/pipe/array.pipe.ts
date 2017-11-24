import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'array'
})

export class ArayPipe implements PipeTransform {
    transform(value: any, ...args: any[]): any {
        return value.filter(
            (val) => {
                return val % 2 !== 0;
            }
        )
    }
}