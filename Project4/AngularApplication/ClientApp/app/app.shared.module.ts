import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { AppComponent } from './components/app/app.component';
import { NavMenuComponent } from './components/navmenu/navmenu.component';
import { TodoService } from './components/todolist/todo.service';
import { TodolistComponent } from './components/todolist/todolist.component';
import { CompletedTodoComponent } from './components/completedtodo/completedtodo.component';
import { CreatetodoComponent } from './components/createtodo/createtodo.component';
import { WarningtimeComponent } from './components/warningtime/warningtime.component';
import { EditwarningComponent } from './components/editwarning/editwarning.component';
import { EdittodoComponent } from './components/edittodo/edittodo.component';

@NgModule({
    declarations: [
        AppComponent,
        NavMenuComponent,
        TodolistComponent,
        CompletedTodoComponent,
        CreatetodoComponent,
        WarningtimeComponent,
        EditwarningComponent,
        EdittodoComponent
        
    ],
    imports: [
        CommonModule,
        HttpModule,
        FormsModule,
        RouterModule.forRoot([
            { path: '', redirectTo: 'todolist', pathMatch: 'full' },
            { path:'completedtodo', component: CompletedTodoComponent},
            { path: 'createtodo', component: CreatetodoComponent },
            { path: 'todolist', component: TodolistComponent },
            { path: 'warningtime', component: WarningtimeComponent}
            //{ path: 'representativelist/:address', component: RepresentativelistComponent },
            //{ path: 'upcomingelectiondetails/:address/:electionid', component: UpcomingelectiondetailsComponent },
            //{ path: '**', redirectTo: 'todolist' }
         
        ])
    ],
    providers: [
        TodoService
    ]
})
export class AppModuleShared {
}
