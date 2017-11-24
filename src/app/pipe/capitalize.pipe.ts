import { Pipe, PipeTransform }  from '@angular/core';

@Pipe({
    name: 'capitalize'
})
export class CapitalizePipe implements PipeTransform {
    transform(value: any): any{
        return value.replace(/\w\S*/g, (txt) => {
            let str = txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();

            return str;
        })
    }
}
