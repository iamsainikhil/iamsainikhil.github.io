import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class FilterService {

    public chipName = new BehaviorSubject<string>('');

    constructor() {}
}
