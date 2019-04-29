import { Pipe, PipeTransform } from "@angular/core";

@Pipe({ name: "items" })
export class Items implements PipeTransform {
  transform(value) {
    return value ? value.items : [];
  }
}
