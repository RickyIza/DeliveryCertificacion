import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'masma'
})
export class MasmaPipe implements PipeTransform {

  transform(value: number, add:number = 1): number {    
    return value + add;
  }

}
