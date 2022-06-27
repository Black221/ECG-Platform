import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListItemComponent } from './components/list-item/list-item.component';
import { MetadataComponent } from './components/metadata/metadata.component';



@NgModule({
    declarations: [
        ListItemComponent,
        MetadataComponent,
    ],
    exports: [
        MetadataComponent,
        ListItemComponent
    ],
    imports: [
        CommonModule
    ]
})
export class ShareModule { }
