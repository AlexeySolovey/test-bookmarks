import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookmarksComponent } from './bookmarks.component';
import { BookMarksRoutingModule } from './bookmarks.routing.module';
import { UiModule } from '../ui/ui.module';


@NgModule({
  declarations: [BookmarksComponent],
  imports: [
    CommonModule,
    BookMarksRoutingModule,
    UiModule
  ]
})
export class BookmarksModule { }
