import { Component, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
})

export class HeaderComponent {

    @Output()
    featureSelector: EventEmitter<string> = new EventEmitter();

    onSelect(feature: string) {
        this.featureSelector.emit(feature);
    }
}